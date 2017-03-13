import React from 'react'
import ReactDOM from 'react-dom'

const store = {
  latestMessage: null
}

const App = () => (
  <div>
    <h1>Hello World</h1>
    <h2>{ store.latestMessage }</h2>
    <button id='next'>next</button>
    <button id='mutate'>mutate</button>
  </div>
)

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('app'))
}

renderApp()

const updateStore = data => {
  console.log('updateStore', data)
  Object.assign(store, JSON.parse(data))
  console.log(store.latestMessage)
  renderApp()
}

const ws = new WebSocket('ws://localhost:3002')

ws.onopen = () => {
  console.log('socket open')
  ws.send(JSON.stringify({ event: 'hello from client' }))
}

ws.onmessage = ev => {
  console.log('here')
  updateStore(ev.data)
}

document.getElementById('next').addEventListener('click', () => {
  console.log('onclick:next')
  ws.send(JSON.stringify({
    event: 'next'
  }))
})

document.getElementById('mutate').addEventListener('click', () => {
  console.log('onclick:mutate')
  ws.send(JSON.stringify({
    event: 'mutate'
  }))
})
