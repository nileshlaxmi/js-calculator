import "./style.css";

const InputBox = ({ onBtnClick, inputItem }) => {
  const {label, id, size} = inputItem
  return (
    <div className={`ip-box-${size}`} id={id}>
      <button onClick={() => onBtnClick(inputItem)}>{label}</button>
    </div>
  );
};

export default InputBox;
