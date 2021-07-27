import { createReducer } from '@reduxjs/toolkit'
import { SET_BACKGROUND } from '../actions'

const initialState = { background: { backgroundColor: 'honeydew' } }

const window = createReducer(initialState, {
  [SET_BACKGROUND.type]: (state, action) => {
    state.background = action.payload
  }
})

export default window
