import { MapPin, Navigation, Compass, Globe, CheckCircle2, Route } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  const landmarks = [
    { name: 'KCN VSIP 1 & KCN Việt Hương', time: '3 - 5 Phút', distance: '1.8 km', desc: 'Nơi tập trung hàng vạn chuyên gia nước ngoài và kỹ sư cao cấp làm việc.' },
    { name: 'Siêu thị AEON Mall Bình Dương', time: '5 Phút', distance: '2.2 km', desc: 'Đại siêu thị mua sắm, giải trí, ẩm thực sầm uất nhất khu vực.' },
    { name: 'Sân Golf Sông Bé Quốc Tế', time: '6 Phút', distance: '2.5 km', desc: 'Tiêu chuẩn thượng lưu, không gian xanh thư giãn tuyệt đối.' },
    { name: 'BV Quốc Tế Columbia Asia & Becamex', time: '8 Phút', distance: '3.5 km', desc: 'Y tế chất lượng cao, an tâm chăm sóc sức khỏe gia đình.' },
    { name: 'Lotte Mart & Bến xe Miền Đông mới', time: '12 Phút', distance: '6.0 km', desc: 'Hệ thống hạ tầng giao thông công cộng hiện đại liên tỉnh.' },
    { name: 'Trung tâm TP. Hồ Chí Minh (Q.1, Bình Thạnh)', time: '25 Phút', distance: '15 km', desc: 'Di chuyển nhanh chóng dọc theo trục xương sống Quốc lộ 13 mở rộng.' }
  ];

  return (
    <section id="vi-tri" className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Tâm Điểm Kết Nối</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Vị Trí Vàng Giữa Lòng Trung Tâm Đô Thị Sầm Uất
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Tọa lạc tại trung tâm Phường Thuận An - trái tim kết nối giao thương giữa TP. Hồ Chí Minh và thủ phủ công nghiệp Bình Dương.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel - Connection map placeholder & description */}
          <div className="lg:col-span-7 bento-card bento-emerald-border p-6 sm:p-8 flex flex-col justify-between">
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-emerald-800">
                <MapPin className="w-5 h-5 text-emerald-700 animate-bounce" />
                <span className="font-semibold text-sm sm:text-base">Địa chỉ: Trung tâm Phường Thuận An, TP. HCM (Kế cận trục QL13)</span>
              </div>
              
              <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-800 leading-tight">
                Vị trí đắc địa tạo nên dòng tiền khai thác cho thuê vô hạn
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                Nằm liền kề trục Đại Lộ Bình Dương (Quốc lộ 13) đang nâng cấp lên 8 làn xe - con đường huyết mạch nối liền TP.HCM và các tỉnh miền Đông Nam Bộ. Từ dự án, quý cư dân chỉ mất chưa đầy 25 phút để tiếp cận Quận 1, Landmark 81 hay Sân bay Tân Sơn Nhất.
              </p>
            </div>

            {/* Stylized Visual Vector Connection Map Placeholder */}
            <div className="my-6 bg-emerald-950 text-emerald-100 rounded-xl p-6 border border-emerald-900 relative overflow-hidden aspect-[16/9] flex flex-col justify-between shadow-inner">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              {/* Concentric visual rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 border border-dashed border-emerald-800/40 rounded-full flex items-center justify-center">
                  <div className="w-3/5 h-3/5 border border-dashed border-emerald-700/30 rounded-full flex items-center justify-center">
                    <div className="w-2/5 h-2/5 border border-emerald-600/20 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Schematic locations */}
              <div className="flex justify-between items-center text-xs relative z-10">
                <span className="px-2.5 py-1 bg-emerald-900/90 rounded border border-emerald-700 font-mono">VSIP 1 KCN</span>
                <span className="px-2.5 py-1 bg-emerald-900/90 rounded border border-emerald-700 font-mono">AEON Mall</span>
              </div>

              {/* Core project marker */}
              <div className="text-center my-auto relative z-10 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 border-2 border-white flex items-center justify-center shadow-lg text-emerald-950 animate-pulse">
                  <Navigation className="w-6 h-6 fill-emerald-950 rotate-45" />
                </div>
                <span className="font-serif font-bold text-sm tracking-wide mt-2 text-gold-300 drop-shadow">The Emerald Garden View</span>
                <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest">(Tâm điểm phồn hoa)</span>
              </div>

              <div className="flex justify-between items-center text-xs relative z-10">
                <span className="px-2.5 py-1 bg-emerald-900/90 rounded border border-emerald-700 font-mono">Sân Golf Sông Bé</span>
                <span className="px-2.5 py-1 bg-emerald-900/90 rounded border border-emerald-700 font-mono">Trung Tâm TP.HCM</span>
              </div>

            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-xs sm:text-sm text-emerald-800 font-medium flex items-center space-x-3">
              <Compass className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <span>Giao thông hoàn thiện, kết nối liên vùng thông suốt qua Quốc lộ 13, Đại lộ Mỹ Phước - Tân Vạn và Vành đai 3.</span>
            </div>

          </div>

          {/* Right panel - Travel time details list */}
          <div className="lg:col-span-5 space-y-3.5">
            {landmarks.map((landmark, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bento-card bento-amber-border p-4 flex items-start gap-4"
              >
                {/* Visual Time Tag */}
                <div className="w-20 sm:w-24 shrink-0 text-center py-2 bg-emerald-50 rounded-lg border border-emerald-100">
                  <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">Thời gian</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-950 block font-display leading-none mt-1">{landmark.time}</span>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-slate-800 text-xs sm:text-sm leading-tight">{landmark.name}</h4>
                    <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[9px] font-mono font-bold">{landmark.distance}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {landmark.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
