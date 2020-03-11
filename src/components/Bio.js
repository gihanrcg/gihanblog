import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'
import myphoto from '../img/gihan.jpg'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <a href="https://gihanrcg.github.io/" ><img src={myphoto} alt="Me" /></a>
      <p>
        <b>Gihan Saranga Siriwardhana        </b>
        <br />
        <i> Problem solver, Leader, Tech Enthusiast, Public Speaker and a student who seeks
          opportunities to enhance and share knowledge in any way I can.</i>
        <br />
        <a href="https://gihanrcg.github.io/" ><b>Who am I ? </b></a>
      </p>
    </div>
  )
}

export default Bio
