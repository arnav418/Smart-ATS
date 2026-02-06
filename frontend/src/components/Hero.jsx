import TypingText from "./TypingText";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <TypingText
        texts={[
          "Smart ATS",
          "ATS Resume Checker",
          "Beat the ATS Filters",
          "Get Noticed by Recruiters",
          "Land Your Dream Job",
          "Resume Optimization Made Easy",
        ]}
      />

      <h2>Is Your Resume ATS-Ready?</h2>

      <p>
        Upload your resume, paste a job description, and instantly get an ATS
        match score with improvement suggestions.
      </p>
    </section>
  );
}

export default Hero;
