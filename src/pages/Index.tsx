import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FoundedByAlumni } from '../components/FoundedByAlumni';
import { ProgramOverview } from '../components/ProgramOverview';
import { CareerStreams } from '../components/CareerStreams';
import { Testimonials } from '../components/Testimonials';
import { ProgramStructure } from '../components/ProgramStructure';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#1a1a1a] overflow-x-hidden">
      <Header />
      <Hero />
      <FoundedByAlumni />
      <ProgramOverview />
      <CareerStreams />
      <Testimonials />
      <ProgramStructure />
    </div>
  );
};

export default Index;
