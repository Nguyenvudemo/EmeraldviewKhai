import { DollarSign, Home, Compass, Percent, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function QuickFacts() {
  const facts = [
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-700" />,
      label: 'Giá Bán Trọn Gói',
      value: 'Chỉ từ 1.5 Tỷ/Căn',
      description: 'Sở hữu vĩnh viễn căn hộ cao cấp ngay trung tâm đô thị sầm uất.',
      highlight: true,
      badge: 'Tốt nhất thị trường'
    },
    {
      icon: <Percent className="w-6 h-6 text-emerald-700" />,
      label: 'Vốn Ban Đầu',
      value: 'Chỉ từ 239 Triệu',
      description: 'Thanh toán đợt đầu 15%, ngừng đóng đến khi nhận bàn giao nhà.',
      highlight: false,
      badge: 'Nhẹ gánh tài chính'
    },
    {
      icon: <Home className="w-6 h-6 text-emerald-700" />,
      label: 'Diện Tích Thiết Kế',
      value: 'Studio 40m²',
      description: 'Không gian mở thông minh, tối ưu công năng, ban công & lo gia phơi riêng biệt.',
      highlight: false,
      badge: 'Công năng tối ưu'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-700" />,
      label: 'Đặc Quyền Mức Giá',
      value: 'Dưới 35 Triệu/m²',
      description: 'Hơn 80% căn hộ có đơn giá cực kỳ tốt so với mặt bằng chung toàn khu vực.',
      highlight: true,
      badge: 'Pháp lý minh bạch'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Con Số Biết Nói</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Cơ Hội Sở Hữu Nhà Thành Phố Dễ Dàng Chưa Từng Có
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Fact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 bento-card ${
                fact.highlight 
                  ? 'bento-emerald-border bg-emerald-50/10' 
                  : 'bento-amber-border'
              }`}
            >
              {/* Badge */}
              <span className={`absolute -top-3 left-6 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                fact.highlight 
                  ? 'bg-emerald-800 text-gold-100' 
                  : 'bg-slate-200 text-slate-700'
              }`}>
                {fact.badge}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md mb-6 mt-2">
                {fact.icon}
              </div>

              {/* Title & Stats */}
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">{fact.label}</p>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 leading-tight mb-3">
                {fact.value}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {fact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Short Highlight Bottom Banner */}
        <div className="mt-12 bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-900 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-900 rounded-xl hidden sm:block">
              <CheckCircle className="w-6 h-6 text-gold-300" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-gold-100">Cơ hội tốt cho người trẻ sở hữu ngôi nhà đầu tiên</h4>
              <p className="text-sm text-emerald-200 mt-1">Dễ mua - Dễ trả góp - Dễ cho thuê dịch vụ lưu trú cao cấp.</p>
            </div>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <span className="text-xs text-emerald-400 block mb-1">Chỉ còn 30 suất nội bộ ưu đãi đợt 1</span>
            <span className="font-display font-extrabold text-lg sm:text-xl text-gold-300">Nhận Chiết Khấu Ngay 2%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
