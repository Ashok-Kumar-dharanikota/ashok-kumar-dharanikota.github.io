import React from 'react'
import style from './Card.module.css'
import icon from '../../assets/social/icon.svg';

const Card = () => {
    return (
        <div className={style.card}>
            <img src={icon} alt="" width={50} height={50} className={style.shIcon} />

            <div>
                <h1>Twitter</h1>
                <p>@ashok_d7</p>
            </div>
        </div>
    )
}

export default Card