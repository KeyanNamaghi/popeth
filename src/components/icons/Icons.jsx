import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { SHOW_WINDOW } from '../../actions'

import { ReactComponent as Me } from '../../assets/me.svg'
import { ReactComponent as MeLooking } from '../../assets/meLooking.svg'
import projects from '../../assets/projects.svg'
import experience from '../../assets/experience.svg'
// import contact from '../../assets/contact.svg'
import settings from '../../assets/settings.svg'

import './Icons.css'

export const Icons = () => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleClick = (page) => {
    history.push(page)
    dispatch(SHOW_WINDOW())
  }

  return (
    <div className="icon__container">
      <div className="icon" onClick={() => handleClick('/me')}>
        {location.pathname === '/me' ? <Me className="icon__image" /> : <MeLooking className="icon__image" />}
        <span className="icon__name">Me</span>
      </div>
      <div className="icon" onClick={() => handleClick('/projects')}>
        <img className="icon__image" src={projects} alt="" />
        <span className="icon__name">Projects</span>
      </div>
      <div className="icon" onClick={() => handleClick('/experience')}>
        <img className="icon__image" src={experience} alt="" />
        <span className="icon__name">Experience</span>
      </div>
      <div className="icon" onClick={() => handleClick('/settings')}>
        <img className="icon__image" src={settings} alt="" />
        <span className="icon__name">Settings</span>
      </div>
      {/* <div className="icon" onClick={() => handleClick('/contact')}>
        <img className="icon__image" src={contact} alt="" />
        <span className="icon__name">Contact</span>
      </div> */}
    </div>
  )
}
