// import React from 'react'
import ButtonComponent from "./ButtonComponent"

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-64 bg-[var(--primary-orange)] py-12">
        <div className="flex items-center justify-between container">
            <article className="flex justify-center flex-col">
                <h2 className="text-3xl text-white font-bold">Insight Out</h2>
                <p className="text-white text-lg mt-2">Your trusted partner in innovative solutions.</p>
                <div className="flex flex-col max-w-[200px]">

                <ButtonComponent label="Get Started" className="mt-4 " />
                </div>
            </article>
            {/* <div className="flex items-center justify-center">
                <p className="text-white text-lg">© 2023 Insight Out. All rights reserved.</p>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-white text-lg">Follow us on social media</p>
            </div> */}
        </div>
    </div>
  )
}

export default Footer