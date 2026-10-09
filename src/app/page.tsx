"use client";

import { useState, useEffect } from 'react';
import ThreeDCore from "@/components/ThreeDCore";
import { GraduationCap, Briefcase, Zap, Megaphone, Palette, Laptop, Building2, Rocket, Lightbulb } from 'lucide-react';
import ValueDeliveryRoadmap from '@/components/ValueDeliveryRoadmap';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{show: boolean, title: string, message: string, type: 'success' | 'error' | ''}>({show: false, title: '', message: '', type: ''});

  // Auto-open modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (title: string, message: string, type: 'success' | 'error') => {
    setToast({ show: true, title, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 6000);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      profession: formData.get('profession'),
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        showToast("Registration Successful!", `You are registered as Seat #${data.seatNumber}. Please check your email for the confirmation link.`, "success");
        e.currentTarget.reset();
      } else {
        showToast("Registration Failed", data.error || "Something went wrong.", "error");
      }
    } catch (err) {
      showToast("Error", "An error occurred during registration. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };
  
  const sidebarModules = [
    "THE AI REVOLUTION",
    "AI IN EVERYDAY LIFE",
    "AI & BUSINESSES",
    "AI & JOBS",
    "INDUSTRY DISRUPTION",
    "AI & CONTENT CREATION",
    "AI & SOFTWARE DEVELOPMENT",
    "AI-POWERED DECISION MAKING",
    "THE FUTURE OF CAREERS",
    "AI OPPORTUNITIES"
  ];
  const [activeModule, setActiveModule] = useState(0);

  return (
    <>
      {/* Ambient Decorative Background Gradients (Pure Light Theme) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#FF5C00]/10 via-[#FFB800]/8 to-transparent rounded-full blur-3xl opacity-75"></div>
        <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[65%] -right-48 w-[700px] h-[700px] bg-[#FF5C00]/6 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 grid-bg-pattern opacity-40"></div>
      </div>

      {/* Single Page Full Canvas Experience (NO NAV BAR, NO FOOTER) */}
      <main className="w-full relative z-10 pt-6 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto space-y-12 lg:space-y-20">
        
        <div>
          {/* Logo Placement */}
          <div className="w-full flex items-center justify-start pb-4 sm:pb-6">
            <img src="/resources/logo-final%20dG.webp" alt="Digital Ghuru Logo" className="h-10 sm:h-12 lg:h-14 w-auto object-contain" />
          </div>

          {/* ========================================================================= */}
          {/* SECTION 1: IMMERSIVE HERO WITH INTERACTIVE 3D KINETIC AI CORE             */}
          {/* ========================================================================= */}
          <section className="relative">

          
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-center">
            {/* Left: High-Impact Typography & Conversion Actions */}
            <div className="lg:col-span-7 2xl:col-span-6 space-y-7 xl:space-y-9">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200/80 text-[#FF5C00] text-xs font-mono font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
                Frontier Intelligence &amp; Economic Shift Briefing
              </div>
              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                AI &amp; The Future: How AI Is Changing <br className="hidden xl:inline" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">
                  Careers
                  <span className="absolute left-0 bottom-1 w-full h-1.5 xl:h-2.5 bg-gradient-to-r from-[#FFB800]/20 to-[#FF5C00]/20 -z-10 rounded-sm"></span>
                </span>,{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">
                  Jobs
                  <span className="absolute left-0 bottom-1 w-full h-1.5 xl:h-2.5 bg-gradient-to-r from-[#FFB800]/20 to-[#FF5C00]/20 -z-10 rounded-sm"></span>
                </span>,{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00] underline decoration-[#FFB800] decoration-2 xl:decoration-4 underline-offset-4">
                  Businesses
                </span> &amp; Everyday Life
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl xl:max-w-3xl">
                Artificial Intelligence is changing how we work, learn, create, make decisions and build businesses. This workshop explores the real-world impact of AI and helps you understand how careers, industries and opportunities are evolving in the AI era.
              </p>
              
              {/* Direct CTAs and Social Proof Strip */}
              <div className="pt-2 space-y-6 xl:space-y-8 xl:pt-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 xl:gap-6">
                  <button onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="inline-flex items-center justify-center gap-3 px-8 py-4 xl:px-10 xl:py-5 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] hover:from-[#FFC933] hover:to-[#FF7022] text-white font-display font-semibold text-base xl:text-lg shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center">
                    <span>Reserve Your Seat / Register</span>
                    <svg className="w-5 h-5 xl:w-6 xl:h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </button>
                  <a className="inline-flex items-center justify-center gap-2 px-6 py-4 xl:px-8 xl:py-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-display font-medium text-base xl:text-lg shadow-sm hover:border-slate-400 transition-all text-center" href="#syllabus-section">
                    <span>Explore 10 Modules</span>
                    <svg className="w-4 h-4 xl:w-5 xl:h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </a>
                </div>
                
                {/* Meta Quick Badges */}
                <div className="grid grid-cols-3 gap-3 xl:gap-5 pt-2 max-w-lg xl:max-w-xl">
                  <div className="p-3 xl:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                    <div className="text-[11px] xl:text-xs font-mono text-slate-600 uppercase font-semibold">Duration</div>
                    <div className="text-sm xl:text-base font-display font-bold text-slate-900 mt-0.5 xl:mt-1">60–90 Mins</div>
                  </div>
                  <div className="p-3 xl:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                    <div className="text-[11px] xl:text-xs font-mono text-slate-600 uppercase font-semibold">Format</div>
                    <div className="text-sm xl:text-base font-display font-bold text-slate-900 mt-0.5 xl:mt-1">Live + Q&amp;A</div>
                  </div>
                  <div className="p-3 xl:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                    <div className="text-[11px] xl:text-xs font-mono text-slate-600 uppercase font-semibold">Materials</div>
                    <div className="text-sm xl:text-base font-display font-bold text-slate-900 mt-0.5 xl:mt-1">Executive Kit</div>
                  </div>
                </div>
                
                
              </div>
            </div>
            
            {/* Right: Registration Form */}
            <div className="lg:col-span-5 2xl:col-span-6 relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md xl:max-w-lg bg-white border border-slate-200/90 shadow-elevated rounded-3xl overflow-hidden relative">
                {/* Decorative header accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF5C00]"></div>
                
                <div className="p-8 sm:p-10 xl:p-12 space-y-8">
                  <div className="space-y-3 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold tracking-wider uppercase">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                      Hurry Up! Only a few seats left
                    </div>
                    <h3 className="font-display text-2xl xl:text-3xl font-bold text-slate-900">
                      Reserve Your Free Seat
                    </h3>
                    <p className="text-slate-600 text-sm xl:text-base">
                      Join the exclusive masterclass and unlock your AI career playbook.
                    </p>
                  </div>

                  <form className="space-y-5" onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-1.5">Full Name</label>
                        <input id="name" name="fullName" type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">Email Address</label>
                        <input id="email" name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                      </div>
                      
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-slate-800 mb-1.5">Mobile Number</label>
                        <input id="mobile" name="mobile" type="tel" required placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                      </div>
                      
                      <div>
                        <label htmlFor="profession" className="block text-sm font-semibold text-slate-800 mb-1.5">Profession</label>
                        <select id="profession" name="profession" defaultValue="" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm">
                          <option value="" disabled>Select your profession...</option>
                          <option value="student">Student</option>
                          <option value="developer">Software Developer</option>
                          <option value="designer">Designer / Creator</option>
                          <option value="marketer">Digital Marketer</option>
                          <option value="entrepreneur">Entrepreneur / Founder</option>
                          <option value="business_owner">Business Owner</option>
                          <option value="freelancer">Freelancer</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" disabled={isLoading} className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] hover:from-[#FFC933] hover:to-[#FF7022] disabled:opacity-70 text-white font-display font-semibold text-base xl:text-lg shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2">
                      <span>{isLoading ? 'Registering...' : <><span className="line-through text-white/70 mr-1">₹799</span> Free</>}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                    
                    <p className="text-center text-xs text-slate-500 mt-4">
                      By registering, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* ========================================================================= */}
                {/* ========================================================================= */}
        {/* AI TOOLS LOGO STRIP                                                      */}
        {/* ========================================================================= */}
        <section className="w-full pb-10 xl:pb-14 pt-0 relative overflow-hidden -mt-4 xl:-mt-8">
          <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
            <p className="text-slate-500 text-sm xl:text-base font-medium mb-8 xl:mb-10 text-center uppercase tracking-wider font-mono">
              Master the Industry's Leading AI Tools & Platforms
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 xl:gap-20">
              {/* ChatGPT */}
              <div className="flex items-center gap-0">
                <img src="/resources/ChatGPT-Logo.png" className="w-14 h-14 xl:w-16 xl:h-16 object-contain -mr-2 xl:-mr-3" alt="ChatGPT" />
                <span className="font-display font-bold text-2xl xl:text-3xl text-slate-800 tracking-tight">ChatGPT</span>
              </div>
              
              {/* Claude */}
              <div className="flex items-center">
                <img src="/resources/claude_transparent.png" className="h-8 md:h-10 object-contain" alt="Claude" />
              </div>
              
              {/* Gemini */}
              <div className="flex items-center">
                <img src="/resources/gemini_transparent.png" className="h-12 md:h-14 object-contain" alt="Gemini" />
              </div>
              
              {/* Copilot */}
              <div className="flex items-center gap-3">
                <img src="https://cdn.brandfetch.io/copilot.microsoft.com/w/400/h/400" className="w-8 h-8 xl:w-10 xl:h-10 object-contain" alt="Copilot" />
                <span className="font-display font-bold text-2xl xl:text-3xl text-[#0078D4] tracking-tight">Copilot</span>
              </div>
              
              {/* Notion AI */}
              <div className="flex items-center gap-3">
                <img src="https://cdn.brandfetch.io/notion.so/w/400/h/400" className="w-8 h-8 xl:w-10 xl:h-10 object-contain" alt="Notion" />
                <span className="font-display font-bold text-2xl xl:text-3xl text-slate-900 tracking-tight">Notion</span>
              </div>
            </div>
          </div>
        </section>

{/* ========================================================================= */}
        {/* SECTION 2: WHAT IS THIS WORKSHOP ABOUT?                                  */}
        {/* ========================================================================= */}
        <section className="space-y-12 xl:space-y-16">

          <div className="relative rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 border-2 border-amber-200/70 p-8 sm:p-14 xl:p-20 shadow-elevated overflow-hidden text-center mb-8 xl:mb-12">
            {/* Subtle Accent Ring */}
            <div className="absolute -top-24 -right-24 xl:-top-32 xl:-right-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FFB800]/15 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 xl:-bottom-32 xl:-left-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FF5C00]/10 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl xl:max-w-5xl mx-auto space-y-6 xl:space-y-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 xl:px-5 xl:py-2 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs xl:text-sm font-mono font-bold tracking-wider uppercase">
                ⚡ 01 Context & Trajectory
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.3]">
                What Is This Workshop About?
              </h2>
              
              <div className="w-16 xl:w-24 h-1 xl:h-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF5C00] mx-auto rounded-full"></div>
              
              <p className="text-sm sm:text-base xl:text-lg text-slate-700 leading-relaxed max-w-2xl xl:max-w-4xl mx-auto font-medium">
                AI is no longer just a technology used by developers or large companies. It is becoming part of everyday life, education, business, content creation, software development, customer service and decision-making.
              </p>
              
              <p className="text-sm sm:text-base xl:text-lg text-slate-600 leading-relaxed max-w-2xl xl:max-w-4xl mx-auto">
                <strong className="text-slate-900">Target Mission:</strong> This workshop is designed to help students, working professionals, business owners and aspiring creators understand what is changing, what is being disrupted, what opportunities are emerging, and what skills will matter in the coming years.
              </p>
              
              <div className="pt-4 xl:pt-6">
                <button 
                  onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 xl:px-10 py-3 sm:py-3.5 xl:py-4 font-sans font-bold text-white text-sm sm:text-base xl:text-lg transition-all duration-300 ease-out bg-gradient-to-r from-[#FFB800] to-[#FF5C00] rounded-full hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] hover:-translate-y-1 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  <span className="relative flex items-center gap-2">
                    Register for <span className="line-through text-white/70 mx-1">₹799</span> Free
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          {/* 3 Strategic Transformation Pillars (Dark Bento Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6">
            
            {/* Pillar 1: Large Bento Card */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-slate-950 min-h-[350px] xl:min-h-[450px] border border-slate-800 shadow-2xl">
              <img src="/resources/AI%20Workspace%20at%20Sunrise.png" alt="Background" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 xl:p-12 flex flex-col justify-start z-10">
                <div className="inline-flex items-center gap-2 mb-4 xl:mb-6">
                  <span className="text-[10px] xl:text-xs font-mono font-bold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-md">
                    Foundation Shift
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold text-white mb-4 xl:mb-6 leading-tight max-w-2xl">
                  Everyday Democratization
                </h3>
                <p className="text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed font-medium">
                  From experimental labs into core workflows. How generative reasoning is reshaping daily search, education, and customer interfaces across all demographics.
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs xl:text-sm font-mono font-medium text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse"></span>
                  <span>Zero Fluff // Operational Truth</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Half Width */}
            <div className="relative group overflow-hidden rounded-xl bg-slate-950 min-h-[300px] xl:min-h-[400px] border border-slate-800 shadow-2xl">
              <img src="/banner_2.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 xl:p-8 flex flex-col justify-start z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] xl:text-xs font-mono font-bold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-md">
                    Disruption Matrix
                  </span>
                </div>
                <h3 className="font-display text-xl xl:text-2xl font-bold text-white mb-3 leading-tight">
                  Role & Industry <br/>Re-architecture
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-6">
                  Why routine tasks are evaporating while strategic direction, prompt architecture, and synthetic media pipelines command immense market premiums.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] xl:text-xs font-mono font-medium text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00]"></span>
                  <span>Real Case Studies & Data</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Half Width */}
            <div className="relative group overflow-hidden rounded-xl bg-slate-950 min-h-[300px] xl:min-h-[400px] border border-slate-800 shadow-2xl">
              <img src="/banner_3.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 xl:p-8 flex flex-col justify-start z-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-[10px] xl:text-xs font-mono font-bold uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-md border border-white/20 backdrop-blur-md">
                    Leverage Engine
                  </span>
                </div>
                <h3 className="font-display text-xl xl:text-2xl font-bold text-white mb-3 leading-tight">
                  Frontier <br/>Opportunities
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-6">
                  Actionable blueprints for autonomous solo digital services, AI-assisted software shipping, freelancing multipliers, and high-margin product creation.
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] xl:text-xs font-mono font-medium text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"></span>
                  <span>Career & Monetization Playbook</span>
                </div>
              </div>
            </div>

          </div>
</section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE BIG QUESTION (EDITORIAL MANIFESTO BLOCK)                   */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 border-2 border-amber-200/70 p-8 sm:p-14 xl:p-20 shadow-elevated overflow-hidden text-center">
            {/* Subtle Accent Ring */}
            <div className="absolute -top-24 -right-24 xl:-top-32 xl:-right-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FFB800]/15 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 xl:-bottom-32 xl:-left-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FF5C00]/10 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl xl:max-w-5xl mx-auto space-y-6 xl:space-y-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 xl:px-5 xl:py-2 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs xl:text-sm font-mono font-bold tracking-wider uppercase">
                ⚡ The Critical Question
              </div>
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight leading-[1.3]">
                “Will AI take your job? <br />
                Or will someone who knows how to use AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">take the opportunity</span>?”
              </blockquote>
              <div className="w-16 xl:w-24 h-1 xl:h-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF5C00] mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base xl:text-lg text-slate-700 leading-relaxed max-w-2xl xl:max-w-4xl mx-auto">
                The goal of this workshop is not to make you an AI expert in 90 minutes. <br className="hidden sm:inline" />
                The goal is to help you understand where the world is heading — <span className="text-slate-900 font-bold">and where you fit into that future.</span>
              </p>
              
              <div className="pt-4 xl:pt-6">
                <button 
                  onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 xl:px-10 py-3 sm:py-3.5 xl:py-4 font-sans font-bold text-white text-sm sm:text-base xl:text-lg transition-all duration-300 ease-out bg-gradient-to-r from-[#FFB800] to-[#FF5C00] rounded-full hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] hover:-translate-y-1 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  <span className="relative flex items-center gap-2">
                    Reserve Your Seat Now
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: WHAT WE WILL DISCUSS (SCROLLSPY LAYOUT) */}
        <section className="space-y-10 xl:space-y-16" id="syllabus-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 xl:pb-10 border-b border-slate-200">
            <div>
              <div className="text-xs xl:text-sm font-mono font-bold uppercase tracking-wider text-[#FF5C00] mb-2 xl:mb-3">// 02 Comprehensive Syllabus</div>
              <h2 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight">
                What We Will Discuss
              </h2>
            </div>
            <div className="text-sm xl:text-base font-mono text-slate-500">
              10 STRATEGIC MODULES // INTERACTIVE DRILL-DOWNS
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start relative">
            
  

            {/* Sticky Sidebar (Left) */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-10 flex flex-col gap-1 border-l border-slate-200 py-2">
              {sidebarModules.map((mod, i) => {
                const isActiveGroup = Math.floor(activeModule / 2) === Math.floor(i / 2);
                return (
                  <button 
                    key={i} 
                    onClick={() => setActiveModule(i)}
                    className={`pl-5 xl:pl-6 py-3 text-xs xl:text-sm font-display font-semibold transition-all relative group flex items-center text-left focus:outline-none ${activeModule === i ? 'text-slate-900 bg-slate-50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50/50'}`}
                  >
                    <span className={`mr-3 font-mono text-xs xl:text-sm ${activeModule === i ? 'opacity-100 text-[#FF5C00]' : 'opacity-50'}`}>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    {mod}
                    <span className={`absolute left-[-1px] top-0 h-full w-[2px] transition-opacity duration-300 ${activeModule === i ? 'bg-[#FF5C00] opacity-100' : isActiveGroup ? 'bg-slate-300 opacity-100' : 'bg-[#FF5C00] opacity-0 group-hover:opacity-50'}`}></span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Content (Right) */}
            <div className="w-full lg:w-2/3 flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-subtle">

              <div id="module-0" className={`${Math.floor(activeModule / 2) === 0 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_bots.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-[center_15%] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 1
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">The AI Revolution</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Understand what has changed with modern AI and why this AI wave is different from previous technology shifts.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand what has changed with modern AI.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Learn why this AI wave is fundamentally different from previous technology shifts.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Identify where you currently stand in this shifting landscape.</span>
                  </div>
                </div>
              </div>
              <div id="module-1" className={`${Math.floor(activeModule / 2) === 0 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_everyday.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 2
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI in Everyday Life</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Explore how AI is already influencing search, learning, communication, entertainment, shopping and personal productivity.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Explore how AI is already influencing online search and learning.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>See its impact on communication and digital entertainment.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand how shopping and personal productivity are being transformed.</span>
                  </div>
                </div>
              </div>
              <div id="module-2" className={`${Math.floor(activeModule / 2) === 1 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_business.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 3
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI & Businesses</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Understand how businesses are using AI for marketing, sales, customer support, operations, research and decision-making.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand how businesses are using AI for marketing and sales.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Learn about AI applications in customer support and operations.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Discover how AI accelerates research and decision-making.</span>
                  </div>
                </div>
              </div>
              <div id="module-3" className={`${Math.floor(activeModule / 2) === 1 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_jobs.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 4
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI & Jobs</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Discuss which types of work are most affected by AI, which jobs are evolving, and what an AI-powered professional looks like.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Discuss which specific types of work are most affected by AI.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Identify which traditional jobs are evolving into new roles.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Define what an AI-powered professional looks like today.</span>
                  </div>
                </div>
              </div>
              <div id="module-4" className={`${Math.floor(activeModule / 2) === 2 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_disruption.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 5
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">Industry Disruption</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Explore real examples such as BPO, customer support, content creation, design, translation, data entry and software development.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Explore real examples of disruption in the BPO and customer support sectors.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>See how content creation, design, and translation are changing.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand the impact on data entry and software development.</span>
                  </div>
                </div>
              </div>
              <div id="module-5" className={`${Math.floor(activeModule / 2) === 2 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_content.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 6
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI & Content Creation</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">See how AI is changing the process of creating content — from ideas and scripts to images, video, voice and editing.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>See how AI is changing the entire process of creating content.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Learn how to use AI for generating ideas and writing scripts.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Discover AI tools for creating images, video, voice, and editing.</span>
                  </div>
                </div>
              </div>
              <div id="module-6" className={`${Math.floor(activeModule / 2) === 3 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_software.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 7
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI & Software Development</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Understand how AI-assisted development is changing the role of developers and making software creation accessible to more people.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand how AI-assisted development is changing the role of developers.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Learn how AI is making software creation accessible to non-technical people.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Discover rapid prototyping workflows for new applications.</span>
                  </div>
                </div>
              </div>
              <div id="module-7" className={`${Math.floor(activeModule / 2) === 3 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_decision.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 8
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI-Powered Decision Making</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Learn how AI can support research, analysis, problem-solving and business decisions — while understanding where human judgement is still essential.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Learn how AI can support deep research and complex analysis.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Use AI for problem-solving and strategic business decisions.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand exactly where human judgement is still essential.</span>
                  </div>
                </div>
              </div>
              <div id="module-8" className={`${Math.floor(activeModule / 2) === 4 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_jobs.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 9
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">The Future of Careers</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Explore the skills that are likely to become more valuable as AI handles more repetitive work.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Explore the skills that are likely to become significantly more valuable.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Learn how to position yourself as AI handles more repetitive work.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Identify the fastest path to upskilling in your specific niche.</span>
                  </div>
                </div>
              </div>
              <div id="module-9" className={`${Math.floor(activeModule / 2) === 4 ? 'block' : 'hidden'} scroll-mt-10 group border-b border-slate-200 last:border-0`}>
                {/* Banner Header */}
                <div className="relative w-full h-44 sm:h-52 xl:h-60 overflow-hidden bg-slate-900 flex flex-col justify-center px-6 sm:px-10 xl:px-12 py-8">
                  <img src="/banner_ai_business.jpg" alt="Module Background" className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="relative z-10 flex flex-col justify-center text-white h-full">
                    <div className="text-[10px] xl:text-xs font-sans font-bold tracking-widest mb-2 text-slate-400 uppercase">
                      MODULE 10
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold mb-3 leading-tight">AI Opportunities</h3>
                    <p className="text-sm xl:text-base text-slate-200 max-w-xl leading-relaxed font-medium">Understand how individuals can use AI for freelancing, productivity, business, automation, digital products and new career opportunities.</p>
                  </div>
                </div>

                {/* Bullets */}
                <div className="p-6 sm:p-10 xl:p-12 space-y-4">
                  
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Understand how individuals can use AI for freelancing and productivity.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Discover how to build businesses and automate workflows with AI.</span>
                  </div>
                  <div className="flex gap-4 items-start text-slate-700 text-sm xl:text-base leading-relaxed">
                    <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>Explore the creation of digital products and new career opportunities.</span>
                  </div>
                </div>
              </div>
            </div>          </div>
        </section>

        {/* SECTION 5: WHO SHOULD ATTEND?                                             */}
        {/* ========================================================================= */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* Left Column: Image Placeholder */}
          <div className="relative w-full flex items-center justify-center lg:items-end">
            <img src="/resources/Confident%20South%20Asian%20Tech%20Team.png" alt="Who Should Attend" className="w-full max-w-lg lg:max-w-none h-auto object-contain drop-shadow-2xl" />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8 xl:space-y-10">
          <div className="text-left max-w-2xl xl:max-w-4xl space-y-3 xl:space-y-5">
            <div className="text-xs xl:text-sm font-mono font-bold uppercase tracking-wider text-[#FF5C00]">// 03 Audience Alignment</div>
            <h2 className="font-display text-xl sm:text-2xl xl:text-3xl font-bold text-slate-900 tracking-tight">
              Who Should Attend?
            </h2>
            <p className="text-slate-600 text-base xl:text-lg">
              This workshop is built for anyone seeking clarity, strategic positioning, and concrete advantages in the AI wave:
            </p>
          </div>
          
          {/* 9 Cohort Categories Badge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
            {/* Attendee 1 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-blue-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <GraduationCap className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Students</div>
                <div className="text-xs xl:text-sm text-slate-600">Planning careers &amp; preparing for modern AI shifts</div>
              </div>
            </div>
            {/* Attendee 2 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-blue-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <Briefcase className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Working Professionals</div>
                <div className="text-xs xl:text-sm text-slate-600">Upskilling to defend and grow career value</div>
              </div>
            </div>
            {/* Attendee 3 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-blue-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <Zap className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Freelancers</div>
                <div className="text-xs xl:text-sm text-slate-600">Multiplying output speed and service offerings</div>
              </div>
            </div>
            {/* Attendee 4 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <Megaphone className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Digital Marketers</div>
                <div className="text-xs xl:text-sm text-slate-600">Mastering generative campaigns &amp; creative workflows</div>
              </div>
            </div>
            {/* Attendee 5 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <Palette className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Designers &amp; Creators</div>
                <div className="text-xs xl:text-sm text-slate-600">Exploring image, script, voice, and video pipelines</div>
              </div>
            </div>
            {/* Attendee 6 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-orange-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <Laptop className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Developers</div>
                <div className="text-xs xl:text-sm text-slate-600">Leveraging AI copilots and fast-track shipping</div>
              </div>
            </div>
            {/* Attendee 7 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base xl:text-xl">
                <Building2 className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Business Owners</div>
                <div className="text-xs xl:text-sm text-slate-600">Automating operations and intelligent customer care</div>
              </div>
            </div>
            {/* Attendee 8 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base xl:text-xl">
                <Rocket className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Entrepreneurs</div>
                <div className="text-xs xl:text-sm text-slate-600">Building lean AI-first products from day one</div>
              </div>
            </div>
            {/* Attendee 9 */}
            <div className="p-5 xl:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#] hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-4 xl:gap-5 sm:col-span-2 justify-center">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-blue-50 text-[#FF5C00] flex items-center justify-center font-bold text-base xl:text-xl">
                <Lightbulb className="w-5 h-5 xl:w-6 xl:h-6" />
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-base xl:text-lg">Anyone Curious About The Future</div>
                <div className="text-xs xl:text-sm text-slate-600">Who wants to understand the real future of work</div>
              </div>
            </div>
          </div>
                  </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: WHAT THIS WORKSHOP IS NOT (ANTI-HYPE CALLOUT)                  */}
        {/* ========================================================================= */}
        <section>
          <div className="p-8 sm:p-10 xl:p-14 rounded-2xl bg-white border-2 border-slate-300 shadow-subtle flex flex-col gap-8 xl:gap-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 xl:gap-10">
              <div className="space-y-2 xl:space-y-4 max-w-xl xl:max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs xl:text-sm font-mono font-bold uppercase tracking-wider text-[#FF5C00]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
                  <span>Clarity Commitment</span>
                </div>
                <h3 className="font-display text-2xl xl:text-4xl font-bold text-slate-900">
                  What This Workshop Is NOT
                </h3>
                <p className="text-slate-600 text-base xl:text-lg leading-relaxed">
                  This is not a workshop about simply learning a list of AI tools. It is about understanding the impact of AI, how work is changing, and how you can prepare yourself for the next phase.
                </p>
              </div>
              <div className="p-4 xl:p-6 rounded-xl bg-slate-50 border border-slate-200 text-xs xl:text-sm font-mono text-slate-600 space-y-1.5 xl:space-y-3 flex-shrink-0">
                <div className="text-slate-900 font-bold xl:text-base">WORKSHOP FORMAT SPEC:</div>
                <div>• Duration: 60–90 Minutes</div>
                <div>• Format: Interactive Workshop + Discussion</div>
                <div>• Focus: AI, Careers, Business &amp; Future Opportunities</div>
              </div>
            </div>
            
            <div className="flex justify-center w-full border-t border-slate-100 pt-6 xl:pt-8">
              <button 
                onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 xl:px-10 py-3 sm:py-3.5 xl:py-4 font-sans font-bold text-white text-sm sm:text-base xl:text-lg transition-all duration-300 ease-out bg-gradient-to-r from-[#FFB800] to-[#FF5C00] rounded-full hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <span className="relative flex items-center gap-2">
                  Register for <span className="line-through text-white/70 mx-1">₹799</span> Free
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: WHAT YOU WILL TAKE AWAY                                       */}
        {/* ========================================================================= */}
        <ValueDeliveryRoadmap onOpenModal={() => setIsModalOpen(true)} />

        {/* ========================================================================= */}
        {/* SECTION 8: FINAL HEROIC CONVERSION CARD (NO FOOTER BELOW)                */}
        {/* ========================================================================= */}
        <section className="relative" id="register-section">
          <div className="relative rounded-3xl bg-gradient-to-b from-white via-blue-50/20 to-amber-50/30 border-2 border-[#FF5C00]/30 p-8 sm:p-14 xl:p-24 shadow-elevated text-center overflow-hidden">
            {/* Ambient accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 xl:w-[600px] xl:h-[600px] rounded-full bg-[#FF5C00]/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 xl:w-[600px] xl:h-[600px] rounded-full bg-[#FF5C00]/10 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl xl:max-w-5xl mx-auto space-y-8 xl:space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 xl:px-6 xl:py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs xl:text-sm font-mono font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>LIMITED PARTICIPANT SEATS AVAILABLE</span>
              </div>
              <div className="space-y-3 xl:space-y-5">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  The future of work is changing. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">Are you</span> <span className="text-[#FF5C00]">ready for it?</span>
                </h2>
                <p className="text-slate-600 text-base sm:text-lg xl:text-xl max-w-xl xl:max-w-2xl mx-auto">
                  Join the 60–90 minute interactive masterclass session, live interactive Q&amp;A, and unlock your career playbook.
                </p>
              </div>
              
              {/* Detailed Registration Form Card */}
              <div className="max-w-2xl xl:max-w-4xl mx-auto bg-white border border-slate-200/90 shadow-elevated rounded-3xl overflow-hidden relative text-left mt-10">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF5C00]"></div>
                
                <div className="p-6 sm:p-8 xl:p-10">
                  <form className="space-y-6" onSubmit={handleRegister}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                      <div>
                        <label htmlFor="name-footer" className="block text-sm font-semibold text-slate-800 mb-1.5">Full Name</label>
                        <input id="name-footer" name="fullName" type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                      </div>
                      
                      <div>
                        <label htmlFor="email-footer" className="block text-sm font-semibold text-slate-800 mb-1.5">Email Address</label>
                        <input id="email-footer" name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                      </div>
                      
                      <div>
                        <label htmlFor="mobile-footer" className="block text-sm font-semibold text-slate-800 mb-1.5">Mobile Number</label>
                        <input id="mobile-footer" name="mobile" type="tel" required placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                      </div>
                      
                      <div>
                        <label htmlFor="profession-footer" className="block text-sm font-semibold text-slate-800 mb-1.5">Profession</label>
                        <select id="profession-footer" name="profession" defaultValue="" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm">
                          <option value="" disabled>Select your profession...</option>
                          <option value="student">Student</option>
                          <option value="developer">Software Developer</option>
                          <option value="designer">Designer / Creator</option>
                          <option value="marketer">Digital Marketer</option>
                          <option value="entrepreneur">Entrepreneur / Founder</option>
                          <option value="business_owner">Business Owner</option>
                          <option value="freelancer">Freelancer</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" disabled={isLoading} className="w-full py-4 mt-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] hover:from-[#FFC933] hover:to-[#FF7022] disabled:opacity-70 text-white font-display font-semibold text-base xl:text-lg shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2">
                      <span>{isLoading ? 'Registering...' : <><span className="line-through text-white/70 mr-1">₹799</span> Free</>}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                    
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] xl:text-xs font-mono text-slate-500 pt-4 mt-2 border-t border-slate-100">
                      <span>🔒 Zero spam guarantee</span>
                      <span className="hidden sm:inline">•</span>
                      <span>⚡ Instant calendar invite</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-2 sm:px-6">
          <div className="hidden sm:block flex-1">
            <p className="text-sm xl:text-base font-bold text-slate-900 leading-tight">AI & The Future Workshop</p>
            <p className="text-xs text-[#FF5C00] font-bold tracking-wider uppercase mt-0.5">Limited Free Seats Available</p>
          </div>
          <div className="sm:hidden flex-1">
            <p className="text-xs font-bold text-slate-900 leading-tight">AI Masterclass</p>
            <p className="text-[10px] text-[#FF5C00] font-bold uppercase">Free Entry</p>
          </div>
          <button onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="flex-none px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] text-white font-bold text-sm sm:text-base shadow-[0_4px_14px_rgba(255,92,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,92,0,0.4)] hover:-translate-y-0.5 transition-all text-center flex items-center gap-2">
            <span>Register for <span className="line-through text-white/70 mx-1">₹799</span> Free</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Toast Notification */}
      <div 
        className={`fixed top-6 right-6 z-[100] max-w-sm w-full p-4 rounded-2xl shadow-2xl transition-all duration-500 transform flex items-start gap-3 ${
          toast.show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        } ${toast.type === 'success' ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'}`}
      >
        <div className={`mt-0.5 flex-shrink-0 ${toast.type === 'success' ? 'text-emerald-500' : 'text-red-500'}`}>
          {toast.type === 'success' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          )}
        </div>
        <div className="flex-1 pt-0.5">
          <h3 className={`text-sm font-bold ${toast.type === 'success' ? 'text-emerald-800' : 'text-red-800'}`}>{toast.title}</h3>
          <p className={`mt-1 text-sm ${toast.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{toast.message}</p>
        </div>
        <button onClick={() => setToast(prev => ({...prev, show: false}))} className={`flex-shrink-0 ml-4 rounded-lg p-1 transition-colors ${toast.type === 'success' ? 'hover:bg-emerald-100 text-emerald-500' : 'hover:bg-red-100 text-red-500'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>
      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 mb-3 rounded-full bg-orange-100 text-[#FF5C00] text-xs font-bold tracking-wider uppercase animate-pulse">Wait! Don't Miss Out</div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Transform Your Skills & Dominate with AI</h2>
              <p className="text-slate-600 text-sm mt-3">Grab your spot now for <span className="line-through text-slate-400 mx-1">₹799</span> <span className="font-bold text-[#FF5C00]">FREE</span> before seats run out!</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => { handleRegister(e); setIsModalOpen(false); }}>
              <div className="space-y-3">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-semibold text-slate-800 mb-1">Full Name</label>
                  <input id="modal-name" name="fullName" type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm shadow-sm" />
                </div>
                
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-800 mb-1">Email Address</label>
                  <input id="modal-email" name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm shadow-sm" />
                </div>
                
                <div>
                  <label htmlFor="modal-mobile" className="block text-sm font-semibold text-slate-800 mb-1">Mobile Number</label>
                  <input id="modal-mobile" name="mobile" type="tel" required placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm shadow-sm" />
                </div>
                
                <div>
                  <label htmlFor="modal-profession" className="block text-sm font-semibold text-slate-800 mb-1">Profession</label>
                  <select id="modal-profession" name="profession" defaultValue="" required className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm shadow-sm">
                    <option value="" disabled>Select your profession...</option>
                    <option value="student">Student</option>
                    <option value="developer">Software Developer</option>
                    <option value="designer">Designer / Creator</option>
                    <option value="marketer">Digital Marketer</option>
                    <option value="entrepreneur">Entrepreneur / Founder</option>
                    <option value="business_owner">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" disabled={isLoading} className="w-full py-3.5 mt-4 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] hover:from-[#FFC933] hover:to-[#FF7022] disabled:opacity-70 text-white font-display font-semibold text-base shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2">
                <span>{isLoading ? 'Registering...' : <><span className="line-through text-white/70 mr-1">₹799</span> Free</>}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
}
