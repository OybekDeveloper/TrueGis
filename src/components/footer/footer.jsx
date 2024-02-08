import React, { useState } from "react";
import "./footer.scss";
import { truegis } from "../imgs";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const [activeLink, setActiveLink] = useState("");
    const navigate = useNavigate()
    const handleLinkClick = (link) => {
        setActiveLink(link);
        navigate("/")
        setActiveLink("")
    };

    return (
        <div className="footer w-10/12 max-lg:w-11/12 mx-auto pt-[100px] mb-[48px] max-w-[1440px]">
            <footer>
                <div className="flex justify-between max-sm:flex-col items-start pb-[40px] max-sm:gap-[56px]">
                    <div className="flex justify-start items-center gap-[12px]">
                        <img className="w-[40px] h-[40px]" src={truegis} alt="logo" />
                        <h1 className="text-[29px] font-[500]">TrueGis</h1>
                    </div>
                    <div className="links flex gap-[90px] max-sm:gap-0 max-sm:justify-between max-sm:w-full mr-20 max-lg:mr-0">
                        <div className="flex flex-col gap-[32px]">
                            <h1 className="text-[20px] font-[500]">Foydali havolalar</h1>
                            <ul className="flex flex-col gap-[16px] text-[16px] font-[500] opacity-[0.7]">
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
                            <ul className="flex flex-col gap-[16px] text-[16px] font-[500] opacity-[0.7]">
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
