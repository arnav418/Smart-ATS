import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumeForm from "./components/ResumeForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="main-layout">
        <ResumeForm setResult={setResult} />
        {result && <ResultCard result={result} />}
      </div>
    </>
  );
}

export default App;
