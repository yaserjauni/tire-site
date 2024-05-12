"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: React.ChangeEvent<any>) {
        e.preventDefault();
        setLoading(true);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "654a9dde-a429-4cda-8034-3be7477f106b",
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result) {
            console.log(result);
            setLoading(false);
            setSubmitted(true);
            resetForm();
        }
    }


    function resetForm() {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form.reset();
    }


    return (
        <>
            <div className="w-full lg:w-5/12 lg:items-end bg-gray-800 h-auto">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600"></div>
                <div className="max-w-5xl mx-auto ">
                    <div className="bg-gray-900 w-full shadow rounded py-8 px-4 sm:py-8 sm:px-8">
                        <p className="text-3xl font-bold leading-7 text-center text-white">Contact Us</p>
                        {submitted ? (
                            <p className="text-green-500 text-center mt-4">Thank you for your message!</p>
                        ) : (
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="md:flex items-center mt-6">
                                    <div className="w-full md:w-1/2 flex flex-col">
                                        <label className="font-semibold leading-none text-gray-300">Name</label>
                                        <input type="text" required={true} id="name" name="name" className="leading-none lg:mr-6 text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                        <label className="font-semibold leading-none text-gray-300">Email</label>
                                        <input type="email" required={true} id="email" name="email" className="leading-none lg:mr-6 text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                    </div>
                                </div>
                                <div className="md:flex items-center mt-8">
                                    <div className="w-full flex flex-col">
                                        <label className="font-semibold leading-none text-gray-300">Subject</label>
                                        <input type="text" required={true} id="subject" name="subject" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="font-semibold leading-none text-gray-300">Message</label>
                                        <textarea id="message" required={true} name="message" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button type="submit" disabled={loading} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        {loading ? 'Loading...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
