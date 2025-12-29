import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FoundedByAlumni } from '../components/FoundedByAlumni';
import { ProgramOverview } from '../components/ProgramOverview';
import { CareerStreams } from '../components/CareerStreams';
import { Testimonials } from '../components/Testimonials';
import { ProgramStructure } from '../components/ProgramStructure';
import { ProgramDeliverables } from '../components/ProgramDeliverables';
import { FoundingTeam } from '../components/FoundingTeam';
import { RealStories } from '../components/RealStories';
import { TrustedSchools } from '../components/TrustedSchools';
import { StudentExperiences } from '../components/StudentExperiences';
import { SampleProjects } from '../components/SampleProjects';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#1a1a1a] overflow-x-hidden">
      <Header />
      <Hero />
      <FoundedByAlumni />
      <ProgramOverview />
      <CareerStreams />
      <StudentExperiences />
      <Testimonials />
      <ProgramStructure />
      <ProgramDeliverables />
      <FoundingTeam />
      <RealStories />
      <TrustedSchools />
      <SampleProjects />
      <Footer />
    </div>
  );
};

export default Index;
