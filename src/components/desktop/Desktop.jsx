import React from 'react'
import { Window } from '../window/Window'
import { Icons } from '../icons/Icons'
import { getBackground } from '../../selectors/desktop'
import { useSelector } from 'react-redux'

export const Desktop = () => {
  const background = useSelector(getBackground)

  return (
    <div style={{ ...background, height: '100%' }}>
      <Window />
      <Icons />
    </div>
  )
}
