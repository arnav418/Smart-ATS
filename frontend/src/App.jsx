import { useState } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowitWorks";
import ResumeForm from "./components/ResumeForm";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Hero />
      <ResumeForm setResult={setResult} />
      {result && <ResultCard result={result} />}
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
