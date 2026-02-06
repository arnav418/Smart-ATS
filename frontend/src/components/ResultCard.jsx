function ResultCard({ result }) {
  return (
    <section className="result">
      {/* Fixed Header */}
      <div className="result-header">
        <h2>ATS Match Score</h2>

        <div className="score">{result.ats_score}%</div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${result.ats_score}%` }}
          ></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="result-body">
        <div className="result-grid">
          <div className="missing">
            <h3>Missing Keywords</h3>
            <ul>
              {result.missing_keywords.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>

          <div className="suggestions">
            <h3>Suggestions</h3>
            <ul>
              {result.suggestions.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultCard;
