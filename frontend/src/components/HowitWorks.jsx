import "./HowitWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How Smart-ATS Works</h2>
      <p className="subtitle">3 simple steps to improve your resume</p>

      <div className="steps">
        <div className="step">
          <span>📄</span>
          <h3>Upload Resume</h3>
          <p>Upload your resume in PDF format for ATS-safe parsing.</p>
        </div>

        <div className="step">
          <span>📝</span>
          <h3>Paste Job Description</h3>
          <p>Paste the JD to match skills, keywords, and requirements.</p>
        </div>

        <div className="step">
          <span>📊</span>
          <h3>Get ATS Score</h3>
          <p>Receive score, missing keywords, and suggestions instantly.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
