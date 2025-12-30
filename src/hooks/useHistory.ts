import { useState, useCallback } from 'react';

export interface HistoryState<T> {
    past: T[];
    present: T;
    future: T[];
}

export interface UseHistoryReturn<T> {
    state: T;
    setState: (newState: T | ((prev: T) => T)) => void;
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
        future: []
    });

    const setState = useCallback((newState: T | ((prev: T) => T)) => {
        setHistory(prev => {
            const resolvedState = typeof newState === 'function'
                ? (newState as (prev: T) => T)(prev.present)
                : newState;

            // Don't add to history if state hasn't changed
            if (JSON.stringify(resolvedState) === JSON.stringify(prev.present)) {
                return prev;
            }

            const newPast = [...prev.past, prev.present];

            // Limit history size
            if (newPast.length > MAX_HISTORY_SIZE) {
                newPast.shift();
            }

            return {
                past: newPast,
                present: resolvedState,
                future: [] // Clear future when new action is taken
            };
        });
    }, []);

    const undo = useCallback(() => {
        setHistory(prev => {
            if (prev.past.length === 0) return prev;

            const newPast = [...prev.past];
            const newPresent = newPast.pop()!;

            return {
                past: newPast,
                present: newPresent,
                future: [prev.present, ...prev.future]
            };
        });
    }, []);

    const redo = useCallback(() => {
        setHistory(prev => {
            if (prev.future.length === 0) return prev;

            const newFuture = [...prev.future];
            const newPresent = newFuture.shift()!;

            return {
                past: [...prev.past, prev.present],
                present: newPresent,
                future: newFuture
            };
        });
    }, []);

    const clear = useCallback(() => {
        setHistory(prev => ({
            past: [],
            present: prev.present,
            future: []
        }));
    }, []);

    return {
        state: history.present,
        setState,
        undo,
        redo,
        canUndo: history.past.length > 0,
        canRedo: history.future.length > 0,
        clear
    };
}
