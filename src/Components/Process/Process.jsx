export const Process = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="w-full md:w-1/2">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-400 uppercase rounded-full bg-teal-accent-400">How it works</p>
                <h1 className="text-4xl text-white font-bold  uppercase leading-snug">How Autohive
                    Car Rental Works 3 Steps. </h1>
            </div>
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                <div className="lg:py-6 lg:pr-16">
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-amber-500"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold  text-white">Step 1</p>
                            <p className="text-base-20">
                                First you have to register into our website.You mus provide the information that you are a buyer or seller.After successfulll login you can browse categories
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-amber-500"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-white">Step 2</p>
                            <p className="text-base-20">
                                Then you can choose a category .Here you can see all the cars available in our category.Then you can buy your preferd car by clicking buy now button.There youmust provide your number and meeting place.It will add to your purchase list.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-amber-500"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-white">Step 3</p>
                            <p className="text-base-20">
                                After that come to your dashboard you can see your purchase list. There you can remove items.And if you want to pay click on payment.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-amber-500"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-white">Step 4</p>
                            <p className="text-base-20">
                                After clicking on payment button you can make payment by giving card details.Thats simple!
                            </p>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <img
                        className="inset-0 object-cover object-top w-full rounded shadow-lg h-full lg:absolute lg:h-full"
                        src="https://cdn.pixabay.com/photo/2019/04/23/05/25/car-4148514_960_720.jpg"
                        alt="process_image"
                    />
                </div>
            </div>
        </div>
    );
};