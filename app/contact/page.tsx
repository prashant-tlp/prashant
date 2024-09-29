import React from 'react'

function Contact() {
  return (
    <div className="app-page-container">
    <form>
        <div className="py-2 w-full">
            <div className="relative">
                <label htmlFor="name" className="leading-7 py-4 text-lg ">Name</label>
                <input type="text" id="name" name="name"
                    className="text-black w-full rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
        </div>
        <div className="py-2 w-full">
            <div className="relative">
                <label htmlFor="email" className="leading-7 py-4 text-lg">Email</label>
                <input type="email" id="email" name="email" 
                    className=" text-black w-full rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
        </div>
        <div className="py-2 w-full">
            <div className="relative">
                <label htmlFor="message" className="leading-7 py-4 text-lg ">Message</label>
                <textarea id="message" name="message" 
                    className=" w-full text-black  rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
        </div>
        <div className="py-2 w-full">
            <div>
                <button type="submit"
                    className="button">
                    Send
                </button>
            </div>
        </div>
    </form>
</div>
  )
}

export default Contact