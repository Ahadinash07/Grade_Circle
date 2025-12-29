import React from 'react';

export const SampleProjects = () => {
  const projects = [
    { title: "Market Expansion:", description: "Develop a strategy for an Indian electric scooter brand to enter Southeast Asia." },
    { title: "Equity Research:", description: "Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation." },
    { title: "Healthcare Innovation:", description: "Create a market-entry plan for a next-gen prenatal screening test in India." },
    { title: "UX Redesign:", description: "Design a courtroom advocacy plan for a public interest case." },
    { title: "Litigation Strategy:", description: "Improve user experience for a wearable fitness device through interface and feature innovation." },
    { title: "AI for Social Good:", description: "Build a fake news detection and sentiment analysis system for social media." },
    { title: "Investigative Journalism:", description: "Uncover the truth behind \"healthy\" food labels through data and regulatory analysis." },
    { title: "Policy Review:", description: "Evaluate the effectiveness of a government employment scheme introduced 5 years ago." },
  ];

  return (
    <>
      {/* Mobile Layout */}
      <section className="block md:hidden px-6 py-12 bg-white">
        {/* Testimonial Quote */}
        <div className="mb-10">
          <div className="text-[#ef7f1a] text-6xl font-bold leading-none mb-4">"</div>
          <div className="bg-[#f5f5f5] p-6 rounded-lg">
            <p className="italic text-[#122e6c] text-lg leading-relaxed">
              Instead of just theory, we worked on realistic case studies, applying our learnings like in real life.
              <span className="not-italic font-bold text-[#ef7f1a]"> – Sara,</span>
              <span className="not-italic"> Prometheus School, Noida</span>
            </p>
          </div>
        </div>

        {/* Sample Projects Title */}
        <h2 className="font-bold text-[#0e416f] text-3xl mb-4">Sample Projects</h2>
        
        <p className="text-black text-base mb-6 leading-relaxed">
          Below are examples of real-world problem statements students have tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-bold text-[#ef7f1a] text-lg">{project.title}</h3>
              <p className="text-black text-base leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="absolute top-[9384px] left-[88px] w-[310px] h-[57px] bg-white" />

        <div className="absolute top-[9391px] left-24 [font-family:'Inter',Helvetica] font-extrabold text-[#0e416f] text-4xl text-center tracking-[0] leading-[normal]">
          Sample Projects
        </div>

        <p className="absolute top-[9461px] left-24 w-[1215px] [font-family:'Inter',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
          Below are examples of real-world problem statements students have
          <br />
          tackled, fostering creativity, critical thinking, and industry-relevant skills.
        </p>

        <p className="absolute top-[9559px] left-[143px] w-[1215px] [font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-5">
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[0px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
            Market Expansion:</span>
          <span className="leading-10"> Develop a strategy for an Indian electric scooter brand to enter Southeast Asia.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[40px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          /> Equity Research:</span>
          <span className="leading-10"> Analyze a listed company and recommend a buy, hold, or sell rating with supporting valuation.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[80px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          /> Healthcare Innovation: </span>
          <span className="leading-10">Create a market-entry plan for a next-gen prenatal screening test in India.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[120px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          /> Litigation Strategy: </span>
          <span className="leading-10">Design a courtroom advocacy plan for a public interest case.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[160px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          UX Redesign: </span>
          <span className="leading-10">Improve user experience for a wearable fitness device through interface and feature innovation.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[200px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          AI for Social Good: </span>
          <span className="leading-10">Build a fake news detection and sentiment analysis system for social media. <br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[240px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          Investigative Journalism:</span>
          <span className="leading-10"> Uncover the truth behind "healthy" food labels through data and regulatory analysis.<br /></span>
          <span className="font-bold leading-10">
            <img
            className={`absolute top-[280px] right-[1240px] w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
          Policy Review: </span>
          <span className="leading-10">Evaluate the effectiveness of a government employment scheme introduced 5 years ago.</span>
        </p>

        {/* {[9558, 9598, 9638, 9679, 9719, 9760, 9799, 9839].map((top, index) => (
          <img
            key={index}
            className={`absolute top-[${top}px] left-24 w-[30px] h-10`}
            alt="Check mark"
            src="https://c.animaapp.com/mjmwrwbp4K97wU/img/check-mark-13.png"
          />
        ))} */}
      </div>
    </>
  );
};
