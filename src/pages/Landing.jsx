import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate(); 

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Resume AI Matcher</h1>
        <p>Upload your resume and match it with a job description</p>

        <button
          onClick={() => navigate("/match")}
          style={{
            padding: "12px 24px",
            borderRadius: "8px",
            border: "none",
            background: "#0f172a",
            color: "white",
            cursor: "pointer",
            marginTop: "16px",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
