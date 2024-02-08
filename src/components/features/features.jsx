import React from "react";
import "./features.scss";
import { featureicon, howwe, icon, phone1, phone2, phone3 } from "./features-img";
import { useNavigate } from "react-router-dom";

const Features = () => {
    const navigate = useNavigate();
    return (
        <div id="bot_features" className="features max-w-[1440px] w-10/12 max-lg:w-11/12 mx-auto pt-[100px] flex flex-col justify-center items-center mb-[100px]">
            <h1 className=" text-[32px] font-[600] text-center">Biznesingizni rivojlantirish uchun<br />
                botimiz xizmatlari</h1>
            <section className="pt-[100px] mb-[200px] flex flex-col gap-[120px] items-center justify-center">
                <div className="flex justify-around max-lg:justify-between items-center ">
                    <article className="w-1/2 flex flex-col gap-[32px]">
                        <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
                        <h1 className="text-[26px]">
                            <span className="span">
                                Sizga kerak bo’ladigan joy ketegoriyalarining
                            </span><br />
                            <span className="span1"> hammasi bir joyda</span>
                        </h1>
                        <p>
                            Tez-tez qidiriladigan joylar kategoriyalar ya’ni bankomatlar, ovqatlanish joylari, avtoservislar, dorixonalar, go’zallik salonlari va boshqa kerakli joy manzillarini tezda va sizga eng yaqin masofadagilarini toping
                        </p>
                    </article>
                    <div>
                        <img className="w-[300px]" src={phone1} alt="icon" />
                    </div>
                </div>
                <div className="flex justify-around max-lg:justify-between items-center ">
                    <article className="w-1/2 flex flex-col gap-[32px]">
                        <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
                        <h1 className="text-[26px]">
                            <span className="span1">
                                Har bir joy haqida sizga to’liq ma’lumot beradi
                            </span>
                        </h1>
                        <p>
                            Sizga eng yaqin joygacha bo’lgan masofani o’lchash, u joyning ishlash vaqti va ayni vaqtda ochiq yoki yopiqligi haqida ma’lumot beradi. Yana qo’shimcha aloqa raqamini va o’sha joygacha bo’lgan yo’l haqini hisoblab beradi
                        </p>
                    </article>
                    <div>
                        <img className="w-[300px]" src={phone2} alt="icon" />
                    </div>
                </div>
                <div className="flex justify-around max-lg:justify-between items-center ">
                    <article className="w-1/2 flex flex-col gap-[32px]">
                        <img className="w-[40px] h-[40px]" src={featureicon} alt="cion" />
                        <h1 className="text-[26px]">
                            <span className="span">
                                Botning qo’shimcha xususiyatlari sizga ko’proq
                            </span><br />
                            <span className="span1"> qulayliklar yaratadi</span>
                        </h1>
                        <p>
                            Bot orqali siz aviabiletlar haqida ma’lumotlar olishingiz va ularga buyurtma berishingiz mumkin. Agar siz chet elda bo’lsangiz terjimon xizmatidan ham foydalanishingiz mumkin
                        </p>
                    </article>
                    <div>
                        <img className="w-[300px]" src={phone3} alt="icon" />
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-row justify-between feature-card-true p-[48px] mb-[100px]">
                <div className="img-container flex justify-center items-center relative w-[40%]">
                    <img className="w-[240px] max-lg:w-[200px] max-lg:h-[200px] h-[240px]" src={icon} alt="icon" />
                </div>
                <article className="flex flex-col items-start gap-[16px] w-[60%]">
                    <h1 className="text-[29px] max-lg:text-[26px] font-[600]">Biz bilan o’z biznesingizni yuqori <br /> marralarga olib chiqing</h1>
                    <p className="text-[16px] font-[400] opacity-[0.7]">Agar sizga bizning xizmatlarimiz maqul kelgan bo’lsa darhol Xabar qoldirish tugmasi orqali o’z ma’lumotlaringizni qoldiring</p>
                    <a href="#contact" className='pt-[40px]'>
                        <button onClick={() => navigate('/contact')} className='msg-btn flex'>
                            Xabar qoldirish
                        </button>
                    </a>
                </article>
            </section>
            <section className="w-full flex flex-col justify-center items-center pt-[100px]">
                <h1 className="text-[32px] font-[600]">Biz qanday ishlaymiz?</h1>
                <article className=" w-[70%] max-xl:w-[80%] max-lg:w-[80%] flex flex-col  justify-center items-center gap-[10px] pt-[74px] mb-[50px]">
                    <div className="flex gap-[31px] justify-end  w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] top-0 font-[500] right-[-30px] absolute w-1/2">Mijozlar bilan dastlabki uchrashuv va kelishuv shartlari haqida batafsil muloqot</p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                    </div>
                    <div className="flex gap-[31px] justify-end  w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] top-0 font-[500] left-[-30px] text-right absolute w-1/2">Kelishuvga binoan dasturiy mahsulotni ishlab chiqish va bot xizmatlariga qo’shish</p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                    </div>
                    <div className="flex gap-[31px] justify-end  w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] top-0 font-[500] right-[-30px] absolute w-1/2">Kelishilgan muddat davomida dasturiy ta’minotni ommaga tadbiq qilish</p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                            <div className="howwe-line"></div>
                        </div>
                    </div>
                    <div className="flex gap-[31px] justify-end  w-full">
                        <div className="flex flex-col justify-center items-center relative gap-[10px] w-full">
                            <p className="text-[20px] top-0 font-[500] left-[-30px] text-right absolute w-1/2">Keyinchalik ham dasturiy ta’minotni qo’llab quvvatlash va mijoz bilan doimiy aloqa</p>
                            <img className="w-[16px] h-[16px]" src={howwe} alt="" />
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Features;
