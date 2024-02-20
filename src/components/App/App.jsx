import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import "./App.css";

export default function App() {
  const [feedbackTypes, setFeedbackTypes] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedback",
      JSON.stringify(feedbackTypes)
    );
  }, [feedbackTypes]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedbackTypes((prevFeedbackTypes) => ({
        ...prevFeedbackTypes,
        [feedbackType]: prevFeedbackTypes[feedbackType] + 1,
      }));
    }
  };
  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const calculateTotalFeedback = Math.round(
    ((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100
  );

  return (
    <div className="app-container">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackTypes={feedbackTypes}
          calculateTotalFeedback={calculateTotalFeedback}
          totalFeedback={totalFeedback}
        />
      )}
    </div>
  );
}
