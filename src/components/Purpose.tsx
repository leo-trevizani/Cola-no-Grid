/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export default function Purpose() {
  return (
    <section className="relative py-16 px-6 max-w-4xl mx-auto" id="purpose-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-neutral-200/40 border border-neutral-100 relative overflow-hidden"
        id="purpose-card"
      >
        {/* Decorative corner grid detail */}
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-6 flex items-center gap-2 font-mono">
          <Leaf className="w-4 h-4 text-indigo-500 animate-pulse" /> Nosso Propósito
        </h2>
        
        <p className="text-xl md:text-3xl font-medium text-neutral-800 leading-relaxed font-sans">
          Ser um espaço de troca e aprendizado que ajude a alavancar a carreira de cada membro de forma{' '}
          <span className="relative inline-block px-1">
            <span className="relative z-10 font-bold text-neutral-900">sustentável</span>
            <span className="absolute bottom-1 left-0 right-0 h-2 bg-indigo-100/80 -z-0" />
          </span>{' '}
          e{' '}
          <span className="relative inline-block px-1">
            <span className="relative z-10 font-bold text-neutral-900">colaborativa</span>
            <span className="absolute bottom-1 left-0 right-0 h-2 bg-indigo-100/80 -z-0" />
          </span>.
        </p>
      </motion.div>
    </section>
  );
}
