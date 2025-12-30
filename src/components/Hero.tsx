import React from 'react';
import { ContactForm } from './ContactForm';

export const Hero = () => {
  return (
    <>
      {/* Desktop Background Images */}
      <img
        className="hidden lg:block absolute top-0 left-0 w-[1440px] h-[740px] object-cover"
        alt="Rectangle"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg"
      />
      <img
        className="hidden lg:block absolute top-[514px] left-0 w-[1447px] h-[266px]"
        alt="Vector"
        src="https://c.animaapp.com/mjmwrwbp4K97wU/img/vector-1.svg"
      />

      {/* Tablet Background */}
      <div className="hidden md:block lg:hidden relative">
        <div className="w-full min-h-[700px] bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a] relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-[url('https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg')] bg-cover bg-center opacity-60"></div>
          
          {/* Tablet Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] px-8 text-center">
            {/* Title */}
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl italic leading-tight mb-6">
              Professional Immersion<br className="hidden md:inline xl:hidden" /> Internship
            </h1>

            {/* Subtitle */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-8 underline decoration-1 underline-offset-4">
              Industry Mentors | Professional Projects | Hands-on Learning
            </p>

            {/* Program Fee */}
            <div className="mb-6">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-2">
                Program Fee:
              </p>
              <p className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl">
                INR <span className="text-4xl">17,500 + 18% GST</span>
              </p>
            </div>

            {/* Next Cohorts */}
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl mb-10">
              Next Cohorts Starting: <span className="font-bold">Jan & Feb</span> (Weekends)
            </p>

            {/* Contact Form */}
            <div className="w-full max-w-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Background - Orange gradient */}
      <div className="block md:hidden absolute top-0 left-0 w-full min-h-[550px] bg-gradient-to-b from-[#ef7f1a] to-[#d66a0a] z-0">
        <div className="absolute inset-0 bg-[url('https://c.animaapp.com/mjmwrwbp4K97wU/img/rectangle-1.svg')] bg-cover bg-center opacity-60"></div>
      </div>

      {/* Mobile Content */}
      <div className="block md:hidden relative z-10 pt-16 px-4 pb-6">
        {/* Title */}
        <h1 className="text-center [font-family:'Inter',Helvetica] font-bold text-white text-[28px] italic leading-[1.2] mt-2">
          Professional Immersion<br />Internship
        </h1>

        {/* Subtitle with underline */}
        <p className="text-center [font-family:'Inter',Helvetica] font-normal text-white text-[15px] mt-5 underline decoration-1 underline-offset-2">
          Industry Mentors | Professional<br />Projects | Hands-on Learning
        </p>

        {/* Program Fee */}
        <div className="text-center mt-6">
          <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[17px] mb-1">
            Program Fee:
          </p>
          <p className="[font-family:'Inter',Helvetica] font-bold text-white text-[20px]">
            INR <span className="text-[24px]">17,500 + 18% GST</span>
          </p>
        </div>

        {/* Next Cohorts - Added for mobile */}
        <p className="text-center [font-family:'Inter',Helvetica] font-normal text-white text-[17px] mt-5">
          Next Cohorts Starting:<br />
          <span className="font-bold">Jan & Feb</span> (Weekends)
        </p>

        {/* Contact Form */}
        <div className="mt-7 pb-6">
          <ContactForm />
        </div>
      </div>

      {/* Desktop Content - Improved positioning */}
      <p className="hidden lg:block absolute top-[270px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal] underline decoration-1 underline-offset-2">
        Industry Mentors | Professional Projects | Hands-on Learning
      </p>
      
      <p className="hidden lg:block absolute top-[315px] left-[50px] [font-family:'Inter',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal]">
        <span className="font-bold">4-week</span>
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[22px] tracking-[0]">
          , mentor-led virtual internship with <br />
          Industry-Inspired projects and practical career insights
        </span>
      </p>
      
      <p className="hidden lg:block absolute top-[392px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        <span className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0]">
          Program Fee: INR{" "}
        </span>
        <span className="font-bold">17,500 + 18% GST</span>
      </p>
      
      <p className="hidden lg:block absolute top-[446px] left-[52px] [font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
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
      
      <div className="hidden lg:block absolute top-[102px] left-[890px]">
        <ContactForm />
      </div>
    </>
  );
};
