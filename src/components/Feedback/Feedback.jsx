import css from "./Feedback.module.css";

export default function Feedback({
  feedbackTypes,
  calculateTotalFeedback,
  totalFeedback,
}) {
  return (
    <ul className={css.ul}>
      <li>
        <p className={css.text}>Good: {feedbackTypes.good}</p>
      </li>
      <li>
        <p className={css.text}>Neutral: {feedbackTypes.neutral} </p>
      </li>
      <li>
        <p className={css.text}>Bad: {feedbackTypes.bad}</p>
      </li>
      <li>
        <p className={css.text}>Total: {totalFeedback}</p>
      </li>
      <li>
        <p className={css.text}>Positive: {calculateTotalFeedback}%</p>
      </li>
    </ul>
  );
}
