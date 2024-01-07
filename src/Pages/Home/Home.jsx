import React from 'react'
import './Home.css'
import SocialCard from '../../components/SocialCard/SocialCard';
import test from '../../data/test';

function Home() {

  const person = test;

  return (
    <div className='home'>

      <div style={{ display: 'flex', gridArea: "name" , alignItems: 'center', marginTop: -50}}>
        <img style={{ borderRadius: 30 }} src={person.avatar} alt="" width={150} height={150} />
        <div style={{lineHeight: 1.5}}>
          <h1>{person.name}</h1>
          <p>{person.title}</p>
        </div>
      </div>

      <div style={{ gridArea: "about" }} className='about'>
          {person.about}
      </div>

      <SocialCard />

      {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ngc7rGlfeFaskU90EWl4R?utm_source=generator" width="40%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

      <iframe style={{borderRadius: 12, gridArea: "box"}} src='https://open.spotify.com/embed/track/3ngc7rGlfeFaskU90EWl4R?utm_source=generator' width={"100%"} height={"100%"} frameBorder={0} allowFullScreen allow='autoplay' loading='lazy'> </iframe>


    </div>
  )
}

export default Home;