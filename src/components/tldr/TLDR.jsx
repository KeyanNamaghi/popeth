import React from 'react'
import './TLDR.css'

export const TLDR = ({ link, image }) => {
  return (
    <>
      <div className="tldr">
        {`Check out the demo here: `}
        <a href={link} target="_blank" rel="noreferrer" className="tldr__link">
          https://where-are-all-the-vowels.vercel.app/
        </a>
      </div>
      <img src={image} alt="screenshot of website" className="tldr__image" />
    </>
  )
}
