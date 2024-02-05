import React from 'react'
import { homeimg, homebackimg, homebackimg1 } from '../imgs';
import './home.scss'
const Home = () => {
    return (
        <div className='home w-10/12 mx-auto max-w-[1440px] flex justify-between items-center pt-[132px] '>
            <article className='w-1/2 flex flex-col gap-[24px]  items-start'>
                <h1 className='font-[600] text-[41px]'><span className='span'>TrueGis:</span> sizga eng yaqin bo’lgan joylarni topish yanada oson va telegramning o’zida</h1>
                <p className='text-[18px] opacity-[0.7] font-[400] '>Telegramdan chiqmagan holda sizga eng yaqin  bo’lgan do’konlar, bankomatlar, dorixonalar, ovqatlanish joylari va boshqa kerakli joylarni bir zumda toping</p>
                <button className='msg-btn mt-[40px]'>
                    Xabar qoldirish
                </button>
            </article>
            <section className='relative w-[40%]  flex justify-center items-center'>
                <div className=' w-[800px] h-[800px] absolute z-[-1] right-[-110px]'>
                    <img src={homebackimg} alt="img" />
                </div>
                <img className='w-[300px] z-10 ' src={homeimg} alt="img" />
            </section>
        </div>
    )
}

export default Home