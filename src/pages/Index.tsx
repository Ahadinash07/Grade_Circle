import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#1a1a1a] overflow-x-hidden">
      <Header />
      <Hero />
    </div>
  );
};

export default Index;
