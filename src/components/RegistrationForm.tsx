import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, CheckCircle, User, Phone, Sparkles, HelpCircle, 
  Coins, Clock, Landmark, Gift, MessageSquareCode, Mail
} from 'lucide-react';
import { LeadSubmission } from '../types';

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState<'living' | 'renting' | 'investing' | ''>('');
  const [budget, setBudget] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation States
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits (remove everything else instantly)
    const val = e.target.value.replace(/\D/g, '');
    setPhone(val);

    // Validate phone input live
    if (val === '') {
      setPhoneError('Vui lòng nhập Số điện thoại!');
    } else if (!val.startsWith('0')) {
      setPhoneError("Số điện thoại phải có số '0' ở đầu (Ví dụ: 0903423229)");
    } else if (val.length !== 10) {
      setPhoneError('Số điện thoại phải có đúng 10 số (Ví dụ: 0903423229)');
    } else {
      setPhoneError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);

    // Validate email input live
    if (val === '') {
      setEmailError('Vui lòng nhập địa chỉ Gmail!');
    } else if (!val.toLowerCase().endsWith('@gmail.com')) {
      setEmailError("Địa chỉ Gmail phải có đuôi '@gmail.com' (Ví dụ: nguyenphongvu@gmail.com)");
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check required fields
    if (!fullName || !phone || !email) {
      alert('Vui lòng điền đầy đủ các thông tin bắt buộc!');
      return;
    }

    let hasError = false;

    // Strict Phone validation
    if (!phone.startsWith('0')) {
      setPhoneError("Số điện thoại phải có số '0' ở đầu (Ví dụ: 0903423229)");
      hasError = true;
    } else if (phone.length !== 10) {
      setPhoneError('Số điện thoại phải có đúng 10 số (Ví dụ: 0903423229)');
      hasError = true;
    } else {
      setPhoneError('');
    }

    // Strict Email validation
    if (!email.toLowerCase().endsWith('@gmail.com')) {
      setEmailError("Địa chỉ Gmail phải có đuôi '@gmail.com' (Ví dụ: nguyenphongvu@gmail.com)");
      hasError = true;
    } else {
      setEmailError('');
    }

    if (hasError) {
      return;
    }

    setIsSubmitting(true);

    // Giả lập gửi API dữ liệu trong 1 giây trước khi lưu
    setTimeout(() => {
      const newLead: LeadSubmission = {
        id: 'lead_' + Math.random().toString(36).substr(2, 9),
        fullName,
        phone,
        email,
        purpose,
        budget: budget || 'Chưa chọn',
        preferredTime: preferredTime || 'Càng sớm càng tốt',
        createdAt: new Date().toISOString(),
        status: 'new'
      };

      // 1. Lưu khách hàng mới vào localStorage để Mr. Khải quản lý trực tiếp qua Portal
      const savedLeads = localStorage.getItem('emerald_garden_leads');
      let leadsList: LeadSubmission[] = [];
      if (savedLeads) {
        try {
          leadsList = JSON.parse(savedLeads);
        } catch (e) {
          console.error('Error parsing leads list', e);
        }
      }
      leadsList.unshift(newLead); // Đưa khách hàng mới lên đầu danh sách
      localStorage.setItem('emerald_garden_leads', JSON.stringify(leadsList));

      // 2. Kích hoạt hiệu ứng thành công
      setIsSubmitting(false);
      setSubmitted(true);

      // ====== PHẦN ĐỂ BẠN TỰ TÍCH HỢP SAU NÀY (CRM, GOOGLE SHEETS, WEBHOOK...) / CHÚ THÍCH THAY THẾ ======
      /*
      // Ví dụ tích hợp gửi dữ liệu khách hàng lên Google Sheet bằng Webhook hoặc Chatbot:
      fetch('LINK_WEBHOOK_CỦA_BẠN_TẠI_ĐÂY', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      })
      .then(res => console.log('Đã đồng bộ lên Google Sheet thành công!'))
      .catch(err => console.error('Lỗi đồng bộ:', err));
      */

    }, 1000);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setPhoneError('');
    setEmailError('');
    setPurpose('');
    setBudget('');
    setPreferredTime('');
    setSubmitted(false);
  };

  const getPurposeVietnamese = (p: string) => {
    switch (p) {
      case 'living': return 'Mua căn hộ để ở thực';
      case 'renting': return 'Đầu tư cho thuê lại';
      case 'investing': return 'Đầu tư sinh lời lâu dài';
      default: return 'Cần tư vấn cụ thể';
    }
  };

  return (
    <section id="dang-ky" className="py-16 bg-gradient-to-b from-slate-900 to-emerald-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Special offer details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-center lg:text-left">
            <span className="px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 text-gold-300 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              Đăng Ký Đợt 1 — Giới Hạn Suất Nội Bộ
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              Đăng Ký Nhận Bảng Giá & <br />
              <span className="bg-gradient-to-r from-gold-300 to-gold-100 bg-clip-text text-transparent">
                Chiết Khấu Ưu Đãi 2%
              </span>
            </h2>
            
            <p className="text-emerald-200 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Điền thông tin của bạn vào biểu mẫu bên cạnh để nhận trọn bộ tài liệu: Bảng giá căn hộ Studio 40m², Mặt bằng sơ đồ chi tiết, Lộ trình thanh toán trả góp chi tiết hằng tháng từ Mr. Khải.
            </p>

            {/* Gifts list cards */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              
              {/* Gift Card 1 */}
              <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50 flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-900 rounded-lg text-gold-400 border border-emerald-800 shrink-0">
                  <Gift className="w-5 h-5 text-gold-300 animate-pulse" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-sm text-gold-200">Chiết khấu 2% cho 30 khách đầu tiên</h4>
                  <p className="text-xs text-emerald-300/80 mt-0.5 leading-relaxed">Trừ trực tiếp vào tổng giá trị căn hộ khi ký kết hợp đồng chính thức.</p>
                </div>
              </div>

              {/* Gift Card 2 */}
              <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50 flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-900 rounded-lg text-gold-400 border border-emerald-800 shrink-0">
                  <Landmark className="w-5 h-5 text-gold-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-sm text-gold-200">Miễn phí 2 năm phí dịch vụ quản lý</h4>
                  <p className="text-xs text-emerald-300/80 mt-0.5 leading-relaxed">Đặc quyền vận hành và dịch vụ công cộng cao cấp chuẩn quốc tế.</p>
                </div>
              </div>

              {/* Gift Card 3 */}
              <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/50 flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-900 rounded-lg text-gold-400 border border-emerald-800 shrink-0">
                  <MessageSquareCode className="w-5 h-5 text-gold-300" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-sm text-gold-200">Tặng trọn bộ thiết kế 3D nội thất Studio</h4>
                  <p className="text-xs text-emerald-300/80 mt-0.5 leading-relaxed">Bộ bản vẽ thiết kế thông minh trị giá 30 triệu đồng từ KTS danh tiếng.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right panel: Main Form inputs / Success panel */}
          <div className="lg:col-span-7 bento-card bento-emerald-border p-6 sm:p-10 bg-white text-slate-800 relative overflow-hidden" id="form-dang-ky-truc-tiep">
            
            {/* Top gold/emerald brand strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-800 via-gold-500 to-emerald-800"></div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                /* Interactive Capture Form */
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="text-center sm:text-left mb-6">
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-emerald-950">
                      Phiếu Đăng Ký Tài Liệu Dự Án
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                      Thông tin của quý khách được cam kết bảo mật tuyệt đối 100%.
                    </p>
                  </div>

                  {/* Input Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-emerald-700" />
                      Họ và Tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="Nhập họ và tên đầy đủ của bạn..."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm font-medium bg-slate-50 focus:bg-white transition-all text-slate-800"
                    />
                  </div>

                  {/* Input Phone / Zalo */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-700" />
                      Số điện thoại / Zalo <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại di động (Ví dụ: 0903423229)"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm font-medium bg-slate-50 focus:bg-white transition-all text-slate-800 ${
                        phoneError ? 'border-rose-500 ring-2 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {phoneError && (
                      <p className="text-xs text-rose-500 font-medium mt-1 flex items-center gap-1" id="phone-error-msg">
                        <span>⚠️</span> {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Input Gmail */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-700" />
                      Địa chỉ Gmail <span className="text-rose-500">*</span>
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="Nhập địa chỉ email của bạn (Ví dụ: nguyenphongvu@gmail.com)"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm font-medium bg-slate-50 focus:bg-white transition-all text-slate-800 ${
                        emailError ? 'border-rose-500 ring-2 focus:ring-rose-500' : 'border-slate-200'
                      }`}
                    />
                    {emailError && (
                      <p className="text-xs text-rose-500 font-medium mt-1 flex items-center gap-1" id="email-error-msg">
                        <span>⚠️</span> {emailError}
                      </p>
                    )}
                  </div>

                  {/* Radio Selector: Purpose of buying */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 text-emerald-700" />
                      Nhu cầu sở hữu chính của bạn?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['living', 'renting', 'investing'] as const).map((p) => {
                        const isSelected = purpose === p;
                        return (
                          <button
                            type="button"
                            key={p}
                            onClick={() => setPurpose(p)}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-200 flex flex-col items-center justify-center gap-1 cursor-pointer ${
                              isSelected
                                ? 'bg-emerald-800 text-gold-100 border-emerald-800 shadow-md'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            <span>
                              {p === 'living' && 'Ở thật'}
                              {p === 'renting' && 'Cho thuê'}
                              {p === 'investing' && 'Đầu tư'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select option: Estimated Budget */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-emerald-700" />
                      Ngân sách dự kiến chuẩn bị của bạn?
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm font-medium bg-slate-50 focus:bg-white text-slate-800 cursor-pointer"
                    >
                      <option value="">-- Vui lòng chọn ngân sách dự kiến --</option>
                      <option value="Dưới 1.5 Tỷ (Cần vay vốn nhiều)">Dưới 1.5 Tỷ (Cần vay vốn nhiều)</option>
                      <option value="1.5 - 2 Tỷ (Ngân sách phù hợp Studio)">1.5 - 2 Tỷ (Phù hợp dòng Studio)</option>
                      <option value="2 - 2.5 Tỷ (Cân nhắc thêm căn 1PN+ hoặc 2PN)">2 - 2.5 Tỷ (Cân nhắc căn lớn hơn)</option>
                      <option value="Trên 2.5 Tỷ (Đầu tư nhiều sản phẩm)">Trên 2.5 Tỷ (Đầu tư nhiều căn)</option>
                    </select>
                  </div>

                  {/* Select option: Preferred time to call */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-700" />
                      Thời gian liên hệ tư vấn phù hợp nhất?
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-sm font-medium bg-slate-50 focus:bg-white text-slate-800 cursor-pointer"
                    >
                      <option value="">-- Chọn thời điểm Broker gọi lại --</option>
                      <option value="Gọi lại ngay bây giờ">Gọi lại ngay bây giờ (Gấp)</option>
                      <option value="Buổi sáng (08h00 - 11h30)">Buổi sáng (08h00 - 11h30)</option>
                      <option value="Buổi chiều (13h30 - 17h30)">Buổi chiều (13h30 - 17h30)</option>
                      <option value="Buổi tối (18h30 - 21h00)">Buổi tối (18h30 - 21h00)</option>
                      <option value="Nhắn tin qua Zalo trước">Nhắn tin Zalo trước, không gọi đột ngột</option>
                    </select>
                  </div>

                  {/* Submit Button with loader */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-900 text-gold-200 hover:brightness-110 disabled:opacity-50 text-base font-bold font-display rounded-xl tracking-wide shadow-xl active:scale-98 transition-all flex items-center justify-center space-x-2 border border-emerald-700/30 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-gold-200 border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang Đăng Ký Hệ Thống...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5 text-gold-300" />
                        <span>Đăng Ký Nhận Bảng Giá Studio 40m²</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Animated Success Panel */
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 border-2 border-emerald-100 shadow-inner">
                    <CheckCircle className="w-10 h-10 text-emerald-700 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-2xl text-emerald-950">Đăng Ký Thành Công!</h3>
                    <p className="text-sm text-slate-600 font-medium px-4">
                      Cảm ơn anh/chị <span className="text-emerald-900 font-extrabold">{fullName}</span> đã gửi phiếu yêu cầu tư vấn.
                    </p>
                  </div>

                  <div className="bg-emerald-50/70 border border-emerald-100/80 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 max-w-md">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Số điện thoại:</span>
                      <span className="font-mono font-bold text-slate-800">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Địa chỉ Gmail:</span>
                      <span className="font-mono font-bold text-slate-800">{email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Nhu cầu đăng ký:</span>
                      <span className="font-semibold text-slate-800">{getPurposeVietnamese(purpose)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Thời gian gọi:</span>
                      <span className="font-semibold text-emerald-800">{preferredTime || 'Gọi lại ngay'}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 max-w-md leading-relaxed px-4">
                    Mr. Khải (Hotline/Zalo: 0903.423.229) sẽ gửi ngay trọn bộ File PDF Bảng giá căn hộ Studio 40m² và file thiết kế 3D qua Zalo của quý khách theo thời gian trên.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full pt-4 max-w-sm">
                    <a 
                      href="tel:0903423229"
                      className="flex-1 py-3 bg-emerald-800 text-gold-100 font-bold font-display rounded-xl shadow-md text-sm hover:bg-emerald-900 transition-colors text-center block"
                    >
                      Gọi Hotline Ngay
                    </a>
                    <button
                      onClick={handleReset}
                      className="flex-1 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      Đăng ký lượt mới
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
