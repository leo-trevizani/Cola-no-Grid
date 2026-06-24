/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Grid, Heart } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface FooterProps {
  onOpenJoin: () => void;
}

export default function Footer({ onOpenJoin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100/60 py-20 px-6 text-center border-t border-neutral-200/60" id="manifesto-footer">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm border border-neutral-200/40 text-indigo-600 mb-6">
          <Grid className="w-5 h-5 animate-spin-slow" />
        </div>
        
        <h2 className="text-3xl font-extrabold mb-4 text-neutral-900 font-display">
          A vibe faz sentido pra você?
        </h2>
        
        <p className="text-neutral-600 mb-8 text-sm md:text-base leading-relaxed">
          Se você se identificou com a nossa forma de enxergar o design e a carreira, seja muito bem-vindo(a) ao nosso espaço.
        </p>
        
        <a
          href="https://chat.whatsapp.com/J3qkWGKasfi6IXYbVaQ6lc?utm_source=LP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-[#25D366] hover:bg-indigo-600 text-white font-bold py-3.5 px-10 rounded-full transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 items-center gap-2"
          id="footer-join-btn"
        >
          Quero Colar no Grid
          <WhatsAppIcon className="w-5 h-5" />
        </a>

        <div className="mt-16 pt-8 border-t border-neutral-200/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-medium">
          <p>© {currentYear} Cola no Grid. Uma comunidade de design.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para mentes criativas
          </p>
        </div>
      </div>
    </footer>
  );
}
