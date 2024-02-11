import React from "react";
import { homeimg, homebackimg } from "../imgs";
import { useNavigate } from "react-router-dom";
import "./home.scss";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      id="home"
      className="home w-10/12 max-lg:w-11/12 max-sm:w-full mx-auto max-w-[1440px] flex flex-col  pt-[132px] "
    >
      <section className="flex max-lg:flex-col justify-between items-center">
        <article className="w-full flex flex-col max-lg:items-center gap-[24px]  items-start max-lg:text-center max-lg:w-2/3 max-sm:w-11/12">
          <h1 className="text-[32px] font-[700] max-sm:text-[29px]">
            <span className="span">TrueGis:</span> sizga eng yaqin bo’lgan
            joylarni topish yanada oson va telegramning o’zida
          </h1>
          <p className="text-[18px] opacity-[0.7] font-[400] ">
            Telegramdan chiqmagan holda sizga eng yaqin bo’lgan do’konlar,
            bankomatlar, dorixonalar, ovqatlanish joylari va boshqa kerakli
            joylarni bir zumda toping
          </p>
          <a href="#contact" className="pt-[20px] max-sm:w-full">
            <button
              onClick={() => navigate("/contact")}
              className="msg-btn flex max-sm:w-full"
            >
              Xabar qoldirish
            </button>
          </a>
        </article>
        <div className="relative w-full flex justify-center items-center max-lg:pt-[104px]">
          <div className="w-[1000px] h-[1000px] absolute z-[-1] max-sm:hidden">
            <img src={homebackimg} alt="img" />
          </div>
          <img
            className="w-[300px] max-sm:w-[270px] z-10 "
            src={homeimg}
            alt="img"
          />
        </div>
      </section>
      <section className="pt-[150px]  grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-[63px]">
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            10,000+
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">Obunachilar</p>
        </div>
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            4,000+
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">Faol obunachilar</p>
        </div>
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            25+
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">Kompaniyalar</p>
        </div>
        <div className="text-center">
          <h1 className="text-[32px] span1 font-[600] max-sm:font-[500]">
            14+
          </h1>
          <p className="text-[20px] font-[400] pt-[16px]">Joy kataloglari</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
