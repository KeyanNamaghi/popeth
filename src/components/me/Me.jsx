import React from 'react'
import longCV from '../../assets/longCV.pdf'
import shortCV from '../../assets/shortCV.pdf'

import './Me.css'

export const Me = () => {
  return (
    <div className="me__container">
      <h1>Hey, I'm Keyan 👋</h1>
      <p>I'm currently a frontend React developer at Argos, working in the Checkout UI team.</p>
      <span>Find me on:</span>
      <div className="me__cardstack">
        <a className="me__card" href="mailto:keyansn@gmail.com">
          Keyansn@gmail.com
        </a>
        <a className="me__card" href={longCV} target="_blank" rel="noreferrer">
          Long Form CV
        </a>
        <a className="me__card" href={shortCV} target="_blank" rel="noreferrer">
          Short Form CV
        </a>
        <a
          className="me__card"
          href="https://www.linkedin.com/in/keyan-sadeghi-namaghi-675705124/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="me__card"
          href="https://github.com/KeyanNamaghi?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}
