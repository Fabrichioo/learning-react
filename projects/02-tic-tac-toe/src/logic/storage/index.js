export const saveGameInLocalStorage = (board, counter, turn) => {
   window.localStorage.setItem("board", JSON.stringify(board));
   window.localStorage.setItem("counter", counter);
   window.localStorage.setItem("turn", turn);
 };
 
 export const removeGameOfLocalStorage = () => {
   window.localStorage.removeItem("board");
   window.localStorage.removeItem("counter");
   window.localStorage.removeItem("turn");
 };