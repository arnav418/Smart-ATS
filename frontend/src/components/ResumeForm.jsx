import { useState } from "react";

function ResumeForm({ setResult }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resumeFile || !jd) {
      alert("Please upload resume PDF and paste job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jd", jd);

    setLoading(true);

    try {
      const response = await fetch("https://smart-ats-tdb9.onrender.com/analyze",{
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert("Backend error. Is Flask running?");
    }

    setLoading(false);
  };

  return (
    <section className="form-section">
      <input
        type="file" id="resume-upload" accept=".pdf"onChange={(e) => setResumeFile(e.target.files[0])}
        style={{ display: "none" }}
      />

      <label htmlFor="resume-upload" className="file-btn">
        {resumeFile ? resumeFile.name : "Upload Resume (PDF)"}
      </label>

      <textarea
        placeholder="Paste Job Description here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button onClick={analyzeResume} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </section>
  );
}

export default ResumeForm;
