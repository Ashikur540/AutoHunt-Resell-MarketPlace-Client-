import React from 'react'


const Blogs = () => {



    return (

        <div>
            <h1 className="text-3xl font-semibold  my-4 text-center">Welcome to our Blogs</h1>


            <div className="bg-neutral px-6 py-3 text-left max-w-5xl text-slate-100 border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className=" font-semibold py-4 text-xl"> What are the different ways to manage a state in a React application?</h1>
                <p className="text-indigo-200 list-decimal space-y-2">
                    Although, we can manage states in different ways using hooks (useReducer,context) or programing.But, there are some libraries available
                    to make our life easy for that.These are third party libraries like (redux,mobx,recoil etc..).

                </p>

            </div>
            <div className="bg-neutral px-6 py-3 text-left max-w-5xl text-slate-100 border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className=" font-semibold py-4 text-xl">How does prototypical inheritance work?</h1>
                <p className="text-indigo-200">
                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding. <br /><br />

                    We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.

                </p>
                <img src="https://www.educative.io/api/page/6187859468877824/image/download/6346760642363392" alt="example pic" className="my-4 rounded-md" />
            </div>
            <div className="bg-neutral px-6 py-3 text-left max-w-5xl text-slate-100 border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className=" font-semibold py-4 text-xl"> What is a unit test? Why should we write unit tests?</h1>
                <p className="text-indigo-200">
                    <span className="font-semibold">Unit testing </span> is a method that instantiates a small portion of our application and verifies its behavior independently from other parts. A typical unit test contains 3 phases: First, it initializes a small piece of an application it wants to test (also known as the system under test, or SUT), then it applies some stimulus to the system under test (usually by calling a method on it), and finally, it observes the resulting behavior. If the observed behavior is consistent with the expectations, the unit test passes, otherwise, it fails, indicating that there is a problem somewhere in the system under test. These three unit test phases are also known as Arrange, Act and Assert, or simply AAA.<br />

                    We should coduct unit testing because, A unit test can verify different behavioral aspects of the system under test, but most likely it will fall into one of the following two categories: state-based or interaction-based. Verifying that the system under test produces correct results, or that its resulting state is correct, is called state-based unit testing, while verifying that it properly invokes certain methods is called interaction-based unit testing.

                </p>
            </div>
            <div className="bg-neutral px-6 py-3 text-left max-w-5xl text-slate-100 border-4 rounded-lg shadow-lg mx-auto my-10">
                <h1 className=" font-semibold py-4 text-xl">React vs. Angular vs. Vue?</h1>
                <li className="text-indigo-200 list-disc my-2">
                    Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.
                </li>
                <li className="text-indigo-200 list-disc my-2">
                    AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.
                </li>
                <li className="text-indigo-200 list-disc my-2">
                    Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.
                </li>
            </div>
        </div>

    )
}

export default Blogs