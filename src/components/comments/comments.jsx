import React from "react";
import "./comments.scss";
import { carditem } from "./comment-img";
const Comments = () => {
    return (
        <div id="comments" className="comments w-full mx-auto">
            <h1 className="text-[32px] font-[600] text-center w-[40%] mx-auto pt-[50px]">Xizmatlarimizdan mamnun mijozlar fikrlari</h1>
            <div className="card-container w-full overflow-x-scroll whitespace-nowrap pt-[64px] pb-[180px]">
                <div className="card-wrapper inline-flex mx-[16px]">
                    <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                        <div className="logo flex justify-start gap-[12px] items-center">
                            <img src={carditem} alt="logo" />
                            <h1 className="text-[20px] font-[500]">Bek restorani</h1>
                        </div>
                        <p className="text-[16px] font-[400] opacity-[0.7]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                        </p>
                        <div className="user flex flex-col pt-[10px]">
                            <h1 className="text-[18px] font-[500]">Darlene Robertson</h1>
                            <p className="text-[14px] font-[400] opacity-[0.7]">Menejer</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper inline-flex mx-[16px]">
                    <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                        <div className="logo flex justify-start gap-[12px] items-center">
                            <img src={carditem} alt="logo" />
                            <h1 className="text-[20px] font-[500]">Bek restorani</h1>
                        </div>
                        <p className="text-[16px] font-[400] opacity-[0.7]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                        </p>
                        <div className="user flex flex-col pt-[10px]">
                            <h1 className="text-[18px] font-[500]">Darlene Robertson</h1>
                            <p className="text-[14px] font-[400] opacity-[0.7]">Menejer</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper inline-flex mx-[16px]">
                    <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                        <div className="logo flex justify-start gap-[12px] items-center">
                            <img src={carditem} alt="logo" />
                            <h1 className="text-[20px] font-[500]">Bek restorani</h1>
                        </div>
                        <p className="text-[16px] font-[400] opacity-[0.7]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                        </p>
                        <div className="user flex flex-col pt-[10px]">
                            <h1 className="text-[18px] font-[500]">Darlene Robertson</h1>
                            <p className="text-[14px] font-[400] opacity-[0.7]">Menejer</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper inline-flex mx-[16px]">
                    <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                        <div className="logo flex justify-start gap-[12px] items-center">
                            <img src={carditem} alt="logo" />
                            <h1 className="text-[20px] font-[500]">Bek restorani</h1>
                        </div>
                        <p className="text-[16px] font-[400] opacity-[0.7]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                        </p>
                        <div className="user flex flex-col pt-[10px]">
                            <h1 className="text-[18px] font-[500]">Darlene Robertson</h1>
                            <p className="text-[14px] font-[400] opacity-[0.7]">Menejer</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper inline-flex mx-[16px]">
                    <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                        <div className="logo flex justify-start gap-[12px] items-center">
                            <img src={carditem} alt="logo" />
                            <h1 className="text-[20px] font-[500]">Bek restorani</h1>
                        </div>
                        <p className="text-[16px] font-[400] opacity-[0.7]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                        </p>
                        <div className="user flex flex-col pt-[10px]">
                            <h1 className="text-[18px] font-[500]">Darlene Robertson</h1>
                            <p className="text-[14px] font-[400] opacity-[0.7]">Menejer</p>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper inline-flex mx-[16px]">
                    <div className="card w-[300px] whitespace-normal flex flex-col p-[24px] gap-[22px]">
                        <div className="logo flex justify-start gap-[12px] items-center">
                            <img src={carditem} alt="logo" />
                            <h1 className="text-[20px] font-[500]">Bek restorani</h1>
                        </div>
                        <p className="text-[16px] font-[400] opacity-[0.7]">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                        </p>
                        <div className="user flex flex-col pt-[10px]">
                            <h1 className="text-[18px] font-[500]">Darlene Robertson</h1>
                            <p className="text-[14px] font-[400] opacity-[0.7]">Menejer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Comments;