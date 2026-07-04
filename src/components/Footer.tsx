import { Mail, Phone, MapPin, Sparkles, ShieldCheck, Heart, User } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-28 border-t border-emerald-900 relative overflow-hidden">
      {/* Visual background flourishes */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center border border-gold-200/20">
                <span className="font-display font-black text-emerald-950 text-base">EG</span>
              </div>
              <div>
                <span className="font-serif font-bold text-base tracking-wider text-gold-100 uppercase block leading-none">The Emerald</span>
                <span className="font-display text-[9px] tracking-widest text-emerald-300 uppercase block mt-1">Garden View</span>
              </div>
            </div>
            
            <p className="text-xs text-emerald-200/70 leading-relaxed font-light">
              Dự án căn hộ phân khúc Studio 40m² đột phá nhất khu vực Thuận An. Giải pháp an cư bền vững và tích lũy tài sản dài hạn hoàn hảo cho giới trẻ năng động.
            </p>

            <div className="flex items-center space-x-2 text-[10px] text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Pháp lý minh bạch, sổ riêng từng căn</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm sm:text-base text-gold-100 uppercase tracking-wider">Thông Tin Liên Kết</h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <a href="#tong-quan" className="hover:text-gold-200 transition-colors block">Tổng quan dự án</a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-gold-200 transition-colors block">Giải quyết nỗi lo khách hàng</a>
              </li>
              <li>
                <a href="#ly-do-chon" className="hover:text-gold-200 transition-colors block">Tại sao chọn Studio 40m²</a>
              </li>
              <li>
                <a href="#vi-tri" className="hover:text-gold-200 transition-colors block">Vị trí kết nối vùng</a>
              </li>
              <li>
                <a href="#tien-ich" className="hover:text-gold-200 transition-colors block">Hệ sinh thái tiện ích resort</a>
              </li>
              <li>
                <a href="#thanh-toan" className="hover:text-gold-200 transition-colors block">Chính sách trả góp 0%</a>
              </li>
            </ul>
          </div>

          {/* Contact Col (Mr. Khải) */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm sm:text-base text-gold-100 uppercase tracking-wider">Chuyên Viên Tư Vấn</h4>
            
            <div className="p-4 bg-emerald-900/30 border border-emerald-800/40 rounded-xl space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-gold-300 font-bold text-xs shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-emerald-300 block leading-none">Chuyên viên chính</span>
                  <span className="font-bold text-sm text-white block mt-0.5">Mr. Khải</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-emerald-800/40 text-xs text-emerald-200/90">
                <a href="tel:0903423229" className="flex items-center space-x-2.5 hover:text-gold-200 transition-colors">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="font-semibold font-mono">0903.423.229</span>
                </a>
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">VPBH The Emerald Garden View, Phường Thuận An.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal / Notes Col */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm sm:text-base text-gold-100 uppercase tracking-wider">Tuyên Bố Miễn Trừ</h4>
            <p className="text-[10px] text-emerald-200/60 leading-relaxed font-light">
              * Mọi thông số kỹ thuật, hình vẽ phối cảnh và tiện ích được trình bày trên website này mang tính chất tham khảo thiết kế sơ bộ ban đầu tại thời điểm phát hành. Hình ảnh nội thất và tiện ích là hình minh họa ý tưởng thiết kế căn hộ mẫu.
            </p>
            <p className="text-[10px] text-emerald-200/60 leading-relaxed font-light">
              * Chi tiết chính thức và bảng giá chính xác nhất sẽ được thể hiện đầy đủ trên Hợp Đồng Mua Bán được ký kết trực tiếp giữa chủ đầu tư và khách hàng.
            </p>
          </div>

        </div>

        {/* Bottom bar with Secret admin gate */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-emerald-300/60 gap-4">
          <div>
            &copy; {currentYear} The Emerald Garden View. Thiết kế bởi Senior UI/UX Designer & Frontend Team.
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Broker login trigger */}
            <button 
              onClick={onOpenAdmin}
              className="hover:text-gold-300 transition-colors font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              Cổng Broker (Quản lý Lead)
            </button>
            <span>|</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> in Vietnam
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
