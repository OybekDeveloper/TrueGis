import React, { useState } from "react";
import "./footer.scss";
import { truegis } from "../imgs";
const Footer = () => {
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="footer w-10/12 mx-auto pt-[100px] mb-[48px]">
            <article className="w-full flex flex-col gap-[64px] justify-center items-center  pb-[100px]">
                <h1 className="text-[32px] font-[600]">
                    Biz bilan ishlashga tayyormisiz?
                </h1>
                <button className="msg-btn">Xabar qoldirish</button>
            </article>
            <footer>
                <div className="flex justify-between items-start pb-[40px]">
                    <div className="flex justify-start items-center gap-[12px]">
                        <img className="w-[40px] h-[40px]" src={truegis} alt="logo" />
                        <h1 className="text-[29px] font-[500]">TrueGis</h1>
                    </div>
                    <div className="links flex gap-[90px] mr-20">
                        <div className="flex flex-col gap-[32px]">
                            <h1 className="text-[20px] font-[500]">Foydali havolalar</h1>
                            <ul className="flex flex-col gap-[16px]">
                                <li
                                    className={activeLink === "bot_features" ? "active-link" : ""}
                                >
                                    <a
                                        href="#bot_features"
                                        onClick={() => handleLinkClick("bot_features")}
                                    >
                                        Bot xususiyatlari
                                    </a>
                                </li>
                                <li className={activeLink === "clients" ? "active-link" : ""}>
                                    <a href="#clients" onClick={() => handleLinkClick("clients")}>
                                        Bizning mijozlar
                                    </a>
                                </li>
                                <li className={activeLink === "comments" ? "active-link" : ""}>
                                    <a
                                        href="#comments"
                                        onClick={() => handleLinkClick("comments")}
                                    >
                                        Fikrlar
                                    </a>
                                </li>
                                <li className={activeLink === "faq" ? "active-link" : ""}>
                                    <a href="#faq" onClick={() => handleLinkClick("faq")}>
                                        Ko’p beriladigan savollar
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[32px]">
                            <h1 className="text-[20px] font-[500]">Botga havola</h1>
                            <ul className="flex flex-col gap-[16px]">
                                <li
                                >
                                    <a
                                        href="/"
                                        onClick={() => handleLinkClick("bot_features")}
                                    >
                                        @truegis_bot
                                    </a>
                                </li>
                                <li>
                                    <a href="/" onClick={() => handleLinkClick("clients")}>
                                        @trueGis
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="opacity-[0.6]" />
                <p className="text-[16px] font-[400] pt-[16px]">2024  Cosinus LLC</p>
            </footer>
        </div>
    );
};

export default Footer;
