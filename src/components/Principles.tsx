/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Layers, Filter, ShieldCheck } from 'lucide-react';
import { Principle } from '../types';

const principles: Principle[] = [
  {
    id: 'p1',
    title: 'Compromisso Low-Stakes',
    description: 'A comunidade é aliada da sua rotina, não mais uma tarefa no seu backlog. Sem "lição de casa", sem pressão, sem presença obrigatória.',
    iconName: 'HeartHandshake',
    bgColor: 'bg-blue-50/80 hover:bg-blue-50 text-blue-600',
    iconColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'p2',
    title: 'Design sem Fronteiras',
    description: 'Polinização cruzada entre especialidades (UX, UI, Gráfico, Research, Produto). Acreditamos no poder dessa mistura.',
    iconName: 'Layers',
    bgColor: 'bg-amber-50/80 hover:bg-amber-50 text-amber-600',
    iconColor: 'bg-amber-100 text-amber-700'
  },
  {
    id: 'p3',
    title: 'Curadoria Coletiva',
    description: 'Combatemos o ruído. Se algo parece "trend" vazia ou spam, a gente debate e filtra junto, buscando o que realmente importa.',
    iconName: 'Filter',
    bgColor: 'bg-emerald-50/80 hover:bg-emerald-50 text-emerald-600',
    iconColor: 'bg-emerald-100 text-emerald-700'
  },
  {
    id: 'p4',
    title: 'Vulnerabilidade > Ego',
    description: 'O espaço é seguro para dizer "não sei" ou "errei". O foco é elevar o trabalho, nunca diminuir a pessoa. E o erro faz parte da aprendizagem.',
    iconName: 'ShieldCheck',
    bgColor: 'bg-rose-50/80 hover:bg-rose-50 text-rose-600',
    iconColor: 'bg-rose-100 text-rose-700'
  }
];

export default function Principles() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Filter':
        return <Filter className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="principles-section">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
          Princípios Fundamentais
        </h2>
        <p className="text-neutral-500 text-sm mt-3 max-w-md mx-auto">
          Valores fundamentais que direcionam cada interação, postagem e evento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="principles-grid">
        {principles.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-neutral-100/60 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 border border-transparent hover:border-neutral-200/60 group"
            id={`principle-card-${p.id}`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${p.iconColor}`}>
              {getIcon(p.iconName)}
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-neutral-900 font-display">
              {p.title}
            </h3>
            
            <p className="text-neutral-600 leading-relaxed text-sm">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
