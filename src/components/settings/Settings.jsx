import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_BACKGROUND } from '../../actions'
import { getBackground } from '../../selectors/desktop'
import './Settings.css'

const Background = ({ background, grid }) => {
  const dispatch = useDispatch()
  const activeBackground = useSelector(getBackground)

  return (
    <div
      className="settings__card"
      style={{
        backgroundColor: background || activeBackground.backgroundColor,
        backgroundSize: grid || '0px 0px',
        backgroundImage: 'linear-gradient(90deg,#fff 2px,transparent 0),linear-gradient(180deg,#fff 2px,transparent 0)'
      }}
      onClick={() =>
        dispatch(
          SET_BACKGROUND({
            backgroundColor: background || activeBackground.backgroundColor,
            backgroundSize: grid || '0px 0px',
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
    <div>
      <h3>Backgrounds</h3>
      <div className="settings__body">
        <Background background="honeydew" />
        <Background background="LavenderBlush" />
        <Background background="Lavender" />
        <Background background="Ivory" />
        <Background background="LightCyan" />
        <Background background="LemonChiffon" />
        <Background background="OldLace" />
        <Background background="GhostWhite" />
      </div>
      <h3>Background Grid</h3>
      <div className="settings__body">
        <Background />
        <Background grid={'20px 20px'} />
        <Background grid={'40px 40px'} />
        <Background grid={'80px 80px'} />
      </div>
    </div>
  )
}
