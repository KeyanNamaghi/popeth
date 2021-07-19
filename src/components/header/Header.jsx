import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'
import { CLOSE_WINDOW, TOGGLE_FULLSCREEN_WINDOW } from '../../actions'

export const Header = ({ className }) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const handleMinimise = () => dispatch(CLOSE_WINDOW())
  const handleFullscreen = () => dispatch(TOGGLE_FULLSCREEN_WINDOW())

  const heading = {
    '/me': 'Keyan Namaghi',
    '/projects': 'Projects',
    '/experience': 'Experience',
    '/contact': 'Contact Me'
  }[pathname]

  return (
    <div className={`window__header ${className}`}>
      <button className="header__icon header__icon--red" onClick={handleMinimise}></button>
      <button className="header__icon header__icon--amber" onClick={handleMinimise}></button>
      <button className="header__icon header__icon--green" onClick={handleFullscreen}></button>
      <div className="window__header-body" onDoubleClick={handleFullscreen} />
      <h1 className="header__heading">{heading}</h1>
    </div>
  )
}
