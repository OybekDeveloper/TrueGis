import React from 'react'
import { dog, loc, phone } from './contact-img'

const Contact = () => {
    return (
        <div id="contact" className=' pt-[220px] max-w-[1440px] w-10/12 mx-auto flex flex-col items-center mb-[200px]'>
            <h1 className='text-[32px] font-[600]'>Biz bilan bog’lanish</h1>
            <p className='text-[18px] font-[400] opacity-[0.7] pt-[16px]'>O’z ma’lumotlaringizni qoldiring va biz siz bilan tez orada o’zimiz bog’lanamiz</p>
            <section className='flex pt-[72px] justify-between w-[80%]'>
                <div className="contact-me flex flex-col gap-[40px] w-[310px]">
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
                <div className="contact-you w-1/2">
                    <form className='flex flex-col items-center gap-[42px]'>
                        <div className=''>
                            <label htmlFor="text"></label>
                            <input className='p-[10px] rounded-[8px] border-solid border-[1px] border-[#535255] bg-transparent text-[16px] font-[400] w-[360px]' type="text" placeholder='Familiya , Ism' />
                        </div>
                        <div className=''>
                            <label htmlFor="text"></label>
                            <input className='p-[10px] rounded-[8px] border-solid border-[1px] border-[#535255] bg-transparent text-[16px] font-[400] w-[360px]' type="text" placeholder='Familiya , Ism' />
                        </div>
                        <div className=''>
                            <label htmlFor="text"></label>
                            <input className='p-[10px] rounded-[8px] border-solid border-[1px] border-[#535255] bg-transparent text-[16px] font-[400] w-[360px]' type="text" placeholder='Familiya , Ism' />
                        </div>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact