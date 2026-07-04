import { motion } from 'motion/react';
import { Calendar, Wallet, CheckCircle, Percent, ArrowRight, Banknote, ShieldAlert } from 'lucide-react';

export default function PaymentPolicy() {
  const steps = [
    {
      step: 'ĐỢT 1',
      title: 'Đăng Ký Đặt Chỗ Ưu Tiên',
      payment: '50 Triệu Đồng',
      percentage: 'Hoàn lại 100%',
      desc: 'Giữ chỗ vị trí đẹp và hưởng chính sách chiết khấu ngày mở bán. Được hoàn trả 100% không mất phí nếu thay đổi quyết định.'
    },
    {
      step: 'ĐỢT 2',
      title: 'Ký Hợp Đồng Mua Bán (HĐMB)',
      payment: 'Chỉ đóng 15%',
      percentage: 'Tương đương ~239tr',
      desc: 'Khoản đầu tư duy nhất bằng vốn tự có của bạn cho đến ngày bàn giao chìa khóa căn hộ. Đã bao gồm 50 triệu đợt đặt chỗ.'
    },
    {
      step: 'ĐỢT 3',
      title: 'Ngân Hàng Giải Ngân Ưu Đãi',
      payment: 'Vay trả góp tới 70%',
      percentage: 'Lãi suất 0% & Ân hạn gốc',
      desc: 'Hỗ trợ lãi suất 0% hằng tháng và ân hạn nợ gốc hoàn toàn cho tới khi nhận bàn giao nhà. Bạn không cần chi trả thêm bất kỳ khoản phí nào.'
    },
    {
      step: 'ĐỢT 4',
      title: 'Bàn Giao Căn Hộ Hoàn Thiện',
      payment: 'Thanh toán 10%',
      percentage: 'Chuẩn bị nhận nhà',
      desc: 'Chủ đầu tư tiến hành bàn giao căn hộ hoàn thiện cơ bản chất lượng cao kèm nội thất dính tường từ các hãng uy tín.'
    },
    {
      step: 'ĐỢT 5',
      title: 'Bàn Giao Sổ Hồng Riêng',
      payment: 'Thanh toán nốt 5%',
      percentage: 'Quyền sở hữu vĩnh viễn',
      desc: 'Hoàn thành bàn giao giấy chứng nhận quyền sở hữu căn hộ vĩnh viễn (sổ hồng riêng từng căn).'
    }
  ];

  return (
    <section id="thanh-toan" className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Chính Sách Tài Chính</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Lộ Trình Thanh Toán Siêu Giãn — Vốn Ban Đầu 15%
          </h2>
          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Phương án tài chính ưu việt được thiết kế riêng giúp các bạn trẻ tối ưu hóa tiền tích lũy và dòng tiền hằng tháng.
          </p>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left - Support Badges & Visual Benefits */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bento-card bento-emerald-border p-6 sm:p-8 space-y-6 bg-white">
              <h3 className="font-serif font-bold text-lg text-slate-900 border-b border-slate-100 pb-4">
                Chính Sách Hỗ Trợ Đặc Biệt
              </h3>
              
              {/* Feature Slat 1 */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-800 border border-emerald-100 shrink-0">
                  <Percent className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Hỗ trợ lãi suất 0%</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Không lo áp lực trả lãi ngân hàng trong suốt thời gian xây dựng cho đến khi nhận nhà.</p>
                </div>
              </div>

              {/* Feature Slat 2 */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-800 border border-emerald-100 shrink-0">
                  <Wallet className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Ân hạn nợ gốc</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Thời điểm ân hạn kéo dài, giúp bạn thảnh thơi tài chính, dễ dàng chuẩn bị tích lũy.</p>
                </div>
              </div>

              {/* Feature Slat 3 */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-800 border border-emerald-100 shrink-0">
                  <Banknote className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Chiết khấu đặc quyền 2%</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Tặng ngay chiết khấu trực tiếp vào hợp đồng mua bán cho những khách hàng đăng ký sớm nhất đợt này.</p>
                </div>
              </div>
            </div>

            {/* Note alert */}
            <div className="bg-emerald-950 text-emerald-100 p-5 rounded-2xl border border-emerald-900 shadow-md flex items-start space-x-3 text-xs sm:text-sm">
              <ShieldAlert className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <span className="font-semibold text-gold-100 block">Lưu Ý Pháp Lý An Toàn</span>
                <p className="text-emerald-200/90 font-light leading-relaxed">
                  Dự án được ngân hàng uy tín hàng đầu phát hành thư bảo lãnh nghĩa vụ bàn giao nhà, đảm bảo an toàn tuyệt đối 100% dòng tiền của quý khách.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Vertical Timeline steps */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative border-l-2 border-emerald-800/20 pl-6 ml-4 sm:ml-6 space-y-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative"
                >
                  {/* Timeline Dot with number */}
                  <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-emerald-800 border-2 border-white flex items-center justify-center text-[10px] text-gold-200 font-bold font-display shadow-md">
                    {idx + 1}
                  </div>

                  {/* Step Card Content */}
                  <div className="bento-card bento-emerald-border p-5 bg-white">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-2.5 border-b border-slate-50">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-800 tracking-wider bg-emerald-50 px-2 py-0.5 rounded uppercase font-mono">{step.step}</span>
                        <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-1.5 leading-none">{step.title}</h4>
                      </div>
                      
                      {/* Cost value tag */}
                      <div className="text-left sm:text-right">
                        <span className="font-display font-black text-sm sm:text-base text-emerald-950 block leading-none">{step.payment}</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">{step.percentage}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
