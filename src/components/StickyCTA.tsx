import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

interface StickyCTAProps {
  onScrollToForm: () => void;
}

export default function StickyCTA({ onScrollToForm }: StickyCTAProps) {
  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToForm();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 z-30 flex items-center justify-between gap-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      
      {/* Hotline Action */}
      <a 
        href="tel:0903423229"
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-100 text-emerald-950 transition-colors active:scale-95"
      >
        <div className="p-1.5 bg-emerald-700 text-white rounded-full">
          <Phone className="w-4 h-4 fill-white animate-pulse" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wide mt-1">Gọi Hotline</span>
      </a>

      {/* Zalo Action */}
      <a 
        href="https://zalo.me/0903423229" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-50 hover:bg-blue-100/70 border border-blue-100 text-blue-900 transition-colors active:scale-95"
      >
        <div className="p-1.5 bg-blue-600 text-white rounded-full">
          {/* Custom chat/message icon representing Zalo */}
          <MessageCircle className="w-4 h-4 fill-white" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wide mt-1">Chat Zalo</span>
      </a>

      {/* Form Anchor Action */}
      <button 
        onClick={handleScrollClick}
        className="flex-[2] flex items-center justify-center gap-1.5 py-3.5 px-4 bg-gradient-to-r from-gold-600 to-gold-700 hover:brightness-110 text-emerald-950 font-bold uppercase tracking-wider text-xs rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
      >
        <FileText className="w-4 h-4 text-emerald-950" />
        <span>Nhận Bảng Giá</span>
      </button>

    </div>
  );
}
