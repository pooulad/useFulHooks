import { useRef, useState } from "react";
import { useOutsideElementDetector } from "./useOutsideElementDetector"

export default function OutsideElementDetectorExample() {
    const boxAref = useRef<HTMLDivElement>(null!);
    const boxBRef = useRef<HTMLDivElement>(null!);
    const boxCRef = useRef<HTMLDivElement>(null!);
    const buttonRef = useRef<HTMLButtonElement>(null!);

    const [isEnabled, setIsEnabled] = useState(false);

    useOutsideElementDetector(
        [boxAref, boxBRef, boxCRef, buttonRef],
        () => {
            alert("clicked outside all boxes!")
         },
        { enabled: isEnabled, eventType: "mousedown" }
    )

    return (
        <div style={{ padding: "40px" }}>
            <button
                ref={buttonRef}
                onClick={() => setIsEnabled((e) => !e)}
                style={{ marginBottom: "20px" }}
            >
                {isEnabled ? "Disable" : "Enable"} Outside Alerter
            </button>

            <div
                ref={boxAref}
                style={{
                    margin: "20px",
                    padding: "20px",
                    backgroundColor: "lightblue",
                    display: "inline-block"
                }}
            >
                Box A
            </div>

             <div
                ref={boxBRef}
                style={{
                    margin: "20px",
                    padding: "20px",
                    backgroundColor: "lightblue",
                    display: "inline-block"
                }}
            >
                Box B
            </div>

             <div
                ref={boxCRef}
                style={{
                    margin: "20px",
                    padding: "20px",
                    backgroundColor: "lightblue",
                    display: "inline-block"
                }}
            >
                Box C
            </div>
        </div>
    )
}