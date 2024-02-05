import React from 'react'
import Navbar from '../navbar/navbar'
import './app.scss'
const App = () => {
    return (
        <div className='app container relative'>
            <div className="top-0 left-0 fixed w-full">
                <Navbar />
            </div>
        </div>
    )
}

export default App