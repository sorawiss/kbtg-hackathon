import Link from "next/link";
import { ChevronLeft, MoreHorizontal, FileText, Smartphone, CreditCard, Landmark, Globe, Users, Wallet } from "lucide-react";
import React from 'react';

export default function TransferPage() {
    return (
        <div className="min-h-screen w-full flex justify-center bg-neutral-900">
            <div className="w-full max-w-md min-h-screen bg-gray-50 text-gray-800 font-sans relative flex flex-col">

                {/* Header */}
                <header className="bg-[#2a5a63] text-white p-4 pt-6 flex items-center justify-between shadow-md">
                    <Link href="/" className="p-1 hover:bg-white/10 rounded-full transition">
                        <ChevronLeft className="w-8 h-8" />
                    </Link>
                    <h1 className="text-xl font-medium">โอนเงิน</h1>
                    {/* Placeholder for spacing to center title effectively or an action button if needed */}
                    <div className="w-8"></div>
                </header>

                {/* Tabs */}
                <div className="bg-white flex border-b border-gray-200">
                    <Tab label="ทำรายการ" active />
                    <Tab label="ประวัติ" />
                    <Tab label="รายการล่วงหน้า" />
                </div>

                {/* Content Container */}
                <div className="flex-1 overflow-y-auto pb-8">

                    {/* Favorites Section */}
                    <div className="bg-white p-4 mb-2">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-gray-600 font-medium text-lg">รายการโปรด</h2>
                            <button className="text-gray-400 text-sm flex items-center">เพิ่มเติม &gt;</button>
                        </div>

                        <div className="flex gap-6 overflow-x-auto pb-2 no-scrollbar">
                            <FavoriteItem name="อลิชา" color="bg-red-500" />
                            <FavoriteItem name="สมชาย" color="bg-blue-500" />
                            <FavoriteItem name="บัญชีพี่ชาย" color="bg-green-500" />
                            <FavoriteItem name="วนิดา" color="bg-purple-500" />
                            <FavoriteItem name="พี่ธราย" color="bg-orange-500" />
                        </div>
                    </div>

                    {/* New Transaction Section */}
                    <div className="bg-white p-4">
                        <h2 className="text-gray-600 font-medium text-lg mb-4">รายการใหม่</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <MenuButton icon={<Landmark className="text-[#005662]" />} title="บัญชีกสิกรไทย" />
                            <MenuButton icon={<CreditCard className="text-[#005662]" />} title="บัญชีธนาคารอื่น" />
                            <MenuButton icon={<Smartphone className="text-[#005662]" />} title="เบอร์มือถือ" />
                            <MenuButton icon={<div className="font-bold text-[#005662] text-[10px] leading-none border-2 border-[#005662] rounded p-px">Prompt<br />Pay</div>} title="พร้อมเพย์" />
                            <MenuButton icon={<Wallet className="text-[#005662]" />} title="บัญชีของฉัน" />
                            <MenuButton icon={<Globe className="text-[#005662]" />} title="โอนเงินต่างประเทศ" />
                            <MenuButton icon={<Users className="text-[#005662]" />} title="โอนเงินเป็นกลุ่ม" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function Tab({ label, active = false }: { label: string, active?: boolean }) {
    return (
        <div className={`flex-1 text-center py-3 cursor-pointer border-b-2 text-sm font-medium ${active ? 'border-[#00a99d] text-[#00a99d]' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>
            {label}
        </div>
    )
}

function FavoriteItem({ name, color }: { name: string, color: string }) {
    return (
        <Link href={`/transfer/details?name=${encodeURIComponent(name)}`} className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer">
            <div className={`w-14 h-14 rounded-full ${color} border-2 border-red-500 p-0.5 flex items-center justify-center overflow-hidden`}>
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500 bg-cover bg-center" style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${name}')` }}>
                </div>
            </div>
            <span className="text-xs text-gray-600 text-center w-full truncate">{name}</span>
        </Link>
    )
}

function MenuButton({ icon, title }: { icon: React.ReactNode, title: string }) {
    return (
        <Link href={`/transfer/details?name=${encodeURIComponent(title)}`} className="flex items-center gap-3 bg-gray-100/50 p-4 rounded-lg hover:bg-gray-100 transition text-left h-20 shadow-sm border border-gray-100 w-full">
            <div className="w-10 h-10 rounded-full bg-[#2a5a63]/10 flex items-center justify-center shrink-0">
                {typeof icon === 'string' ? <span className="text-[#005662] font-bold">{icon}</span> : React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-[#2a5a63]" })}
            </div>
            <span className="text-gray-700 text-sm font-medium leading-tight">{title}</span>
        </Link>
    )
}
