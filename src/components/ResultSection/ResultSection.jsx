function ResultSection({ result }) {
  if (!result || result.error) {
    return <p>❌ Failed to analyze resume. Try again.</p>;
  }

  return (
    <div>
      <h2>Match Score: {result.matchScore ?? "N/A"}%</h2>

      <h3>Strengths</h3>
      <ul>
        {(result.strengths || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Missing Skills</h3>
      <ul>
        {(result.missingSkills || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Suggestions</h3>
      <ul>
        {(result.suggestions || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultSection;

