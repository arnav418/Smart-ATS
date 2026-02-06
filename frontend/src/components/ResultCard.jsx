function ResultCard({ result }) {
  if (!result) return null;

  // ---- helpers ----
  const cleanKeywords = (keywords = []) => {
    const junkWords = [
      "div",
      "export",
      "default",
      "classname",
      "function",
      "index",
      "key",
      "body",
      "filter",
      "grid",
      "header",
      "fill",
      "bar",
      "keywords",
    ];

    return [...new Set(keywords)]
      .filter(
        word =>
          word &&
          word.trim() &&
          !junkWords.includes(word.toLowerCase())
      )
      .sort()
      .slice(0, 25); // limit to avoid huge UI
  };

  const missingKeywords = cleanKeywords(result.missing_keywords);
  const suggestions = result.suggestions?.filter(
    tip => tip && tip.trim()
  );

  const score = Math.min(
    100,
    Math.max(0, Number(result.ats_score) || 0)
  );

  return (
    <section className="result">
      {/* Header */}
      <div className="result-header">
        <h2>ATS Match Score</h2>

        <div className="score">{score}%</div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="result-body">
        <div className="result-grid">
          {/* Missing Keywords */}
          <div className="missing">
            <h3>Missing Keywords</h3>

            <div className="missing-box">
              {missingKeywords.length > 0 ? (
                missingKeywords.map((word, index) => (
                  <span key={index} className="keyword-chip">
                    {word}
                  </span>
                ))
              ) : (
                <p className="empty-text">No missing keywords 🎉</p>
              )}
            </div>
          </div>

          {/* Suggestions */}
          <div className="suggestions">
            <h3>Suggestions</h3>

            {suggestions?.length > 0 ? (
              <ul className="suggestion-list">
                {suggestions.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p className="empty-text">No suggestions available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultCard;
