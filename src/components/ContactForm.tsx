import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col w-full md:w-[500px] h-auto md:h-[560px] items-start gap-6 md:gap-[41px] px-5 md:px-[37px] py-8 md:py-[41px] bg-[#000000f5] rounded-[30px] md:rounded-[50px] border border-solid border-black">
      <div className="flex flex-col w-full md:w-[426px] items-start gap-2 relative">
        <div className="relative w-full [font-family:'Inter',Helvetica] font-bold text-white text-2xl md:text-[32px] tracking-[0] leading-tight">
          Connect With An Expert
        </div>
        <p className="relative w-full opacity-80 [font-family:'Inter',Helvetica] font-normal text-white text-sm md:text-base tracking-[-0.16px] leading-normal">
          Let's discuss your plans and find the projects most suitable to your goals
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-[426px] items-start gap-3 md:gap-3.5 relative flex-1 pb-5 md:pb-10">
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-3.5 relative self-stretch w-full">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="flex flex-col items-start justify-center gap-2.5 px-3.5 py-3 relative w-full md:flex-1 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99]"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="flex flex-col items-start justify-center gap-2.5 px-3.5 py-3 relative w-full md:flex-1 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99]"
            required
          />
        </div>
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99]"
          required
        />
        
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99]"
          required
        />
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="flex flex-col h-[100px] md:h-[111px] items-start gap-2.5 px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] leading-normal resize-none placeholder:text-[#ffffff99]"
          required
        />
        
        <button
          type="submit"
          className="flex items-center justify-center gap-2.5 px-2.5 py-3 relative self-stretch w-full rounded-[5px] bg-gradient-to-r from-[#ef7f1a] to-[#ef7f1a] hover:opacity-90 transition-opacity"
        >
          <span className="relative [font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[-0.15px] leading-normal whitespace-nowrap">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};