import React, { useRef, useEffect } from "react";

type EventType = keyof DocumentEventMap;

export function useOutsideElementDetector(
    refs: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
    callback: () => void,
    options?: { enabled?: boolean; eventType?: EventType }
) {
    const { enabled = true, eventType = "mousedown" } = options || {};
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(() => {
        if (!enabled) return;
        const elements = Array.isArray(refs) ? refs : [refs];
        const handler = (ev: Event) => {
            const target = ev.target as Node | null;
            const clickedOutside = elements.every(
                (r) => r.current && !r.current.contains(target)
            );
            if (clickedOutside) callbackRef.current();
        };
        document.addEventListener(eventType, handler);
        return () => document.removeEventListener(eventType, handler);
    }, [refs, enabled, eventType]);
}