import "./style.css";

const OutputBox = ({ value }) => {
  return (
    <div className="calc-op-box">
      <label>{value}</label>
    </div>
  );
};

export default OutputBox;
