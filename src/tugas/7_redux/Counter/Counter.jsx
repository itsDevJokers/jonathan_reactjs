import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementWithCheckingAction, increment } from '../../../app/Features/Counter/actions';

const Counter= () => {
//   current state
  let {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className=''>
        <button className='border border-black mr-4 px-4 text-2xl' onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
        <span className='text-2xl'>{count}</span>
        {/* call dispatch to make actions */}
        <button className='border border-black ml-4 px-4 text-2xl' onClick={() => dispatch(increment(1))}>+</button>
    </div>
  )
}

export default Counter