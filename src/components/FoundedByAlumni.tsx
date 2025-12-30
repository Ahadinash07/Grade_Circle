import React from 'react';

export const FoundedByAlumni = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-4 py-10">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] rounded-2xl py-7 px-5 mb-7 shadow-sm">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[26px] text-center leading-tight">
            Founded by<br />Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white rounded-xl shadow-md py-7 px-5 flex items-center justify-around gap-2">
          <img
            className="w-[72px] h-auto object-contain"
            alt="Mit management sloan"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
          />
          <img
            className="w-[56px] h-auto object-contain"
            alt="Yale"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
          />
          <div className="flex flex-col items-center">
            <img
              className="w-[50px] h-[50px] object-contain"
              alt="Iit"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
            />
            <span className="text-[11px] font-bold text-[#0e416f] mt-1">IIT Delhi</span>
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="hidden md:block lg:hidden w-full max-w-5xl mx-auto px-8 py-14">
        {/* Yellow Header */}
        <div className="bg-[#f8b402] rounded-3xl py-10 px-8 mb-10 shadow-md">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-5xl text-center leading-tight">
            Founded by Alumni from
          </h2>
        </div>
        
        {/* Logos Container */}
        <div className="bg-white rounded-2xl shadow-lg py-10 px-8 flex items-center justify-center gap-12">
          <img
            className="w-28 h-auto object-contain"
            alt="Mit management sloan"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/mit-management-sloan-school.png"
          />
          <img
            className="w-24 h-auto object-contain"
            alt="Yale"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/yale.png"
          />
          <div className="flex flex-col items-center">
            <img
              className="w-20 h-20 object-contain"
              alt="Iit"
              src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
            />
            <span className="text-base font-bold text-[#0e416f] mt-2">IIT Delhi</span>
          </div>
        </div>
      </div>

      {/* Desktop Version - Improved */}
      <div className="hidden lg:block">
        <div className="flex flex-col w-[998px] items-center justify-center gap-6 pt-10 pb-[63px] px-6 absolute top-[671px] left-[206px] bg-[#f8b402] rounded-2xl shadow-md">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Founded by Alumni from
          </div>
        </div>

        <div className="absolute top-[769px] left-[483px] w-[434px] h-[105px] bg-white rounded-[13px_13px_0px_0px] shadow-[0px_4px_4px_#00000040]" />

        <div className="absolute top-[795px] left-[823px] flex flex-col items-center">
          <img
            className="w-[74px] h-[74px] object-cover"
            alt="Iit"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/iit-delhi1.png"
          />
        </div>

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
