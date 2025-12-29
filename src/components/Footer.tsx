import React from "react";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <>
      {/* Mobile Layout */}
      <section className="block md:hidden">
        {/* Program Fee Section */}
        <div className="bg-white px-6 py-10">
          <div className="text-black text-xl mb-2">Program Fee:</div>
          <div className="text-black text-2xl font-bold mb-6">
            INR <span className="text-[#0e416f]">17,500 + 18% GST</span>
          </div>
          
          <div className="text-black text-xl mb-2">Next Cohorts Starting:</div>
          <div className="text-black text-xl">
            <span className="font-bold">Jan & Feb</span> (Weekends)
          </div>
        </div>

        {/* Certificate Image */}
        <div className="bg-white px-6 pb-10">
          <img
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/image-6-1.png"
            alt="Sample Certificate"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Footer */}
        <div className="bg-[#122e6c] py-8 px-6 text-center">
          <p className="text-white text-sm mb-4">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="text-white text-sm">
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Terms of Use</a>
            <span className="mx-3">|</span>
            <a href="#" className="underline hover:text-[#ef7f1a] transition-colors">Privacy Notice</a>
          </div>
          
          <p className="text-white/70 text-xs mt-6">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>
      </section>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="absolute top-[10600px] left-0 w-full h-[200px] bg-[#122e6c]">
          <p className="absolute top-[50px] left-1/2 transform -translate-x-1/2 text-white text-lg text-center">
            info@mygradcircle.com | www.mygradcircle.com
          </p>
          
          <div className="absolute top-[90px] left-1/2 transform -translate-x-1/2 text-white text-base text-center">
            <a href="#" className="underline">Terms of Use</a>
            <span className="mx-4">|</span>
            <a href="#" className="underline">Privacy Notice</a>
          </div>
          
          <p className="absolute top-[140px] left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
            © Copyright GradCircle, All rights reserved 2025.
          </p>
        </div>

        <div className="absolute top-[10058px] left-[535px] w-[345px] h-[86px] bg-[#ef7f1a] rounded-[50px] cursor-pointer hover:bg-[#d66f15] transition-colors" />

        <div className="absolute top-[10087px] left-[645px] [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
          Apply Now
        </div>

        <p className="absolute top-[10200px] left-[535px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          Program Fee: INR <span className="font-bold">17,500 + 18% GST</span>
        </p>

        <p className="absolute top-[10260px] left-[480px] [font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
          Next Cohorts Starting: <span className="font-bold">Jan</span> & <span className="font-bold">Feb</span> (Weekends)
        </p>
      </div>
    </>
  );
};
