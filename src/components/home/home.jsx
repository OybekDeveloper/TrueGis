import React from 'react'
import { homeimg, homebackimg, } from '../imgs';
import './home.scss'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    return (
        <div id='home' className='home w-10/12 mx-auto max-w-[1440px] flex flex-col pt-[132px] '>
            <div className='flex justify-between items-center'>
                <article className='w-[100%] flex flex-col gap-[24px]  items-start'>
                    <h1 className='font-[600] text-[41px]'><span className='span'>TrueGis:</span> sizga eng yaqin bo’lgan joylarni topish yanada oson va telegramning o’zida</h1>
                    <p className='text-[18px] opacity-[0.7] font-[400] '>Telegramdan chiqmagan holda sizga eng yaqin  bo’lgan do’konlar, bankomatlar, dorixonalar, ovqatlanish joylari va boshqa kerakli joylarni bir zumda toping</p>
                    <a href="#contact" className='pt-[40px]'>
                        <button onClick={() => navigate('/contact')} className='msg-btn '>
                            Xabar qoldirish
                        </button>
                    </a>
                </article>
                <section className='relative w-full flex justify-center items-center'>
                    <div className=' w-[1000px] h-[1000px] absolute z-[-1]'>
                        <img src={homebackimg} alt="img" />
                    </div>
                    <img className='w-[300px] z-10 ' src={homeimg} alt="img" />
                </section>
            </div>
            <section className='pt-[150px] flex justify-center items-center gap-[128px] mb-[100px]'>
                <div className='text-center'>
                    <h1 className='text-[32px] span1 font-[600]'>10,000+</h1>
                    <p className='text-[20px] font-[500] pt-[16px]'>Obunachilar</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[32px] span1 font-[600]'>4,000+</h1>
                    <p className='text-[20px] font-[500] pt-[16px]'>Faol obunachilar</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[32px] span1 font-[600]'>25+</h1>
                    <p className='text-[20px] font-[500] pt-[16px]'>Kompaniyalar</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-[32px] span1 font-[600]'>14+</h1>
                    <p className='text-[20px] font-[500] pt-[16px]'>Joy kataloglari</p>
                </div>
            </section>
        </div>
    )
}

export default Home