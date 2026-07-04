import { motion } from 'motion/react';
import { 
  Waves, Trees, Dumbbell, Film, ShoppingBag, Compass, 
  Sparkles, Coffee, ShieldCheck, Heart, Users, MapPin 
} from 'lucide-react';

export default function Amenities() {
  const highlights = [
    {
      icon: <Waves className="w-8 h-8 text-gold-300" />,
      title: 'Hồ bơi vô cực 65m',
      desc: 'Hồ bơi đạt chuẩn Olympic lớn nhất đô thị, thiết kế tràn viền chân mây cho cảm xúc sảng khoái mát lành tuyệt đối.',
      bgImage: '/src/assets/images/pool_65m_1783137806819.jpg'
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-gold-300" />,
      title: 'TTTM khối đế 5 tầng',
      desc: 'Thiên đường mua sắm sầm uất, hội tụ hàng trăm nhãn hàng thời trang, khu ẩm thực và siêu thị quốc tế ngay thềm nhà.',
      bgImage: '/src/assets/images/mall_5t_1783137818760.jpg'
    },
    {
      icon: <Film className="w-8 h-8 text-gold-300" />,
      title: 'Rạp phim ngoài trời',
      desc: 'Đặc quyền thượng lưu, trải nghiệm xem phim bom tấn dưới bầu trời sao lung linh đầy lãng mạn và tinh tế.',
      bgImage: '/src/assets/images/outdoor_cinema_1783137830414.jpg'
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-gold-300" />,
      title: 'Phòng Gym & Yoga cao cấp',
      desc: 'Không gian tập hiện đại, đầy đủ thiết bị nhập khẩu Châu Âu với tầm nhìn trực diện hồ bơi vô cực thư thái.',
      bgImage: '/src/assets/images/gym_yoga_1783137843946.jpg'
    },
    {
      icon: <Trees className="w-8 h-8 text-gold-300" />,
      title: 'Công viên cây xanh trung tâm',
      desc: 'Mật độ xanh bao phủ rộng lớn, con đường dạo bộ rợp bóng mát đóng vai trò lá phổi sinh thái điều hòa toàn khu.',
      bgImage: '/src/assets/images/central_park_1783137856497.jpg'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-300" />,
      title: 'Hơn 60+ Tiện ích đặc quyền',
      desc: 'Trải dài từ Skybar chân mây, khu vui chơi trẻ em Kid Zone, Vườn BBQ ngoài trời, sảnh đón Louge 5 sao...',
      bgImage: '/src/assets/images/amenities_60_1783137868457.jpg'
    }
  ];

  return (
    <section id="tien-ich" className="py-16 bg-gradient-to-b from-slate-900 via-emerald-950 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-300 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Đặc Quyền Nghỉ Dưỡng</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">
            Trải Nghiệm Hệ Sinh Thái 60+ Tiện Ích Đẳng Cấp Resort
          </h2>
          <p className="text-emerald-200 mt-2 text-sm sm:text-base font-light">
            Không cần đi đâu xa, mọi nhu cầu hưởng thụ, vui chơi, mua sắm và rèn luyện sức khỏe chuẩn thượng lưu đều hiển hiện ngay dưới thềm nhà bạn.
          </p>
          <div className="w-16 h-1 bg-gold-400 mx-auto mt-4 rounded"></div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bento-card bento-amber-border bg-slate-950/85 p-6 sm:p-8 flex flex-col space-y-4 group relative overflow-hidden h-full min-h-[220px] justify-between"
            >
              {/* Background Image with blur and dark overlay */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
                <img 
                  src={item.bgImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-35 scale-105 group-hover:scale-100 transition-all duration-700 filter blur-[2px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors duration-500"></div>
              </div>

              {/* Gold gradient line accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              
              {/* Icon */}
              <div className="w-14 h-14 bg-emerald-950/90 rounded-xl flex items-center justify-center border border-emerald-800 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 relative z-10">
                <h3 className="font-serif font-bold text-lg text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light drop-shadow-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Metric Slat */}
        <div className="mt-16 bg-emerald-950/70 border border-emerald-800/60 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-display font-black text-gold-300 block">60+</span>
              <span className="text-[10px] sm:text-xs text-emerald-300 uppercase tracking-wide">Tiện ích nội khu</span>
            </div>
            <div className="space-y-1 border-l border-emerald-800/60 pl-6 sm:pl-8">
              <span className="text-2xl sm:text-3xl font-display font-black text-gold-300 block">65m</span>
              <span className="text-[10px] sm:text-xs text-emerald-300 uppercase tracking-wide">Hồ bơi vô cực</span>
            </div>
            <div className="space-y-1 border-l border-emerald-800/60 pl-6 sm:pl-8">
              <span className="text-2xl sm:text-3xl font-display font-black text-gold-300 block">5 Tầng</span>
              <span className="text-[10px] sm:text-xs text-emerald-300 uppercase tracking-wide">T.Tâm Thương Mại</span>
            </div>
          </div>
          
          <div className="text-xs text-emerald-300 font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-300" />
            <span>Môi trường an ninh 3 lớp bảo mật 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}
