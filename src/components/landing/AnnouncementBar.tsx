export function AnnouncementBar() {
  const messages = [
    '🌿 Miễn phí vận chuyển đơn từ 500K',
    '✓ Hoàn tiền 100% nếu không hài lòng',
    '🏔️ Cam kết nguồn gốc Bắc Hà Giang — Có tem QR truy xuất',
    '🎁 Miễn phí hộp quà cao cấp cho đơn từ 2 sản phẩm',
  ]
  const repeated = [...messages, ...messages]

  return (
    <div
      role="banner"
      aria-label="Thông báo khuyến mãi"
      className="bg-forest text-amber overflow-hidden py-2"
    >
      <div
        className="flex whitespace-nowrap animate-marquee"
        aria-hidden="true"
      >
        {repeated.map((msg, i) => (
          <span key={i} className="inline-block font-body text-label-lg font-medium uppercase tracking-widest px-12">
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
