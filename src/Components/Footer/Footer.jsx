import React from 'react'
import discoverlogo from "../../Assets/Images/discover-3-svgrepo-com.svg"
import logo from "../../Assets/Images/logo-white.png"
import masterlogo from "../../Assets/Images/mastercard-old-3-svgrepo-com.svg"
import paypallogo from "../../Assets/Images/paypal-3-svgrepo-com.svg"
import visalogo from "../../Assets/Images/visa-logo-svgrepo-com.svg"
export const Footer = () => {
    return (
        <>
            <footer className="footer px-10 py-4 border-t  bottom-0 text-base-content border-base-300 flex justify-between flex-wrap ">
                <div className="items-center grid-flow-col sm:mx-auto md:mx-0 ">
                    <img src={logo} alt="" className="w-12" />
                    <p>AutoHunt Industries Ltd. <br />Providing reliable cars  since 2019</p>
                </div>
                <div className="md:justify-end justify-center text-center w-full md:w-1/2 ">
                    <div className="grid grid-flow-col gap-4 max-w-sm md:justify-items-end">
                        <img src={visalogo} alt="payment_method_logo" className="w-[28%]" />
                        <img src={masterlogo} alt="payment_method_logo" className="w-[28%]" />
                        <img src={paypallogo} alt="payment_method_logo" className="w-[28%]" />
                        <img src={discoverlogo} alt="payment_method_logo" className="w-[28%]" />
                    </div>
                    <p className="text-sm w-full md:w-auto text-center md:justify-self-end">copyright @ AutoHunt by <span className="text-white font-medium">Ashikur Rahman</span></p>
                </div>
            </footer>
        </>
    )
}
