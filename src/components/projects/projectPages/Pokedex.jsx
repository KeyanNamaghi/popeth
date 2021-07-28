import React from 'react'
import { Back } from '../../back/Back'
import { TLDR } from '../../tldr/TLDR'

const link = 'https://pokedex-keyannamaghi.vercel.app'

export const Pokedex = () => {
  return (
    <div>
      <Back />
      <TLDR link={link} />
      <h2>Who doesn't love Pokémon?</h2>
      <p>
        In terms of nostalgia, very little can compete for my heart like Pokémon. Enjoy this massively unoptimised
        pokedex of the original 151 Pokémon with search and filtering.
      </p>
    </div>
  )
}
