import { useState } from "react";
import Square from "./Square";
import styles from "../styles/Board.module.css"

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function calculateWinner(squares) {
        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], winningSquares: [a, b, c] };
            }
        }
        return { winner: null, winningSquares: [] };
    }

    function handleClick(i) {

        if (squares[i] || calculateWinner(squares).winner) return;

        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    // Avant
    //     const { winner, winningSquares } = calculateWinner(squares);
    // let status;
    // if (winner) {
    //   status = 'Gagnant : ' + winner;
    // } else if (!squares.includes(null)) {
    //   status = 'Match nul !';
    // } else {
    //   status = 'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
    // }
    const { winner, winningSquares } = calculateWinner(squares);
    const status = winner ? `Gagnant : ${winner}` : !squares.includes(null) ? `Match nul !` : `Prochain joueur : ${xIsNext ? 'X ' : 'O'}`;


    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => handleClick(i)} isWinning={winningSquares.includes(i)} />
    }

    return (
        <div className={styles.boardContainer}>
            <div className={styles.status}>{status}</div>
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
            <button className={styles.resetButton} onClick={resetGame}>
                Rejouer
            </button>
        </div>
    );
}