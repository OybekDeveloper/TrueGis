import React from "react";
import "./faq.scss";
import FaqItem from "./faq-item";
const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];
const Faq = () => {
    return (
        <div id="faq" className="faq w-10/12 mx-auto pt-[100px] flex mb-[100px]">
            <article className="w-1/2 flex flex-col items-start gap-[16px]">
                <h1 className="text-[32px] font-[600]">Ko’p beriladigan savollar</h1>
                <p className="text-[16px] font-[400] opacity-[0.7] w-[60%]">
                    Qo’shimcha savollaringiz bormi?{" "}
                    <a href="/" className="text-[#2051b6]">@truegis_bot</a> manziliga
                    telegram orqali bog’laning
                </p>
                <button className="msg-btn mt-[32px]">Telegramdan yozish</button>
            </article>
            <section className="w-1/2">
                {data.map((item) => (
                    <FaqItem key={crypto.randomUUID()} />
                ))}
            </section>
        </div>
    );
};

export default Faq;
