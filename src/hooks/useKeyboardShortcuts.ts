import { useEffect, useRef } from 'react';

export interface KeyboardShortcuts {
    onSelectAll?: () => void;
    onCopy?: () => void;
    onPaste?: () => void;
    onDelete?: () => void;
    onUndo?: () => void;
    onRedo?: () => void;
    onDuplicate?: () => void;
    onEscape?: () => void;
    onNudgeUp?: () => void;
    onNudgeDown?: () => void;
    onNudgeLeft?: () => void;
    onNudgeRight?: () => void;
    onGroup?: () => void;
    onLock?: () => void;
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onZoomReset?: () => void;
}

export function useKeyboardShortcuts(shortcuts: KeyboardShortcuts, enabled: boolean = true) {
    // Keep reference to latest shortcuts to avoid re-binding effect
    const shortcutsRef = useRef(shortcuts);

    // Always update ref to latest passed shortcuts on every render
    useEffect(() => {
        shortcutsRef.current = shortcuts;
    });

    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            const { ctrlKey, metaKey, key, shiftKey } = event;
            const isModifier = ctrlKey || metaKey;

            // Get latest handlers
            const currentShortcuts = shortcutsRef.current;

            // Check input field
            const target = event.target as HTMLElement;
            const isInputField =
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable;

            // Debug helper (uncomment if needed)
            // console.log('Key:', key, 'Modifier:', isModifier, 'Input:', isInputField);

            // Ctrl + A
            if (isModifier && key.toLowerCase() === 'a' && currentShortcuts.onSelectAll && !isInputField) {
                event.preventDefault();
                currentShortcuts.onSelectAll();
                return;
            }

            // Ctrl + C
            if (isModifier && key.toLowerCase() === 'c' && currentShortcuts.onCopy && !isInputField) {
                event.preventDefault();
                currentShortcuts.onCopy();
                return;
            }

            // Ctrl + V
            if (isModifier && key.toLowerCase() === 'v' && currentShortcuts.onPaste && !isInputField) {
                // Paste often needs to work in inputs, so we check implementation details or let native handle inputs
                // typically we only intercept if NOT input
                event.preventDefault();
                currentShortcuts.onPaste();
                return;
            }

            // Ctrl + D
            if (isModifier && key.toLowerCase() === 'd' && currentShortcuts.onDuplicate && !isInputField) {
                event.preventDefault();
                currentShortcuts.onDuplicate();
                return;
            }

            // Ctrl + G (Group)
            if (isModifier && key.toLowerCase() === 'g' && currentShortcuts.onGroup && !isInputField) {
                event.preventDefault();
                currentShortcuts.onGroup();
                return;
            }

            // Ctrl + L (Lock)
            if (isModifier && key.toLowerCase() === 'l' && currentShortcuts.onLock && !isInputField) {
                event.preventDefault();
                currentShortcuts.onLock();
                return;
            }

            // Delete / Backspace
            if ((key === 'Delete' || key === 'Backspace') && currentShortcuts.onDelete && !isInputField) {
                event.preventDefault();
                currentShortcuts.onDelete();
                return;
            }

            // Undo (Ctrl+Z) / Redo (Ctrl+Y or Ctrl+Shift+Z)
            if (isModifier && key.toLowerCase() === 'z' && !isInputField) {
                if (shiftKey && currentShortcuts.onRedo) {
                    event.preventDefault();
                    currentShortcuts.onRedo();
                    return;
                }
                if (!shiftKey && currentShortcuts.onUndo) {
                    event.preventDefault();
                    currentShortcuts.onUndo();
                    return;
                }
            }
            if (isModifier && key.toLowerCase() === 'y' && currentShortcuts.onRedo && !isInputField) {
                event.preventDefault();
                currentShortcuts.onRedo();
                return;
            }

            // Zoom shortcuts
            // Ctrl/Cmd + Plus/Equals (zoom in)
            if (isModifier && (key === '+' || key === '=') && currentShortcuts.onZoomIn && !isInputField) {
                event.preventDefault();
                currentShortcuts.onZoomIn();
                return;
            }
            // Ctrl/Cmd + Minus (zoom out)
            if (isModifier && key === '-' && currentShortcuts.onZoomOut && !isInputField) {
                event.preventDefault();
                currentShortcuts.onZoomOut();
                return;
            }
            // Ctrl/Cmd + 0 (reset zoom)
            if (isModifier && key === '0' && currentShortcuts.onZoomReset && !isInputField) {
                event.preventDefault();
                currentShortcuts.onZoomReset();
                return;
            }


            // Escape
            if (key === 'Escape') {
                if (currentShortcuts.onEscape) {
                    event.preventDefault(); // Always prevent default to stop browser stop-loading etc
                    currentShortcuts.onEscape();
                }
                if (isInputField) {
                    target.blur();
                }
                return;
            }

            // Arrows
            if (!isInputField) {
                const nudgeAmount = shiftKey ? 10 : 1;

                if (key === 'ArrowUp' && currentShortcuts.onNudgeUp) {
                    event.preventDefault();
                    for (let i = 0; i < nudgeAmount; i++) currentShortcuts.onNudgeUp();
                    return;
                }
                if (key === 'ArrowDown' && currentShortcuts.onNudgeDown) {
                    event.preventDefault();
                    for (let i = 0; i < nudgeAmount; i++) currentShortcuts.onNudgeDown();
                    return;
                }
                if (key === 'ArrowLeft' && currentShortcuts.onNudgeLeft) {
                    event.preventDefault();
                    for (let i = 0; i < nudgeAmount; i++) currentShortcuts.onNudgeLeft();
                    return;
                }
                if (key === 'ArrowRight' && currentShortcuts.onNudgeRight) {
                    event.preventDefault();
                    for (let i = 0; i < nudgeAmount; i++) currentShortcuts.onNudgeRight();
                    return;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [enabled]); // Only re-bind if enabled changes, NOT when shortcuts change
}
