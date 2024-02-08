import React from 'react'
import { MasterCard, Gillette, LouisVuitton, McDonald, Starbucks, card1, card2, card3, card4, clientback } from './client-img'
import './clients.scss'
const clients = [
    {
        id: 1,
        title: "Gillette",
        url: Gillette
    },
    {
        id: 2,
        title: "Louis Vuitton",
        url: LouisVuitton
    },
    {
        id: 3,
        title: "MasterCard",
        url: MasterCard
    },
    {
        id: 4,
        title: "McDonald's",
        url: McDonald
    },
    {
        id: 5,
        title: "Starbucks",
        url: Starbucks
    },
    {
        id: 1,
        title: "Gillette",
        url: Gillette
    },
    {
        id: 2,
        title: "Louis Vuitton",
        url: LouisVuitton
    },
    {
        id: 3,
        title: "Gillette",
        url: Gillette
    },
    {
        id: 4,
        title: "McDonald's",
        url: McDonald
    },
    {
        id: 5,
        title: "Starbucks",
        url: Starbucks
    },
]
const cards = [
    {
        id: 1,
        title: 'Loyihani qabul qilib olish jarayonida aniq kelishuv',
        url: card1,
    },
    {
        id: 2,
        title: 'Har bir loyihani tizimli tashkillashtirish va so’ngi texnologiyalar bilan ishlab chiqish',
        url: card2,
    },
    {
        id: 3,
        title: 'Qabul qilib olingan loyihalarni kelishilgan vaqtda yetkazib berish',
        url: card3,
    },
    {
        id: 4,
        title: 'Har bitta loyihani alohida qo’llab quvvatlash',
        url: card4,
    },
]
const Clients = () => {
    return (
        <div id='clients' className='clients  max-lg:w-11/12   mx-auto pt-[100px] flex flex-col items-center mb-[100px] overflow-hidden'>
            <h1 className='text-[32px] font-[700]'>Bizning mijozlarimiz</h1>
            <div className='cards pt-[64px]'>
                <div className="card-slide">
                    {clients.map(item => (
                        <div key={item.id} className='inline-flex pl-[112px]'>
                            <div className='flex flex-row justify-center items-center gap-[12px]'>
                                <img className='w-[40px] h-[40px]' src={item.url} alt={item.title} />
                                <h1 className='text-[23px] font-[500]'>{item.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card-slide">
                    {clients.map(item => (
                        <div key={item.id} className='inline-flex pl-[112px]'>
                            <div className='flex flex-row justify-center items-center gap-[12px]'>
                                <img className='w-[40px] h-[40px]' src={item.url} alt={item.title} />
                                <h1 className='text-[23px] font-[500]'>{item.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card-slide">
                    {clients.map(item => (
                        <div key={item.id} className='inline-flex pl-[112px]'>
                            <div className='flex flex-row justify-center items-center gap-[12px]'>
                                <img className='w-[40px] h-[40px]' src={item.url} alt={item.title} />
                                <h1 className='text-[23px] font-[500]'>{item.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <article className='relative w-full flex flex-col items-center mt-[200px] gap-[64px]'>
                <div className='absolute top-10 lg:left-20 max-lg:top-[160px] max-sm:top-[600px]'>
                    <img className='w-[440px]' src={clientback} alt="back" />
                </div>
                <h1 className='text-[32px] font-[700] text-center'>Nima uchun bizni tanlashadi?</h1>
                <div className="card-container grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-[24px] max-sm:gap-[40px]">
                    {cards.map(item => (
                        <div className="card mx-auto flex flex-col gap-[32px] p-[32px] max-xl:p-[16px] max-sm:p-[32px] w-[300px] max-sm:h-[280px]  max-xl:w-[230px] max-lg:w-full " key={item.id}>
                            <img className='w-[56px] h-[56px]' src={item.url} alt={item.title} />
                            <h1 className='text-[20px] font-[500] max-lg:w-[70%] max-md:w-[90%]'>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    )
}

export default Clients