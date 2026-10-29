import React from 'react';
import StudioHeader from '../components/studio/StudioHeader';
import StudioHero from '../components/studio/StudioHero';
import StudioGridMotion from '../components/studio/StudioGridMotion';
import StudioBenefits from '../components/studio/StudioBenefits';
import StudioWorkflow from '../components/studio/StudioWorkflow';
import StudioCTA from '../components/studio/StudioCTA';
import StudioFooter from '../components/studio/StudioFooter';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* 1. Floating Pill-Shaped Glass Navbar */}
      <StudioHeader />

      {/* 2. Hero with Integrated Brand Identity (CrystalizedBall + ARCHETYPE TechText) */}
      <StudioHero />

      {/* 3. Living Gallery of Templates in Motion (GridMotion 3D Canvas) */}
      <StudioGridMotion />

      {/* 4. Concise Explanation of Value and Benefits */}
      <StudioBenefits />

      {/* 5. Simple Explanation of How Customers Choose and Use Templates */}
      <StudioWorkflow />

      {/* 6. Strong CTA Linking to /templates */}
      <StudioCTA />

      {/* 7. Polished Footer */}
      <StudioFooter />
    </div>
  );
};

export default LandingPage;
