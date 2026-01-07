import {
  Bell,
  Power,
  Settings,
  ArrowRightLeft,
  Download,
  ScanBarcode,
  Banknote,
  FileText,
  HandCoins,
  TrendingUp,
  LayoutGrid,
  Home,
  ShoppingBasket,
  QrCode,
  MoreHorizontal
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a3b42] via-[#10252b] to-[#0d1f24] text-white font-sans overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[#2a5a63] opacity-30 blur-3xl pointer-events-none rounded-full transform -translate-y-1/2"></div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 pt-6 z-10 relative">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white/20">
          {/* Placeholder for User Avatar */}
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/profile.jpg')" }}></div>
        </div>
        <div className="text-3xl font-bold tracking-tighter text-white/90">
          K<span className="text-[#00ff80]">+</span>
        </div>
        <div className="flex gap-4 text-gray-300">
          <Bell className="w-6 h-6" />
          <Power className="w-6 h-6" />
        </div>
      </header>

      {/* Account Info */}
      <div className="px-6 mt-2 z-10 relative">
        <h2 className="text-lg font-medium text-gray-200">My Account</h2>
        <p className="text-gray-400 text-sm tracking-wide">xxx-x-x8003-x</p>
      </div>

      {/* Balance Circle */}
      <div className="relative flex flex-col items-center justify-center mt-8 z-10">
        <div className="w-64 h-64 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center relative shadow-2xl">
          <span className="text-gray-300 text-lg font-light">ยอดเงินที่ใช้ได้</span>

          {/* Settings Icon inside circle */}
          <div className="absolute bottom-6 right-8 p-1 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer">
            <Settings className="w-5 h-5 text-gray-300" />
          </div>
        </div>

        <p className="border-none mt-4 text-xs text-gray-500">
          &#x21bb; ข้อมูล ณ เวลา 15:43 น.
        </p>

        {/* Pagination Dots */}
        <div className="flex gap-2 mt-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
        </div>
      </div>

      {/* Main Actions Grid */}
      <div className="grid grid-cols-4 gap-y-8 gap-x-2 px-4 mt-8 z-10 relative">
        <ActionButton icon={<ArrowRightLeft />} label="โอนเงิน" />
        <ActionButton icon={<Download />} label="เติมเงิน" />
        <ActionButton icon={<ScanBarcode />} label="จ่ายบิล" />
        <ActionButton icon={<Banknote />} label="ถอนเงิน" />

        <ActionButton icon={<FileText />} label="Statement" />
        <ActionButton icon={<HandCoins />} label="สินเชื่อ" />
        <ActionButton icon={<TrendingUp />} label="ลงทุน" />
        <ActionButton icon={<LayoutGrid />} label="บริการอื่น" />
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full bg-white text-gray-600 pb-safe pt-2 px-2 flex justify-between items-end h-[80px] border-t border-gray-100/10 rounded-t-xl">
        <NavItem icon={<Home className="w-6 h-6" />} label="หน้าแรก" active />
        <NavItem icon={<ShoppingBasket className="w-6 h-6" />} label="K+ Market" />

        {/* Center Floating Button */}
        <div className="flex flex-col items-center justify-end h-full justify-self-center relative -top-6">
          <div className="w-16 h-16 rounded-full bg-[#34d1bc] flex items-center justify-center shadow-lg border-4 border-[#10252b] mb-1">
            <span className="text-white text-2xl font-bold">฿</span>
          </div>
          <span className="text-[10px] sm:text-xs text-[#34d1bc] font-medium">ธุรกรรม</span>
        </div>

        <NavItem icon={<QrCode className="w-6 h-6" />} label="สแกน" />
        <NavItem icon={<MoreHorizontal className="w-6 h-6" />} label="อื่นๆ" />
      </nav>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactElement; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div className="w-12 h-12 rounded-full border border-gray-500/50 flex items-center justify-center text-gray-300 group-hover:bg-white/10 transition">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
          className: "w-6 h-6",
        })}
      </div>
      <span className="text-gray-400 text-sm font-light">{label}</span>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 w-16 mb-2 cursor-pointer ${active ? 'text-gray-800' : 'text-gray-400'}`}>
      {icon}
      <span className="text-[10px] sm:text-xs">{label}</span>
      {active && <div className="w-8 h-1 bg-gray-600 rounded-full mt-1 opacity-0"></div>}
    </div>
  );
}
