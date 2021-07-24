import React from 'react'
import './TLDR.css'

export const TLDR = ({ link }) => {
  return (
    <div className="tldr">
      {`Check out the demo here: `}
      <a href={link} target="_blank" rel="noreferrer" className="tldr__link">
        https://where-are-all-the-vowels.vercel.app/
      </a>
    </div>
  )
}
