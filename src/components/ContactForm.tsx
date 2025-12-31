import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { toast } = useToast();
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

    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col w-full md:w-full md:max-w-[540px] lg:w-[500px] h-auto md:min-h-[580px] items-start gap-5 md:gap-[38px] px-5 md:px-[35px] py-7 md:py-[38px] bg-[#000000f5] rounded-[28px] md:rounded-[45px] border border-solid border-black shadow-lg md:mx-auto">
      <div className="flex flex-col w-full items-start gap-2 relative">
        <div className="relative w-full [font-family:'Inter',Helvetica] font-bold text-white text-[26px] md:text-[30px] tracking-[0] leading-tight">
          Connect With An Expert
        </div>
        <p className="relative w-full opacity-80 [font-family:'Inter',Helvetica] font-normal text-white text-[14px] md:text-[15px] tracking-[-0.16px] leading-normal">
          Let's discuss your plans and find the projects most suitable to your goals
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-start gap-3 md:gap-3.5 relative flex-1">
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-3.5 relative self-stretch w-full">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="flex flex-col items-start justify-center gap-2.5 px-3.5 py-3 relative w-full md:flex-1 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="flex flex-col items-start justify-center gap-2.5 px-3.5 py-3 relative w-full md:flex-1 bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
            required
          />
        </div>
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
          required
        />
        
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
          required
        />
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="flex flex-col h-[100px] md:h-[111px] items-start gap-2.5 px-3.5 py-3 relative self-stretch w-full bg-[#ffffff0d] rounded-[5px] border border-solid border-[#ffffff33] [font-family:'Inter',Helvetica] font-normal text-white text-[15px] tracking-[-0.15px] leading-normal resize-none placeholder:text-[#ffffff99] focus:outline-none focus:border-[#ef7f1a] transition-colors"
          required
        />
        
        <button
          type="submit"
          className="flex items-center justify-center gap-2.5 px-2.5 py-3.5 relative self-stretch w-full rounded-[5px] bg-[#ef7f1a] hover:bg-[#d66f15] active:bg-[#c06312] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <span className="relative [font-family:'Inter',Helvetica] font-semibold text-white text-[15px] tracking-[-0.15px] leading-normal whitespace-nowrap">
            Submit
          </span>
        </button>
      </form>
    </div>
  );
};