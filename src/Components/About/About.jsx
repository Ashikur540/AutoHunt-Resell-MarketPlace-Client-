import React from 'react';

export const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
                        About
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-base-20 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative text-slate-400">We</span>
                    </span>{' '}
                    make people happy with their dream car
                </h2>
                <p className="text-base text-slate-300 md:text-lg font-light">
                    We are being trusted by people since 2019.We have 120 plus happy clinets and its growing day by day.We always try keep that faith to us.If you want to procceed then you have to folllow 4 simple steps.
                </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 1</p>
                        <svg
                            className="w-6 text-primary transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-base-10">
                        First you have to register into our website.You mus provide the information that you are a buyer or seller.After successfulll login you can browse categories.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 2</p>
                        <svg
                            className="w-6 text-primary transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-base-10">
                        Then you can choose a category .Here you can see all the cars available in our category.Then you can buy your preferd car by clicking buy now button.There youmust provide your number and meeting place.It will add to your purchase list.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-2xl font-bold">Step 3</p>
                        <svg
                            className="w-6 text-primary transform rotate-90 sm:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                    <p className="text-base-10">
                        After that come to your dashboard you can see your purchase list. There you can remove items.And if you want to pay click on payment.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-6 border-accent">
                        <p className="text-2xl font-bold">Success</p>
                        <svg
                            className="w-8 text-primary"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <polyline
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="10"
                                points="6,12 10,16 18,8"
                            />
                        </svg>
                    </div>
                    <p className="text-base-10">
                        After clicking on payment button you can make payment by giving card details.Thats simple!
                    </p>
                </div>
            </div>
        </div>
    );
};

