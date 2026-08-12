import { ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react'

export function GuaranteeBlock() {
  return (
    <section id="cam-ket" aria-label="Cam kết chất lượng và chính sách hoàn tiền" className="bg-canvas py-section-sm md:py-section-md">
      <div className="max-w-wide mx-auto px-4 sm:px-8">
        <div className="rounded-card bg-forest text-stone-100 p-8 md:p-14 shadow-glass">
          <p className="font-body text-label-lg font-semibold uppercase tracking-widest text-amber mb-3">CAM KẾT TỪ QUANNGUYENS</p>
          <h2 className="font-display text-display-md text-amber mb-6 leading-[1.2]">
            ✓ Tam thất Bắc nguyên chất&nbsp;
&nbsp;✓ Tuyển chọn kỹ nguyên liệu&nbsp;
&nbsp;✓ Đóng gói cẩn thận&nbsp;
&nbsp;✓ Hỗ trợ đổi trả theo chính sách
          </h2>
          <div className="max-w-content space-y-4 font-body text-body-lg text-stone-300 leading-relaxed mb-10">
            <p>Chúng tôi xây dựng thương hiệu Tam Thất Quân Nguyễn trên một lời hứa: Mỗi hộp sản phẩm đến tay bạn phải đạt chuẩn mực cao nhất về nguồn gốc, độ tinh khiết và trải nghiệm đóng gói.</p>
            <p>Nếu sản phẩm gặp sự cố trong quá trình vận chuyển hoặc không đạt chất lượng cam kết, vui lòng liên hệ trong vòng 30 ngày. Chúng tôi sẽ đổi trả hoặc hoàn tiền 100% ngay lập tức — không thủ tục rườm rà.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-jade/50 font-body text-body-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
              <span>Thanh toán an toàn bảo mật</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-gold shrink-0" />
              <span>Giao hàng nhanh có mã vận đơn</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-gold shrink-0" />
              <span>Đổi trả 30 ngày không lý do</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-gold shrink-0" />
              <span>Chuẩn kiểm nghiệm QUATEST 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
