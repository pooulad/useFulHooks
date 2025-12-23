import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { hooksList } from "./hooks";
import "./App.css"

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>useFulHooks🪝</h1>
      <p>
        <strong>useFulHooks</strong> is an open source project to collect useful
        hooks in React TypeScript projects.
      </p>

      <h2>Hooks List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {hooksList.map((hook) => (
          <li key={hook.name} style={{ margin: "15px 0" }}>
            <Link
              to={`/hooks/${hook.name}`}
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#007bff",
                padding: "10px 20px",
                borderRadius: "8px",
                transition: "0.2s",
              }}
            >
              {hook.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HookPage({ Example }: { Example: React.FC }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <Link
        to="/"
        style={{
          marginBottom: "30px",
          textDecoration: "none",
          color: "#007bff",
        }}
      >
        ← Back to hooks list
      </Link>
      <Example />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {hooksList.map((hook) => (
          <Route
            key={hook.name}
            path={`/hooks/${hook.name}`}
            element={<HookPage Example={hook.Example} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
