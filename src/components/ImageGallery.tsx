import { useState } from 'react';
import { Camera, Image, Maximize2, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      // ====== THAY ĐỔI ĐƯỜNG DẪN ẢNH THẬT TẠI ĐÂY / REPLACE WITH REAL IMAGE PATH HERE ======
      src: '', // Ví dụ: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'
      title: 'Phối cảnh tổng thể tòa tháp',
      category: 'Ngoại thất',
      dimensions: '1200 x 800 px',
      desc: 'Thiết kế biểu tượng hiện đại với những mảng kính đón sáng tự nhiên, bao bọc bởi thảm xanh cây cối rộng lớn.'
    },
    {
      id: 2,
      // ====== THAY ĐỔI ĐƯỜNG DẪN ẢNH THẬT TẠI ĐÂY / REPLACE WITH REAL IMAGE PATH HERE ======
      src: '', 
      title: 'Hồ bơi vô cực chân mây 65m',
      category: 'Tiện ích',
      dimensions: '1200 x 800 px',
      desc: 'Không gian thư giãn lý tưởng chuẩn resort cao cấp giúp tái tạo năng lượng sau ngày làm việc bận rộn.'
    },
    {
      id: 3,
      // ====== THAY ĐỔI ĐƯỜNG DẪN ẢNH THẬT TẠI ĐÂY / REPLACE WITH REAL IMAGE PATH HERE ======
      src: '', 
      title: 'Thiết kế mở căn hộ Studio 40m²',
      category: 'Nội thất',
      dimensions: '1200 x 800 px',
      desc: 'Bố cục thông minh liên kết phòng ngủ, phòng khách và bếp ăn một cách liền mạch, tạo cảm giác rộng rãi hơn thực tế.'
    },
    {
      id: 4,
      // ====== THAY ĐỔI ĐƯỜNG DẪN ẢNH THẬT TẠI ĐÂY / REPLACE WITH REAL IMAGE PATH HERE ======
      src: '', 
      title: 'Ban công ngập tràn ánh sáng',
      category: 'Nội thất',
      dimensions: '1200 x 800 px',
      desc: 'Tầm nhìn panorama khoáng đạt đón nắng sớm tươi mát hằng ngày, tạo dòng sinh khí hoàn hảo cho gia chủ.'
    },
    {
      id: 5,
      // ====== THAY ĐỔI ĐƯỜNG DẪN ẢNH THẬT TẠI ĐÂY / REPLACE WITH REAL IMAGE PATH HERE ======
      src: '', 
      title: 'Bàn giao thiết bị phòng tắm cao cấp',
      category: 'Nội thất',
      dimensions: '1200 x 800 px',
      desc: 'Bàn giao hoàn thiện với các thiết bị vệ sinh nhập khẩu cao cấp từ thương hiệu danh tiếng, thiết kế sang trọng.'
    },
    {
      id: 6,
      // ====== THAY ĐỔI ĐƯỜNG DẪN ẢNH THẬT TẠI ĐÂY / REPLACE WITH REAL IMAGE PATH HERE ======
      src: '', 
      title: 'Sảnh đón tiếp cư dân Luxury',
      category: 'Tiện ích',
      dimensions: '1200 x 800 px',
      desc: 'Sảnh chờ sang trọng tiêu chuẩn 5 sao với sự phục vụ chuyên nghiệp của đội ngũ lễ tân và bảo an túc trực 24/7.'
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
            Không tạo ảnh AI giả. Dưới đây là khung placeholder chứa sẵn thông số kỹ thuật chuẩn, bạn chỉ cần thay đường dẫn ảnh thật để hoàn thiện trang web.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Informational Help Banner for owner */}
        <div className="mb-10 bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start space-x-3 text-xs sm:text-sm text-emerald-800">
          <Info className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold block">Gợi ý dành cho bạn:</span>
            <p className="font-light leading-relaxed">
              Trong mã nguồn của component này, chúng tôi đã tạo sẵn các biến chứa hình ảnh. Khi có hình ảnh phối cảnh 3D thực tế của căn hộ Studio 40m², bạn chỉ cần mở file <code className="font-mono bg-emerald-100/50 px-1 py-0.5 rounded font-bold">/src/components/ImageGallery.tsx</code> và thay link ảnh vào thuộc tính <code className="font-mono bg-emerald-100/50 px-1 py-0.5 rounded font-bold">src</code>.
            </p>
          </div>
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
              className="bento-card bento-emerald-border overflow-hidden flex flex-col group"
            >
              
              {/* Photo Display Frame (With or Without Image link) */}
              <div className="relative aspect-[3/2] bg-slate-900/95 flex flex-col items-center justify-center text-center p-6 overflow-hidden">
                {img.src ? (
                  <>
                    <img 
                      src={img.src} 
                      alt={img.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  </>
                ) : (
                  // Elegant customized schematic placeholder frame when src is empty
                  <div className="absolute inset-4 border border-dashed border-emerald-800/40 rounded-xl flex flex-col items-center justify-center space-y-3 p-4 bg-emerald-950/25">
                    <Camera className="w-10 h-10 text-gold-400 stroke-[1.2] animate-pulse" />
                    <div>
                      <span className="text-[11px] font-mono tracking-wider text-emerald-300 block uppercase">Kích thước khuyên dùng</span>
                      <span className="text-xs font-bold text-white block mt-0.5 font-mono">{img.dimensions}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 italic max-w-[200px] leading-tight">
                      (Chưa gắn link ảnh thật)
                    </span>
                  </div>
                )}

                {/* Top category pill */}
                <span className="absolute top-4 left-4 bg-emerald-900/90 text-gold-200 border border-gold-500/20 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider z-10">
                  {img.category}
                </span>

                {/* Hover overlay icon */}
                <button
                  onClick={() => setSelectedImage(idx)}
                  className="absolute right-4 bottom-4 p-2.5 bg-emerald-950/85 hover:bg-emerald-800 text-gold-300 border border-emerald-800 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all z-10 cursor-pointer shadow-md"
                  title="Xem chi tiết ảnh rộng"
                >
                  <Maximize2 className="w-4 h-4 text-gold-200" />
                </button>
              </div>

              {/* Text Description Box */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-slate-800 group-hover:text-emerald-800 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {img.desc}
                  </p>
                </div>
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
