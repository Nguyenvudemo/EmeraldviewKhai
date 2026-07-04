import { motion } from 'motion/react';
import { User, Coins, Heart, Compass, CheckCircle2, Building, BarChart3, TrendingUp } from 'lucide-react';

export default function RentOrLive() {
  const forLiving = [
    { title: 'Tích lũy ban đầu cực thấp', desc: 'Không tạo áp lực gánh nặng trả nợ lớn. Chỉ cần chuẩn bị trước 15% (239 triệu) là có thể ký hợp đồng trực tiếp với chủ đầu tư.' },
    { title: 'Thiết kế thông minh ấm cúng', desc: 'Không gian sống được tính toán tỉ mỉ đến từng centimet, đầy đủ ban công, bếp nấu riêng tư cho 1-2 người ở lý tưởng.' },
    { title: 'Nâng tầm giá trị sống nghỉ dưỡng', desc: 'Sở hữu ngay đặc quyền tắm hồ bơi Olympic 65m, xem phim ngoài trời, tập Gym chất lượng cao ngay tại căn hộ nhà mình.' }
  ];

  const forRent = [
    { title: 'Cận kề các siêu thủ phủ công nghiệp', desc: 'Nằm sát VSIP 1, KCN Việt Hương với hơn 45.000 chuyên gia, kỹ sư ngoại quốc có nhu cầu thuê căn hộ tiện ích khép kín.' },
    { title: 'Phân khúc dễ cho thuê nhất', desc: 'Căn hộ Studio 40m² luôn dẫn đầu về thanh khoản và tỷ lệ lấp đầy phòng trống nhờ tổng giá thuê hợp lý và tiện ích vượt trội.' },
    { title: 'Tỷ suất lợi nhuận cực kỳ hấp dẫn', desc: 'Khai thác cho thuê kỳ vọng đạt từ 8 - 10%/năm từ dòng tiền đều đặn, tối ưu dòng tiền hiệu quả hơn gửi tiết kiệm ngân hàng.' }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-100" id="doi-tuong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Đa Dạng Mục Tiêu</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Giải Pháp Hoàn Hảo Cho Mọi Nhu Cầu Của Bạn
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Dù mua để an cư xây tổ ấm đầu tiên hay đầu tư thông minh đón dòng tiền thụ động, The Emerald Garden View đều thỏa mãn hoàn hảo.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Side-by-side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: For Living */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bento-card bento-emerald-border p-6 sm:p-8 flex flex-col justify-between bg-emerald-50/10"
          >
            {/* Visual background logo */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-700/5 rounded-full"></div>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-emerald-900/10">
                <div className="w-12 h-12 bg-emerald-800 text-gold-200 rounded-xl flex items-center justify-center shadow-md">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">Đối tượng 01</span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-800 leading-none">Người Mua Ở Thực</h3>
                </div>
              </div>

              {/* Tagline list */}
              <div className="space-y-5">
                {forLiving.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-900/10 bg-emerald-100/30 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 text-center text-xs sm:text-sm text-emerald-900 font-semibold flex items-center justify-center gap-1.5">
              <Heart className="w-4 h-4 text-emerald-700 fill-emerald-700" />
              <span>Giải pháp an cư trọn vẹn dành cho thế hệ trẻ năng động</span>
            </div>
          </motion.div>

          {/* Card 2: For Rent / Investment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bento-card bento-amber-border p-6 sm:p-8 flex flex-col justify-between bg-amber-50/10"
          >
            {/* Visual background logo */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-600/5 rounded-full"></div>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-amber-900/10">
                <div className="w-12 h-12 bg-amber-700 text-gold-100 rounded-xl flex items-center justify-center shadow-md">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">Đối tượng 02</span>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-800 leading-none">Nhà Đầu Tư Cho Thuê</h3>
                </div>
              </div>

              {/* Tagline list */}
              <div className="space-y-5">
                {forRent.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-900/10 bg-amber-100/30 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 text-center text-xs sm:text-sm text-amber-950 font-semibold flex items-center justify-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-amber-700" />
              <span>Tích sản bền vững với dòng tiền thụ động ổn định hằng năm</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
