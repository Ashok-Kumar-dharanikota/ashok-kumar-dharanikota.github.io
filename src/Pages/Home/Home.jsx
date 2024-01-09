import React from 'react'
import './Home.css'
import SocialCard from '../../components/SocialCard/SocialCard';
import test from '../../data/test';
import aLogo from './../../assets/honors/hackerrank.png'

function Home() {

  const person = test;

  return (
    <div className='home'>

      <div style={{ display: 'flex', gridArea: "name", alignItems: 'center', marginTop: -50 }}>
        <img style={{ borderRadius: 30 }} src={person.avatar} alt="" width={150} height={150} />
        <div style={{ lineHeight: 1.5 }}>
          <h1>{person.name}</h1>
          <p>{person.title}</p>
        </div>
      </div>

      <div style={{ gridArea: "about" }} className='about'>
        {person.about}
      </div>

      <SocialCard />



      <div style={{gridArea: "box", background: "linear-gradient(180deg, #FAE5A9 0%, #FFCE21 100%)", height: 200, borderRadius:36, display: 'flex',alignItems: 'center', justifyContent: 'space-between', padding: 30}}>
          <img className='logo' src={aLogo} alt="" />

        <p style={{width:210, color: 'white', fontWeight:'bold'}}>5-STAR programmer in Hacker Rank.</p>
      </div>
    </div>
  )
}

export default Home;