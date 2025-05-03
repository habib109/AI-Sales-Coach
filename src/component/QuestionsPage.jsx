import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { HiOutlinePlus } from 'react-icons/hi';
import { AiOutlineMinus } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const initialFaqs = [
  {
    id: '01',
    question: 'Why should I choose Humestic?',
    answer:
      'Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media...',
  },
  {
    id: '02',
    question: 'I like your works, how do we start a project?',
    answer:
      'You can start by contacting us through our website. We’ll schedule a meeting to understand your needs and provide a proposal.',
  },
  {
    id: '03',
    question: 'What info is required to get a quotation?',
    answer:
      'Please provide project details, features needed, timeline, and budget range so we can accurately quote.',
  },
];

const QuestionsPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-24 relative">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <h3 className="text-xl md:text-2xl text-[#001C4A] max-w-[300px]">Frequently asked questions</h3>
          <h2 className="text-[32px] md:text-[48px] text-[#111111] font-semibold leading-tight max-w-4xl">
            Constant collaboration is how we roll. Let's see if we are a good fit.
          </h2>
        </div>

        <div className="mt-10 space-y-10">
          {initialFaqs.map((faq, index) => (
            <div key={index}>
              <div
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex gap-5 items-start">
                  <p className="text-2xl text-[#8B7D4C] font-bold">{faq.id}</p>
                  <div>
                    <p className="text-2xl md:text-[32px] text-[#111111] mb-2 font-semibold">
                      {faq.question}
                    </p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-[#636363] text-base max-w-3xl">{faq.answer}</p>
                    </div>
                  </div>
                </div>
                <div className="text-3xl text-black">
                  {openIndex === index ? <AiOutlineMinus /> : <HiOutlinePlus />}
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#CCCCCC] mt-6"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 px-4">
          <p className="text-[36px] md:text-[36px] font-semibold text-[#010205] max-w-6xl mx-auto">
            They thoroughly analyze our industry and target audience, allowing them to develop customized
            campaigns that effectively reach and engage our customers.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="h-[70px] w-[70px] bg-[#afafaf] rounded-full"></div>
            <div>
              <p className="text-lg font-bold text-[#010205]">Michael Kaizer</p>
              <p className="text-sm text-[#878C91] mt-1">CEO of Basecamp Corp</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="py-4 px-6 md:px-10 border-2 border-black text-lg rounded-full hover:bg-[#00245F] hover:text-white hover:scale-105 transition">
              <FaArrowLeft />
            </button>
            <span className="text-base text-[#010205] opacity-50 font-semibold">01/05</span>
            <button className="py-4 px-6 md:px-10 border-2 border-black text-lg rounded-full hover:bg-[#00245F] hover:text-white hover:scale-105 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="bg-liner absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>
      </Container>
    </div>
  );
};

export default QuestionsPage;
