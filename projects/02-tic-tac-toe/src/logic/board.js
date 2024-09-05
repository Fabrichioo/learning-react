import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
  for (const combo in WINNER_COMBOS) {
    const [a, b, c] = WINNER_COMBOS[combo];
    if (
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c]
    )
      return boardToCheck[a];
  }
  return null;
};
