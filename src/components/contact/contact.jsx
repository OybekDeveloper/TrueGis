import React, { useState } from "react";
import { dog, loc, phone } from "./contact-img";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    massage: "",
  });
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = inputValue;
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      phone: "",
      massage: "",
    });
  };
  return (
    <div
      id="contact"
      className="contact pt-[150px] max-w-[1440px] w-10/12 mx-auto flex flex-col items-center mb-[200px] max-sm:mb-[100px]"
    >
      <h1 className="text-[32px] font-[600] max-sm:font-[500] max-sm:text-[29px] max-sm:text-center">
        Biz bilan bog’lanish
      </h1>
      <p className="text-[18px] font-[400] opacity-[0.7] pt-[16px] max-sm:text-center">
        oʻz ma’lumotlaringizni qoldiring va biz siz bilan tez orada oʻzimiz
        bog’lanamiz
      </p>
      <section className="flex max-lg:flex-col-reverse pt-[72px]  max-lg:gap-[96px] justify-between     w-full">
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
        <div className="contact-you w-1/2 max-lg:w-full">
          <form className="contact-form flex flex-col items-center max-lg:items-start gap-[42px]">
            <div className="w-[70%] max-lg:w-full">
              <label htmlFor="text"></label>
              <input
                className="contact-input input-style  p-[10px] bg-transparent text-[16px] font-[400] input-form"
                type="text"
                placeholder="Familiya , Ism"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="w-[70%] max-lg:w-full">
              <label htmlFor="text"></label>
              <input
                className="contact-input input-style  p-[10px] bg-transparent text-[16px] font-[400] input-form"
                type="text"
                value={formData.phone}
                placeholder="+998 (88) 123 45 67"
                name="phone"
                onChange={handleInputChange} // Add onChange event
              />
            </div>
            <div className="w-[70%] max-lg:w-full">
              <div className="">
                <label htmlFor="message"></label>
                <textarea
                  name="massage"
                  value={formData.massage}
                  onChange={handleChange}
                  id="message"
                  rows="4"
                  className="contact-input input-style  p-[10px] bg-transparent text-[16px] font-[400] input-form"
                  placeholder="Xabaringizni yozing"
                ></textarea>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="msg-btn flex w-[70%] max-lg:w-full"
            >
              Yuborish
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
