import React from 'react'
import { Back } from '../../back/Back'
import { TLDR } from '../../tldr/TLDR'

const link = 'https://tinder-plus-plus.vercel.app/'

export const Tinder = () => {
  return (
    <div>
      <Back />
      <TLDR link={link} />
      <h2>How can we improve on Tinder?</h2>
      <p>
        As of 2020, Tinder's direct revenue amounted to $1.4 billion. Despite this huge revenue there are two glaring
        issues with the platform:
      </p>
      <ul>
        <li>Rejection</li>
        <li>People</li>
      </ul>
      <p>To build an incremental update to Tinder those pain points need to be addessed.</p>
      <dl>
        <dt>Rejection:</dt>
        <dd>
          The issue of rejection was extremely simple to fix. In a world of constant judgement and negativity, a more
          wholesome touch is needed for the platform. Why give the ability to pass on users (especially as all our users
          will be too good to pass on) so instead of passing, the platform will refuse and give some feedback to the
          user.
        </dd>
        <br />
        <dt>People:</dt>
        <dd>
          To be completed: replace all the users with pictures of cute animals which is clearly way better than people.
        </dd>
      </dl>
    </div>
  )
}
