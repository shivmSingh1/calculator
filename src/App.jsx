import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorButtonContainer from './component/buttonContainer';
import Display from './component/display';
import CalculatorContainer from './component/CalculatorContainer';
import "./App.css"

function App() {

  const [calValue, setCalValue] = useState("");
  const operators = ['+', '-', '*', '/'];
  const onButtonClick = (data) => {
    if (data === "c") {
      setCalValue("")
    } else if (data === "=") {
      const result = eval(calValue);
      setCalValue(result)
    } else if (operators.includes(data)) {
      // Check if the last character in calValue is an operator
      if (operators.includes(calValue[calValue.length - 1])) {
        // If so, replace it with the new operator
        const newCalValue = calValue.slice(0, -1) + data;
        setCalValue(newCalValue);
      } else {
        // Otherwise, append the operator to calValue
        setCalValue(calValue + data);
      }
    } else {
      const newDisplayValue = calValue + data;
      setCalValue(newDisplayValue)
    }
  }


  return (
    <center>
      <CalculatorContainer>
        <Display displayValue={calValue}></Display>
        <CalculatorButtonContainer onButtonClick={onButtonClick} />
      </CalculatorContainer>
    </center >
  );
}

export default App;
