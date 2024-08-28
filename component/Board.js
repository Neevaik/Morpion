import { useState } from "react";
import Square from "./Square";
import styles from "../styles/Board.module.css"

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);


    function handleClick(i) {
        const newSquares = squares.slice();

        if (newSquares[i]) return;

        newSquares[i] = xIsNext ? 'X' : 'O';

        setSquares(newSquares);
        setXIsNext(!xIsNext);
        console.log(newSquares)
    }

    function renderSquare(i) {
        return <Square squares={i} onClick={() => handleClick(i)} />
    }

    return (
        <div>
            <div className={styles.boardRow}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={styles.boardRow}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={styles.boardRow}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}