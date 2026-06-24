/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Shield, HelpCircle, Heart } from 'lucide-react';
import { ConductItem } from '../types';

const conductItems: ConductItem[] = [
  {
    id: 'c1',
    title: 'Errar cedo é aprender cedo',
    content: 'O grupo serve pra compartilhar dúvidas “bobas” ou erros sem medo de julgamentos.'
  },
  {
    id: 'c2',
    title: 'Anfitrião, não professor',
    content: 'O papel de quem facilita não é ter todas as respostas, mas garantir que a pergunta de alguém nunca fique no vácuo. A maior contribuição é a curiosidade, não a autoridade.'
  },
  {
    id: 'c3',
    title: 'Ouvinte ativo',
    content: 'Tanto a dúvida de um júnior quanto o conselho de um sênior levam para o mesmo lugar: o crescimento profissional e uma discussão mais rica.'
  }
];

export default function ConductGuide() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-neutral-200/60" id="conduct-section">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <Shield className="w-3.5 h-3.5 text-amber-600" /> Transparência Absoluta
        </div>
        <h2 className="text-3xl font-extrabold text-neutral-900 font-display">
          Guia de Conduta
        </h2>
        <p className="text-neutral-500 mt-2 text-sm max-w-xl">
          Acreditamos na transparência absoluta. Este é o guia do Cola no Grid. A regra número um? Estamos aqui para nos conectar, não para ser uma enciclopédia.
        </p>
      </div>

      <div className="space-y-4" id="conduct-accordion-list">
        {conductItems.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-indigo-200 shadow-md shadow-neutral-100/50' : 'border-neutral-200/80 hover:border-neutral-300'
              }`}
              id={`conduct-card-${item.id}`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 cursor-pointer text-left font-semibold text-base md:text-lg text-neutral-800 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-indigo-500/10"
                id={`conduct-toggle-btn-${item.id}`}
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-indigo-500 bg-indigo-50/50 w-6 h-6 rounded-full flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  {item.title}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-neutral-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-2 text-neutral-600 border-t border-neutral-100 text-sm leading-relaxed md:text-base">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
