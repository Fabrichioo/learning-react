export const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleUpdateBoard = () => updateBoard(index);

  return (
    <div onClick={handleUpdateBoard} className={className} key={index}>
      {children}
    </div>
  );
};