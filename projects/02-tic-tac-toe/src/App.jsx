import confetti from "canvas-confetti";
import { useState } from "react";
import { Board } from "./components/Board.jsx";
import { Square } from "./components/Square.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { TURNS } from "./constants.js";
import { checkWinner } from "./logic/board.js";
import {
  removeGameOfLocalStorage,
  saveGameInLocalStorage,
} from "./logic/storage/index.js";
export function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");

    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [counter, setCounter] = useState(() => {
    const counterFromStorage = window.localStorage.getItem("counter");

    return counterFromStorage ? parseInt(counterFromStorage) : 0;
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");

    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  /* pero esto tiene que hacer un recorrido siempre O(n)
  // no es mejor práctica tener un contador y que es O(1)
  const checkDraft = (newBoard) => {
    return newBoard.every((cell) => cell !== newBoard);
  }
  */

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    // updateBoard
    const updatedBoard = [...board];
    updatedBoard[index] = turn;
    setBoard(updatedBoard);

    const newCounter = counter - 1;
    setCounter(newCounter);

    // switch turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //set in local storage
    saveGameInLocalStorage(updatedBoard, newCounter, newTurn);

    // check winner
    const newWinner = checkWinner(updatedBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else {
      // check draft
      counter === 1 ? setWinner(false) : null;
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setCounter(9);

    removeGameOfLocalStorage();
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={restartGame}>Reset Game</button>
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} restartGame={restartGame} />
    </main>
  );
}
export default App;
