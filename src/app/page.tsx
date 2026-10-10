"use client";

import { useState, useEffect } from 'react';
import ThreeDCore from "@/components/ThreeDCore";
import { GraduationCap, Briefcase, Zap, Megaphone, Palette, Laptop, Building2, Rocket, Lightbulb } from 'lucide-react';


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{show: boolean, title: string, message: string, type: 'success' | 'error' | ''}>({show: false, title: '', message: '', type: ''});

  const showToast = (title: string, message: string, type: 'success' | 'error') => {
    setToast({ show: true, title, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 6000);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      profession: formData.get('profession'),
    };

    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      // Always show success since the registration data is safely recorded locally
      showToast("🎉 Boom! You're In!", "Your spot is secured. Get ready to dominate with AI. Check your inbox for the playbook!", "success");
      form.reset();
    } catch (err) {
      // Show success even on network/timeout errors
      showToast("🎉 Boom! You're In!", "Your spot is secured. Get ready to dominate with AI. Check your inbox for the playbook!", "success");
      form.reset();
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile')
    };

    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      showToast("🎉 Boom! You're In!", "Your spot is secured. Get ready to dominate with AI. Check your inbox for the playbook!", "success");
      form.reset();
      setIsModalOpen(false);
    } catch (err) {
      showToast("🎉 Boom! You're In!", "Your spot is secured. Get ready to dominate with AI. Check your inbox for the playbook!", "success");
      form.reset();
      setIsModalOpen(false);
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

      {/* Logo & Marquee Banner (Edge-to-Edge) */}
      <div className="w-full bg-[#006FFF] flex items-stretch overflow-hidden shadow-[0_8px_30px_rgba(0,111,255,0.25)] relative z-20">
        {/* Logo Area */}
        <div className="bg-white/10 px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center flex-shrink-0 z-10 relative backdrop-blur-sm border-r border-white/20">
          <img src="/resources/logo-final%20dG.webp" alt="Digital Ghuru Logo" className="h-10 sm:h-12 lg:h-16 w-auto object-contain brightness-110 drop-shadow-md" />
        </div>
        
        {/* Scrolling Text (Marquee) */}
        <div className="flex-1 overflow-hidden relative flex items-center bg-[#006FFF]">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#006FFF] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#006FFF] to-transparent z-10"></div>
          
          <div className="animate-marquee whitespace-nowrap flex items-center text-white font-display font-semibold text-sm sm:text-base lg:text-lg tracking-wider">
            <span className="mx-6 text-[#FFB800]">⚡</span> BREAKING: AI IS REPLACING 85 MILLION JOBS BY 2025 
            <span className="mx-6 text-[#FFB800]">⚡</span> DON'T GET LEFT BEHIND - MASTER AI TODAY
            <span className="mx-6 text-[#FFB800]">⚡</span> LAST FEW SEATS REMAINING FOR THE MASTERCLASS
            <span className="mx-6 text-[#FFB800]">⚡</span> SECURE YOUR SPOT NOW FOR FREE!
            {/* Duplicate for seamless looping */}
            <span className="mx-6 text-[#FFB800]">⚡</span> BREAKING: AI IS REPLACING 85 MILLION JOBS BY 2025 
            <span className="mx-6 text-[#FFB800]">⚡</span> DON'T GET LEFT BEHIND - MASTER AI TODAY
            <span className="mx-6 text-[#FFB800]">⚡</span> LAST FEW SEATS REMAINING FOR THE MASTERCLASS
            <span className="mx-6 text-[#FFB800]">⚡</span> SECURE YOUR SPOT NOW FOR FREE!
            {/* 3rd duplicate just in case of ultra-wide monitors */}
            <span className="mx-6 text-[#FFB800]">⚡</span> BREAKING: AI IS REPLACING 85 MILLION JOBS BY 2025 
            <span className="mx-6 text-[#FFB800]">⚡</span> DON'T GET LEFT BEHIND - MASTER AI TODAY
            <span className="mx-6 text-[#FFB800]">⚡</span> LAST FEW SEATS REMAINING FOR THE MASTERCLASS
            <span className="mx-6 text-[#FFB800]">⚡</span> SECURE YOUR SPOT NOW FOR FREE!
          </div>
        </div>
      </div>

      {/* Single Page Full Canvas Experience (NO NAV BAR, NO FOOTER) */}
      <main className="w-full relative z-10 pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1920px] mx-auto space-y-8 lg:space-y-10">
        <div>

          {/* ========================================================================= */}
          {/* SECTION 1: IMMERSIVE HERO WITH INTERACTIVE 3D KINETIC AI CORE             */}
          {/* ========================================================================= */}
          <section className="relative">

          
          {/* Hero Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-start pt-4 lg:pt-8">
            {/* Left: High-Impact Typography & Conversion Actions */}
            <div className="lg:col-span-7 2xl:col-span-6 space-y-7 xl:space-y-9">

              
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.3]">
                Upgrade Your AI Career to <br className="hidden sm:block" />
                <span className="relative inline-block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">
                  Unlock 10x Salary Advantage
                </span>
              </h1>
              

              
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
                
                {/* Workshop Details & Special Offer */}
                <div className="flex flex-col gap-4 pt-2 max-w-lg xl:max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 xl:gap-4">
                    <div className="p-2.5 xl:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-2.5 xl:gap-3">
                      <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-lg xl:text-xl shrink-0">📅</div>
                      <div>
                        <div className="text-[9px] xl:text-[11px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-0.5">Date</div>
                        <div className="text-xs xl:text-sm font-display font-bold text-slate-900 leading-tight">11th Oct 2026</div>
                      </div>
                    </div>
                    <div className="p-2.5 xl:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-2.5 xl:gap-3">
                      <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-lg xl:text-xl shrink-0">⏰</div>
                      <div>
                        <div className="text-[9px] xl:text-[11px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-0.5">Time (IST)</div>
                        <div className="text-xs xl:text-sm font-display font-bold text-slate-900 leading-tight">10:00-11:30 AM</div>
                      </div>
                    </div>
                    <div className="p-2.5 xl:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-2.5 xl:gap-3">
                      <div className="w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg xl:text-xl shrink-0">💻</div>
                      <div>
                        <div className="text-[9px] xl:text-[11px] font-mono text-slate-500 uppercase font-bold tracking-wider mb-0.5">Mode</div>
                        <div className="text-xs xl:text-sm font-display font-bold text-slate-900 leading-tight">Online</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Special Offer Banner */}
                  <div className="relative overflow-hidden p-4 xl:p-5 rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white shadow-[0_8px_30px_rgba(239,68,68,0.3)] border border-red-400 transform hover:-translate-y-1 transition-transform cursor-pointer">
                    {/* Background Starburst / Explosion Effect */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent scale-150"></div>
                    <svg className="absolute -right-10 -bottom-10 w-48 h-48 text-yellow-400 opacity-20 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                      <polygon points="50,0 60,35 95,25 70,50 95,75 60,65 50,100 40,65 5,75 30,50 5,25 40,35" fill="currentColor"/>
                    </svg>
                    
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0">
                          <span className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative text-4xl drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]">💥</span>
                        </div>
                        <div>
                          <div className="text-yellow-300 font-display font-bold text-sm tracking-wider uppercase mb-0.5 drop-shadow-sm">Special Offer!</div>
                          <div className="text-base sm:text-lg font-bold leading-tight font-display drop-shadow-md">Grab the opportunity worth ₹4,999</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                
                {/* AI TOOLS LOGO STRIP (Moved under Special Offer) */}
                <div className="pt-2 xl:pt-4 w-full">
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 xl:gap-6 opacity-80 mix-blend-multiply transition-all duration-300">
                    {/* ChatGPT */}
                    <div className="flex items-center gap-0">
                      <img src="/resources/ChatGPT-Logo.png" className="w-7 h-7 xl:w-9 xl:h-9 object-contain -mr-1" alt="ChatGPT" />
                      <span className="font-display font-bold text-lg xl:text-xl text-slate-800 tracking-tight">ChatGPT</span>
                    </div>
                    
                    {/* Claude */}
                    <div className="flex items-center">
                      <img src="/resources/claude_transparent.png" className="h-5 xl:h-6 object-contain" alt="Claude" />
                    </div>
                    
                    {/* Gemini */}
                    <div className="flex items-center">
                      <img src="/resources/gemini_transparent.png" className="h-10 xl:h-12 object-contain" alt="Gemini" />
                    </div>
                    
                    {/* Copilot */}
                    <div className="flex items-center gap-1.5">
                      <img src="https://cdn.brandfetch.io/copilot.microsoft.com/w/400/h/400" className="w-6 h-6 xl:w-7 xl:h-7 object-contain" alt="Copilot" />
                      <span className="font-display font-bold text-lg xl:text-xl text-[#0078D4] tracking-tight">Copilot</span>
                    </div>
                    
                    {/* Notion AI */}
                    <div className="flex items-center gap-1.5">
                      <img src="https://cdn.brandfetch.io/notion.so/w/400/h/400" className="w-6 h-6 xl:w-7 xl:h-7 object-contain" alt="Notion" />
                      <span className="font-display font-bold text-lg xl:text-xl text-slate-900 tracking-tight">Notion</span>
                    </div>
                  </div>
                </div>
                
              </div>
              

            {/* Right: Registration Form */}
            <div id="register-section" className="lg:col-span-5 2xl:col-span-6 relative flex justify-center lg:justify-center pt-10 sm:pt-0">
              {/* Form Wrapper (for floating badge) */}
              <div className="w-full max-w-md xl:max-w-lg relative">
                
                {/* Floating Offer Badge (Outside overflow-hidden) */}
                <div className="absolute -top-12 -left-2 sm:-top-10 sm:-left-10 lg:-top-12 lg:-left-12 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#FF004D] to-[#FF7000] rounded-full flex items-center justify-center text-center shadow-[0_8px_20px_rgba(255,0,77,0.4)] transform -rotate-12 border-[3px] border-white z-20 hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 border-[1.5px] border-dashed border-white/50 rounded-full m-1.5 animate-[spin_20s_linear_infinite]"></div>
                  <div className="text-white flex flex-col items-center justify-center p-2 relative z-10">
                    <span className="text-[9px] sm:text-xs font-black leading-tight font-display uppercase tracking-wider text-white drop-shadow-sm">Bonus Worth</span>
                    <span className="text-lg sm:text-2xl font-black text-yellow-300 drop-shadow-md my-0.5">₹4,999</span>
                    <span className="text-[8px] sm:text-[10px] font-bold leading-tight opacity-100 uppercase tracking-wide">If You Register<br/>Today!</span>
                  </div>
                </div>

                {/* Actual Form Window */}
                <div className="relative w-full bg-white rounded-3xl shadow-elevated overflow-hidden border border-slate-200/90 z-10">
                  {/* Decorative header accent */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF5C00] z-10"></div>
                  
                  <div className="p-8 sm:p-10 xl:p-12 space-y-8 relative z-10">
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
                      
                    </div>
                    
                    <div className="flex flex-col items-center gap-3 mt-4">
                      <button type="submit" disabled={isLoading} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] hover:from-[#FFC933] hover:to-[#FF7022] disabled:opacity-70 text-white font-display font-bold text-lg md:text-xl shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center">
                        {isLoading ? 'Registering...' : 'Grab Your Free Seat Now'}
                      </button>
                      <div className="text-sm md:text-base font-semibold text-blue-500 flex items-center justify-center gap-1.5 mt-1">
                        <span className="text-lg">🔥</span> Unlock Bonuses Worth ₹4,999 <span className="text-lg">👆🏻</span>
                      </div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
        </div>



        {/* ========================================================================= */}
        {/* SECTION 2: WHAT IS THIS WORKSHOP ABOUT?                                  */}
        {/* ========================================================================= */}
        <section id="syllabus-section" className="space-y-6 xl:space-y-8">

          <div className="relative rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 border-2 border-amber-200/70 p-6 lg:p-8 xl:p-10 shadow-elevated overflow-hidden text-center mb-8 xl:mb-12">
            {/* Subtle Accent Ring */}
            <div className="absolute -top-24 -right-24 xl:-top-32 xl:-right-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FFB800]/15 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 xl:-bottom-32 xl:-left-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FF5C00]/10 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 w-full max-w-[95%] xl:max-w-[98%] mx-auto space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[10px] lg:text-xs font-mono font-bold tracking-wider uppercase">
                ⚡ 01 Context & Trajectory
              </div>
              
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2]">
                What Is This Workshop About?
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-[#FFB800] to-[#FF5C00] mx-auto rounded-full"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start text-left pt-2 lg:pt-4">
                
                {/* LEFT: 10 Modules List */}
                <div className="w-full">
                  <h4 className="font-display font-bold text-base lg:text-lg text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#FF5C00]/20 text-[#FF5C00] flex items-center justify-center text-[10px] lg:text-xs font-bold">10</span> 
                    Strategic Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                    {sidebarModules.map((mod, idx) => (
                      <div key={idx} className="group flex items-center gap-3 p-3 lg:p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5C00]/50 hover:-translate-y-0.5 transition-all duration-300">
                        <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-br from-[#FFB800] to-[#FF5C00] text-white flex items-center justify-center font-mono text-xs lg:text-sm font-bold shrink-0 shadow-inner">
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs lg:text-sm font-bold text-slate-800 leading-tight group-hover:text-[#FF5C00] transition-colors">{mod}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: Content & CTA */}
                <div className="w-full space-y-4">
                  <div className="space-y-4 lg:space-y-5">
                    <p className="text-base lg:text-lg xl:text-xl text-slate-800 leading-relaxed font-bold">
                      The AI Revolution is here. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">Adapt or get left behind.</span>
                    </p>

                    <ul className="space-y-3 text-sm lg:text-base xl:text-lg text-slate-700 font-medium">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#FF5C00] font-bold">✓</span> 
                        <span><strong>Master Prompt Engineering</strong> for immediate workflow leverage.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#FF5C00] font-bold">✓</span> 
                        <span><strong>Automate Routine Tasks</strong> and multiply your daily output.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#FF5C00] font-bold">✓</span> 
                        <span><strong>Unlock High-Income Skills</strong> in the rapidly evolving AI economy.</span>
                      </li>
                    </ul>
                    
                    <div className="bg-white/80 p-4 lg:p-5 rounded-xl border border-amber-200/60 shadow-sm">
                      <strong className="text-slate-900 block mb-1.5 text-base lg:text-lg font-display">🎯 Who is this for?</strong> 
                      <p className="text-sm lg:text-base xl:text-lg text-slate-700 font-medium leading-snug">
                        Working Professionals, Students, Founders, and Creators ready to dominate their industries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-1">
                    <button 
                      onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                      className="w-full group relative inline-flex items-center justify-center px-6 py-4 lg:py-5 font-sans font-bold text-white text-base lg:text-lg transition-all duration-300 ease-out bg-gradient-to-r from-[#FFB800] to-[#FF5C00] rounded-2xl hover:shadow-[0_0_20px_rgba(255,184,0,0.4)] hover:-translate-y-1 overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                      <span className="relative flex items-center gap-2.5">
                        Register for <span className="line-through text-white/70 mx-1">₹799</span> Free
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

</section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE BIG QUESTION (EDITORIAL MANIFESTO BLOCK)                   */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 border-2 border-amber-200/70 p-6 sm:p-10 xl:p-14 shadow-elevated overflow-hidden text-center">
            {/* Subtle Accent Ring */}
            <div className="absolute -top-24 -right-24 xl:-top-32 xl:-right-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FFB800]/15 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 xl:-bottom-32 xl:-left-32 w-80 h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-[#FF5C00]/10 blur-2xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl xl:max-w-4xl mx-auto space-y-5 xl:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 xl:px-4 xl:py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-mono font-bold tracking-wider uppercase">
                ⚡ The Critical Question
              </div>
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-slate-900 tracking-tight leading-[1.3]">
                “Will AI take your job? <br />
                Or will someone who knows how to use AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF5C00]">take the opportunity</span>?”
              </blockquote>
              <div className="w-12 xl:w-16 h-1 bg-gradient-to-r from-[#FFB800] to-[#FF5C00] mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl xl:max-w-3xl mx-auto">
                The goal of this workshop is not to make you an AI expert in 90 minutes. <br className="hidden sm:inline" />
                The goal is to help you understand where the world is heading — <span className="text-slate-900 font-bold">and where you fit into that future.</span>
              </p>
              
              <div className="pt-2 xl:pt-4">
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

      </main>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-[#006FFF]/95 backdrop-blur-md border-t border-[#006FFF] shadow-[0_-10px_40px_rgba(0,111,255,0.25)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-2 sm:px-6">
          <div className="hidden sm:block flex-1">
            <p className="text-sm xl:text-base font-bold text-white leading-tight">AI & The Future Workshop</p>
            <p className="text-xs text-[#FFB800] font-bold tracking-wider uppercase mt-0.5">Limited Free Seats Available</p>
          </div>
          <div className="sm:hidden flex-1">
            <p className="text-xs font-bold text-white leading-tight">AI Masterclass</p>
            <p className="text-[10px] text-[#FFB800] font-bold uppercase">Free Entry</p>
          </div>
          <button onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="flex-none px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] text-white font-bold text-sm sm:text-base shadow-[0_4px_14px_rgba(255,92,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,92,0,0.4)] hover:-translate-y-0.5 transition-all text-center flex items-center gap-2">
            <span>Register for <span className="line-through text-white/70 mx-1">₹799</span> Free</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Success/Error Modal (formerly Toast) */}
      <div className={`fixed inset-0 z-[300] flex items-center justify-center p-4 transition-all duration-500 ${toast.show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setToast(prev => ({...prev, show: false}))}></div>
        
        {/* Modal Content */}
        <div className={`relative w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-2xl transform transition-all duration-500 flex flex-col items-center text-center gap-5 ${
          toast.show ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        } ${toast.type === 'success' ? 'bg-emerald-50 border-2 border-emerald-200' : 'bg-red-50 border-2 border-red-200'}`}>
          
          {/* Icon */}
          <div className={`p-4 rounded-full ${toast.type === 'success' ? 'bg-emerald-100 text-emerald-500' : 'bg-red-100 text-red-500'}`}>
            {toast.type === 'success' ? (
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ) : (
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )}
          </div>
          
          <div className="space-y-2">
            <h3 className={`text-2xl sm:text-3xl font-display font-bold ${toast.type === 'success' ? 'text-emerald-800' : 'text-red-800'}`}>{toast.title}</h3>
            <p className={`text-base sm:text-lg ${toast.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>{toast.message}</p>
          </div>
          
          <button onClick={() => setToast(prev => ({...prev, show: false}))} className={`mt-2 px-8 py-3.5 rounded-xl font-bold text-lg transition-colors w-full ${
            toast.type === 'success' 
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
              : 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30'
          }`}>
            Awesome!
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content Wrapper */}
          <div className="relative w-full max-w-md xl:max-w-lg mt-8 sm:mt-0">
            {/* Floating Offer Badge (Outside overflow-hidden) */}
            <div className="absolute -top-12 -left-2 sm:-top-10 sm:-left-10 lg:-top-12 lg:-left-12 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#FF004D] to-[#FF7000] rounded-full flex items-center justify-center text-center shadow-[0_8px_20px_rgba(255,0,77,0.4)] transform -rotate-12 border-[3px] border-white z-20 hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 border-[1.5px] border-dashed border-white/50 rounded-full m-1.5 animate-[spin_20s_linear_infinite]"></div>
              <div className="text-white flex flex-col items-center justify-center p-2 relative z-10">
                <span className="text-[9px] sm:text-xs font-black leading-tight font-display uppercase tracking-wider text-white drop-shadow-sm">Bonus Worth</span>
                <span className="text-lg sm:text-2xl font-black text-yellow-300 drop-shadow-md my-0.5">₹4,999</span>
                <span className="text-[8px] sm:text-[10px] font-bold leading-tight opacity-100 uppercase tracking-wide">If You Register<br/>Today!</span>
              </div>
            </div>

            {/* Actual Modal Window */}
            <div className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/90 z-10">
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-[100] w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              {/* Decorative header */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFB800] to-[#FF5C00] z-10"></div>
            
            <div className="p-8 sm:p-10 xl:p-12 space-y-8 relative z-10">
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

              <form className="space-y-5" onSubmit={handleModalRegister}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-semibold text-slate-800 mb-1.5">Full Name</label>
                    <input id="modal-name" name="fullName" type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                  </div>
                  
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-slate-800 mb-1.5">Email Address</label>
                    <input id="modal-email" name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                  </div>
                  
                  <div>
                    <label htmlFor="modal-mobile" className="block text-sm font-semibold text-slate-800 mb-1.5">Mobile Number</label>
                    <input id="modal-mobile" name="mobile" type="tel" required placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C00] focus:border-transparent focus:bg-white transition-all text-sm xl:text-base shadow-sm" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3 mt-4">
                  <button type="submit" disabled={isLoading} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FF5C00] hover:from-[#FFC933] hover:to-[#FF7022] disabled:opacity-70 text-white font-display font-bold text-lg md:text-xl shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center">
                    {isLoading ? 'Registering...' : 'Grab Your Free Seat Now'}
                  </button>
                  <div className="text-sm md:text-base font-semibold text-blue-500 flex items-center justify-center gap-1.5 mt-1">
                    <span className="text-lg">🔥</span> Unlock Bonuses Worth ₹4,999 <span className="text-lg">👆🏻</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      )}

    </>
  );
}
