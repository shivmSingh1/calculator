import styles from "./display.module.css"

function Display({ displayValue }) {
    return <input type="text" readOnly value={displayValue} className={styles.display} />
}

export default Display;