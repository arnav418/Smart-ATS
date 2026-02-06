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
      const response = await fetch("http://127.0.0.1:5000/analyze", {
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
        type="file"
        accept=".pdf"
        onChange={(e) => setResumeFile(e.target.files[0])}
      />

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
