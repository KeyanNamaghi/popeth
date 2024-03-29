import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { CLOSE_WINDOW, TOGGLE_FULLSCREEN_WINDOW } from '../../actions'

export const Header = ({ className }) => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const handleMinimise = () => dispatch(CLOSE_WINDOW())
  const handleFullscreen = () => dispatch(TOGGLE_FULLSCREEN_WINDOW())

  const heading = {
    '/me': 'Keyan Namaghi',
    '/projects': 'Projects',
    '/projects/tinder++': 'Tinder++',
    '/projects/popeth': 'Popeth [This Site]',
    '/projects/vowels': 'Where Are All The Vowels?',
    '/experience': 'Experience',
    '/contact': 'Contact Me',
    '/settings': 'Settings'
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
