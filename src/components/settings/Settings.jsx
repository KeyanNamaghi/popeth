import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_BACKGROUND } from '../../actions'
import { getBackground } from '../../selectors/desktop'
import { Theme, defaultTheme, argosTheme } from './Theme'
import './Settings.css'

// TODO: refactor this into two separate things, I blame the vaccine side effects for this mess
const Background = ({ background, grid }) => {
  const dispatch = useDispatch()
  const activeBackground = useSelector(getBackground)
  let active = ''

  if (background === activeBackground.backgroundColor) {
    active = ' settings__card--selected'
  }

  if (grid && grid === activeBackground.backgroundSize) {
    active = ' settings__card--selected'
  }

  return (
    <div
      className={'settings__card' + active}
      style={{
        backgroundColor: background || activeBackground.backgroundColor,
        backgroundSize: grid || '0px 0px',
        backgroundImage: 'linear-gradient(90deg,#fff 2px,transparent 0),linear-gradient(180deg,#fff 2px,transparent 0)'
      }}
      onClick={() =>
        dispatch(
          SET_BACKGROUND({
            backgroundColor: background || activeBackground.backgroundColor,
            backgroundSize: grid || activeBackground.backgroundSize || '0px 0px',
            backgroundImage:
              'linear-gradient(90deg,#fff 2px,transparent 0),linear-gradient(180deg,#fff 2px,transparent 0)'
          })
        )
      }
    ></div>
  )
}

export const Settings = () => {
  return (
    <div className="settings__container">
      <h3>Themes</h3>
      <Theme theme={defaultTheme} name="Mai" />
      <Theme theme={argosTheme} name="Argos" />
      <hr />
      <h3>Backgrounds</h3>
      <div className="settings__body">
        <Background background="OldLace" />
        <Background background="honeydew" />
        <Background background="LavenderBlush" />
        <Background background="Lavender" />
        <Background background="Ivory" />
        <Background background="LightCyan" />
        <Background background="LemonChiffon" />
        <Background background="GhostWhite" />
      </div>
      <hr />
      <h3>Background Grid</h3>
      <div className="settings__body">
        <Background grid={'0px 0px'} />
        <Background grid={'20px 20px'} />
        <Background grid={'40px 40px'} />
        <Background grid={'80px 80px'} />
      </div>
    </div>
  )
}
