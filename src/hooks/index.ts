import ScrollToTargetExample from "./use-scroll-to-target-section/example";
import OutsideElementDetectorExample from "./use-outside-element-detector/example";
import DebounceExample from "./use-debounce/example";

export const hooksList = [
    {
        name: "useScrollToTargetSection",
        description: "Smoothly scroll to a target element by id",
        Example: ScrollToTargetExample,
    },
    {
        name: "useOutsideElementDetector",
        description:
            "Detect clicks outside one or multiple referenced elements",
        Example: OutsideElementDetectorExample,
    },
    {
        name: "useDebounce",
        description:
            "Delay updating a value until after a specified timeout",
        Example: DebounceExample,
    },
];
