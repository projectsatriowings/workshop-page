"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  Globe, Briefcase, Building2, TrendingUp, Image as ImageIcon, 
  Code2, Brain, Users, Lightbulb, GraduationCap 
} from "lucide-react";

const roadmapItems = [
  { id: 1, title: "How AI is changing the world", icon: Globe, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-200" },
  { id: 2, title: "How AI transforms jobs", icon: Briefcase, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-200" },
  { id: 3, title: "Industries being disrupted", icon: Building2, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-200" },
  { id: 4, title: "How businesses adopt AI", icon: TrendingUp, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-200" },
  { id: 5, title: "Content creation changes", icon: ImageIcon, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-200" },
  { id: 6, title: "Software development shifts", icon: Code2, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-200" },
  { id: 7, title: "AI in decision-making", icon: Brain, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-200" },
  { id: 8, title: "Valuable human skills", icon: Users, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-200" },
  { id: 9, title: "Emerging opportunities", icon: Lightbulb, color: "text-lime-500", bg: "bg-lime-500/10", border: "border-lime-200" },
  { id: 10, title: "What to learn next", icon: GraduationCap, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-200" },
];

export default function ValueDeliveryRoadmap({ onOpenModal }: { onOpenModal?: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-16 pb-8 xl:pt-24 xl:pb-10 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-xs xl:text-sm font-mono font-bold uppercase tracking-widest text-[#FF5C00] mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-pulse"></span>
            // 04 VALUE DELIVERY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            What You Will Take Away
          </h2>
          <p className="text-slate-600 text-base xl:text-lg max-w-2xl mx-auto leading-relaxed">
            Actionable mental models and strategic roadmaps to immediately navigate the evolving AI landscape.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Hidden on Mobile) */}
        <div className="hidden lg:block w-full overflow-x-auto overflow-y-hidden hide-scrollbar pb-8 snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          
          <div className="relative min-w-[1200px] lg:min-w-full h-[550px] mx-auto px-12">
            
            {/* The Central Track */}
            <div className="absolute left-0 right-0 top-1/2 h-1.5 bg-slate-200 -translate-y-1/2 rounded-full z-0"></div>
            
            {/* Animated Traveling Pulse */}
            <div className="absolute left-0 top-1/2 h-1.5 w-48 bg-gradient-to-r from-transparent via-[#006FFF] to-[#FF5C00] -translate-y-1/2 rounded-full animate-[travelRight_10s_linear_infinite] z-10"></div>

            <style jsx>{`
              @keyframes travelRight {
                0% { left: -10%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <div className="flex h-full items-center justify-between relative z-20">
              {roadmapItems.map((item, index) => {
                const isTop = index % 2 === 0;
                const delay = index * 100;

                return (
                  <div 
                    key={item.id} 
                    className={`relative h-full w-[160px] flex flex-col items-center justify-center snap-center transition-all duration-700 ease-out 
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{ transitionDelay: `${isVisible ? delay : 0}ms` }}
                  >
                    
                    {/* Central Glowing Dot */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white border-[3px] border-[#006FFF] rounded-full shadow-[0_0_15px_rgba(0,111,255,0.4)] -translate-x-1/2 -translate-y-1/2 z-30"></div>

                    {isTop ? (
                      /* TOP ALIGNED CARD */
                      <div className="absolute bottom-[calc(50%+1rem)] left-1/2 -translate-x-1/2 flex flex-col items-center group">
                        <div className="w-[180px] bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-3 transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.color} ${item.border}`}>
                            <item.icon className="w-7 h-7" strokeWidth={1.5} />
                          </div>
                          <div className="text-[11px] font-mono font-bold text-slate-400 mb-2 bg-slate-50 px-2 py-0.5 rounded-full">{item.id < 10 ? `0${item.id}` : item.id}</div>
                          <h4 className="text-sm font-bold text-slate-800 leading-snug">{item.title}</h4>
                        </div>
                        {/* Connecting Line */}
                        <div className="w-px h-8 bg-gradient-to-b from-slate-200 to-transparent mt-2 opacity-50"></div>
                      </div>
                    ) : (
                      /* BOTTOM ALIGNED CARD */
                      <div className="absolute top-[calc(50%+1rem)] left-1/2 -translate-x-1/2 flex flex-col items-center group">
                        {/* Connecting Line */}
                        <div className="w-px h-8 bg-gradient-to-t from-slate-200 to-transparent mb-2 opacity-50"></div>
                        <div className="w-[180px] bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:translate-y-2 hover:border-blue-200 transition-all duration-300 flex flex-col items-center text-center">
                          <div className="text-[11px] font-mono font-bold text-slate-400 mb-2 bg-slate-50 px-2 py-0.5 rounded-full">{item.id < 10 ? `0${item.id}` : item.id}</div>
                          <h4 className="text-sm font-bold text-slate-800 leading-snug mb-3">{item.title}</h4>
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.color} ${item.border}`}>
                            <item.icon className="w-7 h-7" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
        
        {/* Mobile Vertical Timeline (Hidden on Desktop) */}
        <div className="lg:hidden w-full flex flex-col space-y-4 relative z-20 pb-8 mt-6">
          {/* Vertical Connecting Line */}
          <div className="absolute left-10 top-8 bottom-8 w-1 bg-slate-200 rounded-full z-0"></div>
          
          {roadmapItems.map((item, index) => {
            const delay = index * 100;
            return (
              <div 
                key={item.id} 
                className={`relative w-full bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-5 transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${isVisible ? delay : 0}ms` }}
              >
                {/* Node Connector */}
                <div className="absolute -left-3.5 w-3 h-3 bg-white border-2 border-[#006FFF] rounded-full shadow-[0_0_10px_rgba(0,111,255,0.4)] z-30 hidden sm:block"></div>
                
                <div className={`w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center border ${item.bg} ${item.color} ${item.border}`}>
                  <item.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">0{item.id}</div>
                  <h4 className="text-base font-bold text-slate-800 leading-tight">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
