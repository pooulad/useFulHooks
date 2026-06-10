import { useCallback, useState } from "react";

type CopyOptions = {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
};

export function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);
    const copy = useCallback(async (text: string, options?: CopyOptions) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            options?.onSuccess?.();
            setTimeout(() => setCopied(false), 2000);
            return true;
        } catch (error) {
            options?.onError?.(error as Error);
            return false;
        }
    }, []);
    return { copy, copied };
}
