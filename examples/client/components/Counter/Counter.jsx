import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { counter as actions } from '../../actions'

const Counter = ({ value, increment, decrement, reset }) => {
  return (
    <div>
      <h2>Counter</h2>
      <p>Clicked {value} times</p>
      <div className='btn-group'>
        <button onClick={increment} className='btn btn-inverse'>+</button>
        <button onClick={decrement} className='btn btn-inverse'>-</button>
        <button onClick={reset} className='btn btn-inverse'>reset</button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

const mapStateToProps = ({ counter }) => ({
  value: counter.value
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
  reset: () => dispatch(actions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
