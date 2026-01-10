'use client';
import Link from "next/link";
import { Check, Share2, Download, Home } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ReceiptContent() {
    const searchParams = useSearchParams();
    const recipientName = searchParams.get('name') || "ผู้รับเงิน";
    const amount = searchParams.get('amount') || "888.00";
    const date = new Date().toLocaleString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="min-h-screen w-full flex justify-center bg-neutral-900">
            <div className="w-full max-w-md min-h-screen bg-[#34d1bc] relative flex flex-col items-center pt-20 px-4">

                {/* Check Icon */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg animate-bounce-short">
                    <Check className="w-10 h-10 text-[#00a99d] stroke-[3]" />
                </div>

                <h1 className="text-white text-2xl font-bold mb-8">ทำรายการสำเร็จ</h1>

                {/* Receipt Card */}
                <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden relative">
                    {/* Top Edge Decoration */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00a99d] to-[#34d1bc]"></div>

                    <div className="p-6 pb-8">
                        <div className="text-center border-b border-dashed border-gray-300 pb-6 mb-6">
                            <p className="text-gray-500 text-sm mb-1">{date}</p>
                            <p className="text-gray-400 text-xs">รหัสอ้างอิง: 202401158889990001</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start">
                                <span className="text-gray-500 text-sm">จาก</span>
                                <div className="text-right">
                                    <p className="font-bold text-gray-800">นายกสิกร รักไทย</p>
                                    <p className="text-gray-500 text-xs">xxx-x-x8888-x</p>
                                    <p className="text-gray-500 text-xs">กสิกรไทย</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <span className="text-gray-500 text-sm">ไปยัง</span>
                                <div className="text-right">
                                    <p className="font-bold text-gray-800">{recipientName}</p>
                                    <p className="text-gray-500 text-xs">xxx-x-x1234-x</p>
                                    <p className="text-gray-500 text-xs">กสิกรไทย</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-4 pt-4 flex justify-between items-center">
                                <span className="text-gray-500">จำนวนเงิน</span>
                                <span className="text-2xl font-bold text-[#00a99d]">{amount} <span className="text-sm font-normal text-gray-500">บาท</span></span>
                            </div>

                            <div className="flex justify-between items-center text-xs text-gray-400">
                                <span>ค่าธรรมเนียม</span>
                                <span>0.00 บาท</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom jagged edge effect (simulated) */}
                    <div className="h-4 bg-gray-100 flex">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="flex-1 bg-white rounded-b-full mx-[2px] h-2"></div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="bg-gray-50 p-4 flex justify-around border-t border-gray-100">
                        <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#00a99d]">
                            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                <Share2 className="w-5 h-5" />
                            </div>
                            <span className="text-xs">แชร์</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#00a99d]">
                            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                <Download className="w-5 h-5" />
                            </div>
                            <span className="text-xs">บันทึก</span>
                        </button>
                    </div>
                </div>

                <Link href="/transfer" className="mt-8 bg-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition flex items-center gap-2 backdrop-blur-sm">
                    <Home className="w-5 h-5" />
                    กลับหน้าหลัก
                </Link>

            </div>
        </div>
    );
}

export default function ReceiptPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#34d1bc] text-white">Loading...</div>}>
            <ReceiptContent />
        </Suspense>
    )
}
