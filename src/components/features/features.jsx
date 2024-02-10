import React, { useRef } from "react";
import "./features.scss";
import {
    featureicon,
    howwe,
    icon,
    phone1,
    phone2,
    phone3,
} from "./features-img";
import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();
    const sectionRef1=useRef(null)
    const sectionRef2=useRef(null)
    const sectionRef3=useRef(null)
    console.log(sectionRef1,sectionRef2,sectionRef3);
    return (
        <div
            id="bot_features"
            className="features max-w-[1440px] w-10/12 max-lg:w-11/12 mx-auto pt-[100px] flex flex-col justify-center items-center mb-[100px] max-sm:mb-0"
        >
            <h1 className="text-[32px] font-[700] max-sm:text-[29px] sm:text-center">
                Biznesingizni rivojlantirish uchun
                <br className="max-sm:hidden" />
                botimiz xizmatlari
            </h1>
            <section className="pt-[100px] max-sm:pt-[64px] mb-[200px] max-sm:mb-[100px] flex flex-col gap-[120px] items-center justify-center">
                <div ref={sectionRef1} className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-around max-lg:justify-between items-center ">
                    <article className="w-1/2 max-sm:w-full flex flex-col gap-[32px]">
                        <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
                        <h1 className="text-[26px] max-sm:text-[23px] font-[500]">
                            <span className="span">
                                Sizga kerak bo’ladigan joy ketegoriyalarining
                            </span>
                            <br />
                            <span className="span1"> hammasi bir joyda</span>
                        </h1>
                        <p className="text-[16px] font-[400] opacity-[0.8] pb-[70px]">
                            Tez-tez qidiriladigan joylar kategoriyalar ya’ni bankomatlar,
                            ovqatlanish joylari, avtoservislar, dorixonalar, go’zallik
                            salonlari va boshqa kerakli joy manzillarini tezda va sizga eng
                            yaqin masofadagilarini toping
                        </p>
                    </article>
                    <div>
                        <img
                            className="w-[300px] max-md:w-[250px]"
                            src={phone1}
                            alt="icon"
                        />
                    </div>
                </div>
                <div ref={sectionRef2} className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-around max-lg:justify-between items-center ">
                    <article className="w-1/2 max-sm:w-full flex flex-col gap-[32px]">
                        <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
                        <h1 className="text-[26px] max-sm:text-[23px] font-[500]">
                            <span className="span1">
                                Har bir joy haqida sizga to’liq ma’lumot beradi
                            </span>
                        </h1>
                        <p className="text-[16px] font-[400] opacity-[0.8] pb-[70px]">
                            Sizga eng yaqin joygacha bo’lgan masofani o’lchash, u joyning
                            ishlash vaqti va ayni vaqtda ochiq yoki yopiqligi haqida ma’lumot
                            beradi. Yana qo’shimcha aloqa raqamini va o’sha joygacha bo’lgan
                            yo’l haqini hisoblab beradi
                        </p>
                    </article>
                    <div>
                        <img
                            className="w-[300px] max-md:w-[250px]"
                            src={phone2}
                            alt="icon"
                        />
                    </div>
                </div>
                <div ref={sectionRef3} className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-around max-lg:justify-between items-center ">
                    <article className="w-1/2 max-sm:w-full flex flex-col gap-[32px]">
                        <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
                        <h1 className="text-[26px] max-sm:text-[23px] font-[500]">
                            <span className="span">
                                Botning qo’shimcha xususiyatlari sizga ko’proq
                            </span>
                            <br />
                            <span className="span1"> qulayliklar yaratadi</span>
                        </h1>
                        <p className="text-[16px] font-[400] opacity-[0.8] pb-[70px]">
                            Bot orqali siz aviabiletlar haqida ma’lumotlar olishingiz va
                            ularga buyurtma berishingiz mumkin. Agar siz chet elda bo’lsangiz
                            terjimon xizmatidan ham foydalanishingiz mumkin
                        </p>
                    </article>
                    <div>
                        <img
                            className="w-[300px] max-md:w-[250px]"
                            src={phone3}
                            alt="icon"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-row max-sm:flex-col justify-between feature-card-true p-[48px] max-md:p-[28px] mb-[100px]">
                <div className="img-container flex justify-center items-center relative w-[40%] max-sm:w-full">
                    <img
                        className="w-[240px] h-[240px] max-lg:w-[200px] max-lg:h-[200px] max-sm:w-[270px] max-sm:h-[270px]"
                        src={icon}
                        alt="icon"
                    />
                </div>
                <article className="flex flex-col items-start gap-[16px] max-sm:gap-[24px] w-[60%] max-sm:w-full max-sm:text-center">
                    <h1 className="text-[29px] max-lg:text-[26px] max-sm:text-[23px] font-[600]">
                        Biz bilan o’z biznesingizni yuqori <br className="max-sm:hidden" />{" "}
                        marralarga olib chiqing
                    </h1>
                    <p className="text-[16px] font-[400] opacity-[0.7]">
                        Agar sizga bizning xizmatlarimiz maqul kelgan bo’lsa darhol Xabar
                        qoldirish tugmasi orqali o’z ma’lumotlaringizni qoldiring
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
            </section>
            <section className="w-full flex flex-col justify-center items-center pt-[100px] max-sm:pt-0">
                <h1 className="text-[32px] max-sm:text-[29px] font-[700]">
                    Biz qanday ishlaymiz?
                </h1>
                <article className=" w-[70%] max-xl:w-[80%] max-lg:w-[80%] max-sm:w-full flex flex-col  justify-center items-center gap-[5px] pt-[74px] mb-[50px]">
                    <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] right-[-30px] absolute w-1/2">
                                Mijozlar bilan dastlabki uchrashuv va kelishuv shartlari haqida
                                batafsil muloqot
                            </p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                    </div>
                    <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] left-[-30px] text-right absolute w-1/2">
                                Kelishuvga binoan dasturiy mahsulotni ishlab chiqish va bot
                                xizmatlariga qo’shish
                            </p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                    </div>
                    <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] right-[-30px] absolute w-1/2">
                                Kelishilgan muddat davomida dasturiy ta’minotni ommaga tadbiq
                                qilish
                            </p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                    </div>
                    <div className="flex gap-[31px] justify-end max-sm:hidden w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] max-md:text-[18px] top-[-6px] font-[500] left-[-30px] text-right absolute w-1/2">
                                Keyinchalik ham dasturiy ta’minotni qo’llab quvvatlash va mijoz
                                bilan doimiy aloqa
                            </p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                        </div>
                    </div>
                    {/* sm  dan keyingi qism */}
                    <div className="flex sm:hidden">
                        <div className="flex flex-col justify-center items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                        <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
                            Mijozlar bilan dastlabki uchrashuv va kelishuv shartlari haqida
                            batafsil muloqot
                        </p>
                    </div>
                    <div className="flex sm:hidden">
                        <div className="flex flex-col justify-center items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                        <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
                            Kelishuvga binoan dasturiy mahsulotni ishlab chiqish va bot
                            xizmatlariga qo’shish
                        </p>
                    </div>
                    <div className="flex sm:hidden">
                        <div className="flex flex-col justify-center items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                        <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
                            Kelishilgan muddat davomida dasturiy ta’minotni ommaga tadbiq
                            qilish
                        </p>
                    </div>
                    <div className="flex sm:hidden">
                        <div className="flex flex-col justify-start items-center  relative gap-[10px] w-[10%] ml-0 pt-[6px]">
                            <img className="w-[16px] h-[16px] ml-[3px]" src={howwe} alt="" />
                        </div>
                        <p className="text-[20px] max-md:text-[18px] font-[500] w-[80%]">
                            Keyinchalik ham dasturiy ta’minotni qo’llab quvvatlash va mijoz
                            bilan doimiy aloqa
                        </p>
                    </div>
                    {/* sm dan keyingi qism */}
                </article>
            </section>
        </div>
    );
};

export default Features;
