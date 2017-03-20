import React from 'react'

const TodoList = props => (
  <div>
    <h2>Todo</h2>
    <div className='btn-group'>
      <button className='btn btn-inverse'>new</button>
      <button className='btn btn-inverse'>start</button>
      <button className='btn btn-inverse'>complete</button>
      <button className='btn btn-inverse'>delete</button>
    </div>
  </div>
)

export default TodoList
