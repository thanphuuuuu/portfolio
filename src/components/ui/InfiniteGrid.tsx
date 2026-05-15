import { cn } from "../../lib/utils";

export function InfiniteGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center",
        className,
      )}
    >
      {/* ĐỘ SÂU (PERSPECTIVE): Đổi số 1000px. Số càng nhỏ (vd 500px) thì hiệu ứng hút sâu 3D càng gắt */}
      <div className="absolute inset-0 [perspective:300px] flex items-center justify-center">
        <div
          /* ĐỘ ĐẬM TỔNG THỂ: Đổi opacity-70 thành opacity-30, opacity-100... */
          className="absolute w-[300vw] h-[200vh] bg-grid opacity-70 animate-grid-move"
          /* GÓC NGHIÊNG: Đổi rotateX(75deg) thành góc khác (vd 60deg, 85deg) để xem mặt phẳng lưới ngẩng lên hay gập xuống */
          style={{
            transform: "rotateX(40deg) translateY(-50px) translateZ(-200px)",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#fafafa_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]" />
    </div>
  );
}
