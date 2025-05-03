import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { FaChartLine } from 'react-icons/fa';
import SidebarControls from '../layout/SidebarControls ';
import RealTimeAnalysis from '../layout/RealTimeAnalysis ';
import Image from '../layout/Image'
import scriptimg from '/script.png'

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?" }
  ]);
  const [input, setInput] = useState('');
  const [likedMessage, setLikedMessage] = useState(null); // For storing liked message

  const quickReplies = [
    'How do I handle objections?',
    'Give me a cold email template',
    'Closing techniques',
    'Negotiation tips',
    'Ask anything you need'
  ];

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text }]);
    setMessages(prev => [...prev, { type: 'bot', text: 'I am thinking about your request...' }]);
    setInput('');
  };

  const handleLike = (message) => {
    setLikedMessage(message); // Set the liked message
    console.log('Liked message:', message);
  };

  return (
    <div className="chatbgcolor h-[800px]">
      <Container >
        <div className='mt-3'>
          <p className='text-[#FCE38A] font-semibold text-[24px] '>Live Ai Coach</p>
          <h1 className='text-[54px] font-normal text-black mt-4'>Take a Suggestion Coaching </h1>
        </div>

        <div className="main flex gap-[75px] items-start relative">
          
          {/* Chat Box */}
          <div className="max-w-2xl p-8 bg-white shadow-lg rounded-lg mt-10 mr-10 ">
            <div className="h-[380px] overflow-y-auto border border-gray-300 rounded p-4 bg-gray-50 mb-4">
              <h2 className="text-[16px] font-semibold mb-4">AI Sales Coach</h2>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 max-w-[80%] ${msg.type === 'bot' ? 'bg-gray-200 text-left' : 'bg-blue-100 ml-auto text-right'
                    } p-2 rounded`}
                >
                  {msg.text}
                  {/* Like Button */}
                  {msg.type === 'bot' && (
                    <button 
                      onClick={() => handleLike(msg.text)}
                      className="ml-2 text-green-500 text-sm"
                    >
                      {likedMessage === msg.text ? 'Liked' : 'Like'}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="mb-4 flex flex-wrap gap-2">
              {quickReplies.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(q)}
                  className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full border border-gray-300"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 border border-gray-300 px-3 py-2 rounded"
                placeholder="Ask anything you need"
              />
              <button
                onClick={() => sendMessage(input)}
                className="bg-[#002868] text-white relative px-7 py-2 rounded hover:bg-blue-700"
              >
                Send
                <span className='absolute top-[10px] right-1'>
                  <IoMdArrowRoundUp className='text-[20px]' />
                </span>
              </button>
            </div>
          </div>

          {/* Confidence Panel */}
         <div>
         <div className='progresConfidacebar p-4 bg-[#EFEFEF] shadow-lg rounded-lg w-[635px] h-[348px] mt-10'>
            <div className="confidacelvl border-[1px] border-[#ececec] p-4 rounded-lg">
              <p className='text-[32px] font-bold text-[#323232] mb-5'>Real-time Analysis</p>
              <div className="progerbar p-5 bg-white rounded-md">
                <div className='flex items-center gap-2'>
                  <RiCheckboxCircleFill className='text-green-500' />
                  <p className='text-lg font-semibold text-[#171D25]'>Confidence Level</p>
                </div>
                <div className='progressbar w-full bg-gray-200 rounded-full h-2.5 mt-4'>
                  <RealTimeAnalysis />
                </div>
              </div>
            </div>

            <div className="dicvll p-3 bg-white rounded-md border-[1px] border-[#e2e2e2] mt-5">
              <div className='flex items-center gap-2'>
                <FaChartLine />
                <p className='text-lg font-semibold text-black'>Confidence Level</p>
              </div>
              <p className='text-lg text-[#909090]'>85% improvement in objection handling</p>
            </div>
          </div>

          <div className='Quick Actions bg-[#EFEFEF] shadow-lg rounded-lg mt-7 p-6'>
            <p className='text-[#323232] text-[30px] font-bold'>Quick Actions</p>

            <div className='grid grid-cols-2 gap-5 mt-5'>
              <div className='p-4 bg-white rounded-md '>
                <Image src={scriptimg} alt={scriptimg}/>
                <p className='text-[#171D25] text-lg font-semibold mt-2'>Generate Script</p>
              </div>
              <div className='p-4 bg-white rounded-md'>
                <Image src={scriptimg} alt={scriptimg}/>
                <p className='text-[#171D25] text-lg font-semibold mt-2'>Generate Script</p>
              </div>
            </div>
            
          </div>

         </div>

          {/* Sidebar Controls */}
          <div className="mt-10 absolute top-24 right-[47%]">
            <SidebarControls
              onReset={() =>
                setMessages([ 
                  { type: 'bot', text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?" }
                ]) 
              }
              onLike={() => console.log("Liked")}
              onDislike={() => console.log("Disliked")}
              onBatteryAlert={() => alert("Confidence low! Consider rephrasing.")}
              onSpeak={() => {
                const last = messages[messages.length - 1];
                if (last?.text) {
                  const speech = new SpeechSynthesisUtterance(last.text);
                  speechSynthesis.speak(speech);
                }
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChatBox;
