import { useState } from "react";
import Square from "./Square";
import styles from "../styles/Board.module.css"

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(squares) {

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

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return {winner:squares[a], winningSquares:[a,b,c]};
            }
        }
        return {winner:null,winningSquares:[]};
    }

    function handleClick(i) {

        const newSquares = squares.slice();
        const {winner} = calculateWinner(newSquares)
        if (winner || newSquares[i]){
            return;
        };

        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    const {winner, winningSquares} = calculateWinner(squares);

    let status;
    if (winner) {
        status = 'Gagnant est : ' + winner;
    } else if (!squares.includes(null)) {
        status = 'Match Nul';
    } else {
        status = 'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
    }


    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => handleClick(i)} isWinning={winningSquares.includes(i)} />
    }

    return (
        <div>
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
        </div>
    );
}