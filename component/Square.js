import styles from "../styles/Square.module.css"

export default function Square(props) {


    return (
        <div>
            <button className={styles.square}>
                {props.value}
            </button>
        </div>
    )
}