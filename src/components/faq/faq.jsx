import React from "react";
import "./faq.scss";
import FaqItem from "./faq-item";
import { useNavigate } from "react-router-dom";
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const Faq = () => {
  const navigate = useNavigate();
  return (
    <div
      id="faq"
      className="faq max-w-[1440px] flex flex-col w-10/12 max-sm:w-11/12 mx-auto pt-[100px]  mb-[100px] max-sm:mb-0"
    >
      <div className="flex max-lg:flex-col mb-[100px]  max-lg:gap-[88px] max-sm:gap-[64px]">
        <article className="w-1/2 max-lg:w-full flex flex-col items-start gap-[16px]">
          <h1 className="text-[32px] font-[600]">Koʻp beriladigan savollar</h1>
          <p className="text-[16px] font-[400] opacity-[0.7] w-[60%] max-sm:w-full">
            Qoʻshimcha savollaringiz bormi?{" "}
            <a href="/" className="text-[#2051b6]">
              @truegis_bot
            </a>{" "}
            manziliga telegram orqali bog’laning
          </p>
          <a href="/" className="max-sm:hidden mt-[20px]">
            <div className="shimmer-btn2 w-[200px] h-[42px]">
              <button className="msg-btn  flex">
                Telegramdan yozish
              </button>
            </div>
          </a>
        </article>
        <section className="w-1/2 max-lg:w-full">
          {data.map((item) => (
            <FaqItem key={crypto.randomUUID()} />
          ))}
        </section>
      </div>
      <article className="w-full flex flex-col gap-[50px] justify-center items-center pt-[100px] max-sm:pt-0">
        <h1 className="text-[32px] font-[600] text-center">
          Biz bilan ishlashga tayyormisiz?
        </h1>
        <a href="#contact" className="max-sm:w-full">
          <div className="shimmer-btn w-[200px] h-[40px] max-sm:w-full max-sm:h-[46px]">
            <button
              onClick={() => navigate("/contact")}
              className="msg-btn w-full"
            >
              Xabar qoldirish
            </button>
          </div>
        </a>
      </article>
    </div>
  );
};

export default Faq;
