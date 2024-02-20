import css from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback }) {
  return (
    <ul className={css.ul}>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("good")}>
          Good{" "}
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("neutral")}>
          Neutral{" "}
        </button>
      </li>
      <li>
        <button className={css.btn} onClick={() => updateFeedback("bad")}>
          Bad{" "}
        </button>
      </li>
      <li>
        {totalFeedback > 0 && (
          <button className={css.btn} onClick={() => updateFeedback("reset")}>
            Reset{" "}
          </button>
        )}
      </li>
    </ul>
  );
}
