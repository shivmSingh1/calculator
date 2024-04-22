import styles from "./CalculatorContainer.module.css"

function CalculatorContainer(props) {
    return <div className={styles.calculatorContainer} >{props.children}</div>
}

export default CalculatorContainer;