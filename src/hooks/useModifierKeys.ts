import { useState, useEffect } from 'react';

export function useModifierKeys() {
    const [keys, setKeys] = useState({
        ctrl: false,
        shift: false,
        alt: false,
        meta: false
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setKeys({
                ctrl: e.ctrlKey,
                shift: e.shiftKey,
                alt: e.altKey,
                meta: e.metaKey
            });
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            setKeys({
                ctrl: e.ctrlKey,
                shift: e.shiftKey,
                alt: e.altKey,
                meta: e.metaKey
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return keys;
}
