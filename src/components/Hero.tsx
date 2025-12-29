import React from 'react';
import { ContactForm } from './ContactForm';

export const Hero = () => {
  return (
    <>
      {/* Desktop Background Images */}
      <img
        className="hidden md:block absolute top-0 left-0 w-[1440px] h-[740px] object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
      />
      <img
        className="hidden md:block absolute top-[514px] left-0 w-[1447px] h-[266px]"
        alt="Vector"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-1.svg"
      />

      {/* Mobile Background - Orange gradient */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-[480px] bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a] z-0">
        <div className="absolute inset-0 bg-[url('https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg')] bg-cover bg-center opacity-60"></div>
      </div>

      {/* Mobile Content */}
      <div className="block md:hidden relative z-10 pt-20 px-4">
        {/* Title */}
        <h1 className="text-center [font-family:'Inter',Helvetica] font-bold text-white text-3xl italic leading-tight mt-4">
          Professional Immersion<br />Internship
        </h1>

        {/* Subtitle with underline */}
        <p className="text-center [font-family:'Inter',Helvetica] font-normal text-white text-sm mt-4 underline decoration-1 underline-offset-2">
          Industry Mentors | Professional<br />Projects | Hands-on Learning
        </p>

        {/* Program Fee */}
        <div className="text-center mt-6">
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg">
            Program Fee:
          </p>
          <p className="[font-family:'Inter',Helvetica] font-bold text-white text-xl">
            INR <span className="text-2xl">17,500 + 18% GST</span>
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-8 pb-8">
          <ContactForm />
        </div>
      </div>

      {/* Desktop Content - Original positioning */}
      <p className="hidden md:block absolute top-[274px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
        Industry Mentors | Professional Projects | Hands-on Learning
      </p>
      
      <p className="hidden md:block absolute top-[317px] left-[50px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        <span className="font-bold">4-week</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          , mentor-led virtual internship with <br />
          Industry-Inspired projects and practical career insights
        </span>
      </p>
      
      <p className="hidden md:block absolute top-[392px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          Program Fee: INR{" "}
        </span>
        <span className="font-bold">17,500 + 18% GST</span>
      </p>
      
      <p className="hidden md:block absolute top-[446px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          Next Cohorts Starting:{" "}
        </span>
        <span className="font-bold">Jan</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          &nbsp;
        </span>
        <span className="font-bold">&amp; Feb</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          {" "}
          (Weekends)
        </span>
      </p>
      
      <div className="hidden md:block absolute top-[102px] left-[890px]">
        <ContactForm />
      </div>
    </>
  );
};
