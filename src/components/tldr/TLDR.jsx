import React from 'react'
import './TLDR.css'

export const TLDR = ({ link, image }) => {
  return (
    <>
      <div className="tldr">
        {`Check out the demo here: `}
        <a href={link} target="_blank" rel="noreferrer" className="tldr__link">
          {link}
        </a>
      </div>
      {image && <img src={image} alt="screenshot of website" className="tldr__image" />}
    </>
  )
}
