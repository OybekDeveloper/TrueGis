import React from 'react'
import Navbar from '../navbar/navbar'
import './app.scss'
import Home from '../home/home'
import Clients from '../clients/clients'
import Features from '../features/features'
import Comments from '../comments/comments'
import Faq from '../faq/faq'
import Footer from '../footer/footer'
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
            <div className="pt-[100px]">
                <Comments />
            </div>
            <Faq />
            <Footer />
        </div>
    )
}

export default App