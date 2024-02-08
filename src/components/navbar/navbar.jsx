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
      x: isOpen ? '100%' : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setIsOpen(!isOpen);
    setActiveLink("");
  };

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
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
      <ul className="max-lg:hidden links flex justify-center items-center gap-[40px]">
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
          <a href="#faq">Ko’p beriladigan savollar</a>
        </li>
      </ul>
      <a href="#contact ">
        <button
          onClick={() => navigate("/contact")}
          className="msg-btn flex max-lg:hidden"
        >
          Xabar qoldirish
        </button>
      </a>
      <div onClick={handleActive} className="menu lg:hidden">
        <img
          className={`${isOpen ? "hidden" : "block"} w-[28px] h-[28px]`}
          src={menu}
          alt="menu"
        />
        <img
          className={`${isOpen ? "block" : "hidden"} w-[28px] h-[28px]`}
          src={close}
          alt="menu"
        />
      </div>
      <motion.section
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: isOpen ? 0 : "100%" }}
        exit={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex navbar2  flex-col absolute p-10 gap-[72px] right-0 top-[80px] bg-[#0a090c] w-full h-screen`}
      >
        <ul className="text-[23px] font-[600] n links flex flex-col  items-end gap-[40px] pt-[52px]">
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
            <a href="#faq">Ko’p beriladigan savollar</a>
          </li>
        </ul>
        <a href="#contact ">
          <button
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
            className="msg-btn flex  w-full"
          >
            Xabar qoldirish
          </button>
        </a>
      </motion.section>
    </nav>
  );
};

export default Navbar;
