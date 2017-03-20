import React from 'react'
import { Link } from 'react-router-dom'

import style from './App.scss'

const App = children => {
  console.log('children', children)
  return (
    <div className='page-container'>
      <ul className='sidebar-nav'>
        <h2>Examples</h2>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/todo'>Todo</Link></li>
      </ul>
    </div>
  )
}

export default App
