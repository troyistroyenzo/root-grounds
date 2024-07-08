import React from 'react';
import Image from 'next/image';
import Logo from '../assets/redlogo.svg';

const Overlay = () => {
  const logoUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(Logo)))}`;

  return (
    <>
      <div className="absolute top-20 left-5 text-[#9C3300] text-[50px] font-[Bowlby]"></div>
      <div className="absolute top-[20vw] left-[20vw] text-[#FFFFFF] text-[5rem] text-spacing-[-200px] font-[Inter-Bold]">
        <br />
       
      </div>
      <div className="absolute bottom-30 left-[10vw] text-[#FFFFFF] font-[Bowlby]"></div>
      <div className="absolute bottom-10 right-[5vw] text-[#FF5757] text-right font-[Inter-Bold]">
       
      </div>
      <div className="absolute top-[-5] right-5 text-right tabular-nums"></div>
      <div className="absolute bottom-42 left-15 text-[15px] text-black">
        <div className="relative bottom-[150px] inline-block">
          <div className="mt-1.5 h-[2.5px] w-full bg-[#3e3e3d]" />
        </div>
        <br />
      </div>
    </>
  );
};

export default Overlay;