import React, { useState } from 'react';
import { Phone, Lock, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  onScrollToForm: () => void;
}

export default function Header({ onOpenAdmin, onScrollToForm }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tổng Quan', href: '#tong-quan' },
    { label: 'Lý Do Chọn', href: '#ly-do-chon' },
    { label: 'Vị Trí', href: '#vi-tri' },
    { label: 'Tiện Ích', href: '#tien-ich' },
    { label: 'Thanh Toán', href: '#thanh-toan' },
    { label: 'Thư Viện', href: '#thu-vien' },
    { label: 'Hỏi Đáp', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 bg-emerald-950/95 backdrop-blur-md text-white border-b border-emerald-900/50 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg border border-gold-200/30">
              <span className="font-display font-black text-emerald-950 text-base sm:text-lg">EG</span>
            </div>
            <div>
              <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-gold-100 uppercase block leading-none">The Emerald</span>
              <span className="font-display text-[10px] tracking-widest text-emerald-300 uppercase block mt-1">Garden View</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-emerald-100 hover:text-gold-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Quick Lock/Admin portal link (Broker tool) */}
            <button 
              onClick={onOpenAdmin}
              className="p-1.5 text-emerald-400 hover:text-gold-200 hover:bg-emerald-900/60 rounded-full transition-all border border-emerald-800/40 cursor-pointer"
              title="Quản lý khách hàng đăng ký"
            >
              <Lock className="w-4 h-4" />
            </button>

            {/* Hotline (Desktop and Tablet) */}
            <a 
              href="tel:0903423229" 
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 hover:brightness-110 active:scale-95 text-emerald-950 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-md border border-gold-400/40"
            >
              <Phone className="w-4 h-4 fill-emerald-950" />
              <span>0903.423.229</span>
            </a>

            {/* Quick Request Button (Desktop) */}
            <button
              onClick={onScrollToForm}
              className="hidden lg:block bg-transparent border border-gold-500/80 text-gold-200 hover:bg-gold-500/10 px-4 py-2 rounded-full font-medium text-xs tracking-wide transition-all uppercase cursor-pointer"
            >
              Nhận Bảng Giá
            </button>

            {/* Mobile Hamburger menu */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-emerald-200 hover:text-white focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950 border-b border-emerald-900 px-4 pt-2 pb-6 space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-emerald-100 hover:bg-emerald-900/50 hover:text-gold-200 font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a 
              href="tel:0903423229" 
              className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-emerald-950 font-bold rounded-xl text-center shadow-lg"
            >
              <Phone className="w-4 h-4 fill-emerald-950 animate-bounce" />
              <span>Gọi Hotline: 0903.423.229</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToForm();
              }}
              className="w-full py-3 bg-emerald-800 text-gold-100 font-medium rounded-xl border border-gold-500/30 text-center text-sm tracking-wide cursor-pointer"
            >
              Nhận Mặt Bằng & Bảng Giá Studio
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
