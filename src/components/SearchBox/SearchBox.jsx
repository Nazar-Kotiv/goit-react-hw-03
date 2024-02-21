import css from "./SearchBox.module.css";
export default function SearchBox({ onFilterChange }) {
  const handleChange = (evt) => {
    const newText = evt.target.value;
    onFilterChange(newText);
  };

  return (
    <div className={css.containerInput}>
      <p className={css.textInput}> Find contact by name</p>
      <input className={css.findInput} type="text" onChange={handleChange} />
    </div>
  );
}
