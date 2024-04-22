import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculatorButtonContainer from './component/buttonContainer';
import Display from './component/display';
import CalculatorContainer from './component/CalculatorContainer';
import "./App.css"

function App() {

  const [calValue, setCalValue] = useState("")
  const onButtonClick = (data) => {
    if (data === "c") {
      setCalValue("")
    } else if (data === "=") {
      const result = eval(calValue);
      setCalValue(result)
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
