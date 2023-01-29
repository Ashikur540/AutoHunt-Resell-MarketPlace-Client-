import React from 'react';
import abouImg from "../../Assets/Images/car-gd994b7521_1920.jpg";
export const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="md:flex justify-between items-center gap-4">
                <div className="w-full md:w-1/2">
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-400 uppercase rounded-full bg-teal-accent-400">About</p>
                    <h1 className="text-4xl text-white font-bold  uppercase leading-snug">Welcome!... <br />Proof of Quality Is On the Autohunt </h1>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="inline-block px-3 py-px mb-4 text-md  tracking-wider   rounded-full text-base-20 pt-5 md:pt-8 lg:pt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis aliquid veritatis quidem totam. Quaerat ratione quasi ad obcaecati doloribus quae inventore laudantium ea, est omnis quas ex aliquid et!
                    </p>
                </div>
            </div>
            <img src={abouImg} alt="" className="w-full block h-[450px] object-cover mt-14" />
        </div>
    );
};

