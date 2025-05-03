// components/SidebarControls.js

import React from 'react';
import { TfiReload } from 'react-icons/tfi';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { PiBatteryVerticalEmptyBold } from 'react-icons/pi';
import { IoVolumeMediumOutline } from 'react-icons/io5';

const SidebarControls = ({ onReset, onLike, onDislike, onBatteryAlert, onSpeak }) => {
  const controls = [
    { icon: <TfiReload className="text-[20px] text-gray-700" />, title: "Reset Chat", onClick: onReset },
    { icon: <AiOutlineLike className="text-[22px] text-green-600" />, title: "Like Response", onClick: onLike },
    { icon: <AiOutlineDislike className="text-[22px] text-red-500" />, title: "Dislike Response", onClick: onDislike },
    { icon: <PiBatteryVerticalEmptyBold className="text-[20px] text-yellow-600" />, title: "Low Confidence", onClick: onBatteryAlert },
    { icon: <IoVolumeMediumOutline className="text-[22px] text-blue-500" />, title: "Read Message", onClick: onSpeak },
  ];

  return (
    <div className="bg-[#f0f0f0] w-[70px] sm:w-[80px] h-[360px] rounded-[40px] flex flex-col justify-center items-center gap-6 shadow-inner shadow-gray-300">
      {controls.map((ctrl, idx) => (
        <button
          key={idx}
          onClick={ctrl.onClick}
          title={ctrl.title}
          className="hover:bg-white p-2 rounded-full shadow-md transition duration-200"
        >
          {ctrl.icon}
        </button>
      ))}
    </div>
  );
};

export default SidebarControls;
