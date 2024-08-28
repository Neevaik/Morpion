import styles from "../styles/Square.module.css"

export default function Square(props) {

    return (
        <div>
            <button className={`${styles.square} ${props.isWinning ? styles.winning : ''}`}
                onClick={props.onClick}>
                {props.value}
            </button>
        </div>
    )
}