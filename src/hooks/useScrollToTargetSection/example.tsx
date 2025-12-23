import type { CSSProperties } from "react";
import useScrollToTargetSection from "./useScrollToTargetSection";

export default function Example() {
  const { handleScrollToTargetSection } = useScrollToTargetSection();

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
      }}
    >
      {/* Buttons fixed on top-right */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button onClick={() => handleScrollToTargetSection("section-1")}>
          Go to Section 1
        </button>

        <button onClick={() => handleScrollToTargetSection("section-2")}>
          Go to Section 2
        </button>

        <button onClick={() => handleScrollToTargetSection("section-3")}>
          Go to Section 3
        </button>
      </div>

      {/* Spacer for scroll */}
      <div style={{ height: "100vh" }} />

      {/* Sections */}
      <section id="section-1" style={{ ...sectionStyle, backgroundColor: "#646cff" }}>
        <h2 style={{ color: "#fff" }}>Section 1</h2>
        <p style={{ color: "#eee" }}>This is the first section</p>
      </section>

      <div style={{ height: "100vh" }} />

      <section id="section-2" style={{ ...sectionStyle, backgroundColor: "#28a745" }}>
        <h2 style={{ color: "#fff" }}>Section 2</h2>
        <p style={{ color: "#eee" }}>This is the second section</p>
      </section>

      <div style={{ height: "100vh" }} />

      <section id="section-3" style={{ ...sectionStyle, backgroundColor: "#ffc107" }}>
        <h2 style={{ color: "#000" }}>Section 3</h2>
        <p style={{ color: "#000" }}>This is the third section</p>
      </section>

      <div style={{ height: "100vh" }} />
    </div>
  );
}

const sectionStyle: CSSProperties = {
  width: "80%",
  maxWidth: "800px",
  height: "300px",
  padding: "40px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};
