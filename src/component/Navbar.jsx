import React, { useState } from 'react';
import { Container } from '../layout/Container';
import Image  from '../layout/Image';  
import logo from '/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#Pricing' },
    { name: 'Consulting', href: '#Consulting' },
    { name: 'Ai Coach', href: '#AiCoach' },
  ];

  return (
    <div>
      <Container >
        <nav className="bg-transparent text-black py-11 text-[14px]">
          <div className="flex justify-between items-center">


           <div className="item flex justify-center items-center gap-20 ">
           <div className="l"><a href="#" className="text-xl font-bold">
              <Image src={logo} alt="Logo" />
            </a></div>
            
           <div className="m items-center justify-center flex">
           <ul className="hidden md:flex gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-black text-[14px] font-semibold">{link.name}</a>
                </li>
              ))}
            </ul>
           </div>
           </div>

            <div className="hidden md:block ml-10">
              <a 
                href="#getStarted"
                className="bg-transparent text-black text-[20px] font-bold border-2 border-black py-3 px-9 rounded-[33px] hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="md:hidden">
              <button 
                className="text-2xl"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <ul className="md:hidden space-y-4 mt-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="block text-center hover:text-gray-400">{link.name}</a>
                </li>
              ))}
              <li>
                <a 
                  href="#getStarted"
                  className="block text-center bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
