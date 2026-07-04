import { HelpCircle, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function PainPoints() {
  const points = [
    {
      issue: 'Tài chính hạn hẹp, lo sợ áp lực nợ vay lớn hằng tháng?',
      solution: 'Chỉ cần thanh toán 15% (khoảng 239 triệu) ban đầu cho đến lúc nhận nhà. Hỗ trợ vay tối đa 70%, ân hạn nợ gốc và miễn lãi suất 0% cho tới khi bàn giao căn hộ.',
      detail: 'Không cần tích lũy số tiền lớn ngay lập tức, tiền tích lũy hằng tháng vẫn sinh sôi.'
    },
    {
      issue: 'Sợ không gian diện tích nhỏ bí bách, khó sinh hoạt?',
      solution: 'Thiết kế thông minh loại bỏ góc chết. Phòng ngủ nối liền ban công đón nắng gió tự nhiên, lo gia giặt phơi biệt lập giúp tối ưu tính thẩm mỹ và diện tích sử dụng thực tế.',
      detail: 'Cảm giác rộng rãi vượt trội so với diện tích 40m² danh nghĩa.'
    },
    {
      issue: 'Lo ngại căn hộ xa trung tâm, khó cho thuê lại?',
      solution: 'Vị trí đắc địa ngay trung tâm, sát cạnh KCN VSIP 1, Việt Hương, AEON Mall Bình Dương. Hàng chục ngàn chuyên gia, kỹ sư nước ngoài luôn săn đón căn hộ Studio tiện nghi.',
      detail: 'Tỷ suất cho thuê dự kiến đạt 8-10%/năm, thanh khoản cực kỳ cao.'
    },
    {
      issue: 'Sợ mua căn hộ giá rẻ thì tiện ích nghèo nàn, bất tiện?',
      solution: 'Đặc quyền tận hưởng hệ sinh thái hơn 60 tiện ích resort: Hồ bơi vô cực 65m, TTTM 5 tầng sầm uất, Gym/Yoga cao cấp, và Rạp chiếu phim ngoài trời hiện đại.',
      detail: 'Mức sống chuẩn thượng lưu với ngân sách hoàn toàn bình dân.'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100" id="giai-phap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Thấu Hiểu Khách Hàng</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Nỗi Lo Khi Mua Nhà & Lời Giải Thích Từ Chúng Tôi
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Chúng tôi hiểu bạn đang cân nhắc rất nhiều điều. Đây là cách The Emerald Garden View bảo vệ và gia tăng tài sản cho bạn.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left panel - Visual intro */}
          <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-emerald-900 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-6">
              <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center text-gold-300 border border-emerald-800">
                <ShieldAlert className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gold-100 leading-tight">
                Giải Quyết Triệt Để Trở Ngại Sở Hữu Căn Hộ Thành Phố
              </h3>
              <p className="text-emerald-100/80 text-sm sm:text-base font-light leading-relaxed">
                Tại TP.HCM, việc tìm kiếm một căn hộ dưới 2 tỷ đồng có vị trí trung tâm, tiện ích hoàn hảo và chính sách thanh toán dễ thở ngày càng trở nên bất khả thi. 
              </p>
              <p className="text-emerald-100/80 text-sm sm:text-base font-light leading-relaxed">
                The Emerald Garden View chính là câu trả lời toàn diện nhất cho bài toán an cư bền vững của thế hệ trẻ năng động.
              </p>
            </div>

            <div className="pt-8 border-t border-emerald-800/60 mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-emerald-200">Cam kết bàn giao sổ hồng riêng, pháp lý an toàn.</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-emerald-200">Đơn vị quản lý vận hành chuẩn quốc tế chuyên nghiệp.</span>
              </div>
            </div>
          </div>

          {/* Right panel - Problem & Solution Items */}
          <div className="space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card p-5 bento-emerald-border"
              >
                {/* Issue header */}
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-rose-50 rounded-lg text-rose-600 flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base leading-snug">
                      {point.issue}
                    </h4>
                  </div>
                </div>

                {/* Solution content */}
                <div className="mt-3 pl-7 pt-3 border-t border-dashed border-slate-100 space-y-2">
                  <p className="text-xs sm:text-sm text-emerald-800 font-medium leading-relaxed flex items-start gap-1.5">
                    <ChevronRight className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>{point.solution}</span>
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-400 italic">
                    {point.detail}
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
