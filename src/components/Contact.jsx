import React from 'react'

function Contact() {
  return (
    

<div className="my-6">
<h1 className='text-center justify-center mt-20 mb-8 text-4xl h1pro'>Contact me</h1>
    
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-[#06060f] shadow-[0_2px_10px_-3px_rgba(231,231,231,0.9)] rounded-md text-[#817f7f] font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-gray-200 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                            <button><i className="fa-regular fa-envelope rounded-xl custom-i"></i></button>
                                <a target="blank" href="#" className="text-[#ee0653] text-lg ml-3">
                                    <small className="block">Mail</small>
                                    <strong>sakshijainjain36@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Socials</h2>
                        <button><i className="fa-brands fa-linkedin-in rounded-xl custom-i"></i></button>
                     
                    </div>
                </div>
              
                <form className="ml-auo space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-2.5 px-4 border text-sm bg-[#06060f]" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-2.5 px-4 border text-sm bg-[#06060f]" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-2.5 px-4 border text-sm bg-[#06060f] " />
                    <textarea placeholder='Message' rows="6"
                        className="w-full rounded-md px-4 border text-sm pt-2.5  bg-[#06060f] "></textarea>
                    <button type='button'
                        className="text-white bg-[#ee0653] hover:bg-orange-100 hover:text-black font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
        </div>
    
  )
}

export default Contact
