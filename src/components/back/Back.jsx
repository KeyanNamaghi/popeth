import React from 'react'
import { useHistory } from 'react-router-dom'
import { BackIcon } from './BackIcon'

export const Back = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="back__icon" onClick={goBack}>
      <BackIcon />
      {'Back to Projects'}
    </div>
  )
}
