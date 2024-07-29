import "./QuestionPopup.css";
//react hooks
import { useState, useEffect } from "react";

const QuestionPopup = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300); // Duration should match the animation time
    }
  }, [isOpen]);

  return (
    <div className={`popup--container ${isOpen ? "open" : "close"}`}>
      <div className="ask-a-question">
        <h1>Ask Your Question</h1>
        <textarea></textarea>
        <div className="operation--buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClose}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPopup;
