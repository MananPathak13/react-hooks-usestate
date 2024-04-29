import react, { useState } from "react"



function App() {
  const [count, setCount] = useState(() => {
    return 4
  })
  const [theme, setTheme] = useState(() => {
    return "Blue"
  })

  function decrement() {
    setCount(prevcount => prevcount - 1)
  }
  function increment() {
    setCount(prevcount => prevcount + 1)
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
