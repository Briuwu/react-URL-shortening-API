import React from 'react'

import IntroImg from '../images/illustration-working.svg'

const Intro = () => {
  return (
    <div className='intro container'>
      <img src={IntroImg} alt="Intro Image" className='intro-img' />
      <div className="intro-details">
        <h1>More than just <br /> shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className='cyan'>Get Started</button>
      </div>
    </div>
  )
}

export default Intro