function SubButton({ onClick, count }) {
  if (count <= 0) {
    return (
      <button className="sub" disabled>
        -
      </button>
    );
  } else {
    return <button onClick={onClick}>-</button>;
  }
}
export default SubButton;
