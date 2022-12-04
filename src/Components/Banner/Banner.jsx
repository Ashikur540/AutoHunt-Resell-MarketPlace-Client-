import Carousel from "../Carousel";

export const Banner = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block  py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
                                New Collection arrives
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-base-10 sm:text-4xl sm:leading-none md:leading-normal">
                            Fullfill
                            <br className="hidden md:block" />
                            Your dream{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                with low cost
                            </span>
                        </h2>
                        <p className="text-base font-light text-slate-200 md:text-lg">
                            This is a car reselling website where we sell cars and many sellers sells their cars accross the country.We try to sell with the least minimal profit and make people happy.People trust us because we are native and secure.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <a className="btn glass" href="#car-category" >Explore</a>

                    </div>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                {/* <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src={heroImg}
                    alt=""
                /> */}
                <Carousel />
            </div>
        </div >
    );
};