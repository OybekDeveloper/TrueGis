import React from 'react'
import { dog, loc, phone } from './contact-img'

const Contact = () => {
    return (
        <div className='h-screen pt-[100px]'>
            <h1 className='text-[32px] font-[600]'>Biz bilan bog’lanish</h1>
            <p className='text-[18px] font-[400] opacity-[0.7]'>O’z ma’lumotlaringizni qoldiring va biz siz bilan tez orada o’zimiz bog’lanamiz</p>
            <section>
                <div className="contact-me">
                    <h1 className='text-[23px] font-[500]' >Aloqa ma’lumotlari</h1>
                    <div className='flex justify-start items-center gap-[12px]'>
                        <img src={phone} alt="phone" />
                        <p>+998 (88) 100 36 31</p>
                    </div>
                    <div className='flex justify-start items-center gap-[12px]'>
                        <img src={dog} alt="phone" />
                        <p>@truegis_bot</p>
                    </div>
                    <div className='flex justify-start items-center gap-[12px]'>
                        <img src={loc} alt="phone" />
                        <p>3891 Ranchview Dr. Richardson, California 62639</p>
                    </div>
                </div>
                <div className="contact-you">
                    <form>
                        <div>
                            <label htmlFor="text"></label>
                            <input type="text" placeholder='Familiya , Ism' />
                        </div>
                        <div>
                            <label htmlFor="text"></label>
                            <input type="text" placeholder='Familiya , Ism' />
                        </div>
                        <div>
                            <label htmlFor="text"></label>
                            <input type="text" placeholder='Familiya , Ism' />
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact