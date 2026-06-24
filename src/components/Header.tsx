/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface HeaderProps {
  onOpenJoin: () => void;
}

export default function Header({ onOpenJoin }: HeaderProps) {
  return (
    <header className="relative pt-32 pb-20 px-6 max-w-4xl mx-auto flex flex-col items-center text-center" id="manifesto-header">
      {/* Decorative community tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-6 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-wide uppercase shadow-sm"
        id="community-tag"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
        COMUNIDADE DE DESIGN
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-neutral-950 font-display leading-[1.1]"
        id="main-title"
      >
        Cola no{' '}
        <span className="text-indigo-600 relative inline-block">
          Grid
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-2 left-0 h-1 bg-indigo-600 rounded-full"
          />
        </span>
      </motion.h1>

      {/* Subtitle description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-2xl text-neutral-600 max-w-2xl leading-relaxed mb-10"
        id="main-subtitle"
      >
        Um local onde o design é o encontro perfeito de arte, entretenimento e tecnologia.
      </motion.p>

      {/* Primary Hero Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        id="hero-actions"
      >
        <a
          href="https://chat.whatsapp.com/J3qkWGKasfi6IXYbVaQ6lc?utm_source=LP"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-indigo-600 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-200 shadow-lg shadow-[#25D366]/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center gap-2"
          id="hero-join-btn"
        >
          Quero Colar no Grid
          <WhatsAppIcon className="w-5 h-5" />
        </a>
        <a
          href="#purpose-section"
          className="text-neutral-500 hover:text-neutral-800 font-semibold text-sm py-3 px-6 rounded-full hover:bg-neutral-100 transition-all flex items-center gap-1.5"
          id="hero-read-btn"
        >
          Ler Manifesto <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Animated scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col items-center gap-2"
        id="scroll-indicator"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Role para ler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-neutral-400"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </header>
  );
}
