import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Building, Percent, ShieldCheck } from 'lucide-react';

// Import tower perspective image via ES modules for background
import towerPerspectiveImg from '../assets/images/tower_perspective_1783138399225.jpg';

interface HeroProps {
  onScrollToForm: () => void;
}

export default function Hero({ onScrollToForm }: HeroProps) {
  return (
    <section id="tong-quan" className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Absolute background visual details */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text panel */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Project Tag/Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-emerald-900/80 border border-emerald-700/50 px-4 py-1.5 rounded-full text-xs sm:text-sm text-gold-200"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="font-semibold tracking-wide uppercase">Dự Án: The Emerald Garden View</span>
            </motion.div>

            {/* Main Catchy Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15]"
            >
              Sở Hữu Căn Hộ <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-gold-300 via-gold-200 to-gold-400 bg-clip-text text-transparent">
                Studio 40m² Cao Cấp
              </span> <br />
              Chỉ Từ <span className="text-gold-200 font-display">1.5 Tỷ/Căn</span>
            </motion.h1>

            {/* Core Value Statement */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-emerald-100/90 text-base sm:text-lg lg:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Giải pháp an cư lý tưởng dành cho người trẻ độc thân, vợ chồng mới cưới, hoặc mua căn hộ đầu tiên. 
              Cơ hội đầu tư an toàn với hiệu suất sinh lời cao từ cộng đồng chuyên gia làm việc tại VSIP.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary action */}
              <button
                onClick={onScrollToForm}
                className="group relative px-8 py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 text-emerald-950 font-bold font-display rounded-xl tracking-wide shadow-xl hover:shadow-gold-500/10 hover:brightness-110 active:scale-98 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Nhận Bảng Giá & Thiết Kế</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Secondary action */}
              <button
                onClick={onScrollToForm}
                className="px-8 py-4 bg-emerald-900/40 hover:bg-emerald-900/60 text-gold-100 font-semibold rounded-xl border border-gold-500/30 tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Tư Vấn Trả Góp 0%</span>
              </button>
            </motion.div>

            {/* Horizontal Trust badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-emerald-800/40 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="space-y-1.5">
                <span className="text-gold-300 font-display text-lg sm:text-xl md:text-2xl font-bold block">15%</span>
                <span className="text-[10px] sm:text-xs text-emerald-300 block leading-tight">Thanh toán nhận nhà (~239tr)</span>
              </div>
              <div className="space-y-1.5 border-l border-emerald-800/50 pl-4">
                <span className="text-gold-300 font-display text-lg sm:text-xl md:text-2xl font-bold block">80%</span>
                <span className="text-[10px] sm:text-xs text-emerald-300 block leading-tight">Căn hộ dưới 35 triệu/m²</span>
              </div>
              <div className="space-y-1.5 border-l border-emerald-800/50 pl-4">
                <span className="text-gold-300 font-display text-lg sm:text-xl md:text-2xl font-bold block">60+</span>
                <span className="text-[10px] sm:text-xs text-emerald-300 block leading-tight">Tiện ích đặc quyền hiện đại</span>
              </div>
            </motion.div>

          </div>

          {/* Hero visual panel - Modern architectural mock / placeholder */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center py-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none bento-card bento-gold-border p-5 bg-emerald-950/40 backdrop-blur-sm overflow-visible"
            >
              {/* Inner gradient line element */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500"></div>

              {/* Decorative corners */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold-400/50"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold-400/50"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gold-400/50"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold-400/50"></div>

              {/* Core Building Silhouette/Grid Frame */}
              <div className="aspect-square bg-slate-950 border border-emerald-800/50 rounded-xl relative overflow-hidden flex flex-col justify-between p-6">
                
                {/* Background Image of the Project with Dark Overlay for readability */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={towerPerspectiveImg} 
                    alt="The Emerald Garden View Perspective" 
                    className="w-full h-full object-cover opacity-35"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50"></div>
                </div>

                {/* Visual Header */}
                <div className="flex justify-between items-center relative z-10">
                  <div className="flex items-center space-x-2 text-[10px] text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>PROPOSAL PREVIEW</span>
                  </div>
                  <div className="px-2.5 py-0.5 bg-gold-500/10 text-gold-300 border border-gold-500/20 rounded-full text-[10px] font-mono">
                    STUDIO 40m²
                  </div>
                </div>

                {/* Conceptual Architectural Grid Blueprint */}
                <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 py-8 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-950/90 border border-gold-400/40 flex items-center justify-center text-gold-300 shadow-xl backdrop-blur-xs">
                    <Building className="w-10 h-10 stroke-[1.2] text-gold-400 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-xl block text-gold-200 drop-shadow-md">The Emerald Garden View</span>
                    <span className="text-xs text-emerald-300 block font-mono mt-1 drop-shadow-xs">THUAN AN CITY - HO CHI MINH METRO</span>
                  </div>
                  
                  {/* Floating specification lines */}
                  <div className="w-full bg-emerald-950/80 border border-emerald-800/50 rounded-lg p-3 text-xs space-y-1.5 font-mono text-emerald-300 backdrop-blur-xs shadow-lg">
                    <div className="flex justify-between">
                      <span>Vị Trí:</span>
                      <span className="text-white font-medium">Trung tâm Thuận An</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Diện tích:</span>
                      <span className="text-white font-medium">Studio 40 m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thiết kế:</span>
                      <span className="text-white font-medium">Ban công + Sân phơi</span>
                    </div>
                  </div>
                </div>

                {/* Placeholder Overlay Reminder */}
                <div className="text-center text-[10px] text-slate-400 italic mt-auto border-t border-slate-900/50 pt-3 relative z-10 drop-shadow-xs">
                  (Hình ảnh phối cảnh dự án thực tế được cung cấp khi tải tài liệu)
                </div>

              </div>

              {/* Floating micro stats */}
              <div className="absolute -bottom-4 right-4 bg-emerald-900 border border-gold-500/30 px-3 py-2 rounded-lg shadow-xl text-left hidden sm:block">
                <div className="flex items-center space-x-2">
                  <Percent className="w-4 h-4 text-gold-400" />
                  <div>
                    <span className="text-[10px] text-emerald-300 block leading-none">Hỗ trợ trả góp</span>
                    <span className="font-display font-bold text-xs text-white">Lãi suất 0%</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 left-4 bg-slate-900 border border-emerald-700/50 px-3 py-2 rounded-lg shadow-xl text-left hidden sm:block">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-slate-400 block leading-none">Pháp lý dự án</span>
                    <span className="font-display font-bold text-xs text-white">Sổ hồng riêng</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
