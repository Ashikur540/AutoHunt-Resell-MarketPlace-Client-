import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
const Register = () => {
    // contexts
    const { createUser, updateUser } = useContext(AuthContext)

    // hooks



    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleSignup = (data) => {
        console.log(data);
        const { email, password, fullName } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                const profile = {
                    displayName: fullName
                }
                console.log(profile);
                console.log("SUER INFO", profile);
                updateUser(profile)
                    .then(() => {
                        // saveUser(fullname, email)

                    })
                    .catch(err => console.error(err.message));
            })

            .catch(err => {
                console.error(err.message);
            })
        toast.success('Account creation succesfull')
        reset();
    }
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                        Get started today
                    </h1>
                    <form action="" className="mt-6 mb-0 space-y-4 bg-neutral rounded-lg p-8 shadow-2xl"
                        onSubmit={handleSubmit(handleSignup)}
                    >
                        <p className="text-lg font-medium">Create your new account</p>

                        <div>
                            <label htmlFor="FullName" className="text-sm font-medium">FullName</label>

                            <div className="relative mt-1">
                                <input
                                    type="FullName"
                                    id="FullName"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                    placeholder="Enter full-Name"
                                    required
                                    {...register("fullName", { required: "Name is required" })}
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                    placeholder="Enter email"

                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                            {errors.email && <p className="text-error">Please check the Email</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm font-medium">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md  text-neutral shadow-sm"
                                    placeholder="Enter password"
                                    required
                                    {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                    })}
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                            {errors.password && <>
                                <p className="text-error"> Please check the Password</p>
                                <p className="text-slate-500">🎇TIP: min6, max-15 including lowercase,uppercase,special character</p>
                            </>}
                        </div>
                        {/* radio */}
                        <div className="flex justify-between ">
                            <p className="text-sm font-medium">Account type:</p>
                            <div className="flex space-x-3">
                                <label htmlFor="account-type" className="flex items-center" >
                                    <input
                                        {...register("account")}
                                        type="radio"
                                        name="account"
                                        value="buyer"
                                        className='radio ml-2'
                                        checked
                                    />
                                    Buyer
                                </label>
                                <label htmlFor="account-type" className="flex items-center" >
                                    <input
                                        {...register("account")}
                                        type="radio"
                                        name="account"
                                        value="seller"
                                        className='radio ml-2'
                                    />
                                    Seller
                                </label>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign up
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            already have an account?
                            <Link className="underline" to="/login">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div >

        </>
    )
}

export default Register