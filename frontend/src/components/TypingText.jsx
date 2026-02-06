import { useEffect, useState } from "react";
import "./TypingText.css";

function TypingText({
  texts = [],
  typingSpeed = 120,
  deletingSpeed = 80,
  delayBetween = 1500,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
    } 
    else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } 
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, deletingSpeed);
    } 
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <h1 className="typing-text">
      {displayText}
      <span className="cursor">|</span>
    </h1>
  );
}

export default TypingText;
