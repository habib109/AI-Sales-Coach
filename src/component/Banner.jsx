import React from 'react'
import { Container } from '../layout/Container'
import Image from '../layout/Image'
import robot from '/robot.png'
import bacup from '/backup.png'
import dots from '/dots3.png'
import bannerImg from '/bannerimg.png'

const Banner = () => {
    return (
       <section className='relative'>

<div className="banner-liner absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>
         <Container className="flex flex-col md:flex-row justify-between items-start gap-10 relative mt-12 mb-20">
            <div className="flex-1">
                {/* First Div with Text and Image */}
                <div className="mb-[97px]">
                    <p className="text-[40px] md:text-[80px] font-medium text-black max-w-[516px] leading-tight mb-[45px]">
                        Your AI-Powered Sales Coach
                    </p>

                    <div className="flex gap-16 items-start mb-[10px]">
                        <div className="w-[160px] h-[150px] flex items-center justify-center bg-[#F2F2F2] rounded-md">
                            <Image src={robot} className="w-full h-full " />
                        </div>
                        <p className="text-[18px] md:text-[20px] font-medium text-[#05131D] opacity-70 max-w-[346px]">
                            Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
                        </p>
                    </div>
                </div>

                <div className="flex gap-12">
                    <div className="flex gap-3 items-center">
                        <div className="p-4 rounded-md bg-white">
                            <Image src={bacup} />
                        </div>
                        <div>
                            <p className="text-[32px] md:text-[40px] font-semibold text-black">2000+</p>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#5131D] opacity-70">Your protection</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className="p-4 rounded-md bg-white">
                            <Image src={dots} />
                        </div>
                        <div>
                            <p className="text-[32px] md:text-[40px] font-semibold text-black">7001+</p>
                            <p className="text-[18px] md:text-[20px] font-medium text-[#5131D] opacity-70">Provide tailored</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 py-4 relative">
                <div className="img flex justify-end pr-4">
                    <Image src={bannerImg} className="w-[583px] h-[628px]" />
                </div>

                {/* This div will be on the banner and be absolutely placed */}
                <div className="growth bg-white py-9 px-[29px] absolute top-[54%] right-[5%] md:right-[21%] transform -translate-x-1/2 md:translate-x-0 rounded-[25px] shadow-lg">
                    <p className="text-[50px] font-semibold text-black">
                        721+ <span className="ml-[140px]">1000+</span>
                    </p>
                    <p className="text-[28.97px] text-[#05131D] opacity-70 my-3">
                        Growth is our priority.
                    </p>
                    <h1 className="text-[20px] font-medium text-[#5131D] opacity-70 max-w-[407px]">
                        As a full-service business agency, we specialize in helping companies of all sizes optimize their operations
                    </h1>
                </div>
            </div>
        </Container>
       </section>
    )
}

export default Banner
