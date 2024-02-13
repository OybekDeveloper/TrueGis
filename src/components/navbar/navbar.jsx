import React, { useEffect, useState } from "react";
import { truegis, menu, close } from "../imgs";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const controls = useAnimation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    navigate("/");
  };
  const handleActive = () => {
    setIsOpen(!isOpen);
    controls.start({
      x: isOpen ? "100%" : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setActiveLink("");
  };

  useEffect(() => {
    const body = document.body;
    const blur = document.querySelector("#blur-effect");
    if (isOpen) {
      body.classList.add("no-scroll");
      blur.classList.add("blur-effect");
    } else {
      body.classList.remove("no-scroll");
      blur.classList.remove("blur-effect");
    }
  }, [isOpen]);

  return (
    <nav className="navbar w-10/12 max-lg:w-11/12 mx-auto max-w-[1440px] h-[88px] flex justify-between items-center">
      <a href="#home">
        <div
          onClick={() => navigate("/")}
          className="logo flex justify-center items-center gap-[12px]"
        >
          <img
            className="nav-img w-[40px] h-[40px]"
            src={truegis}
            alt="truegis"
          />
          <h1 className="text-[23px] font-[500]">TrueGis</h1>
        </div>
      </a>
      <ul className="max-lg:hidden links flex justify-center items-center gap-[40px] font-[500]">
        <li
          onClick={() => handleLinkClick("bot_features")}
          className={activeLink === "bot_features" ? "active-link" : ""}
        >
          <a href="#bot_features">Bot xususiyatlari</a>
        </li>
        <li
          onClick={() => handleLinkClick("clients")}
          className={activeLink === "clients" ? "active-link" : ""}
        >
          <a href="#clients">Bizning mijozlar</a>
        </li>
        <li
          onClick={() => handleLinkClick("comments")}
          className={activeLink === "comments" ? "active-link" : ""}
        >
          <a href="#comments">Fikrlar</a>
        </li>
        <li
          onClick={() => handleLinkClick("faq")}
          className={activeLink === "faq" ? "active-link" : ""}
        >
          <a href="#faq">Koʻp beriladigan savollar</a>
        </li>
      </ul>
      <a href="#contact">
        <div className="shimmer-btn w-[140px] h-[40px]">
          <button
            onClick={() => { navigate("/contact"); setActiveLink("") }}
            className="msg-btn flex max-lg:hidden"
          >
            Xabar qoldirish
          </button>
        </div>
      </a>
      <div className="menu lg:hidden flex justify-center items-center gap-[18px]">
        <a href="#contact">
          <div className="shimmer-btn w-[120px] h-[32px]">
            <button
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
                setActiveLink('')
              }}
              className="msg-btn flex max-lg:hidden max-sm:flex w-full max-sm:text-[14px]"
            >
              Xabar qoldirish
            </button>
          </div>
        </a>

        <img
          onClick={handleActive}
          className={`${isOpen ? "hidden" : "block"
            } w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px]`}
          src={menu}
          alt="menu"
        />
        <img
          onClick={handleActive}
          className={`${isOpen ? "block" : "hidden"
            } w-[28px] h-[28px] max-sm:w-[18px] max-sm:h-[18px]`}
          src={close}
          alt="menu"
        />
      </div>
      <motion.section
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: isOpen ? 0 : "100%" }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`lg:hidden flex navbar2  flex-col absolute px-[20px] gap-[72px] right-0 top-[80px] bg-[#0a090c] w-full max-sm:w-[70%] h-screen`}
      >
        <ul className="text-[23px] max-sm:text-[16px] font-[600] links flex flex-col  items-end gap-[40px] max-sm:gap-[24px] pt-[52px] max-sm:pt-[44px]">
          <li
            onClick={() => handleLinkClick("bot_features")}
            className={activeLink === "bot_features" ? "active-link" : ""}
          >
            <a href="#bot_features">Bot xususiyatlari</a>
          </li>
          <li
            onClick={() => handleLinkClick("clients")}
            className={activeLink === "clients" ? "active-link" : ""}
          >
            <a href="#clients">Bizning mijozlar</a>
          </li>
          <li
            onClick={() => handleLinkClick("comments")}
            className={activeLink === "comments" ? "active-link" : ""}
          >
            <a href="#comments">Fikrlar</a>
          </li>
          <li
            onClick={() => handleLinkClick("faq")}
            className={activeLink === "faq" ? "active-link" : ""}
          >
            <a href="#faq">Koʻp beriladigan savollar</a>
          </li>
        </ul>
        <a href="#contact ">
          <button
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
            className="msg-btn flex  w-full max-sm:hidden"
          >
            Xabar qoldirish
          </button>
        </a>
      </motion.section>
    </nav>
  );
};

export default Navbar;
