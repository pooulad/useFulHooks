import { useState } from "react";
import { useDebounce } from "./use-debounce";

export default function UseDebounceExample() {
    const [value, setValue] = useState("");

    const debouncedValue = useDebounce(value, 500);

    return (
        <div className="hook-card">
            <h2>useDebounce</h2>

            <input
                type="text"
                placeholder="Type something..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div style={{ marginTop: "1rem" }}>
                <p>
                    <strong>Current Value:</strong> {value}
                </p>

                <p>
                    <strong>Debounced Value (500ms):</strong>{" "}
                    {debouncedValue}
                </p>
            </div>
        </div>
    );
}