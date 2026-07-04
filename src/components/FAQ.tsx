import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Tiến độ xây dựng và pháp lý hiện tại của dự án như thế nào?',
      answer: 'Dự án The Emerald Garden View đã hoàn thiện 100% giấy phép xây dựng, quy hoạch chi tiết 1/500 và được ngân hàng thương mại phát hành bảo lãnh nghĩa vụ tài chính. Công trình đang được nhà thầu uy tín thi công phần thân cốt thép đúng tiến độ cam kết, cam kết bàn giao đúng quý hạn.'
    },
    {
      question: 'Căn hộ Studio 40m² có được hỗ trợ vay ngân hàng tối đa bao nhiêu?',
      answer: 'Căn hộ Studio 40m² giá chỉ từ 1.5 tỷ được ngân hàng hỗ trợ cho vay tối đa 70% giá trị (khoảng 1.05 tỷ đồng) với thời hạn vay cực kỳ linh hoạt lên đến 20 năm, hỗ trợ chứng minh thu nhập dễ dàng cho người trẻ.'
    },
    {
      question: 'Chính sách "Thanh toán 15% dừng đóng đến khi nhận nhà" hoạt động ra sao?',
      answer: 'Đây là chính sách đột phá của đợt này. Quý khách chỉ cần tự chuẩn bị 15% vốn tự có (khoảng 239 triệu) để ký Hợp Đồng Mua Bán. 70% tiếp theo sẽ được ngân hàng giải ngân trực tiếp cho chủ đầu tư. Chủ đầu tư hỗ trợ trả thay toàn bộ tiền lãi (lãi suất 0%) và ngân hàng ân hạn nợ gốc (bạn không phải trả gốc lẫn lãi hằng tháng) cho tới tận ngày nhận chìa khóa nhà.'
    },
    {
      question: 'Căn Studio 40m² bàn giao thực tế gồm những nội thất trang thiết bị gì?',
      answer: 'Căn hộ được bàn giao tiêu chuẩn hoàn thiện cơ bản chất lượng cao: cửa chính chống cháy vân tay mã số, sàn gỗ phòng ngủ cao cấp, tủ bếp trên và tủ bếp dưới gỗ MDF chống ẩm, bếp từ đôi, máy hút mùi, đầy đủ thiết bị vệ sinh cao cấp từ thương hiệu uy tín, và hệ thống đèn LED âm trần hiện đại tiết kiệm điện.'
    },
    {
      question: 'Dự án có hầm để xe rộng rãi không? Phí quản lý vận hành dự kiến thế nào?',
      answer: 'Dự án thiết kế tới 3 tầng hầm liên thông đỗ xe thông minh hiện đại đảm bảo đầy đủ chỗ đỗ xe ô tô và xe máy riêng cho toàn bộ cư dân. Phí quản lý dự kiến giao động khoảng 12.000đ - 15.000đ/m²/tháng, vận hành bởi tập đoàn quản lý tòa nhà quốc tế chuyên nghiệp.'
    },
    {
      question: 'Khi mua căn hộ Studio tại đây thì bao lâu sẽ nhận được sổ hồng riêng?',
      answer: 'Theo điều khoản quy định trong Hợp Đồng Mua Bán, chủ đầu tư có nghĩa vụ nộp hồ sơ pháp lý cấp sổ hồng riêng cho cư dân trong vòng 6 đến 12 tháng kể từ thời điểm bàn giao thực tế căn hộ. Sổ hồng riêng sở hữu lâu dài vĩnh viễn đối với công dân Việt Nam.'
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-700 font-display font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">Hỏi Đáp Giao Dịch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Những Câu Hỏi Khách Hàng Quan Tâm Nhiều Nhất
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`bento-card bento-emerald-border overflow-hidden ${
                  isOpen 
                    ? 'bg-emerald-50/10' 
                    : ''
                }`}
              >
                {/* Header clickable button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-5 py-4 sm:py-5 flex justify-between items-center space-x-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start space-x-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isOpen ? 'text-emerald-700' : 'text-slate-400'}`} />
                    <span className={`font-semibold text-sm sm:text-base ${isOpen ? 'text-emerald-950 font-bold' : 'text-slate-700 font-medium'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-700" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Animated expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pl-13 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100/50 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Short help note */}
        <div className="mt-10 text-center bg-slate-50 border border-slate-100 p-5 rounded-2xl max-w-xl mx-auto text-xs sm:text-sm text-slate-500">
          Có những thắc mắc riêng biệt chưa được giải đáp hằng ngày? <br />
          Đừng ngần ngại gọi trực tiếp Mr. Khải để nhận giải đáp cặn kẽ 24/7 qua Hotline:{' '}
          <a href="tel:0903423229" className="text-emerald-800 font-bold hover:underline">
            0903.423.229
          </a>
        </div>

      </div>
    </section>
  );
}
