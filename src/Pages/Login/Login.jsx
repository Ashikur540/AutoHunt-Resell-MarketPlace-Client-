import { GoogleAuthProvider } from '@firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthProvider';
const Login = () => {
    const { loginUser, googleSignin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();


    // routing part
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    // jodi pai taile navigate korbo
    // if (token) navigate(from, { replace: true })







    const { register, formState: { errors }, handleSubmit } = useForm();
    const hanldeSignin = (data) => {
        console.log(data);
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login in success");
                navigate(from, { replace: true })
            })
            .catch(err => {
                toast.error(err.message)
            })

    }

    const handleGoogleSignin = () => {

        googleSignin(googleProvider).then(result => {
            const user = result.user;
            console.log(user);
            // window.location.reload();
            const account = 'buyer'
            saveUser(user?.displayName, user?.email, account)
            toast.success('login successfull')
            navigate(from, { replace: true })
        })
            .catch(error => {
                console.error(error);
                toast.error(error.message, {
                    position: "top-center"
                })
            })
    }

    const saveUser = (fullName, email, account) => {
        const userInfo = {
            fullName, email, account
        }

        fetch(`${process.env.REACT_APP_Base_URL}/user`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
                        Get started today
                    </h1>
                    <form action="" className="mt-6 mb-0 space-y-4 bg-neutral rounded-lg p-8 shadow-2xl"
                        onSubmit={handleSubmit(hanldeSignin)}
                    >
                        <p className="text-lg font-medium">Sign in to your account</p>

                        <div>
                            <label htmlFor="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-md text-neutral shadow-sm"
                                    placeholder="Enter email"
                                    required
                                    {...register("email", { required: "email is required" })}
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
                                    {...register("password", { required: "password is required" })}
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
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-neutral border-2 border-slate-500 px-5 py-3 text-sm font-medium text-white"
                            onClick={handleGoogleSignin}

                        >
                            🌍 continue with google
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <Link className="underline" to="/register">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login