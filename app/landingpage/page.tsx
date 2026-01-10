'use client';
import Link from "next/link";
import { ShieldCheck, Lock, Activity, Smartphone, ChevronRight, Zap, Globe, Server, CheckCircle2, ArrowRight } from "lucide-react";
import React from 'react';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white font-sans overflow-x-hidden">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-[#34d1bc] flex items-center justify-center">
                            <ShieldCheck className="text-[#0a0f1c] w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">K-Fraud Intelligence</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <a href="#features" className="hover:text-[#34d1bc] transition">Features</a>
                        <a href="#technology" className="hover:text-[#34d1bc] transition">Technology</a>
                        <a href="#impact" className="hover:text-[#34d1bc] transition">Impact</a>
                    </div>
                    <Link href="/transfer" className="px-5 py-2.5 bg-[#34d1bc]/10 text-[#34d1bc] border border-[#34d1bc]/20 rounded-full font-medium text-sm hover:bg-[#34d1bc] hover:text-[#0a0f1c] transition-all duration-300">
                        Try Demo
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#34d1bc]/20 rounded-full blur-[120px] opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#34d1bc] text-xs font-medium mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d1bc] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d1bc]"></span>
                        </span>
                        Live Fraud Detection System v2.0
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
                        Secure Every Transaction in Real-Time
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Advanced AI that detects mule accounts, intercepts active scam calls, and blocks fraudulent transfers before they happen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/transfer" className="w-full sm:w-auto px-8 py-4 bg-[#34d1bc] text-[#0a0f1c] rounded-full font-bold text-lg hover:bg-[#2cbfae] transition shadow-[0_0_20px_rgba(52,209,188,0.3)] flex items-center justify-center gap-2 group">
                            Launch Interactive Demo
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
                            <Activity className="w-5 h-5 text-gray-400" />
                            View Backend Stats
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 border-t border-white/5 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <Stat label="Transactions Scanned" value="10M+" />
                        <Stat label="Fraud Prevented" value="$50M" />
                        <Stat label="Latency" value="<50ms" />
                        <Stat label="False Positives" value="0.01%" />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 px-6 relative bg-[#0a0f1c]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Protection Layer</h2>
                        <p className="text-gray-400 max-w-xl mx-auto">Our multi-modal approach analyzes device telemetry, behavioral patterns, and network graphs instantly.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Smartphone className="w-8 h-8 text-[#34d1bc]" />}
                            title="Active Call Detection"
                            description="Detects if a user is on a call with a potential scammer or mirroring their screen during a transaction."
                        />
                        <FeatureCard
                            icon={<Globe className="w-8 h-8 text-blue-400" />}
                            title="Mule Account Mapping"
                            description="Identifies destination accounts linked to known fraud networks using real-time graph analysis."
                        />
                        <FeatureCard
                            icon={<Zap className="w-8 h-8 text-yellow-400" />}
                            title="Velocity Checks"
                            description="Monitors abnormal transfer speeds and high-frequency emptying of accounts."
                        />
                        <FeatureCard
                            icon={<Server className="w-8 h-8 text-purple-400" />}
                            title="Device Fingerprinting"
                            description="Deep analysis of device integrity, location anomalies, and trust scores."
                        />
                        <FeatureCard
                            icon={<Activity className="w-8 h-8 text-red-400" />}
                            title="Behavioral Biometrics"
                            description="Analyzes tap pressure, swipe speed, and navigation pauses to detect coercion."
                        />
                        <FeatureCard
                            icon={<Lock className="w-8 h-8 text-green-400" />}
                            title="Zero-Day Defense"
                            description="Self-learning models that adapt to new scam patterns automatically."
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 bg-[#111827] relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integration Logic</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                The protection layer sits between your mobile app and the core banking ledger. It intercepts transaction requests, runs parallel checks, and returns a verdict in milliseconds without adding friction to safe users.
                            </p>

                            <div className="space-y-6">
                                <Step number="01" title="Signal Collection" desc="App sends telemetry (call status, location, device health) with the request." />
                                <Step number="02" title="Real-time Inference" desc="AI models analyze the payload against 500+ fraud indicators." />
                                <Step number="03" title="Decision & Action" desc="Transaction is either approved, challenged (biometric step-up), or blocked." />
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            {/* Abstract Visualization */}
                            <div className="w-full h-96 bg-gray-900 rounded-2xl border border-gray-800 relative overflow-hidden flex items-center justify-center p-8">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                                <div className="relative z-10 w-full max-w-sm">
                                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-4 opacity-50 scale-95">
                                        <div className="h-2 w-1/3 bg-gray-600 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-gray-600 rounded"></div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg p-6 border border-[#34d1bc] shadow-[0_0_30px_rgba(52,209,188,0.15)] relative">
                                        <div className="absolute -right-3 top-6 w-6 h-6 bg-[#34d1bc] rounded-full flex items-center justify-center text-[#0a0f1c] z-20">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[#34d1bc] font-mono text-xs">SCANNING...</span>
                                            <span className="text-white font-mono text-xs">98% SCORE</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full w-[80%] bg-[#34d1bc]"></div>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full w-[40%] bg-blue-500"></div>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full w-[90%] bg-purple-500"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mt-4 opacity-50 scale-95">
                                        <div className="h-2 w-1/3 bg-gray-600 rounded mb-2"></div>
                                        <div className="h-2 w-full bg-gray-600 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-b from-gray-900 to-[#0a0f1c] p-12 rounded-3xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#34d1bc]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to stop the next scam?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Experience the protection firsthand with our interactive demo.</p>

                    <Link href="/transfer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0f1c] rounded-full font-bold text-lg hover:bg-gray-200 transition">
                        Open Demo App
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 text-gray-500 text-sm text-center">
                <p>&copy; 2024 K-Fraud Intelligence. Built for KBTG Hackathon.</p>
            </footer>

        </div>
    );
}

function Stat({ label, value }: { label: string, value: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{value}</div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">{label}</div>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-[#34d1bc]/30 hover:bg-white/10 transition group">
            <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#34d1bc] transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
        </div>
    )
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6">
            <div className="text-[#34d1bc] font-mono text-xl font-bold pt-1 opacity-50">{number}</div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
