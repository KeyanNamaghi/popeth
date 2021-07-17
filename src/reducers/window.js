import { createReducer } from '@reduxjs/toolkit'
import { CLOSE_WINDOW, SET_FULLSCREEN_WINDOW, SHOW_WINDOW, TOGGLE_FULLSCREEN_WINDOW } from '../actions'

const initialState = { fullscreen: false, show: true }

const window = createReducer(initialState, {
  [TOGGLE_FULLSCREEN_WINDOW.type]: (state) => {
    state.fullscreen = !state.fullscreen
  },
  [SET_FULLSCREEN_WINDOW.type]: (state) => {
    state.fullscreen = false
  },
  [CLOSE_WINDOW.type]: (state) => {
    state.show = false
  },
  [SHOW_WINDOW.type]: (state) => {
    state.show = true
  }
})

export default window
