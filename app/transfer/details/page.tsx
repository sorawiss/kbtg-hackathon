'use client';
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, User, ChevronDown, RefreshCcw } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TransferDetailsContent() {
    const searchParams = useSearchParams();
    const recipientName = searchParams.get('name') || "นายกสิกร รักไทย";

    return (
        <div className="min-h-screen w-full flex justify-center bg-neutral-900">
            <div className="w-full max-w-md min-h-screen bg-white font-sans relative flex flex-col">

                {/* Header Section with Dark Teal Background */}
                <div className="bg-gradient-to-b from-[#2a5a63] to-[#1a3b42] text-white pb-4 relative">
                    <header className="p-4 pt-6 flex items-center justify-between">
                        <Link href="/transfer" className="p-1 hover:bg-white/10 rounded-full transition">
                            <ChevronLeft className="w-8 h-8 text-white/70" />
                        </Link>
                        <h1 className="text-xl font-medium">โอนเงิน</h1>
                        <div className="w-8"></div>
                    </header>

                    {/* Source Account Info */}
                    <div className="px-6 pb-2">
                        <p className="text-gray-300 text-sm mb-2">จาก:</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10">
                                    {/* Mock Bank Icon */}
                                    <div className="w-8 h-6 bg-white/20 rounded-sm flex flex-col gap-0.5 p-0.5">
                                        <div className="h-2 w-full bg-white/40 rounded-[1px]"></div>
                                        <div className="h-full w-full bg-white/40 rounded-[1px]"></div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#34d1bc] text-lg font-medium">กสิกร รักไทย</p>
                                    <p className="text-gray-300 text-sm font-light">xxx-x-x8888-x</p>
                                    <p className="text-gray-300 text-sm font-light">88,888.00 บาท</p>

                                    <div className="flex gap-1 mt-1 justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-1 items-center text-[10px] text-gray-400 mt-2">
                            <RefreshCcw className="w-3 h-3" />
                            <span>ข้อมูล ณ เวลา 9:41 น.</span>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white flex border-b border-gray-200">
                    <Tab label="โอนทันที" active />
                    <Tab label="ตั้งโอนล่วงหน้า" />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 bg-white">
                    <p className="text-gray-600 font-medium mb-2">ไปยัง: บัญชีของฉัน</p>

                    {/* Recipient Card */}
                    <div className="bg-gray-100 rounded-lg p-4 flex items-start gap-4 mb-4 relative">
                        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white overflow-hidden shrink-0">
                            {/* Mock Recipient Icon */}
                            {recipientName !== "นายกสิกร รักไทย" ? (
                                <div className="w-full h-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${recipientName}')` }}></div>
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                    <User className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="text-[#00a99d] font-medium text-lg">{recipientName}</p>
                            <p className="text-gray-500 text-sm">xxx-x-x8888-x</p>
                            <p className="text-gray-500 text-sm">8,000.00 บาท</p>
                        </div>
                        <ChevronDown className="absolute top-4 right-4 text-gray-400 w-5 h-5" />
                    </div>

                    {/* Amount Section */}
                    <div className="mt-4">
                        <p className="text-gray-500 text-sm font-light mb-1">จำนวน:</p>

                        <div className="flex items-end justify-between border-b border-gray-200 pb-2">
                            <input
                                type="text"
                                defaultValue="888.00"
                                className="text-right text-[#34d1bc] text-3xl font-medium w-full bg-transparent outline-none mr-2"
                            />
                            <span className="text-gray-500 pb-1">บาท</span>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 flex justify-between items-center pb-8 mt-auto">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-[#ff5e1f] flex items-center justify-center shadow-md group-hover:bg-[#e04d15] transition">
                            <X className="text-white w-6 h-6" />
                        </div>
                        <span className="text-gray-600 font-medium text-sm">ยกเลิก</span>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-gray-600 font-medium text-sm">ต่อไป</span>
                        <div className="w-10 h-10 rounded-full bg-[#34d1bc] flex items-center justify-center shadow-md group-hover:bg-[#2cbfae] transition">
                            <ChevronRight className="text-white w-6 h-6" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function TransferDetailsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen w-full flex justify-center items-center bg-neutral-900 text-white">Loading...</div>}>
            <TransferDetailsContent />
        </Suspense>
    )
}

function Tab({ label, active = false }: { label: string, active?: boolean }) {
    return (
        <div className={`flex-1 text-center py-3 cursor-pointer border-b-2 text-sm font-medium ${active ? 'border-[#34d1bc] text-[#34d1bc]' : 'border-transparent text-gray-500 hover:bg-gray-50'} `}>
            {label}
        </div>
    )
}
