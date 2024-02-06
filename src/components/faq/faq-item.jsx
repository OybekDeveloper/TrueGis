import React, { useEffect, useRef, useState } from "react";
import { line, plus } from "./faq-img";

const FaqItem = () => {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            contentRef.current.style.maxHeight = active ? `${contentHeight}px` : "0";
        }
    }, [active]);

    return (
        <div className="faqbtn">
            <div
                onClick={() => setActive(!active)}
                className="flex justify-between items-center cursor-pointer"
            >
                <h1 className="text-[18px] font-[500] py-[24px]">
                    TrueGis botining boshqa botlarda farqi nimada?
                </h1>
                <img className={`faqbtn__img ${active && "active"} w-[32px] h-[32px]`} src={plus} alt="" />
            </div>
            <p
                ref={contentRef}
                className={`faqbtn__content ${active ? "transition-height active" : ""
                    } text-[16px] font-[400]`}
            >
                Bot foydalanuvchi uchun qulaylik yaratish maqsadida ishlab chiqilgan.
                Uning asosiy maqsadi telegramdan chiqmagan holda yaqin atrfodagi kerakli
                manzillarni topish va ular haqida ma’lumot olishga yordam beradi.
            </p>
            <div className="py-[12px]">
                <hr className="opacity-[0.7]" />
            </div>
        </div>
    );
};

export default FaqItem;
