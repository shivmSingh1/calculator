
import styles from "./button.module.css";
const CalculatorButton = ({ btndata, onButtonClick }) => {

    return <>
        {btndata.map((data, index) => (<button key={index} onClick={() => onButtonClick(data)} className={`${styles.shBtn} ${data === "c" && styles.clearBtn} ${data !== "c" && styles.NumbersBtn} ${data === "+" || data === "-" || data === "*" || data === "/" || data == "=" || data === "." ? styles.operationsBtn : null} `}>{data}</button>))}
    </>

}

export default CalculatorButton; 