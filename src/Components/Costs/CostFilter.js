import './CostFilter.css';

function CostFilter(props) {

  const yearChangeHandler = (e) => {
    props.onChangeYear(e.target.value)
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Вибір по року</label>
        <select value={props.valueYear} onChange={yearChangeHandler}>
          <option value="2022">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default CostFilter;
