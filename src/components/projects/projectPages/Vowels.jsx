import React from 'react'
import { english, isVowelEnglish, isVowelWelsh, welsh } from '../../../utils/letters'
import { Back } from '../../back/Back'
import { TLDR } from '../../tldr/TLDR'
import vowelsImage from '../../../assets/vowels.png'

const link = 'https://where-are-all-the-vowels.vercel.app/'

const Letter = ({ letter, vowel }) => <div className={`vowels__letter ${vowel}`}>{letter}</div>

const Letters = ({ language }) => {
  if (language === 'english') {
    return english.map((l) => <Letter letter={l} vowel={isVowelEnglish(l)} />)
  }

  return welsh.map((l) => <Letter letter={l} vowel={isVowelWelsh(l)} />)
}

export const Vowels = () => {
  return (
    <>
      <Back />
      <TLDR link={link} />
      <div className="vowels__body">
        <h2>Why doesn't welsh have any vowels?</h2>
        <p>
          This is one of the most annoying quips about the welsh language and it's shocking how prevelent something so
          far from the truth is. Despite being an official language of the United Kingdom, outside of Wales very little
          is actually known about it.
        </p>
        <p>English vowels are taught as "a, e, i, o, u" and sometimes y.</p>
        <div className="vowels__alphabet">
          <Letters language="english" />
        </div>
        <p>
          Welsh vowels are taught as "a, e, i, o, u, w, y". It's worth noting that in welsh we use digraphs or double
          letters as single letters within the alphabet such as "Ll".
        </p>
        <div className="vowels__alphabet">
          <Letters language="welsh" />
        </div>
        <p>
          These last two vowels are what cause the confusion because we aren't used to thinking of them as vowels
          (despite the name double-u). Words like cwrw (beer) look like they have no vowels despite half the letters
          actually being vowels. This inspired me to made a silly little website that uses the google translates api to
          show where the vowels are in words in both english and welsh.
        </p>
        <img src={vowelsImage} alt="screenshot of website" width="280px" />
      </div>
    </>
  )
}
