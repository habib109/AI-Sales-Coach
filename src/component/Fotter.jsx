import React from 'react'
import { Container } from '../layout/Container'
import Image from '../layout/Image'
import logo from '/logo.png'
import { RiFacebookFill } from 'react-icons/ri'
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoCall, IoMail } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'

const Fotter = () => {
  return (
    <div className='mt-[155px] mb-10 relative'>
      <Container>
        {/* CTA Section */}
        <div className="Ready px-4 py-20 chatbgcolor flex flex-col items-center text-center rounded-[24px]">
          <p className='text-[28px] md:text-[38px] font-semibold text-white'>Ready to Hire Smarter?</p>
          <p className='text-[14px] md:text-[16px] text-[#B9BDC7] mt-3 mb-9'>Unlock Exclusive Insights Subscribe to Our Newsletter</p>
          <button className='text-[14px] md:text-[16px] rounded-lg bg-[#FCE38A] text-[#00245F] font-medium py-3 md:py-4 px-6 md:px-8'>Join Now</button>
        </div>

        {/* Footer Section */}
        <div className="mainfotter flex flex-col lg:flex-row justify-between gap-12 mt-24 px-4 md:px-8 lg:px-24 py-16 bg-transparent rounded-xl">
          {/* Logo & Description */}
          <div className="subfot max-w-xl">
            <Image src={logo} alt="Logo" className="w-[140px] md:w-[160px] h-auto" />
            <p className='text-sm text-[#335386] mt-6 mb-8 leading-relaxed'>
              SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.
            </p>
            <div className="cion flex gap-4">
              {[RiFacebookFill, FaTwitter, FaLinkedin, FaInstagramSquare].map((Icon, index) => (
                <div key={index} className="bg-white p-2 rounded-full text-[#00245F] text-xl cursor-pointer hover:scale-110 transition">
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="subfot flex flex-wrap gap-12 md:gap-16">
            {/* Navigation */}
            <ul className='text-lg font-semibold text-[#001C4A]'>
              <li className='mb-6'>Navigation</li>
              {['Service', 'Agency', 'Case Study', 'Resource', 'Contact'].map((item, idx) => (
                <li key={idx} className='text-[#335386] text-sm mb-4 relative group cursor-pointer'>
                  <span className="group-hover:text-[#00245F] transition-colors duration-200">{item}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00245F] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Licence */}
            <ul className='text-lg font-semibold text-[#001C4A]'>
              <li className='mb-6'>Licence</li>
              {['Privacy Policy', 'Copyright', 'Email Address'].map((item, idx) => (
                <li key={idx} className='text-[#335386] text-sm mb-4 relative group cursor-pointer'>
                  <span className="group-hover:text-[#00245F] transition-colors duration-200">{item}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00245F] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <ul className='text-lg font-semibold text-[#001C4A] max-w-xs'>
              <li className='mb-6'>Contact</li>
              <li className='text-[#335386] text-sm flex items-center gap-2 mb-4 cursor-pointer hover:text-[#00245F] transition'>
                <IoCall /> (406) 555-0120
              </li>
              <li className='text-[#335386] text-sm flex items-center gap-2 mb-4 cursor-pointer hover:text-[#00245F] transition'>
                <IoMail /> Hey@boostim.com
              </li>
              <li className='text-[#335386] text-sm flex items-start gap-2 cursor-pointer hover:text-[#00245F] transition'>
                <MdLocationOn className="mt-1" /> 2972 Westheimer Rd.<br />Santa Ana, Illinois 85486
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="fotter-liner absolute top-[78%] right-0 bottom-0 z-[-1]"></div>

    </div>
  )
}

export default Fotter
