import React from 'react'
import { useHistory } from 'react-router-dom'

import tinderImage from '../../assets/tinderplusplus.png'
import popethImage from '../../assets/popeth.png'
import vowelsImage2 from '../../assets/vowels2.png'
import pokedexImage from '../../assets/pokedex.png'
import tamagenomeImage from '../../assets/tamagenome.png'
import placeholderImage from '../../assets/placeholder.png'
import './Projects.css'

const ProjectCard = ({ name, description, image, onClickFn }) => {
  return (
    <div className="projects__card" onClick={onClickFn}>
      <img className="projects__card-image" alt={name} src={image || placeholderImage} draggable="false" />
      <div className="projects__card-details">
        <strong className="projects__card-name">{name}</strong>
        <span className="projects__card-description">{description}</span>
      </div>
    </div>
  )
}

export const Projects = () => {
  const history = useHistory()

  const tinderDescription = "What's the worst part of tinder? The rejection and the people."
  const popethDescription = 'This website was created as a portfolio for everything I do.'
  const vowelsDescription = 'Why welsh has more vowels than you might imagine.'
  const pokedexDescription = 'Just a silly little pokédex for that nostalgia hit.'
  const tamagenomeDescription = 'Both a work in progress and a proof of concept of a selective breeding game'

  const handleClick = (page) => {
    history.push(page)
  }

  return (
    <div className="projects__body">
      <ProjectCard
        name="Tinder++"
        image={tinderImage}
        description={tinderDescription}
        onClickFn={() => handleClick('/projects/tinder++')}
      />
      <ProjectCard
        name="This Website"
        image={popethImage}
        description={popethDescription}
        onClickFn={() => handleClick('/projects/popeth')}
      />
      <ProjectCard
        name="Where Are All The Vowels?"
        image={vowelsImage2}
        description={vowelsDescription}
        onClickFn={() => handleClick('/projects/vowels')}
      />
      <ProjectCard
        name="Pokédex"
        image={pokedexImage}
        description={pokedexDescription}
        onClickFn={() => handleClick('/projects/pokedex')}
      />
      <ProjectCard
        name="Tamagenome"
        image={tamagenomeImage}
        description={tamagenomeDescription}
        onClickFn={() => handleClick('/projects/pokedex')}
      />
      <ProjectCard name="Placeholder" />
    </div>
  )
}
