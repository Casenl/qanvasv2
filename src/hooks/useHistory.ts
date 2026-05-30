import { useState, useCallback } from "react";

export interface HistoryState<T> {
  past: T[];
  present: T;
  future: T[];
}

export interface UseHistoryReturn<T> {
  state: T;
  setState: (newState: T | ((prev: T) => T)) => void;
  setStateWithoutHistory: (newState: T | ((prev: T) => T)) => void;
  commitToHistory: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  clear: () => void;
}

const MAX_HISTORY_SIZE = 50;

export function useHistory<T>(initialState: T): UseHistoryReturn<T> {
  const [history, setHistory] = useState<HistoryState<T>>({
    past: [],
    present: initialState,
    future: [],
  });

  // For tracking the state at the start of a "silent" update sequence
  const [beforeSilentUpdate, setBeforeSilentUpdate] = useState<T | null>(null);

  // Normal state update - adds to history
  const setState = useCallback((newState: T | ((prev: T) => T)) => {
    setHistory((prev) => {
      const resolvedState =
        typeof newState === "function"
          ? (newState as (prev: T) => T)(prev.present)
          : newState;

      // Don't add to history if state hasn't changed. Reference check first
      // (cheap; hits when an updater returns prev unchanged). Deep compare is
      // intentionally kept as the fallback — it runs only on discrete actions,
      // not the high-frequency silent updates during a drag, so it isn't a hot
      // path; a shallow length/id check here would wrongly skip same-length
      // mutations (e.g. moves) and break undo.
      if (
        resolvedState === prev.present ||
        JSON.stringify(resolvedState) === JSON.stringify(prev.present)
      ) {
        return prev;
      }

      const newPast = [...prev.past, prev.present];
      if (newPast.length > MAX_HISTORY_SIZE) {
        newPast.shift();
      }

      return {
        past: newPast,
        present: resolvedState,
        future: [],
      };
    });
    // Clear beforeSilentUpdate since this is a normal commit
    setBeforeSilentUpdate(null);
  }, []);

  // Silent state update - does NOT add to history, but remembers the "before" state
  const setStateWithoutHistory = useCallback(
    (newState: T | ((prev: T) => T)) => {
      setHistory((prev) => {
        const resolvedState =
          typeof newState === "function"
            ? (newState as (prev: T) => T)(prev.present)
            : newState;

        // On the FIRST silent update, capture the current state
        if (beforeSilentUpdate === null) {
          setBeforeSilentUpdate(prev.present);
        }

        return {
          ...prev,
          present: resolvedState,
        };
      });
    },
    [beforeSilentUpdate],
  );

  // Commit the current state to history (used after a sequence of silent updates)
  const commitToHistory = useCallback(() => {
    if (beforeSilentUpdate === null) {
      // Nothing to commit - no silent updates were made
      return;
    }

    setHistory((prev) => {
      // Don't commit if state is the same as before silent updates
      // (reference fast path, then deep fallback — see setState note above).
      if (
        prev.present === beforeSilentUpdate ||
        JSON.stringify(prev.present) === JSON.stringify(beforeSilentUpdate)
      ) {
        return prev;
      }

      const newPast = [...prev.past, beforeSilentUpdate];
      if (newPast.length > MAX_HISTORY_SIZE) {
        newPast.shift();
      }

      return {
        past: newPast,
        present: prev.present,
        future: [],
      };
    });

    setBeforeSilentUpdate(null);
  }, [beforeSilentUpdate]);

  const undo = useCallback(() => {
    setHistory((prev) => {
      if (prev.past.length === 0) return prev;

      const newPast = [...prev.past];
      const newPresent = newPast.pop()!;

      return {
        past: newPast,
        present: newPresent,
        future: [prev.present, ...prev.future],
      };
    });
    setBeforeSilentUpdate(null);
  }, []);

  const redo = useCallback(() => {
    setHistory((prev) => {
      if (prev.future.length === 0) return prev;

      const newFuture = [...prev.future];
      const newPresent = newFuture.shift()!;

      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: newFuture,
      };
    });
    setBeforeSilentUpdate(null);
  }, []);

  const clear = useCallback(() => {
    setHistory((prev) => ({
      past: [],
      present: prev.present,
      future: [],
    }));
    setBeforeSilentUpdate(null);
  }, []);

  return {
    state: history.present,
    setState,
    setStateWithoutHistory,
    commitToHistory,
    undo,
    redo,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    clear,
  };
}
