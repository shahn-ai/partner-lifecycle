import React, { useState } from 'react';
import {
 Users,
 Target,
 Settings,
 CheckCircle,
 DollarSign,
 Zap,
 ShieldCheck,
 TrendingUp,
 Award,
 ChevronRight,
 Info
} from 'lucide-react';


const App = () => {
 const [activePartner, setActivePartner] = useState('Solution');


 const partnerTypes = [
   { id: 'Solution', icon: <Users size={18} />, desc: 'Frontline sales & resale' },
   { id: 'GSI', icon: <TrendingUp size={18} />, desc: 'Implementation & Consulting' },
   { id: 'Technology', icon: <Settings size={18} />, desc: 'API & Platform integration' },
   { id: 'PE', icon: <Target size={18} />, desc: 'Portfolio-wide adoption' },
 ];


 const stages = [
   {
     id: 1,
     title: 'Onboarding',
     pillar: 'Foundations',
     roles: ['Partner Manager', 'Sales Enablement'],
     revenue: 'Investment Phase',
     revType: 'none',
     outcome: 'Portal Activation & First 30 Complete',
     color: 'bg-slate-100 border-slate-300 text-slate-600',
     dotColor: 'bg-slate-400'
   },
   {
     id: 2,
     title: 'Sales Ready',
     pillar: 'Sales Enablement',
     roles: ['Partner Manager', 'Solution Engineer'],
     revenue: 'Sourced Revenue',
     revType: 'high',
     outcome: 'Solo "Fin-First" Pitch Delivery',
     color: 'bg-blue-50 border-blue-200 text-blue-700',
     dotColor: 'bg-blue-500'
   },
   {
     id: 3,
     title: 'Tech Deep-Dive',
     pillar: 'Technical Enablement',
     roles: ['Partner Engineer', 'Solution Engineer'],
     revenue: 'Influenced Revenue',
     revType: 'med',
     outcome: 'Complex POC Validation',
     color: 'bg-purple-50 border-purple-200 text-purple-700',
     dotColor: 'bg-purple-500'
   },
   {
     id: 4,
     title: 'Implementation',
     pillar: 'Services Enablement',
     roles: ['Services Enablement', 'Pro Services'],
     revenue: 'Services Attach',
     revType: 'low',
     outcome: 'Retention & Expansion Drive',
     color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
     dotColor: 'bg-emerald-500'
   }
 ];


 const getPartnerFocus = (type, stageId) => {
   // Logic to show how certain partner types skip stages
   if (type === 'Technology' && (stageId === 2 || stageId === 4)) return 'opacity-30 grayscale';
   if (type === 'PE' && stageId > 1) return 'opacity-30 grayscale';
   if (type === 'GSI' && stageId === 2) return 'opacity-60';
   return 'opacity-100';
 };


 return (
   <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
     {/* Header */}
     <div className="max-w-6xl mx-auto mb-10">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
           <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
             <Zap className="text-blue-600" fill="currentColor" />
             Partner Revenue Lifecycle
           </h1>
           <p className="text-slate-500 mt-1">Strategic Enablement Alignment for Intercom Ecosystem</p>
         </div>
         <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
           {partnerTypes.map((type) => (
             <button
               key={type.id}
               onClick={() => setActivePartner(type.id)}
               className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                 activePartner === type.id
                   ? 'bg-blue-600 text-white shadow-md'
                   : 'text-slate-600 hover:bg-slate-100'
               }`}
             >
               {type.icon}
               {type.id}
             </button>
           ))}
         </div>
       </div>
     </div>


     {/* Main Lifecycle Path */}
     <div className="max-w-6xl mx-auto relative mb-12">
       {/* Connection Line */}
       <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
      
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
         {stages.map((stage, idx) => (
           <div
             key={stage.id}
             className={`transition-all duration-500 ${getPartnerFocus(activePartner, stage.id)}`}
           >
             <div className={`relative h-full border-2 rounded-2xl p-6 shadow-sm bg-white ${stage.color.split(' ')[1]}`}>
               {/* Connector Dot */}
               <div className={`absolute top-1/2 -left-3 w-6 h-6 rounded-full border-4 border-white shadow-sm -translate-y-1/2 hidden md:block ${stage.dotColor}`} />
              
               <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-bold uppercase tracking-wider opacity-70">Stage 0{stage.id}</span>
                 {stage.revType !== 'none' && (
                   <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold">
                     <DollarSign size={10} />
                     REVENUE
                   </div>
                 )}
               </div>


               <h3 className="text-xl font-bold mb-1 text-slate-800">{stage.title}</h3>
               <p className={`text-sm font-medium mb-4 ${stage.color.split(' ')[2]}`}>{stage.pillar}</p>


               <div className="space-y-4">
                 <div>
                   <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Active Roles</p>
                   <div className="flex flex-wrap gap-1">
                     {stage.roles.map(role => (
                       <span key={role} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                         {role}
                       </span>
                     ))}
                   </div>
                 </div>


                 <div className="pt-3 border-t border-slate-100">
                   <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Target Outcome</p>
                   <p className="text-sm text-slate-600 italic">"{stage.outcome}"</p>
                 </div>
               </div>
             </div>


             {/* Step Gap / Success Loop */}
             {idx === 1 && (
               <div className="md:absolute md:top-1/2 md:-right-8 md:-translate-y-1/2 my-4 md:my-0 flex flex-col items-center z-20">
                 <div className="bg-amber-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                   <Award size={20} />
                 </div>
                 <div className="bg-white px-2 py-1 rounded border border-amber-200 shadow-sm mt-1 whitespace-nowrap">
                   <span className="text-[10px] font-bold text-amber-600 uppercase">Certification Loop</span>
                 </div>
               </div>
             )}
           </div>
         ))}
       </div>
     </div>


     {/* Strategic Insights */}
     <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
       {/* Role Matrix */}
       <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
         <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
           <ShieldCheck className="text-blue-600" />
           Ideal State Role Alignment
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
             <h4 className="font-bold text-slate-800 text-sm mb-1">Partner Manager</h4>
             <p className="text-xs text-slate-500 italic mb-2">The Business Architect</p>
             <p className="text-xs text-slate-600">Focuses on business cases, QBRs, and identifies bespoke enablement needs for high-touch accounts.</p>
           </div>
           <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
             <h4 className="font-bold text-slate-800 text-sm mb-1">Partner Engineer</h4>
             <p className="text-xs text-slate-500 italic mb-2">The Ecosystem Stickiness Agent</p>
             <p className="text-xs text-slate-600">Owns DAF (Development Acceleration Fund) and ensures third-party app connectors are top-tier.</p>
           </div>
           <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
             <h4 className="font-bold text-slate-800 text-sm mb-1">Solution Engineer</h4>
             <p className="text-xs text-slate-500 italic mb-2">The Closer</p>
             <p className="text-xs text-slate-600">Validates POCs for high-value co-sell opportunities. Only engaged after Partner certification.</p>
           </div>
           <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
             <h4 className="font-bold text-slate-800 text-sm mb-1">Services Enablement</h4>
             <p className="text-xs text-slate-500 italic mb-2">The Quality Guard</p>
             <p className="text-xs text-slate-600">Ensures implementations meet global standards to protect NRR and drive expansion revenue.</p>
           </div>
         </div>
       </div>


       {/* Revenue Impact Box */}
       <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between">
         <div>
           <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
             <TrendingUp className="text-blue-400" />
             Revenue Impact
           </h2>
           <div className="space-y-4">
             <div className="flex items-start gap-3">
               <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
               <div>
                 <p className="text-sm font-bold text-emerald-400">Sourced Revenue (High ROI)</p>
                 <p className="text-xs text-slate-400">Driven by Sales Enablement. Lowest cost-of-sale for Intercom.</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <div className="mt-1 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
               <div>
                 <p className="text-sm font-bold text-blue-400">Influenced Revenue (High Vol)</p>
                 <p className="text-xs text-slate-400">Driven by Tech Deep-Dives and co-selling with internal AEs.</p>
               </div>
             </div>
             <div className="flex items-start gap-3">
               <div className="mt-1 h-2 w-2 rounded-full bg-purple-400 shrink-0" />
               <div>
                 <p className="text-sm font-bold text-purple-400">Services Attach (Retention)</p>
                 <p className="text-xs text-slate-400">Ensures product stickiness and high-quality Fin deployments.</p>
               </div>
             </div>
           </div>
         </div>
        
         <div className="mt-8 p-4 bg-slate-800 rounded-xl border border-slate-700">
           <div className="flex items-center gap-2 text-amber-400 mb-2">
             <Info size={16} />
             <span className="text-xs font-bold uppercase">Strategic Priority</span>
           </div>
           <p className="text-xs text-slate-300 leading-relaxed">
             Focus PSF (Partner Success Fund) on <strong>Stage 2</strong> for Solution Partners to win against Sierra/Decagon in the frontline pitch.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};


export default App;

