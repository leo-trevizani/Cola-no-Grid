/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Sparkles, User, Mail, Briefcase, Award } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, role: string) => void;
}

export default function JoinModal({ isOpen, onClose, onSuccess }: JoinModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Product Designer');
  const [customRole, setCustomRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [memberNumber, setMemberNumber] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const finalRole = role === 'Outro' ? customRole || 'Criativo' : role;
    
    // Generate a random high-quality member number for fun
    const generatedNumber = Math.floor(Math.random() * 800) + 120;
    setMemberNumber(generatedNumber);
    setIsSubmitted(true);

    // Save to local storage for persistence
    localStorage.setItem('cola_no_grid_member', JSON.stringify({
      name,
      email,
      role: finalRole,
      memberNumber: generatedNumber,
      joinedAt: new Date().toLocaleDateString('pt-BR')
    }));

    onSuccess(name, finalRole);
  };

  const roles = [
    'Product Designer',
    'UX Researcher',
    'UI Designer',
    'Graphic Designer',
    'Product Manager',
    'Desenvolvedor(a) Front-end',
    'Outro'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-100 z-10"
            id="modal-card"
          >
            {/* Header pattern */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-600 transition-colors"
              id="close-modal-btn"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-8 md:p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-neutral-900">
                    Faça parte do Grid
                  </h3>
                  <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                    Preencha os campos abaixo para alinhar suas referências com a nossa comunidade de design.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Nome completo
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Ana Silva"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm"
                        id="join-name-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      E-mail corporativo ou pessoal
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-400 pointer-events-none">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: ana@exemplo.com"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm"
                        id="join-email-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Sua Especialidade Principal
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-neutral-400 pointer-events-none">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm appearance-none"
                        id="join-role-select"
                      >
                        {roles.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {role === 'Outro' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="overflow-hidden"
                    >
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Especifique sua atuação
                      </label>
                      <input
                        type="text"
                        required
                        value={customRole}
                        onChange={(e) => setCustomRole(e.target.value)}
                        placeholder="Ex: Motion Designer"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm"
                        id="join-custom-role-input"
                      />
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-colors shadow-lg shadow-indigo-100 flex items-center justify-center gap-2 text-sm"
                    id="submit-join-btn"
                  >
                    Confirmar e Colar no Grid
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 md:p-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 animate-pulse">
                  <Check className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold font-display text-neutral-900">
                  Bem-vindo(a) ao Grid!
                </h3>
                <p className="text-neutral-500 mt-2 text-sm max-w-sm">
                  Seu cadastro foi concluído com sucesso. Você agora faz parte de um espaço focado no design de alto nível.
                </p>

                {/* Simulated digital membership pass */}
                <div className="w-full mt-6 p-6 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/50 relative overflow-hidden">
                  <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-indigo-500/5" />
                  <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-indigo-500/5" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-left">
                      <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase">Membro Oficial</span>
                      <h4 className="font-bold text-neutral-800 text-base leading-tight mt-1">{name}</h4>
                      <p className="text-xs text-neutral-500">{role === 'Outro' ? customRole : role}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-400 block font-mono">ID NÚMERO</span>
                      <span className="font-mono text-base font-bold text-neutral-700">#{memberNumber.toString().padStart(4, '0')}</span>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200/60 pt-3 flex justify-between items-center text-[10px] text-neutral-400 font-mono">
                    <span>COLA NO GRID</span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-indigo-500" /> ATIVO
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full mt-8 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-2xl transition-colors text-sm"
                  id="success-close-btn"
                >
                  Fechar Janela
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
