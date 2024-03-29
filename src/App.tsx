import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  const sendEvent = () => {
    setCount((count) => count + 1)

    if (window.messageHandler && window.messageHandler.postMessage)
      window.messageHandler.postMessage('Hello from JS' + count);
    else
      console.log('not executed.')
  }

  const backToFlutter = () => {
    setCount((count) => count + 1)

    if (window.backToFlutter && window.backToFlutter.postMessage)
      window.backToFlutter.postMessage();
    else
      console.log('not executed.')
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => sendEvent()}>
          count is {count}
        </button>

        <button onClick={() => backToFlutter()}>
          Close
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
