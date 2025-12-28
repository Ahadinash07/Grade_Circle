import React from 'react';

export const FoundedByAlumni = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-4 py-8">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] rounded-xl py-6 px-4 mb-6">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-2xl text-center leading-tight">
            Founded by<br />Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white rounded-lg shadow-md py-6 px-4 flex items-center justify-between">
          <img
            className="w-20 h-auto object-contain"
            alt="Mit management sloan"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
          />
          <img
            className="w-14 h-auto object-contain"
            alt="Yale"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
          />
          <div className="flex flex-col items-center">
            <img
              className="w-12 h-12 object-contain"
              alt="Iit"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
            />
            <span className="text-xs font-bold text-[#0e416f] mt-1">IIT Delhi</span>
          </div>
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden md:block">
        <div className="flex flex-col w-[998px] items-center justify-center gap-6 pt-10 pb-[63px] px-6 absolute top-[671px] left-[206px] bg-[#f8b402] rounded-2xl">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Founded by Alumni from
          </div>
        </div>

        <div className="absolute top-[769px] left-[483px] w-[434px] h-[105px] bg-white rounded-[13px_13px_0px_0px] shadow-[0px_4px_4px_#00000040]" />

        <img
          className="absolute top-[795px] left-[823px] w-[74px] h-[74px] object-cover"
          alt="Iit"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
        />

        <img
          className="absolute top-[802px] left-[502px] w-[115px] h-[60px] object-cover"
          alt="Mit management sloan"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
        />

        <img
          className="absolute top-[813px] left-[668px] w-[102px] h-[38px] object-cover"
          alt="Yale"
          src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
        />
      </div>
    </>
  );
};
