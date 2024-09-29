function App() {
  const [number, setNumber] = React.useState(0);

  const addHandler = () => setNumber((oldNumber) => oldNumber + 1);
  const subtractHandler = () => setNumber((oldNumber) => oldNumber - 1);

  return (
    <div>
      <p>{number}</p>
      <button onClick={addHandler}>+</button>
      <button onClick={subtractHandler}>-</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
