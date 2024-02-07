import React, { useState } from "react";
import { dog, loc, phone } from "./contact-img";
import "./contact.scss";

const Contact = () => {
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        massage: "",
    })
    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, "");
        e.target.value = inputValue;
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            username: "",
            phone: "",
            massage: ""
        })
    }
    return (
        <div
            id="contact"
            className="contact pt-[150px] max-w-[1440px] w-10/12 mx-auto flex flex-col items-center mb-[200px]"
        >
            <h1 className="text-[32px] font-[600]">Biz bilan bog’lanish</h1>
            <p className="text-[18px] font-[400] opacity-[0.7] pt-[16px]">
                O’z ma’lumotlaringizni qoldiring va biz siz bilan tez orada o’zimiz
                bog’lanamiz
            </p>
            <section className="flex pt-[72px] justify-between w-[80%]">
                <div className="contact-me flex flex-col gap-[40px] w-[310px]">
                    <h1 className="text-[23px] font-[500]">Aloqa ma’lumotlari</h1>
                    <div className="flex justify-start items-center gap-[12px]">
                        <img src={phone} alt="phone" />
                        <p>+998 (88) 100 36 31</p>
                    </div>
                    <div className="flex justify-start items-center gap-[12px]">
                        <img src={dog} alt="phone" />
                        <p>@truegis_bot</p>
                    </div>
                    <div className="flex justify-start items-center gap-[12px]">
                        <img src={loc} alt="phone" />
                        <p>3891 Ranchview Dr. Richardson, California 62639</p>
                    </div>
                </div>
                <div className="contact-you w-1/2">
                    <form className="contact-form flex flex-col items-center gap-[42px]">
                        <div className="">
                            <label htmlFor="text"></label>
                            <input
                                className="contact-input input-style p-[10px] bg-transparent text-[16px] font-[400] w-[360px]"
                                type="text"
                                placeholder="Familiya , Ism"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="text"></label>
                            <input
                                className="contact-input input-style p-[10px] bg-transparent text-[16px] font-[400] w-[360px]"
                                type="text"
                                value={formData.phone}
                                placeholder="+998 (88) 123 45 67"
                                name="phone"
                                onChange={handleInputChange} // Add onChange event
                            />
                        </div>
                        <div className="">
                            <div className="">
                                <label htmlFor="message"></label>
                                <textarea
                                    name="massage"
                                    value={formData.massage}
                                    onChange={handleChange}
                                    id="message"
                                    rows="4"
                                    className="contact-input input-style p-[10px] bg-transparent text-[16px] font-[400] w-[360px]"
                                    placeholder="Xabaringizni yozing"
                                ></textarea>
                            </div>
                        </div>
                        <button onClick={handleSubmit} type="submit" className='msg-btn w-[360px]'>
                            Yuborish
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;