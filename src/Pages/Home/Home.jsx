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


    </div>
  )
}

export default Home;