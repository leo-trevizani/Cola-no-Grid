/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, RefreshCw, Copy, Check, Grid, Move, ShieldAlert } from 'lucide-react';
import { MemberCard } from '../types';

export default function CardGenerator() {
  const [card, setCard] = useState<MemberCard>({
    name: 'Seu Nome Aqui',
    role: 'Product Designer',
    gridStyle: 'clean',
    gridOffset: 16,
    joinedDate: new Date().toLocaleDateString('pt-BR')
  });

  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopyText = () => {
    const textToCopy = `--- COLA NO GRID MEMBER CARD ---
Nome: ${card.name}
Cargo: ${card.role}
Estilo: ${card.gridStyle.toUpperCase()}
Data de Entrada: ${card.joinedDate}
--------------------------------`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRandomize = () => {
    const randomNames = ['Ana Clara', 'Matheus Costa', 'Juliana Lima', 'Felipe Santos', 'Marina Rocha', 'Thiago Alves'];
    const randomRoles = ['UX Researcher', 'Brand Designer', 'UI Developer', 'Motion Designer', 'Design System Lead', 'Product Designer'];
    const styles: Array<'clean' | 'technical' | 'brutalist'> = ['clean', 'technical', 'brutalist'];
    
    setCard({
      name: randomNames[Math.floor(Math.random() * randomNames.length)],
      role: randomRoles[Math.floor(Math.random() * randomRoles.length)],
      gridStyle: styles[Math.floor(Math.random() * styles.length)],
      gridOffset: Math.floor(Math.random() * 32) + 8,
      joinedDate: new Date().toLocaleDateString('pt-BR')
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-neutral-200/60 shadow-xl shadow-neutral-100/50" id="card-generator-root">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Controls Section */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Simulador de Grid
            </div>
            <h3 className="text-2xl font-bold font-display text-neutral-900 mb-3">
              Crie seu Crachá do Grid
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Personalize o layout, o espaçamento do grid e a tipografia para criar o seu selo digital de designer.
            </p>

            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Seu Nome
                </label>
                <input
                  type="text"
                  maxLength={26}
                  value={card.name}
                  onChange={(e) => setCard({ ...card, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-sm"
                  placeholder="Seu Nome Aqui"
                  id="card-name-input"
                />
              </div>

              {/* Role Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  Cargo / Especialidade
                </label>
                <input
                  type="text"
                  maxLength={30}
                  value={card.role}
                  onChange={(e) => setCard({ ...card, role: e.target.value })}
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-sm"
                  placeholder="Ex: Product Designer"
                  id="card-role-input"
                />
              </div>

              {/* Grid Styles */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Estilo Visual
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['clean', 'technical', 'brutalist'] as const).map((style) => (
                    <button
                      key={style}
                      onClick={() => setCard({ ...card, gridStyle: style })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border capitalize transition-all ${
                        card.gridStyle === style
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-100'
                          : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                      }`}
                      id={`style-btn-${style}`}
                    >
                      {style === 'clean' ? 'Minimal' : style === 'technical' ? 'Técnico' : 'Brutal'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Offset slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Espaçamento do Grid (Offset)
                  </label>
                  <span className="text-xs font-mono font-semibold text-indigo-600">
                    {card.gridOffset}px
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Grid className="w-4 h-4 text-neutral-400" />
                  <input
                    type="range"
                    min="8"
                    max="40"
                    value={card.gridOffset}
                    onChange={(e) => setCard({ ...card, gridOffset: parseInt(e.target.value) })}
                    className="w-full accent-indigo-600 h-1 bg-neutral-100 rounded-lg cursor-pointer"
                    id="grid-offset-slider"
                  />
                  <Move className="w-4 h-4 text-neutral-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={handleRandomize}
              className="flex-1 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              id="randomize-card-btn"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Aleatório
            </button>
            <button
              onClick={handleCopyText}
              className="flex-1 py-3 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
              id="copy-card-btn"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copiar Dados
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Preview Screen */}
        <div className="lg:col-span-7 flex items-center justify-center bg-neutral-50/50 p-6 md:p-10 rounded-2xl border border-neutral-100 relative min-h-[340px]">
          {/* Subtle grid pattern background matching selected offset */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-300"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
              backgroundSize: `${card.gridOffset}px ${card.gridOffset}px`
            }}
          />

          {/* Interactive Card Canvas */}
          <motion.div
            layout
            ref={cardRef}
            className={`w-full max-w-sm relative transition-all duration-300 ${
              card.gridStyle === 'clean'
                ? 'bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-lg'
                : card.gridStyle === 'technical'
                ? 'bg-neutral-900 text-neutral-100 p-8 rounded-lg border border-neutral-700 font-mono shadow-xl'
                : 'bg-indigo-100 text-neutral-900 p-8 rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
            }`}
            id="preview-card-element"
          >
            {/* Card Content according to selected visual theme */}
            {card.gridStyle === 'clean' && (
              <>
                <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-indigo-500">
                  COLA NO GRID
                </div>
                <div className="flex flex-col h-full justify-between min-h-[160px]">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
                      MEMBRO DESIGNER
                    </span>
                    <h4 className="text-xl font-extrabold font-display text-neutral-900 mt-1 leading-tight">
                      {card.name || 'Seu Nome'}
                    </h4>
                    <p className="text-sm text-indigo-600 mt-1 font-medium">
                      {card.role || 'Sua Especialidade'}
                    </p>
                  </div>
                  <div className="border-t border-neutral-100 pt-4 flex justify-between items-center text-[10px] text-neutral-400">
                    <span>STATUS: CONECTADO</span>
                    <span>{card.joinedDate}</span>
                  </div>
                </div>
              </>
            )}

            {card.gridStyle === 'technical' && (
              <>
                <div className="flex justify-between items-center text-[9px] text-neutral-500 border-b border-neutral-800 pb-2 mb-4">
                  <span>SYS_GRID: ACC_ACTIVE</span>
                  <span>OFFSET_{card.gridOffset}PX</span>
                </div>
                <div className="flex flex-col h-full justify-between min-h-[140px]">
                  <div>
                    <span className="text-[9px] text-emerald-400">⚡ NODE_MEMBER</span>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight mt-1">
                      {card.name || 'ANONYMOUS'}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">
                      &gt; {card.role || 'CREATIVE'}
                    </p>
                  </div>
                  <div className="pt-4 flex justify-between items-center text-[9px] text-neutral-500">
                    <span>LOC: GRID_SYSTEM</span>
                    <span>{card.joinedDate}</span>
                  </div>
                </div>
              </>
            )}

            {card.gridStyle === 'brutalist' && (
              <>
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest">
                  GRID OK
                </div>
                <div className="flex flex-col h-full justify-between min-h-[160px]">
                  <div>
                    <span className="inline-block bg-black text-indigo-200 px-2 py-0.5 text-[9px] font-extrabold tracking-widest mb-2">
                      MEMBRO OFICIAL
                    </span>
                    <h4 className="text-2xl font-black tracking-tight text-neutral-900 uppercase">
                      {card.name || 'NOME'}
                    </h4>
                    <div className="text-base font-bold text-neutral-800 underline decoration-indigo-600 decoration-2 underline-offset-2">
                      {card.role || 'CRIATIVO'}
                    </div>
                  </div>
                  <div className="border-t-2 border-black pt-3 mt-4 flex justify-between items-center text-[10px] font-black uppercase">
                    <span>COLA NO GRID</span>
                    <span>{card.joinedDate}</span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
