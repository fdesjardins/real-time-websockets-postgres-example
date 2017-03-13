import WebSocket from 'ws'
import React from 'react'
import ReactDOM from 'react-dom'

const ws = new WebSocket('wss://localhost:8080', {
  perMessageDeflate: false
})

console.log(ws)

const App = () => (
  <div>Hello World</div>
)

ReactDOM.render(<App />, document.getElementById('app'))
