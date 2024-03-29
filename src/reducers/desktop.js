import { createReducer } from '@reduxjs/toolkit'
import { SET_BACKGROUND } from '../actions'

const initialState = {
  background: {
    backgroundColor: 'OldLace',
    backgroundSize: '0px 0px',
    backgroundImage: 'linear-gradient(90deg,#fff 2px,transparent 0),linear-gradient(180deg,#fff 2px,transparent 0)'
  }
}

const window = createReducer(initialState, {
  [SET_BACKGROUND.type]: (state, action) => {
    state.background = action.payload
  }
})

export default window
