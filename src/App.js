import { Fragment, useState } from "react";
import "./App.css";
import InputBox from "./components/input-box";
import { calculatorOperandsArray } from "./constants";
import OutputBox from "./components/output-box";

function App() {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const onBtnClick = (inputItem, type) => {
    switch (type) {
      case "clear":
        onClear();
        break;
      default:
        setValue();
        setSelectedValue(inputItem.value);
    }
    // if(inputItem.id === "clear"){
    //   onClear()
    // } else {
    //   setValue();
    //   setSelectedValue(inputItem.value)
    // }
  };

  const onClear = () => {
    setValue("");
    setSelectedValue("");
  };

  return (
    <div className="calc-outer">
      <div className="calc-inner">
        <div className="calc-output">
          <OutputBox value={selectedValue} onBtnClick={onBtnClick} />
        </div>
        <div className="calc-input">
          {calculatorOperandsArray.map((item, index) => {
            return (
              <Fragment key={`${item.label}-${index}`}>
                <InputBox
                  inputItem={item}
                  onBtnClick={onBtnClick}
                  onClear={onClear}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
