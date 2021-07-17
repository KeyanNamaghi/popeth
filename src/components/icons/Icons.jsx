import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { SHOW_WINDOW } from '../../actions'
import './Icons.css'

export const Icons = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (page) => {
    history.push(page)
    dispatch(SHOW_WINDOW())
  }

  return (
    <div className="icon__container">
      <div className="icon" onClick={() => handleClick('me')}>
        <div className="icon__image"></div>
        <span className="icon__name">Me</span>
      </div>
      <div className="icon" onClick={() => handleClick('projects')}>
        <div className="icon__image"></div>
        <span className="icon__name">Projects</span>
      </div>
      <div className="icon" onClick={() => handleClick('experience')}>
        <div className="icon__image"></div>
        <span className="icon__name">Experience</span>
      </div>
      <div className="icon" onClick={() => handleClick('contact')}>
        <div className="icon__image"></div>
        <span className="icon__name">Contact</span>
      </div>
    </div>
  )
}
