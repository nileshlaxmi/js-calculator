import "./style.css";

const OutputBox = ({ value, inputText }) => {
  return (
    <div className="calc-op-box">
      <label className="calc-op-box-ipText">{inputText}</label>
      <label className="calc-op-box-result">{value}</label>
    </div>
  );
};

export default OutputBox;
