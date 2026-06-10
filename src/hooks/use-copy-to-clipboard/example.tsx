import { useCopyToClipboard } from "./use-copy-to-clipboard";

export default function Example() {
    const { copy, copied } = useCopyToClipboard();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxWidth: "400px",
            }}
        >
            <h3>useCopyToClipboard</h3>
            <button
                onClick={() =>
                    copy("Hello from useFulHooks!", {
                        onSuccess: () => console.log("Copied successfully"),
                        onError: (error) => console.error(error),
                    })
                }
            >
                Copy Text
            </button>
            <span>
                Status: {copied ? "✅ Copied" : "⏳ Waiting"}
            </span>
        </div>
    );
}