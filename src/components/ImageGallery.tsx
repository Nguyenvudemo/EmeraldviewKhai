import { useState } from 'react';
import { Camera, Image, Maximize2, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import images via ES modules to ensure Vite processes them correctly for production builds
import towerPerspectiveImg from '../assets/images/tower_perspective_1783138399225.jpg';
import infinityPool65mImg from '../assets/images/infinity_pool_65m_1783138411640.jpg';
import studioInteriorImg from '../assets/images/studio_interior_1783138426143.jpg';
import balconyLightImg from '../assets/images/balcony_light_1783138436152.jpg';
import luxuryBathroomImg from '../assets/images/luxury_bathroom_1783138450505.jpg';
import luxuryLobbyReceptionImg from '../assets/images/luxury_lobby_reception_1783138461343.jpg';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: towerPerspectiveImg,
      title: 'Phối cảnh tổng thể tòa tháp',
      category: 'Ngoại thất',
      dimensions: '1200 x 800 px',
      desc: 'Hình ảnh tòa cao ốc sang trọng với ánh đèn hoàng hôn rực rỡ, bao bọc bởi không gian xanh mát.'
    },
    {
      id: 2,
      src: infinityPool65mImg,
      title: 'Hồ bơi vô cực chân mây 65m',
      category: 'Tiện ích',
      dimensions: '1200 x 800 px',
      desc: 'Hồ bơi chân mây tầng cao tràn viền tuyệt đẹp hòa cùng đường chân trời.'
    },
    {
      id: 3,
      src: studioInteriorImg,
      title: 'Thiết kế mở căn hộ Studio 40m²',
      category: 'Nội thất',
      dimensions: '1200 x 800 px',
      desc: 'Không gian sống hiện đại, thông minh, ấm cúng và đầy đủ tiện nghi tối ưu công năng.'
    },
    {
      id: 4,
      src: balconyLightImg,
      title: 'Ban công ngập tràn ánh sáng',
      category: 'Nội thất',
      dimensions: '1200 x 800 px',
      desc: 'Ban công ngập tràn ánh nắng ban mai kết hợp thảm thực vật xanh tươi mát.'
    },
    {
      id: 5,
      src: luxuryBathroomImg,
      title: 'Bàn giao thiết bị phòng tắm cao cấp',
      category: 'Nội thất',
      dimensions: '1200 x 800 px',
      desc: 'Phòng tắm sang trọng phong cách spa với thiết bị vệ sinh nhập khẩu cao cấp.'
    },
    {
      id: 6,
      src: luxuryLobbyReceptionImg,
      title: 'Sảnh đón tiếp cư dân Luxury',
      category: 'Tiện ích',
      dimensions: '1200 x 800 px',
      desc: 'Sảnh đón khách chuẩn khách sạn 5 sao lộng lẫy và tinh tế.'
    }
  ];

  return (
    <section id="thu-vien" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Không Gian Trực Quan</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Thư Viện Ảnh Phối Cảnh & Mặt Bằng Dự Án
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Chiêm ngưỡng không gian sống đẳng cấp, tiện nghi thượng lưu cùng thiết kế căn hộ Studio thông minh, tối ưu hóa công năng tại dự án.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(idx)}
              className="bento-card bento-emerald-border overflow-hidden relative aspect-[3/2] group cursor-pointer shadow-md rounded-2xl"
            >
              
              {/* Photo Display Frame */}
              <div className="absolute inset-0 w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay to dim on normal, darken slightly on hover for visual depth */}
                <div className="absolute inset-0 bg-neutral-950/15 group-hover:bg-neutral-950/35 transition-colors duration-300"></div>
              </div>

              {/* White Translucent Hover Overlay with Black Text */}
              <div className="absolute inset-0 bg-white/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-350 ease-out z-20 flex flex-col justify-center p-6 sm:p-8 text-left">
                <span className="text-[10px] tracking-widest uppercase text-emerald-800 font-semibold mb-1 block">
                  {img.category}
                </span>
                <h4 className="text-slate-950 font-serif font-bold text-base sm:text-lg mb-2 leading-tight">
                  {img.title}
                </h4>
                <div className="w-8 h-[2px] bg-emerald-600 mb-3"></div>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-normal">
                  {img.desc}
                </p>
              </div>

              {/* Hover overlay zoom icon on bottom left */}
              <div
                className="absolute left-4 bottom-4 p-2.5 bg-emerald-950/90 hover:bg-emerald-800 text-gold-300 border border-emerald-800/80 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 z-30 shadow-lg flex items-center justify-center"
                title="Xem chi tiết ảnh rộng"
              >
                <Maximize2 className="w-4 h-4 text-gold-200" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Portal on click */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-slate-900/60 text-white rounded-full hover:bg-slate-800 transition-colors z-55 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal main display */}
            <div className="w-full max-w-4xl max-h-[80vh] flex flex-col justify-between items-center relative">
              {images[selectedImage].src ? (
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].title}
                  className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Inside lightbox placeholder */
                <div className="w-[600px] max-w-full aspect-[3/2] bg-slate-900 border border-emerald-800/60 rounded-2xl flex flex-col items-center justify-center space-y-4 p-8 text-center text-white">
                  <Image className="w-16 h-16 text-gold-400 stroke-[1.2]" />
                  <h4 className="font-serif font-bold text-lg text-gold-200">{images[selectedImage].title}</h4>
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Khung Placeholder — Kích thước khuyên dùng: {images[selectedImage].dimensions}</p>
                  <p className="text-sm text-slate-400 max-w-md italic">
                    {images[selectedImage].desc}
                  </p>
                </div>
              )}

              {/* Lightbox Footer Texts */}
              <div className="text-center text-white mt-6 space-y-1 max-w-xl">
                <span className="text-[10px] tracking-widest uppercase text-gold-400 font-bold">{images[selectedImage].category}</span>
                <h4 className="font-serif font-bold text-base sm:text-lg">{images[selectedImage].title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{images[selectedImage].desc}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
