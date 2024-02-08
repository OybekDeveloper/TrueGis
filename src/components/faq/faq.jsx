import React from "react";
import "./faq.scss";
import FaqItem from "./faq-item";
import { useNavigate } from "react-router-dom";
const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];
const Faq = () => {
    const navigate = useNavigate()
    return (
        <div id="faq" className="faq max-w-[1440px] flex flex-col w-10/12 max-sm:w-11/12 mx-auto pt-[100px]  mb-[100px] max-sm:mb-0">
            <div className="flex max-lg:flex-col mb-[100px]  max-lg:gap-[88px] max-sm:gap-[64px]">
                <article className="w-1/2 max-lg:w-full flex flex-col items-start gap-[16px]">
                    <h1 className="text-[32px] font-[600]">Ko’p beriladigan savollar</h1>
                    <p className="text-[16px] font-[400] opacity-[0.7] w-[60%] max-sm:w-full">
                        Qo’shimcha savollaringiz bormi?{" "}
                        <a href="/" className="text-[#2051b6]">@truegis_bot</a> manziliga
                        telegram orqali bog’laning
                    </p>
                    <a href="/" className="max-sm:hidden">
                        <button className="msg-btn mt-[32px] flex">Telegramdan yozish</button>
                    </a>
                </article>
                <section className="w-1/2 max-lg:w-full">
                    {data.map((item) => (
                        <FaqItem key={crypto.randomUUID()} />
                    ))}
                </section>
            </div>
            <article className="w-full flex flex-col gap-[64px] justify-center items-center pt-[100px] max-sm:pt-0">
                <h1 className="text-[32px] font-[600] text-center">
                    Biz bilan ishlashga tayyormisiz?
                </h1>
                <a href="#contact" className='pt-[40px] max-sm:w-full'>
                    <button onClick={() => navigate('/contact')} className='msg-btn w-full'>
                        Xabar qoldirish
                    </button>
                </a>
            </article>
        </div>
    );
};

export default Faq;
