import { Square } from "./Square";

export function WinnerModal({ winner, restartGame }) {
  if (winner === null) return null;

  const winnerText = winner !== false ? `Gano:` : "It's a draw!";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={restartGame}>Empezar de Nuevo</button>
        </footer>
      </div>
    </section>
  );
}
