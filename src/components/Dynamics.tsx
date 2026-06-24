/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Users, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { DynamicActivity } from '../types';

const activities: DynamicActivity[] = [
  {
    id: 'act1',
    title: 'Trocas no Grupo',
    description: 'Compartilhamento de referências valiosas, vagas e ferramentas que ajudam a manter o trabalho e a inspiração sempre "alinhados".',
    iconName: 'MessageSquare'
  },
  {
    id: 'act2',
    title: 'Reuniões mensais',
    description: 'Momento para apresentar ideias brutas, textos mal acabados ou para colocar a mão na massa ao vivo. É o espaço para "pensar alto" e receber ajuda antes de polir, com foco no processo criativo e colaborativo.',
    iconName: 'Users'
  },
  {
    id: 'act3',
    title: 'Design Critique',
    description: 'Feedback técnico focado em detalhes que elevam a barra do projeto, feito de forma leve, respeitosa e sempre construtiva.',
    iconName: 'SlidersHorizontal'
  }
];

export default function Dynamics() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden" id="dynamics-section">
      {/* Dark subtle grid for this section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* Soft gradient glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">Foco no processo</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 font-display mt-2">Grid em Movimento</h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Atividades que vão além das trocas constantes no grupo e sugerem iteração, não perfeição.
          </p>
        </div>

        <div className="space-y-6">
          {activities.map((act, idx) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/80 hover:border-indigo-500/30 hover:bg-neutral-900 transition-all duration-300 group"
              id={`activity-row-${act.id}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {getIcon(act.iconName)}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2 font-display text-neutral-100 group-hover:text-white transition-colors">
                  {act.title}
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
