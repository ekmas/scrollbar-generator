import React from "react"
import Main from "./components/Main"
import About from "./components/About"

function App() {
  return (
    <>
      <header className="py-[80px]">
        <h1 className="text-3xl text-center">scrollbar generator</h1>
      </header>

      <Main />

      <About />
    </>
  )
}

export default App