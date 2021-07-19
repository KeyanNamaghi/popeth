import React from 'react'
import tinderImage from '../../assets/tinderplusplus.png'
import vowelsImage2 from '../../assets/vowels2.png'
import placeholderImage from '../../assets/placeholder.png'
import './Projects.css'

const ProjectCard = ({ name, description, image }) => {
  return (
    <div className="projects__card">
      <img className="projects__card-image" alt={name} src={image || placeholderImage} draggable="false" />
      <div className="projects__card-details">
        <strong className="projects__card-name">{name}</strong>
        <span className="projects__card-description">{description}</span>
      </div>
    </div>
  )
}

export const Projects = () => {
  const tinderDescription = "What's the worst part of tinder? The rejection and the people."
  const vowelsDescription = 'Why welsh has more vowels than you might imagine.'

  return (
    <div className="projects__body">
      <ProjectCard name="Tinder++" image={tinderImage} description={tinderDescription} />
      <ProjectCard name="Where Are All The Vowels?" image={vowelsImage2} description={vowelsDescription} />
      <ProjectCard name="Placeholder" />
      <ProjectCard name="Placeholder" />
      <ProjectCard name="Placeholder" />
      <ProjectCard name="Placeholder" />
    </div>
  )
}
