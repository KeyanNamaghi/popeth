import React from 'react'

export const Theme = ({ theme, name }) => {
  const handleOnClick = () => {
    document.documentElement.style.setProperty('--color-primary-dark', theme.colorPrimaryDark)
    document.documentElement.style.setProperty('--color-primary', theme.colorPrimary)
    document.documentElement.style.setProperty('--color-primary-light', theme.colorPrimaryLight)
    document.documentElement.style.setProperty('--color-secondary-dark', theme.colorSecondaryDark)
    document.documentElement.style.setProperty('--color-secondary', theme.colorSecondary)
    document.documentElement.style.setProperty('--color-secondary-light', theme.colorSecondaryLight)
    document.documentElement.style.setProperty('--color-tertiary-dark', theme.colorTertiaryDark)
    document.documentElement.style.setProperty('--color-tertiary', theme.colorTertiary)
    document.documentElement.style.setProperty('--color-tertiary-light', theme.colorTertiaryLight)
    document.documentElement.style.setProperty('--color-dark', theme.colorDark)
    document.documentElement.style.setProperty('--color-light', theme.colorLight)
    document.documentElement.style.setProperty('--color-text-primary', theme.colorTextPrimary)
    document.documentElement.style.setProperty('--color-text-secondary', theme.colorTextSecondary)
  }

  return (
    <div className="settings__theme-container" onClick={handleOnClick}>
      <strong>{name}</strong>
      <div className="settings__theme">
        <div style={{ background: theme.colorPrimaryDark }} />
        <div style={{ background: theme.colorPrimary }} />
        <div style={{ background: theme.colorPrimaryLight }} />
        <div style={{ background: theme.colorSecondaryDark }} />
        <div style={{ background: theme.colorSecondary }} />
        <div style={{ background: theme.colorSecondaryLight }} />
        <div style={{ background: theme.colorTertiaryDark }} />
        <div style={{ background: theme.colorTertiary }} />
        <div style={{ background: theme.colorTertiaryLight }} />
        <div style={{ background: theme.colorDark }} />
        <div style={{ background: theme.colorLight }} />
      </div>
    </div>
  )
}

export const defaultTheme = {
  colorPrimary: '#cfcb8e',
  colorPrimaryDark: '#a9b072',
  colorPrimaryLight: '#E3DBB4',
  colorSecondary: '#fcb95f',
  colorSecondaryDark: '#fc9d55',
  colorSecondaryLight: '#ffe7c3',
  colorTertiary: '#f8baa3',
  colorTertiaryDark: '#f2afa0',
  colorTertiaryLight: '#eee0d2',
  colorDark: '#84542e',
  colorLight: '#eee0d2',
  colorTextPrimary: 'black',
  colorTextSecondary: 'black'
}

export const argosTheme = {
  colorPrimary: '#D42114',
  colorPrimaryDark: '#7F150D',
  colorPrimaryLight: '#FFEEED',
  colorSecondary: '#0C509F',
  colorSecondaryDark: '#08305F',
  colorSecondaryLight: '#E4F1FF',
  colorTertiary: '#008542',
  colorTertiaryDark: '#045228',
  colorTertiaryLight: '#EDFFF6',
  colorDark: '#262626',
  colorLight: '#F2F2F2',
  colorTextPrimary: 'black',
  colorTextSecondary: 'white'
}
