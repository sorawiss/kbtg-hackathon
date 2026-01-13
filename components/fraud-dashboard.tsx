'use client';
import { CONTACTS_DATA } from "@/lib/mock-data";
import { AlertTriangle, CheckCircle, ShieldAlert, Phone, Monitor, UserPlus, Zap, TrendingDown, FileText, Smartphone, Clock, MapPin } from "lucide-react";
import React from "react";

export default function FraudDashboard({ recipientName }: { recipientName: string | null }) {
    if (!recipientName) return null;

    // Default to 'Safe' if not found, or handle missing data gracefully
    const data = CONTACTS_DATA[recipientName] || null;

    if (!data) {
        return (
            <div className="hidden lg:flex flex-col w-80 bg-gray-900 text-white p-6 border-l border-gray-800 h-screen fixed right-0 top-0 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShieldAlert className="text-gray-500" />
                    Fraud Detection
                </h2>
                <p className="text-gray-400">Waiting for transaction data...</p>
            </div>
        );
    }

    const isHighRisk = data.riskScore >= 70;
    const isMediumRisk = data.riskScore >= 30 && data.riskScore < 70;

    let statusColor = "text-green-500";
    let statusBg = "bg-green-500/10";
    let statusText = "SAFE";

    if (isHighRisk) {
        statusColor = "text-red-500";
        statusBg = "bg-red-500/10";
        statusText = "HIGH RISK";
    } else if (isMediumRisk) {
        statusColor = "text-orange-500";
        statusBg = "bg-orange-500/10";
        statusText = "WARNING";
    }

    return (
        <div className="hidden lg:flex flex-col w-96 bg-[#111827] text-gray-100 p-6 border-l border-gray-800 h-screen sticky top-0 overflow-y-auto font-mono text-sm shadow-2xl z-50">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-white border-b border-gray-800 pb-4">
                <ShieldAlert className="text-[#34d1bc]" />
                AI Two-Way Fraud Detection & Prevention
            </h2>

            {/* Overall Status */}
            <div className={`p-4 rounded-lg mb-6 border ${isHighRisk ? 'border-red-500/50' : isMediumRisk ? 'border-orange-500/50' : 'border-green-500/50'} ${statusBg}`}>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Analysis Result</span>
                    <span className={`font-bold ${statusColor}`}>{statusText}</span>
                </div>
                <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">{data.riskScore}</span>
                    <span className="text-gray-400 mb-1">/ 100 Risk Score</span>
                </div>
                {isHighRisk && <div className="mt-2 text-xs text-red-400 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Transaction block recommended</div>}
            </div>

            {/* Key Indicators */}
            <div className="space-y-4">
                <h3 className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-2">Real-time Signals</h3>

                <IndicatorRow
                    label="Active Call Status"
                    value={data.checks.activeCall.value}
                    status={data.checks.activeCall.status}
                    icon={<Phone className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Screen Sharing"
                    value={data.checks.screenSharing.value}
                    status={data.checks.screenSharing.status}
                    icon={<Monitor className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="New Beneficiary"
                    value={data.checks.newBeneficiary.value}
                    status={data.checks.newBeneficiary.status}
                    icon={<UserPlus className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Velocity Check"
                    value={data.checks.velocity.value}
                    status={data.checks.velocity.status}
                    icon={<Zap className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Balance Depletion"
                    value={data.checks.balanceDepletion.value}
                    status={data.checks.balanceDepletion.status}
                    icon={<TrendingDown className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Memo Analysis"
                    value={data.checks.memoAnalysis.value}
                    status={data.checks.memoAnalysis.status}
                    icon={<FileText className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Device Trust"
                    value={data.checks.deviceTrust.value}
                    status={data.checks.deviceTrust.status}
                    icon={<Smartphone className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Session Duration"
                    value={data.checks.duration.value}
                    status={data.checks.duration.status}
                    icon={<Clock className="w-4 h-4" />}
                />
                <IndicatorRow
                    label="Location"
                    value={data.checks.location.value}
                    status={data.checks.location.status}
                    icon={<MapPin className="w-4 h-4" />}
                />
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-600">
                <p>System ID: KBTG-HACK-2026</p>
            </div>
        </div>
    );
}

function IndicatorRow({ label, value, status, icon }: { label: string, value: string, status: string, icon: React.ReactNode }) {
    let color = "text-green-500";
    let bg = "bg-green-500/20";

    if (status === 'CRITICAL') {
        color = "text-red-500";
        bg = "bg-red-500/20";
    } else if (status === 'WARNING') {
        color = "text-orange-500";
        bg = "bg-orange-500/20";
    }

    return (
        <div className="flex items-center justify-between p-2 rounded bg-gray-800/50 hover:bg-gray-800 transition">
            <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded ${bg} ${color}`}>
                    {icon}
                </div>
                <span className="text-gray-300">{label}</span>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${bg} ${color} border border-opacity-20`}>{value}</span>
        </div>
    );
}
