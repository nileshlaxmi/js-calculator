import "./style.css";

const InputBox = ({ onBtnClick, onClear, inputItem }) => {
  const {label, id, size} = inputItem
  return (
    <div className={`ip-box-${size}`} id={id}>
      <button onClick={() => onBtnClick(inputItem, id)}>{label}</button>
    </div>
  );
};

export default InputBox;
