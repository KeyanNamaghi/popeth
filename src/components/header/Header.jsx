import React from 'react'
import { useDispatch } from 'react-redux'
import { CLOSE_WINDOW, TOGGLE_FULLSCREEN_WINDOW } from '../../actions'

export const Header = ({ className }) => {
  const dispatch = useDispatch()

  const handleMinimise = () => dispatch(CLOSE_WINDOW())
  const handleFullscreen = () => dispatch(TOGGLE_FULLSCREEN_WINDOW())

  return (
    <div className={`window__header ${className}`}>
      <span className="header__icon header__icon--red" onClick={handleMinimise}></span>
      <span className="header__icon header__icon--amber" onClick={handleMinimise}></span>
      <span className="header__icon header__icon--green" onClick={handleFullscreen}></span>
      <div className="window__header-body" onDoubleClick={handleFullscreen} />
      <h1 className="header__heading">Heading</h1>
    </div>
  )
}
