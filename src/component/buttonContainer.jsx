import styles from "./button.module.css"
import CalculatorButton from "./button";

const CalculatorButtonContainer = ({ onButtonClick }) => {
    const btn = ["c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", ".", "0"]
    return <div className={styles.btnContainer}>
        <CalculatorButton btndata={btn} onButtonClick={onButtonClick} />
    </div>
}

export default CalculatorButtonContainer;