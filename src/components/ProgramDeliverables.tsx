import React from 'react';

export const ProgramDeliverables = () => {
  const deliverables = [
    { text: "8 -10 hours of virtual live sessions" },
    { text: "8 -10 hours of teamwork and assignments" },
    { text: "Simulated project-based internship" },
    { text: "Project evaluation & comprehensive Skills Report" },
    { text: "Internship Certificate signed by the mentor" },
    { text: "Merit-based Letter of Recommendation" },
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden w-full px-4 py-8 bg-[#f7f7f7]">
        {/* Title */}
        <div className="mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-4xl leading-tight">
            Program
          </h2>
          <div className="[-webkit-text-stroke:2px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-5xl leading-tight">
            Deliverables
          </div>
        </div>

        {/* Deliverables List */}
        <div className="space-y-4 mb-8">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#ef7f1a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="[font-family:'Inter',Helvetica] font-bold text-[#122e6c] text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="flex justify-center">
          <button className="bg-[#ef7f1a] text-white font-bold text-xl py-4 px-12 rounded-full">
            Apply Now
          </button>
        </div>
      </div>

      {/* Desktop Version - Original */}
      <div className="hidden md:block">
        <div className="top-[5304px] left-[39px] absolute [font-family:'Inter',Helvetica] font-bold text-[#0e416f] text-[74px] text-center tracking-[0] leading-[normal]">
          Program
        </div>

        <div className="absolute top-[5391px] left-[42px] [-webkit-text-stroke:3px_#ef7f1a] [font-family:'Inter',Helvetica] font-bold text-transparent text-9xl text-center tracking-[0] leading-[normal]">
          Deliverables
        </div>

        <div className="absolute top-[5601px] left-[35px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5601px] left-[375px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5822px] left-[375px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5601px] left-[715px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5822px] left-[715px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />
        <div className="absolute top-[5601px] left-[1055px] w-80 h-[179px] bg-[#133b93] rounded-[19px]" />

        <p className="absolute top-[5860px] left-[488px] w-[204px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Internship Certificate<br />signed by the mentor
        </p>

        <div className="absolute top-[5872px] left-[833px] w-[181px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Merit-based Letter of<br />Recommendation
        </div>

        <p className="absolute top-[5658px] left-[151px] w-[193px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          8 -10 hours of<br />virtual live sessions
        </p>

        <p className="absolute top-[5658px] left-[491px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          8 -10 hours of<br />teamwork and<br />assignments
        </p>

        <div className="absolute top-[5658px] left-[831px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Simulated<br />project-based<br />internship
        </div>

        <div className="absolute top-[5658px] left-[1170px] [font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
          Project evaluation<br />&amp; comprehensive<br />Skills Report
        </div>

        <img className="top-[5587px] left-0 w-[184px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-1.png" />
        <img className="top-[5587px] left-[329px] w-[195px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-2.png" />
        <img className="top-[5587px] left-[670px] w-[194px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-3.png" />
        <img className="top-[5587px] left-[1008px] w-[195px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-4.png" />
        <img className="top-[5813px] left-[329px] w-[195px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-5.png" />
        <img className="top-[5813px] left-[670px] w-[194px] absolute h-[195px] object-cover" alt="Pg icon" src="https://c.animaapp.com/mjmwrwbp4K97wU/img/pg-3-icon-6.png" />

        <div className="absolute top-[6055px] left-[535px] w-[345px] h-[86px] bg-[#ef7f1a] rounded-[50px]" />
        <div className="top-[6084px] left-[645px] absolute [font-family:'Inter',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[normal]">
          Apply Now
        </div>
      </div>
    </>
  );
};
