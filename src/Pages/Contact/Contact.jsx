import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import contactImg from '../../Assets/Images/Get in touch-amico.png'
export const Contact = () => {

    const { reset, handleSubmit, register } = useForm();
    return (
        <>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-neutral justify-between mb-10">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-400">Send you query here</div>
                    </div>
                    <img src={contactImg} alt="" className=" w-[80%] md:h-auto" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={(e) => {
                    e.preventDefault();
                    reset();
                }}>
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3  bg-base-100 rounded-md"
                            {...register("fullName", { required: "Name is required" })}
                        />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3  bg-base-100 rounded-md"
                            {...register("email", { required: "Email is required" })}
                        />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3  bg-base-100 rounded-md"
                            {...register("message", { required: "message is required" })}
                        ></textarea>
                    </div>
                    <button type="submit" onClick={() => { toast.success('we will catch you soon through mail') }} className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </>
    )
}
