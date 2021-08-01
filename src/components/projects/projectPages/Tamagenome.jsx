import React from 'react'
import { Back } from '../../back/Back'
import { TLDR } from '../../tldr/TLDR'

const link = 'https://tamagenome.vercel.app/'

export const Tamagenome = () => {
  return (
    <div>
      <Back />
      <TLDR link={link} />
      <h2>WIP: Selective breeding game</h2>
    </div>
  )
}
