import React from 'react'
import Navbar from '../navbar/navbar'
import './app.scss'
import Home from '../home/home'
import Clients from '../clients/clients'
import Features from '../features/features'
const App = () => {
    return (
        <div className='app relative '>
            <div className="top-0 left-0 fixed w-full z-[999] bg-[#0a090c]">
                <Navbar />
            </div>
            <div className='w-full relative overflow-hidden'>
                <Home />
            </div>
            <Clients />
            <Features />
        </div>
    )
}

export default App