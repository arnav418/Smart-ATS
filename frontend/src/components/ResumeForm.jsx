import { useState } from "react";
import "./ResumeForm.css";

function ResumeForm({ setResult }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resumeFile || !jd.trim()) {
      alert("Please upload resume and paste job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jd", jd);

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/analyze`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Backend error");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Backend error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="form-section">
      {/* Upload */}
      <label className="upload-btn">
        Upload Resume (PDF)
        <input
          type="file"
          accept=".pdf"
          hidden
          disabled={loading}
          onChange={(e) => setResumeFile(e.target.files[0])}
        />
      </label>

      {/* File name */}
      {resumeFile && (
        <p className="file-name" title={resumeFile.name}>
          {resumeFile.name}
        </p>
      )}

      {/* JD */}
      <textarea
        placeholder="Paste Job Description here..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        disabled={loading}
      />

      {/* CTA */}
      <button onClick={analyzeResume} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </section>
  );
}

export default ResumeForm;
