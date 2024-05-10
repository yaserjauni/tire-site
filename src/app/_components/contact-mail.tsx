"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.ChangeEvent<any>) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "fff82579-4e6d-4a0b-8deb-d12a16e0e593",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <>
            <div className="w-full bg-gray-800 h-auto">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 ">
                    <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 ">
                        <p className="text-3xl font-bold leading-7 text-center text-white">Contact Us</p>
                        <form onSubmit={handleSubmit}>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Name</label>
                                    <input type="text" id="name" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none text-gray-300">Email</label>
                                    <input type="email" id="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Subject</label>
                                    <input type="text" id="subject" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none text-gray-300">Message</label>
                                    <textarea id="message" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
