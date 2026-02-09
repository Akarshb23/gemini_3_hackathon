import "./match.css";

function MatchButton({ loading, onClick }) {
  return (
    <button
      className="match-btn"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Matching..." : "Match Resume"}
    </button>
  );
}

export default MatchButton;
