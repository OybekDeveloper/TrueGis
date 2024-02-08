import React from 'react'
import Navbar from '../navbar/navbar'
import './app.scss'
import Home from '../home/home'
import Clients from '../clients/clients'
import Features from '../features/features'
import Comments from '../comments/comments'
import Faq from '../faq/faq'
import Footer from '../footer/footer'
import { Route, Routes } from 'react-router-dom'
import Contact from '../contact/contact'
const App = () => {
    return (
        <div className='app relative'>
            <div className=" top-0 left-0 fixed w-full z-[999] bg-[#0a090c]">
                <Navbar />
            </div>
            <div id='blur-effect' className=''>
                <Routes >
                    <Route path='/' element={
                        <>
                            <div className='w-full relative overflow-hidden'>
                                <Home />
                            </div>
                            <Clients />
                            <Features />
                            <div id='comments' className="pt-[88px]">
                                <Comments />
                            </div>
                            <Faq />
                        </>
                    } />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </div>
    )
}

export default App