/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Grid, User, Heart, Compass, CheckCircle } from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';

import Header from './components/Header';
import Purpose from './components/Purpose';
import Principles from './components/Principles';
import Dynamics from './components/Dynamics';
import ConductGuide from './components/ConductGuide';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [memberInfo, setMemberInfo] = useState<{ name: string; role: string; memberNumber: number } | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Load existing member info from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('cola_no_grid_member');
    if (saved) {
      try {
        setMemberInfo(JSON.parse(saved));
      } catch (e) {
        console.error('Erro ao ler dados de membro', e);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinSuccess = (name: string, role: string) => {
    // Reload info
    const saved = localStorage.getItem('cola_no_grid_member');
    if (saved) {
      setMemberInfo(JSON.parse(saved));
    }
  };

  const handleResetMember = () => {
    localStorage.removeItem('cola_no_grid_member');
    setMemberInfo(null);
  };

  return (
    <div className="bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-200 min-h-screen relative" id="app-root">
      
      {/* Absolute fixed grid pattern background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Persistent floating Header/Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-neutral-200/50 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
        id="main-navigation"
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group" id="logo-link">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg font-display transition-transform group-hover:rotate-12 shadow-md shadow-indigo-100">
              G
            </span>
            <span className="font-bold text-neutral-900 font-display tracking-tight text-base sm:text-lg">
              Cola no <span className="text-indigo-600">Grid</span>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-neutral-500" id="desktop-links">
            <a href="#purpose-section" className="hover:text-neutral-950 transition-colors">Propósito</a>
            <a href="#principles-section" className="hover:text-neutral-950 transition-colors">Princípios</a>
            <a href="#dynamics-section" className="hover:text-neutral-950 transition-colors">Atividades</a>
            <a href="#conduct-section" className="hover:text-neutral-950 transition-colors">Conduta</a>
          </div>

          <div className="flex items-center gap-3">
            {memberInfo ? (
              <div className="flex items-center gap-2" id="member-profile-badge">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-[10px] font-bold text-indigo-600 tracking-wider uppercase">Conectado</span>
                  <span className="text-xs font-semibold text-neutral-700 truncate max-w-[120px]">{memberInfo.name}</span>
                </div>
                <button
                  onClick={handleResetMember}
                  title="Sair do perfil"
                  className="bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-bold py-1.5 px-3 rounded-full text-xs transition-colors border border-neutral-200"
                >
                  Sair
                </button>
              </div>
            ) : (
              <a
                href="https://chat.whatsapp.com/J3qkWGKasfi6IXYbVaQ6lc?utm_source=LP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-indigo-600 text-white font-bold py-1.5 px-4 rounded-full text-xs transition-all duration-200 shadow-md shadow-[#25D366]/20 hover:shadow-indigo-500/30 inline-block text-center"
                id="navbar-join-btn"
              >
                Colar no Grid
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* App Sections */}
      <div className="relative z-10">
        <Header onOpenJoin={() => setIsJoinOpen(true)} />
        
        <Purpose />
        
        <Principles />
        
        <Dynamics />

        <ConductGuide />
        
        <Footer onOpenJoin={() => setIsJoinOpen(true)} />
      </div>

      {/* Signup Overlay Modal */}
      <JoinModal 
        isOpen={isJoinOpen} 
        onClose={() => setIsJoinOpen(false)} 
        onSuccess={handleJoinSuccess}
      />
    </div>
  );
}
