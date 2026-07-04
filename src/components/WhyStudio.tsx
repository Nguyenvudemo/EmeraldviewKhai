import { motion } from 'motion/react';
import { Landmark, Sparkles, Building2, UserCheck, Key, ShieldCheck, ChevronRight } from 'lucide-react';

interface WhyStudioProps {
  onScrollToForm: () => void;
}

export default function WhyStudio({ onScrollToForm }: WhyStudioProps) {
  const reasons = [
    {
      icon: <Landmark className="w-6 h-6 text-emerald-800" />,
      title: 'Vốn Đầu Tư Thấp — Dễ Tiếp Cận',
      description: 'Chỉ với 1.5 tỷ đồng/căn, đây là phân khúc có giá bán tốt nhất để người trẻ sở hữu bất động sản đầu tiên tại thành phố.',
      highlight: 'Chỉ cần tích lũy từ 239 triệu ban đầu',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-100'
    },
    {
      icon: <Building2 className="w-6 h-6 text-amber-700" />,
      title: 'Thiết Kế Tối Ưu Cho 1-2 Người Ở',
      description: 'Không gian mở hoàn toàn không có vách ngăn thừa. Tích hợp đầy đủ khu vực ngủ nghỉ, tiếp khách, bếp nấu và ban công tràn ngập khí trời.',
      highlight: 'Tiết kiệm chi phí bảo trì & điện năng',
      color: 'bg-amber-50 text-amber-800 border-amber-100'
    },
    {
      icon: <Key className="w-6 h-6 text-blue-700" />,
      title: 'Dễ Cho Thuê — Hiệu Suất Sinh Lời Cao',
      description: 'Sát cạnh KCN VSIP 1, Việt Hương, và AEON Mall Bình Dương. Hàng ngàn chuyên gia nước ngoài luôn săn đón căn hộ Studio dịch vụ cao cấp.',
      highlight: 'Dòng tiền cho thuê đều đặn 8-10 triệu/tháng',
      color: 'bg-blue-50 text-blue-800 border-blue-100'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-700" />,
      title: 'Tiềm Năng Tăng Giá Theo Hạ Tầng',
      description: 'Đón đầu quy hoạch nâng cấp mở rộng Quốc lộ 13 lên 8 làn xe, thông xe đường Mỹ Phước - Tân Vạn và tuyến Vành Đai 3 liên vùng.',
      highlight: 'Tài sản tích lũy liên tục gia tăng biên độ giá',
      color: 'bg-teal-50 text-teal-800 border-teal-100'
    }
  ];

  return (
    <section id="ly-do-chon" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Giá Trị Khác Biệt</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Tại Sao Căn Hộ Studio 40m² Là Lựa Chọn Khôn Ngoan Nhất?
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Phù hợp hoàn hảo cho cả nhu cầu sở hữu để an cư vững chắc lẫn đầu tư sinh lời vượt trội với dòng tiền cho thuê dồi dào.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-card p-6 sm:p-8 flex flex-col justify-between bento-gold-border"
            >
              <div className="space-y-4">
                {/* Header Icon + Title */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${reason.color}`}>
                    {reason.icon}
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-slate-800 leading-tight">
                    {reason.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed pl-1">
                  {reason.description}
                </p>
              </div>

              {/* Bottom highlighting highlight strip */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs sm:text-sm pl-1">
                <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  {reason.highlight}
                </span>
                <span className="text-slate-400 font-medium hidden sm:inline">Chi tiết &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Call To Action Block inside why-studio section */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-emerald-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500"></div>
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 text-gold-300 rounded-full text-xs font-semibold tracking-wide uppercase inline-block">Ưu Đãi Đặc Biệt</span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-tight">
              Phân tích bảng dòng tiền trả góp & cho thuê chi tiết
            </h3>
            <p className="text-sm text-emerald-200">
              Chuyên viên tài chính của chúng tôi sẽ thiết kế bảng tính vay nợ, lãi suất chi tiết theo từng mức thu nhập cá nhân của bạn hoàn toàn miễn phí.
            </p>
          </div>

          <button
            onClick={onScrollToForm}
            className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-700 hover:brightness-110 text-emerald-950 font-bold rounded-xl tracking-wide shadow-xl transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Đăng Ký Tư Vấn Phương Án Tài Chính</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
