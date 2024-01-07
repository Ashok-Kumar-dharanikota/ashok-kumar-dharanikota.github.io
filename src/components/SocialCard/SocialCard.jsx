import React from 'react'
import test from '../../data/test.js';
import style from './SocialCard.module.css';

const SocialCard = () => {
  const social = test.social;
  return (
    <>
      {social.map((item) => (
        <div key={item.name} style={item.style}>
          <img className={style.logo} src={item.icon} alt="" />

          <div style={{lineHeight: 1.5}}>
            <h1 style={{fontSize: 24}}>{item.name}</h1>
            <p style={{fontSize: 10}}>{item.username}</p>
          </div>

        </div>
      ))}

    </>

  )
}

export default SocialCard