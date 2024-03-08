import React, { useState } from "react";
import Square from "./square";

const Board = () => {
    const [squares, setSquares] = useState (Array(9).fill(null));

    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        if (squares[i]  || winner) return;

        const newSquares = squares.slice();
       
        newSquares[i] = xIsNext ? "X" : "O";

        setSquares(newSquares);
        setXIsNext(!xIsNext);

    };

    const restartGame = () => { 
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    };

    return (
    <div>
        <div className="status">
            Status: {" "}
            {winner ? (
                <p className="winner">O vencedor é: {winner}!</p>
            ) : (
                `Próximo a jogar: ${xIsNext?"X":"O"}`
            )}
        </div>

        <div className="board-row">
            <Square value={squares[0]} onclick={() => handleClick(0)} />
            <Square value={squares[1]} onclick={() => handleClick(1)} />
            <Square value={squares[2]} onclick={() => handleClick(2)} />
        </div>

        <div className="board-row">
            <Square value={squares[3]} onclick={() => handleClick(3)} />
            <Square value={squares[4]} onclick={() => handleClick(4)} />
            <Square value={squares[5]} onclick={() => handleClick(5)} />
        </div>

        <div className="board-row">
            <Square value={squares[6]} onclick={() => handleClick(6)} />
            <Square value={squares[7]} onclick={() => handleClick(7)} />
            <Square value={squares[8]} onclick={() => handleClick(8)} />
        </div>

        <button className="reset-button" onClick={restartGame}>
            Reiniciar Jogo
        </button>
    </div>
  );
};

const calculateWinner = (squares) => {
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
        const[a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
};

export default Board;