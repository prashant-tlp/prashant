'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
interface ServerResponse {
    message: string;
    status: number;
}

function Contact() {
    const [input, setInput] = useState({ name: '', email: '', message: '' })
    const handle = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const submit = async (e:FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        try {
            const response = await axios.post<ServerResponse>('/api/contact', input)
            if (response.data.status === 200) {
                enqueueSnackbar(response.data.message, { variant: 'success' })
            }
            else {
                enqueueSnackbar(response.data.message, { variant: 'error' })
            }
        } catch (error) {
            throw error
        }
    }
    return (

        <>
            <SnackbarProvider anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            >
                <div className="app-page-container ">
                    <form onSubmit={submit}>
                        <div className="py-2 w-full">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 py-4 text-lg ">Name</label>
                                <input type="text" id="name" name="name" onChange={handle}
                                    className="text-black w-full rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                            </div>
                        </div>
                        <div className="py-2 w-full">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 py-4 text-lg">Email</label>
                                <input type="email" id="email" name="email" onChange={handle}
                                    className=" text-black w-full rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="py-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 py-4 text-lg ">Message</label>
                                <textarea id="message" name="message" onChange={handle}
                                    className=" w-full text-black  rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div className="py-2 w-full">
                            <div>
                                <button type="submit"
                                    className="button border-black text-md">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </SnackbarProvider>
        </>

    )
}

export default Contact