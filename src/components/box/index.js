import "./style.css";

const Box = ({ onBtnClick, value }) => {
  return (
    <div className="box">
      <button onClick={onBtnClick}>{value}</button>
    </div>
  );
};

export default Box;
