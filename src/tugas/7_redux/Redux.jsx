import React from 'react'
import { Provider } from 'react-redux'
import store from '../../app/store'
import Counter from './Counter/Counter'

const Redux = () => {
  return (
    //   Store
      <Provider store={store}>
          <Counter />
      </Provider>
  )
}

export default Redux