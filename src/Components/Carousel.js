import Glide from "@glidejs/glide"
import React, { useEffect } from "react"

export default function SliderIndicatorsOutside() {
    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "slider",
            focusAt: "center",
            perView: 1,
            autoplay: 3000,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    return (
        <>
            {/*<!-- Component: Slider with indicators outside --> */}
            <div className="relative w-full glide-05  mt-8">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="w-full  max-w-full max-h-[650px] object-cover m-auto overflow-hidden" alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1561131506-3c48296e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="w-full  max-w-full max-h-[650px] object-cover m-auto overflow-hidden" alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="w-full  max-w-full max-h-[650px] object-cover m-auto overflow-hidden" alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1612956946766-7c5a0ce957b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                                className="w-full max-w-full max-h-[650px] m-auto" alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1621594820646-3b981b640b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="w-full max-w-full max-h-[650px] m-auto" alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1645581310800-9e0292af67e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                className="w-full max-w-full max-h-[650px] m-auto" alt=""
                            />
                        </li>
                    </ul>
                </div>
                {/*    <!-- Indicators --> */}
                <div
                    className="flex items-center justify-center w-full gap-2"
                    data-glide-el="controls[nav]"
                >
                    <button
                        className="p-4 group"
                        data-glide-dir="=0"
                        aria-label="goto slide 1"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=1"
                        aria-label="goto slide 2"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=2"
                        aria-label="goto slide 3"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=3"
                        aria-label="goto slide 4"
                    >
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                </div>
            </div>
            {/*<!-- End Slider with indicators outside --> */}
        </>
    )
}