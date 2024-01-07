import React, { createContext } from 'react'
import data from '../data/Home.json'

const HomePageContext = createContext();


const HomePageProvider = ({ children }) => {

    const HomePageData = data;

    return (
        <HomePageContext.Provider value={HomePageData}>
            {children}
        </HomePageContext.Provider>
    )
}

export default HomePageProvider