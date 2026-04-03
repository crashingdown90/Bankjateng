"use client";

import React from "react";
import {
    Network,
    Smartphone,
    Database,
    Users,
    ShieldCheck,
    TrendingUp,
    Zap,
    Globe,
    Cpu,
    ShieldAlert,
    Activity,
    Flame,
    LayoutGrid,
    Link,
    Store,
    Map as MapIcon,
    Bot,
    Brain,
    Radio,
    Sprout,
    Trash2,
    CloudRain,
    User,
    GraduationCap,
    Quote,
    Coins,
    LayoutDashboard,
    Landmark,
    Handshake,
    PhoneCall,
    MessageSquare,
    Briefcase,
    ShoppingBag,
    MapPin,
    CalendarCheck,
    FileText,
    Key,
    XCircle,
    Server,
    Settings2,
    Wifi,
    CircleDashed,
    Search,
    CreditCard,
    PieChart,
    BarChart3,
    Route,
    Target,
    ArrowRightLeft,
    HandCoins,
    BarChart,
    Lock,
    Scale,
    Download,
    Layers,
    AlertTriangle,
    Hourglass,
    FileWarning,
    Clock,
    AlertOctagon,
    ZoomIn,
    Leaf,
    TrendingDown,
    Trophy,
    Award,
    HeartHandshake,
    Users2,
    Rocket,
    AlertCircle,
    UserCheck,
    CheckCircle2,
    SendHorizonal,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Slide {
    id: string;
    content: React.JSX.Element;
}

export const slides: Slide[] = [
    {
        id: "intro",
        content: (
            <div className="relative w-full min-h-[400px] md:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col justify-center bg-slate-50 border border-slate-200 shadow-sm">
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-50 to-transparent" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-200/50 rounded-full blur-2xl md:blur-3xl opacity-60 hidden md:block" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-200/40 rounded-full blur-2xl md:blur-3xl opacity-60 hidden md:block" />

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto p-8 md:p-12 relative z-10">
                    
                    {/* Left Typography & Content */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-start gap-4 mb-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1 }}
                            >
                                <Image src="/Bank_Jateng_logo.png" alt="Bank Jateng Logo" className="h-16 md:h-20 w-auto" width={200} height={80} priority />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50/50 backdrop-blur-md border border-secondary-100 shadow-xl"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse-glow" />
                                <span className="text-[10px] sm:text-xs font-black text-secondary-800 tracking-[0.2em] flex items-center gap-1 uppercase">
                                    Strategic Proposal <span className="mx-1 text-slate-300">•</span> Sinergi Bank Jateng
                                </span>
                            </motion.div>
                        </div>

                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-display font-black tracking-tighter text-slate-900 leading-[0.95]"
                            >
                                Ekosistem <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-800 via-primary-500 to-primary-600">
                                    Desa Digital
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-lg"
                            >
                                Akselerasi inklusi keuangan melalui digitalisasi layanan desa, mendorong pertumbuhan <span className="font-black text-slate-900 bg-secondary-50 px-2 rounded">CASA</span> & <span className="font-black text-slate-900 bg-primary-50 px-2 rounded">FBI</span> secara masif.
                            </motion.p>
                        </div>

                        {/* Metrics/Pillars */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="pt-8 border-t border-slate-200/80 flex gap-6 md:gap-12 overflow-x-auto pb-4 scrollbar-hide"
                        >
                            {[
                                { val: "Transaksi PPOB", label: "Jateng Pintar", color: "from-primary-500 to-primary-600" },
                                { val: "Real-time IBC", label: "Siskeudes IBC", color: "from-secondary-700 to-secondary-800" },
                                { val: "Akuisisi Masif", label: "Laku Pandai", color: "from-slate-800 to-slate-900" }
                            ].map((stat, i) => (
                                <div key={i} className="shrink-0 group">
                                    <div className={`text-xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} font-display leading-tight group-hover:scale-105 transition-transform`}>{stat.val}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visualizer */}
                    <div className="relative hidden md:flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="relative w-full aspect-square max-w-md mx-auto"
                        >
                            {/* Decorative Rings */}
                            <div className="absolute inset-4 rounded-full border border-secondary-200/30 animate-[spin_40s_linear_infinite] opacity-50" />
                            <div className="absolute inset-12 rounded-full border border-dashed border-primary-300/30 animate-[spin_30s_linear_infinite_reverse] opacity-50" />
                            
                            {/* Glass Card Stack representing connectivity */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full p-4">
                                    <div className="absolute inset-8 bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[40px] transform rotate-12 scale-90 translate-x-4 translate-y-4" />
                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-[48px] overflow-hidden animate-float">
                                        <Image src="/futuristic_village_cover.png" alt="Desa Digital UI" className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110" width={500} height={500} priority />
                                        
                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent px-8 pb-8 flex flex-col justify-end">
                                            <div className="w-14 h-14 glass-premium rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
                                                <Network className="w-7 h-7 text-primary-500" />
                                            </div>
                                            <div className="text-white font-black text-2xl leading-tight tracking-tight">Connected Village <br/>System</div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                                <div className="text-secondary-200 text-xs font-black uppercase tracking-[0.3em]">Live Core Integration</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        ),
    },
    {
        id: "legal",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/50 backdrop-blur-md border border-slate-200/50 text-slate-700 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm"
                    >
                        <Landmark className="w-4 h-4 text-primary-500 animate-pulse" />
                        Regulatory Framework & Governance
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Mandat & <span className="text-primary-600">Landasan Hukum</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium">Kewajiban strategis Bank Jateng dalam mengakselerasi ekosistem digital desa secara akuntabel.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Pillar 1 */}
                    <div className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600" />
                        <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 ring-8 ring-primary-500/5 shadow-inner">
                            <CreditCard className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight italic">SE Kemendagri</h3>
                        <div className="text-[11px] font-black text-primary-600 mb-6 tracking-widest uppercase bg-primary-50/50 inline-block px-3 py-1.5 rounded-lg border border-primary-100">No. 100.3.3.3/2890/BPD</div>
                        <ul className="text-slate-600 text-sm leading-relaxed space-y-4 list-none font-medium">
                            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />Akselerasi Transaksi Non-Tunai Pemdes secara menyeluruh.</li>
                            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />Penempatan Bank Jateng sebagai **Mitra Utama Strategis**.</li>
                        </ul>
                    </div>

                    {/* Pillar 2 */}
                    <div className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 transform md:-translate-y-4">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary-700 to-secondary-800" />
                        <div className="w-16 h-16 rounded-2xl bg-secondary-900 text-white flex items-center justify-center mb-8 ring-8 ring-secondary-900/5 shadow-2xl">
                            <Database className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight italic">Permendagri 20/2018</h3>
                        <div className="text-[11px] font-black text-secondary-600 mb-6 tracking-widest uppercase bg-secondary-50 inline-block px-3 py-1.5 rounded-lg border border-secondary-100">Siskeudes Integration</div>
                        <ul className="text-slate-600 text-sm leading-relaxed space-y-4 list-none font-medium">
                            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-secondary-700 mt-1.5 shrink-0" />Kewajiban Tata Kelola Keuangan Desa berbasis sistem.</li>
                            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-secondary-700 mt-1.5 shrink-0" />Integrasi **CMS Bank Jateng** dengan **Siskeudes IBC**.</li>
                        </ul>
                    </div>

                    {/* Pillar 3 */}
                    <div className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600" />
                        <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 ring-8 ring-emerald-500/5 shadow-inner">
                            <Scale className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight italic">Perda Jateng 11/22</h3>
                        <div className="text-[11px] font-black text-emerald-600 mb-6 tracking-widest uppercase bg-emerald-50/50 inline-block px-3 py-1.5 rounded-lg border border-emerald-100">BJB Perseroda Mandate</div>
                        <ul className="text-slate-600 text-sm leading-relaxed space-y-4 list-none font-medium">
                            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />Penyertaan Modal & Peran Bank Jateng sebagai Penggerak Ekonomi.</li>
                            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />Fokus pada Inovasi Produk Perbankan Digital Desa.</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">Referensi Regulasi & Kebijakan Strategis</span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: "Pergub Jateng 49/2023", no: "Tata Kelola TIK", desc: "Payung Transformasi Digital Jateng", icon: <Globe className="w-5 h-5" /> },
                            { title: "UU ITE No. 1/2024", no: "Legalitas TTE", desc: "Mandat Tanda Tangan Elektronik", icon: <ShieldCheck className="w-5 h-5" /> },
                            { title: "PP No. 11/2021", no: "BUMDes & Ekonomi", desc: "Sinergi Ekonomi Digital Desa", icon: <Sprout className="w-5 h-5" /> },
                            { title: "Pergub Jateng 47/2016", no: "Sistem Informasi Desa", desc: "Pedoman Pengembangan SID", icon: <Database className="w-5 h-5" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                                <div className="p-2 md:p-2.5 rounded-xl bg-white text-slate-400 group-hover:text-primary-600 border border-slate-200 shadow-sm transition-colors shrink-0">
                                    {item.icon}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-[12px] md:text-sm font-bold text-slate-900 leading-tight truncate">{item.title}</h4>
                                    <div className="text-[9px] md:text-[10px] font-semibold text-slate-500 mb-0.5 truncate">{item.no}</div>
                                    <p className="text-[9px] md:text-[10px] text-slate-400 truncate md:whitespace-normal">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "pain-points",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50/50 backdrop-blur-md border border-amber-100/50 text-amber-900 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm"
                    >
                        <AlertTriangle className="w-4 h-4 text-amber-600 animate-pulse" />
                        The Disconnected Reality
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Tantangan & <span className="text-amber-600">Kebocoran Ekonomi</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium">Tantangan kritis yang menghambat pertumbuhan ekonomi desa secara berkelanjutan.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10 mt-8">
                    {[
                        {
                            title: "Kebocoran PADesa & PBB",
                            desc: "Sistem pungutan manual sangat rentan terhadap *fraud* dan inakurasi data di tingkat akar rumput.",
                            icon: <AlertOctagon className="w-8 h-8" />,
                            color: "text-amber-600",
                            accent: "bg-amber-600"
                        },
                        {
                            title: "Birokrasi Lambat & Boros",
                            desc: "Pelayanan administrasi berbasis kertas menghambat efisiensi birokrasi dan waktu pelayanan warga.",
                            icon: <Hourglass className="w-8 h-8" />,
                            color: "text-secondary-600",
                            accent: "bg-secondary-600"
                        },
                        {
                            title: "Distribusi Bansos Inakurat",
                            desc: "Pendataan sporadis menyebabkan bantuan sosial sering salah sasaran atau terlambat didistribusikan.",
                            icon: <FileWarning className="w-8 h-8" />,
                            color: "text-slate-700",
                            accent: "bg-slate-700"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl"
                        >
                            <div className={`absolute top-0 inset-x-0 h-1 ${item.accent} opacity-50`} />
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 ring-8 ring-slate-500/5 group-hover:scale-110 transition-all duration-300">
                                <div className={`${item.color}`}>{item.icon}</div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight italic">{item.title}</h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 mx-auto glass-premium max-w-4xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border border-amber-200/50"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full" />
                    <div className="w-20 h-20 shrink-0 rounded-[28px] bg-amber-100 flex items-center justify-center border border-amber-200 shadow-inner">
                        <ZoomIn className="w-10 h-10 text-primary-600 animate-pulse-glow" />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 text-2xl mb-2 italic">Status Quo Bukanlah Pilihan</h4>
                        <p className="text-slate-600 text-lg font-medium leading-relaxed italic">
                            Tanpa platform terpusat, Bank Jateng kehilangan potensi akuisisi dana murah (CASA) bernilai triliunan rupiah dari jutaan warga desa yang *unbanked*.
                        </p>
                    </div>
                </motion.div>
            </div>
        ),
    },
    {
        id: "vision",
        content: (
            <div className="min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                    <div className="md:col-span-7 space-y-8 pr-0 md:pr-8 relative z-10">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                            >
                                <Rocket className="w-4 h-4 text-primary-400 animate-pulse" />
                                Strategic Roadmap 2026
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9]"
                            >
                                Vision of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-800 via-primary-500 to-primary-600">Sovereignty</span>
                            </motion.h2>
                            <p className="text-slate-600 text-xl font-medium leading-relaxed italic">Mewujudkan kedaulatan digital melalui orkestrasi teknologi yang inklusif di seluruh penjuru wilayah Jawa Tengah.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Bank Pilihan Utama", desc: "Menjadi jantung operasional finansial desa.", icon: <ShieldCheck className="text-primary-600" /> },
                                { title: "Inklusi Keuangan", desc: "Digitalisasi total layanan perbankan di desa.", icon: <TrendingUp className="text-secondary-600" /> },
                                { title: "Penggerak Ekonomi", desc: "Optimasi PAD desa & pemberdayaan UMKM.", icon: <Briefcase className="text-primary-600" /> },
                                { title: "Executive Monitor", desc: "Data real-time untuk stakeholder daerah.", icon: <LayoutDashboard className="text-secondary-700" /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="p-6 rounded-[32px] bg-white border border-slate-100 shadow-xl group hover:border-primary-200 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-[13px] font-black text-slate-900 leading-tight mb-1">{item.title}</h4>
                                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 relative">
                        <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] rounded-full animate-mesh opacity-50" />
                        <div className="glass-premium p-10 rounded-[48px] shadow-2xl relative overflow-hidden animate-float min-h-[450px] flex flex-col justify-center">
                            <Quote className="w-16 h-16 text-secondary-100 absolute top-8 left-8 -rotate-12 opacity-50" />
                            <blockquote className="text-2xl md:text-3xl font-black italic text-slate-800 relative z-10 leading-[1.1] mb-8">
                                "Sinergi platform desa digital dengan <span className="text-primary-600 underline">Bank Jateng</span> mengunci loyalitas nasabah dan memperluas ekosistem keuangan akar rumput."
                            </blockquote>
                            <div className="pt-8 border-t border-slate-200 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white border-4 border-white shadow-xl">
                                    <Landmark className="w-7 h-7" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-slate-900">Paradigma Baru 2026</div>
                                    <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest">Kolaborasi Strategis Global</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "super-app-ecosystem",
        content: (
            <div className="space-y-4 md:space-y-8 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl animate-pulse-glow"
                    >
                        <Layers className="w-4 h-4 animate-spin-slow" />
                        Integrated Core Architecture
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Ekosistem <span className="text-primary-600 italic">Suka Desa</span> V.2.0
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Satu orkestrasi "All-in-One", di mana <strong className="text-primary-600">Bank Jateng</strong> hadir sebagai jantung penggerak seluruh transaksi.</p>
                </div>

                <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center mt-8">
                    {/* Background Orbit Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-primary-500/10 border-dashed animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-secondary-500/5 animate-[spin_40s_linear_infinite_reverse]" />
                    </div>

                    {[
                        { title: "E-Government", desc: "Digital ID & TTD Elektronik", icon: <FileText />, pos: "top-[-5%] left-1/2 -translate-x-1/2", delay: 0.2, color: "from-slate-800 to-slate-900 text-white" },
                        { title: "Wisata & UMKM", desc: "Ticketing & E-Commerce", icon: <MapPin />, pos: "top-[20%] right-[-5%] md:right-0", delay: 0.3, color: "from-primary-500 to-primary-600 text-white" },
                        { title: "Jaring Pengaman", desc: "Distribusi BLT Digital", icon: <ShieldCheck />, pos: "bottom-[5%] right-[5%] md:right-[10%]", delay: 0.4, color: "from-secondary-700 to-secondary-800 text-white" },
                        { title: "PPOB & Pajak", desc: "Bayar PBB & Multi-Bill", icon: <Zap />, pos: "bottom-[-5%] left-1/2 -translate-x-1/2", delay: 0.5, color: "from-emerald-600 to-emerald-700 text-white" },
                        { title: "Aduan Publik", desc: "Respon Cepat Warga", icon: <MessageSquare />, pos: "bottom-[5%] left-[5%] md:left-[10%]", delay: 0.6, color: "from-secondary-900 to-slate-900 text-white" },
                        { title: "Kesehatan", desc: "Posyandu & Stunting", icon: <Activity />, pos: "top-[20%] left-[-5%] md:left-0", delay: 0.7, color: "from-rose-500 to-rose-600 text-white" }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: node.delay, type: "spring", stiffness: 100 }}
                            className={`absolute ${node.pos} w-[130px] md:w-[170px] p-4 rounded-[32px] glass-premium shadow-2xl text-center group hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-20`}
                        >
                            <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-2xl flex items-center justify-center mb-3 shadow-xl bg-gradient-to-br ${node.color}`}>
                                {node.icon}
                            </div>
                            <h4 className="text-[11px] md:text-sm font-black text-slate-800 leading-tight mb-1">{node.title}</h4>
                            <p className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-widest hidden md:block">{node.desc}</p>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="relative z-30 w-[200px] h-[200px] md:w-[260px] md:h-[260px]"
                    >
                        <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse-glow" />
                        <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-600 p-[2px] shadow-[0_32px_64px_rgba(15,23,42,0.3)]">
                            <div className="w-full h-full rounded-[46px] bg-white flex flex-col items-center justify-center p-8 text-center animate-mesh">
                                <div className="w-16 h-16 glass-premium rounded-full flex items-center justify-center mb-4 shadow-inner">
                                    <Landmark className="w-8 h-8 text-secondary-800" />
                                </div>
                                <h3 className="text-xl font-display font-black text-slate-900 leading-tight italic">Bank Jateng <br/>Core Open API</h3>
                                <div className="text-[9px] font-black text-primary-600 uppercase tracking-[0.3em] mt-2 mb-3">The Financial Heart</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: "grand-vision",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50/50 backdrop-blur-md border border-slate-200/50 text-slate-800 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm"
                    >
                        <Network className="w-4 h-4 text-secondary-700 animate-pulse" />
                        Pondasi Desa Digital 4.0
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-3xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Kedaulatan & <span className="text-secondary-800 underline decoration-primary-500 decoration-8">Transformasi Digital</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Mengubah entitas desa dari "Objek Pembangunan" menjadi <span className="text-secondary-800 font-black">"Subjek Inovasi"</span>.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { 
                            title: "Kedaulatan Data Lokal", 
                            desc: "Platform 'Custom Ownership' alias milik desa sepenuhnya, menjamin keamanan data warga Jawa Tengah.", 
                            icon: <ShieldCheck className="w-8 h-8" />, 
                            color: "from-primary-500 to-primary-600"
                        },
                        { 
                            title: "Layanan Publik Mandiri", 
                            desc: "Sistem Administrasi Desa dengan Tanda Tangan Elektronik terintegrasi CMS Bank Jateng.", 
                            icon: <FileText className="w-8 h-8" />, 
                            color: "from-secondary-600 to-secondary-700"
                        },
                        { 
                            title: "Big Data & Analitik", 
                            desc: "Pengambilan kebijakan berbasis data lapangan real-time untuk efisiensi anggaran desa.", 
                            icon: <Database className="w-8 h-8" />, 
                            color: "from-secondary-800 to-secondary-950"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl"
                        >
                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.color}`} />
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 ring-8 ring-slate-500/5 group-hover:rotate-12 transition-transform">
                                <div className="text-slate-800">{item.icon}</div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight italic">{item.title}</h3>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "advanced-tech",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Cpu className="w-4 h-4 text-primary-400 animate-pulse" />
                        Next-Gen Cognitive Infrastructure
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Evolusi <span className="text-primary-600 italic">Kecerdasan Buatan</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Transformasi tata kelola desa melalui kognisi digital untuk akurasi kebijakan mutlak.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                    {/* Hero AI Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:col-span-12 lg:col-span-7 group relative rounded-[48px] overflow-hidden bg-slate-950 h-[400px] md:h-[550px] shadow-2xl border border-white/10 animate-float"
                    >
                        <Image 
                            src="/ai_village_evolution.png" 
                            alt="AI Evolution Future" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3s]"
                            width={1000} height={800} sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-12 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-[10px] font-black tracking-widest uppercase shadow-xl backdrop-blur-md">
                                <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Analysis Active
                            </div>
                            <h3 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter italic">Cognitive <br/>Governance</h3>
                            <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed italic">
                                Integrasi sensor cerdas dan Generative AI untuk mitigasi risiko sosial & kedaulatan data finansial secara otonom.
                            </p>
                        </div>
                    </motion.div>

                    {/* Features Grid Right Side */}
                    <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-6">
                        {[
                            { 
                                title: "DesaBot (Gen-AI)", 
                                desc: "Asisten cerdas 24/7 untuk birokrasi & regulasi hukum desa.", 
                                icon: <Bot />,
                                color: "from-primary-500 to-primary-600 text-white"
                            },
                            { 
                                title: "Fraud Guard (AI)", 
                                desc: "Algoritma pemantauan anomali kas desa secara real-time.", 
                                icon: <ShieldAlert />,
                                color: "from-secondary-800 to-slate-900 text-white"
                            },
                            { 
                                title: "Precision Mapping", 
                                desc: "GIS kognitif untuk akurasi bantuan sosial warga Jawa Tengah.", 
                                icon: <Brain />,
                                color: "from-emerald-500 to-emerald-600 text-white"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="glass-premium p-6 rounded-[32px] flex items-center gap-6 group hover:scale-[1.05] transition-all duration-300 cursor-pointer"
                            >
                                <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl bg-gradient-to-br ${item.color} group-hover:rotate-12 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 italic">{item.title}</h4>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-6 rounded-[32px] bg-gradient-to-br from-secondary-900 to-slate-950 text-white border border-white/10 shadow-2xl flex items-center justify-between group overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[60px] rounded-full" />
                            <div className="flex items-center gap-6 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary-400 shadow-inner group-hover:scale-110 transition-transform">
                                    <Radio className="w-6 h-6 animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black italic">Smart IoT Mitigation</h4>
                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary-400 mt-1">Status: Active & Syncing</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "economic-ecosystem",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/50 backdrop-blur-md border border-emerald-100/50 text-emerald-800 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm"
                        >
                            <Coins className="w-4 h-4 text-emerald-600 animate-pulse" />
                            Financial Gravitational Pull
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                        >
                            Ekosistem <br />
                            <span className="text-emerald-600 italic">Pertumbuhan Ekonomi</span>
                        </motion.h2>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Impact Projection</div>
                        <div className="text-4xl font-black text-slate-900 leading-none tracking-tighter italic">CASA Expansion</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    {[
                        { title: "Retail CASA", val: "+245%", desc: "Akusisi dana murah melalui Laku Pandai & Jateng Pintar.", color: "from-emerald-500 to-emerald-600" },
                        { title: "FBI Growth", val: "+180%", desc: "Fee-based income dari transaksi PPOB & retribusi.", color: "from-secondary-700 to-secondary-800" },
                        { title: "BUMDes Credit", val: "Trillions", desc: "Plafon kredit produktif untuk penggerak ekonomi desa.", color: "from-primary-500 to-primary-600" },
                        { title: "Gov Funding", val: "100%", desc: "Optimalisasi Siskeudes & dana desa melalui Bank Jateng.", color: "from-slate-800 to-slate-900" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${stat.color}`} />
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{stat.title}</div>
                            <div className="text-4xl font-black text-slate-900 mb-2 italic tracking-tighter group-hover:scale-110 transition-transform">{stat.val}</div>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 w-full glass-premium rounded-[48px] overflow-hidden p-10 flex flex-col md:flex-row items-center gap-12 border-emerald-100/50">
                    <div className="w-full md:w-1/2 relative space-y-6">
                        <div className="text-emerald-600 font-black text-[10px] tracking-[0.4em] uppercase">Connectivity Map</div>
                        <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 leading-none italic">Omni-Channel Desa</h3>
                        <p className="text-slate-600 font-medium leading-relaxed italic">
                            Menghubungkan warga, pasar, dan perbankan dalam satu jalinan digital yang tak terputus (Seamless Financial Journey).
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-video glass-premium rounded-[32px] overflow-hidden shadow-2xl animate-float">
                            <Image 
                                src="/economic_ecosystem_chart.png" 
                                alt="Economic Ecosystem" 
                                className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
                                width={800} height={450} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "jateng-programs",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Zap className="w-4 h-4 text-amber-600" />
                        Sinergi Program Unggulan
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Integrasi Lintas Platform Bank Jateng</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Mengorkestrasi inisiatif unggulan Bank Jateng dalam satu platform desa super app yang komprehensif.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "Jateng Pintar", subtitle: "Bumdes Ngahiji", desc: "Digitalisasi pembayaran PBB-P2 dan pajak kendaraan via BUMDes, mendongkrak fee-based income Bank Jateng.", icon: <Coins className="w-8 h-8" />, color: "from-secondary-500/10 to-transparent", borderColor: "border-secondary-200", accent: "text-secondary-700" },
                        { title: "Siskeudes IBC", subtitle: "Internet Banking Corp", desc: "Integrasi real-time keuangan desa dengan sistem Bank Jateng. Meningkatkan transaparansi dan volume transaksi giro desa.", icon: <Database className="w-8 h-8" />, color: "from-slate-500/10 to-transparent", borderColor: "border-slate-200", accent: "text-slate-700" },
                        { title: "PESAT UMKM", subtitle: "Pemberdayaan Ekonomi", desc: "Memfasilitasi UMKM desa masuk e-commerce terintegrasi QRIS Bank Jateng, membuka jalur kredit mikro bagi pelaku usaha lokal.", icon: <ShoppingBag className="w-8 h-8" />, color: "from-primary-500/10 to-transparent", borderColor: "border-primary-200", accent: "text-primary-600" },
                        { title: "Bank Jateng Bisa", subtitle: "Laku Pandai", desc: "Menjadikan aplikasi desa sebagai pintu percepatan program 1 BUMDes 1 Agen, mengakuisisi ribuan nasabah baru massal.", icon: <Network className="w-8 h-8" />, color: "from-secondary-800/10 to-transparent", borderColor: "border-secondary-300", accent: "text-secondary-800" }
                    ].map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className={`p-6 md:p-8 rounded-[32px] bg-white border ${prog.borderColor} shadow-lg relative overflow-hidden group hover:shadow-2xl transition-all flex flex-col`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${prog.color} opacity-50`} />
                            
                            <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 relative z-10 ${prog.accent}`}>
                                {prog.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-900 leading-tight relative z-10">{prog.title}</h3>
                            <div className={`text-[11px] font-bold ${prog.accent} mb-4 tracking-wider uppercase inline-block py-1 relative z-10`}>{prog.subtitle}</div>
                            
                            <p className="text-slate-600 text-sm leading-relaxed relative z-10 flex-grow">
                                {prog.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "value-proposition",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl"
                    >
                        <Target className="w-3.5 h-3.5 text-primary-400" />
                        Strategic Value Core
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Pilar Utama <span className="text-primary-600 underline decoration-slate-900 decoration-8 underline-offset-8">Keuntungan</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Mengapa orkestrasi ini adalah keharusan mutlak bagi kedaulatan bisnis Bank Jateng.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { title: "Customer Lock-in", desc: "Mengunci loyalitas perangkat desa & warga melalui ekosistem transaksi harian yang terintegrasi.", icon: <ShieldCheck />, color: "from-secondary-800 to-slate-950" },
                        { title: "Massive Acquisition", desc: "Akuisisi nasabah baru secara otomatis & massal melalui digitalisasi bansos & kependudukan.", icon: <Users />, color: "from-primary-500 to-primary-600" },
                        { title: "Revenue Stream", desc: "Fee-Based Income masif dari setiap transaksi PPOB & aktivitas ekonomi BUMDes di platform.", icon: <Coins />, color: "from-slate-700 to-slate-900" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-10 rounded-[48px] relative overflow-hidden group hover:scale-[1.05] transition-all duration-500 shadow-2xl border-white/20"
                        >
                            <div className={`w-20 h-20 rounded-[24px] bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-2xl group-hover:rotate-12 transition-transform ring-8 ring-slate-500/5`}>
                                <div className="text-white scale-125">{item.icon}</div>
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight italic tracking-tighter">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm font-medium italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "market-opportunity",
        content: (
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 min-h-[70vh] py-8 items-center">
                <div className="space-y-8 relative z-10">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl"
                        >
                            <Globe className="w-4 h-4 text-primary-400 animate-spin-slow" />
                            Market Expansion Potential
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9]"
                        >
                            Blue Ocean <br />
                            <span className="text-primary-600 italic">Jawa Tengah</span>
                        </motion.h2>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium italic">Eksploitasi potensi ekonomi digital pedesaan yang belum terjamah di basis wilayah utama Bank Jateng.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: "Total Desa", value: "7.810", sub: "Titik Penetrasi", icon: <MapPin className="text-primary-600" /> },
                            { label: "Populasi", value: "35jt+", sub: "Massive Base", icon: <Users className="text-secondary-600" /> },
                            { label: "Village Fund", value: "RP 6T+", sub: "Annual Flow", icon: <Coins className="text-emerald-600" /> },
                            { label: "SME Ecosystem", value: "1.2jt+", sub: "Credit Potential", icon: <Briefcase className="text-slate-700" /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="glass-premium p-6 rounded-[32px] border-white/20 shadow-xl group hover:scale-[1.05] transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-inner">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-black text-slate-900 tracking-tighter italic">{stat.value}</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                                <div className="text-[9px] text-primary-600 font-black mt-0.5">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] rounded-full animate-mesh opacity-50" />
                    <div className="relative glass-premium min-h-[500px] rounded-[60px] border-white/20 shadow-2xl p-12 flex flex-col justify-center animate-float">
                        <PieChart className="w-48 h-48 text-primary-500 absolute -top-10 -right-10 opacity-20 animate-spin-slow" />
                        <div className="space-y-8 relative z-10 w-full">
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center mx-auto shadow-2xl border-4 border-white"
                            >
                                <TrendingUp className="w-10 h-10 text-primary-400" />
                            </motion.div>
                            <div className="text-center">
                                <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">Market Dominance</h3>
                                <p className="text-slate-500 max-w-xs mx-auto text-sm font-medium mt-2">Satu-satunya solusi yang terintegrasi secara legal dengan TTE & SIA Desa.</p>
                            </div>
                            
                            <div className="pt-8 space-y-6">
                                {[
                                    { label: "Bank Jateng (Current)", val: "65%", color: "bg-slate-300" },
                                    { label: "Target Projection (2026)", val: "92%", color: "bg-gradient-to-r from-primary-500 to-secondary-700 shadow-lg shadow-primary-500/50" },
                                ].map((bar, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                                            <span>{bar.label}</span>
                                            <span className="text-slate-900">{bar.val}</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-100/50 rounded-full overflow-hidden border border-slate-200">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: bar.val }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2 + (idx * 0.2) }}
                                                className={`h-full ${bar.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "jateng-killer-features",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-900 text-white text-[10px] font-black tracking-[0.3em] uppercase shadow-2xl"
                    >
                        <Zap className="w-4 h-4 text-primary-400 animate-pulse" />
                        Executive Strategic Dominance
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Fitur <span className="text-primary-600 italic text-shadow-glow">Diferensiasi Eksklusif</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Teknologi premium yang mengunci ekosistem pedesaan Jawa Tengah secara mutlak.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative z-10 pt-4">
                    {[
                        {
                            title: "Data-Driven KUR Scoring",
                            badge: "NPL Prevention 0.0%",
                            desc: "AI-Scoring berbasis riwayat bayar PBB & utilitas warga untuk Pre-Approve kredit produktif secara masif.",
                            icon: <BarChart3 className="w-8 h-8 text-white" />,
                            color: "from-secondary-800 to-slate-950"
                        },
                        {
                            title: "Payroll Ecosystem Lock-in",
                            badge: "250K+ Monthly Recurrent",
                            desc: "Otomatisasi Payroll Siltap Perangkat Desa & Insentif Guru Ngaji serentak via Ledger Bank Jateng.",
                            icon: <HandCoins className="w-8 h-8 text-white" />,
                            color: "from-primary-500 to-primary-600"
                        },
                        {
                            title: "Smart ID Multi-Utility",
                            badge: "Omni-Channel Card",
                            desc: "Kartu Pelayanan Desa terintegrasi e-Money Bank Jateng untuk akses bansos, transportasi, & transaksi.",
                            icon: <CreditCard className="w-8 h-8 text-white" />,
                            color: "from-slate-800 to-slate-900"
                        },
                        {
                            title: "Gamifikasi CSR Berbasis Laba",
                            badge: "High Growth Reward",
                            desc: "Sistem kompetisi antar desa dengan reward CSR produktif bagi desa dengan omzet transaksi tertinggi.",
                            icon: <Trophy className="w-8 h-8 text-white" />,
                            color: "from-emerald-500 to-emerald-600"
                        }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-10 rounded-[48px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl border-white/20"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                <div className={`shrink-0 w-20 h-20 rounded-[24px] bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform ring-8 ring-slate-500/5`}>
                                    {feature.icon}
                                </div>
                                <div className="space-y-4">
                                    <div className="inline-block px-3 py-1 rounded bg-slate-900 text-primary-400 text-[10px] font-black tracking-widest uppercase">
                                        {feature.badge}
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter leading-none">{feature.title}</h3>
                                    <p className="text-slate-600 text-[13px] font-medium leading-relaxed italic">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "roi-analysis",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/50 backdrop-blur-md border border-emerald-100/50 text-emerald-800 text-[10px] font-black tracking-[0.2em] uppercase shadow-sm"
                        >
                            <BarChart3 className="w-4 h-4 text-emerald-600 animate-pulse" />
                            Financial Impact Projection
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                        >
                            Proyeksi <span className="text-emerald-600 italic text-shadow-glow">Nilai Ekonomi</span>
                        </motion.h2>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Total Target Value</div>
                        <div className="text-4xl font-black text-slate-900 leading-none tracking-tighter italic">Rp 1.5 Trillion+</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "CASA Growth", value: "Rp 1.5 T", desc: "Digitalisasi 7.809 desa mengunci likuiditas dana desa eksklusif di Bank Jateng.", icon: <Coins />, color: "from-primary-500 to-primary-600", pct: "85%" },
                        { title: "FBI Scaling", value: "↑ 185%", desc: "Monetisasi transaksi PBB & PPOB secara otomatis di seluruh ekosistem.", icon: <CreditCard />, color: "from-secondary-700 to-secondary-900", pct: "70%" },
                        { title: "OPEX Efficiency", value: "↓ 40%", desc: "Pemangkasan biaya distribusi bansos tunai melalui sistem biometrik.", icon: <Zap />, color: "from-emerald-500 to-emerald-600", pct: "40%" },
                        { title: "Strategic Moat", value: "100%", desc: "Kedaulatan ledger perbankan yang tidak bisa ditembus oleh kompetitor fintech.", icon: <ShieldCheck />, color: "from-slate-800 to-slate-950", pct: "100%" }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.02] transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                                    {card.icon}
                                </div>
                                <div className="text-2xl font-black text-slate-900 tracking-tighter italic">{card.value}</div>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-2 leading-none italic relative z-10">{card.title}</h3>
                            <p className="text-slate-500 text-[12px] font-medium leading-relaxed italic mb-6 relative z-10">{card.desc}</p>
                            
                            <div className="space-y-1.5 mt-auto relative z-10">
                                <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-400">
                                    <span>Projection</span>
                                    <span className="text-slate-900">{card.pct}</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100/50 rounded-full overflow-hidden border border-slate-100">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: card.pct }}
                                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                                        className={`h-full bg-gradient-to-r ${card.color}`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "jateng-strategic-dominance",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Lock className="w-4 h-4 text-primary-400 animate-pulse" />
                        The Absolute Competitive Moat
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Strategic <span className="text-primary-600 italic">Dominance</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Bukan sekadar kemitraan, melainkan penguasaan ekosistem melalui kedaulatan data & regulasi.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-6">
                    {[
                        { title: "Zero-Cost Acquisition", sub: "CAC Rp 0", desc: "Akuisisi nasabah massal tanpa biaya marketing & pembukaan cabang fisik.", icon: <Target />, color: "from-primary-500 to-primary-600" },
                        { title: "Monopoli Big Data", sub: "Aset Intelijen", desc: "Menguasai data profil belanja & kapasitas utang warga sebagai aset penawaran kredit.", icon: <Database />, color: "from-secondary-700 to-secondary-900" },
                        { title: "Infinite Loop FBI", sub: "Fee-based Income", desc: "Mengubah peredaran pajak & e-commerce desa menjadi aliran revenue berulang.", icon: <Coins />, color: "from-emerald-500 to-emerald-600" },
                        { title: "The Defensive Moat", sub: "Benteng Regulasi", desc: "Integrasi API sistem desa otomatis memblokir Bank Umum lain & Fintech.", icon: <ShieldCheck />, color: "from-slate-800 to-slate-950" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.color} opacity-80`} />
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform ring-8 ring-slate-500/5">
                                <div className="text-slate-900">{item.icon}</div>
                            </div>
                            <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-2">{item.sub}</div>
                            <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight italic tracking-tighter">{item.title}</h3>
                            <p className="text-slate-600 text-[12px] font-medium leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "integration-roadmap",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Network className="w-4 h-4 text-primary-400 animate-pulse" />
                        Strategic Execution Roadmap
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Timeline <span className="text-primary-600 italic text-shadow-glow">Transformasi Digital</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Orkestrasi teknis dan regulasi yang terukur untuk menjamin keberlanjutan ekosistem.</p>
                </div>

                <div className="relative pt-12 relative z-10 w-full max-w-6xl mx-auto">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { phase: "Fase 01", title: "Integrasi CMS", desc: "Penyelarasan API Bank Jateng & Portal Desa.", period: "Month 1-2", icon: <Link />, color: "from-secondary-500 to-secondary-600" },
                            { phase: "Fase 02", title: "Pilot Scaling", desc: "Aktivasi 100 desa perdana & training perangkat.", period: "Month 3-4", icon: <Rocket />, color: "from-emerald-500 to-emerald-600" },
                            { phase: "Fase 03", title: "Full Rollout", desc: "Ekspansi ke 7.809 desa se-Jawa Tengah.", period: "Month 5-9", icon: <Globe />, color: "from-primary-500 to-primary-600" },
                            { phase: "Fase 04", title: "CASA Dominance", desc: "Stabilisasi ekosistem & optimalisasi revenue.", period: "Month 10+", icon: <TrendingUp />, color: "from-slate-800 to-slate-950" }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.05] transition-all duration-500 shadow-2xl border-white/20"
                            >
                                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${step.color} opacity-80`} />
                                <div className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-2">{step.phase}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-1 italic tracking-tighter leading-none">{step.title}</h3>
                                <div className="text-[10px] font-black text-slate-400 mb-6 uppercase tracking-[0.3em] font-display">{step.period}</div>
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-xl ring-8 ring-slate-500/5">
                                    <div className="text-slate-900">{step.icon}</div>
                                </div>
                                <p className="text-slate-600 text-[12px] font-medium leading-relaxed italic">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "partnership-model",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-6 space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                            >
                                <Users2 className="w-4 h-4 text-primary-400 animate-bounce" />
                                Tri-Pillar Strategic Synergy
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-[0.9] italic"
                            >
                                Sinergi <br/><span className="text-primary-600">Tiga Pilar</span>
                            </motion.h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-primary-500 pl-6">Orkestrasi kolaboratif demi kedaulatan digital dan kemandirian fiskal desa Jawa Tengah.</p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                { role: "Regulator", entity: "Pemerintah Daerah", icon: <ShieldCheck />, color: "from-slate-800 to-slate-950" },
                                { role: "Fin Backbone", entity: "Bank Jateng", icon: <Landmark />, color: "from-secondary-700 to-secondary-900" },
                                { role: "Innovation", entity: "Tech Partner", icon: <Cpu />, color: "from-primary-500 to-primary-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="glass-premium p-6 rounded-[32px] flex items-center gap-6 group hover:scale-[1.02] transition-all"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest leading-none mb-1">{item.role}</div>
                                        <div className="text-2xl font-black text-slate-900 italic tracking-tighter leading-none">{item.entity}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6 relative flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-full aspect-square max-w-lg"
                        >
                            <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
                            <div className="relative z-10 w-full h-full glass-premium rounded-[60px] overflow-hidden border-white/20 shadow-2xl p-4">
                                <Image 
                                    src="/strategic_synergy.png" 
                                    alt="Strategic Synergy" 
                                    className="w-full h-full object-cover rounded-[50px] opacity-90 group-hover:scale-110 transition-transform duration-[3s]"
                                    width={800} height={800}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                <div className="absolute bottom-10 inset-x-10 p-6 glass rounded-3xl border border-white/20 text-center">
                                    <div className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-1">Impact Consensus</div>
                                    <div className="text-white text-2xl font-black italic tracking-tighter">Digital Sovereignty</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "compliance",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400 animate-pulse" />
                        Governance & Regulatory Compliance
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Tata Kelola & <span className="text-primary-600 italic">Kepatuhan</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Mitigasi risiko dan kepastian hukum yang rigid untuk keamanan ekosistem perbankan.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "Smart Village", entity: "KEMENDESA", desc: "Alignment dengan Permendesa No. 2/2024.", icon: <Globe />, color: "from-slate-800 to-slate-950" },
                        { title: "ISO 27001", entity: "CYBERSECURITY", desc: "Infrastruktur berlapis & Anti-Ransomware.", icon: <ShieldAlert />, color: "from-secondary-700 to-secondary-900" },
                        { title: "UU PDP", entity: "DATA PRIVACY", desc: "Proteksi NIK & Data Warga sesuai UU PDP.", icon: <Lock />, color: "from-primary-500 to-primary-600" },
                        { title: "Siskeudes", entity: "KEMENDAGRI", desc: "Sesuai standar Permendagri No. 20/2018.", icon: <Database />, color: "from-slate-700 to-slate-900" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 shadow-2xl border-white/20"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-xl ring-8 ring-slate-500/5">
                                <div className="text-slate-900">{item.icon}</div>
                            </div>
                            <div className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-1">{item.entity}</div>
                            <h3 className="text-xl font-black text-slate-900 mb-2 italic tracking-tighter leading-tight">{item.title}</h3>
                            <p className="text-slate-600 text-[12px] font-medium leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-950 p-8 md:p-10 rounded-[50px] flex md:flex-row flex-col items-center gap-8 justify-between shadow-3xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="flex items-center gap-8 relative z-10">
                        <div className="w-20 h-20 rounded-[30px] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-primary-400 shadow-2xl group-hover:rotate-6 transition-transform ring-12 ring-white/5">
                            <Scale className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-black text-white italic tracking-tighter mb-1">Legal Safeguard <span className="text-primary-400">(PKS/MoU)</span></h4>
                            <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl">Dukungan payung hukum rigid melalui Perjanjian Kerja Sama resmi dengan Pemerintah Kabupaten sebagai pondasi operasional yang aman dan terukur.</p>
                        </div>
                    </div>
                    <div className="flex -space-x-4 relative z-10">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-14 h-14 rounded-2xl border-4 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-full h-full bg-slate-700 animate-pulse" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        ),
    },
    {
        id: "blt-digital",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Coins className="w-4 h-4 text-primary-400 animate-pulse" />
                        Social Safety Net Digitalization
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        BLT Dana Desa <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-900 via-primary-600 to-secondary-500">Digital</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Transformasi penyaluran bantuan yang transparan, akuntabel, dan 100% cashless.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
                    <div className="lg:col-span-8 glass-premium p-10 rounded-[50px] border-white/20 shadow-3xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck className="w-40 h-40" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-8 italic tracking-tighter border-l-4 border-primary-500 pl-6 uppercase">Tactical Disbursement Flow</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { step: "01", title: "Verify", desc: "Data KPM divalidasi silang dengan DTKS pusat.", icon: <UserCheck />, color: "bg-slate-900" },
                                { step: "02", title: "Approve", desc: "Musdes terpusat dan tercatat secara digital.", icon: <CheckCircle2 />, color: "bg-secondary-800" },
                                { step: "03", title: "Disburse", desc: "Direct transfer via Bank Jateng Gateway.", icon: <SendHorizonal />, color: "bg-primary-600" },
                                { step: "04", title: "Report", desc: "Auto-reporting dan sinkronisasi Siskeudes.", icon: <Database />, color: "bg-emerald-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="p-6 rounded-[32px] bg-slate-50 border border-slate-100 flex items-start gap-4 group/item hover:bg-white hover:shadow-xl transition-all"
                                >
                                    <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg group-hover/item:rotate-12 transition-transform shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-1">Step {item.step}</div>
                                        <h4 className="text-lg font-black text-slate-900 leading-none mb-1">{item.title}</h4>
                                        <p className="text-[12px] text-slate-500 font-medium leading-tight">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass-premium p-8 rounded-[40px] border-secondary-500/10 shadow-2xl bg-gradient-to-br from-secondary-50 to-primary-50 relative pointer-events-none"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5"><Landmark className="w-20 h-20" /></div>
                            <h4 className="text-xl font-black text-secondary-900 italic tracking-tighter mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary-600 animate-pulse" />
                                Winning Multiplier
                            </h4>
                            <div className="space-y-4">
                                {[
                                    "100% CASA Expansion",
                                    "Zero Illegal Surcharge",
                                    "Auto-Audit Readiness",
                                    "Real-time Notification"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold bg-white/50 p-2 rounded-xl border border-white">
                                        <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg rotate-3"><span className="text-white text-[10px]">✓</span></div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: "100%", label: "Bankability" },
                                { value: "0", label: "Leakage" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-6 rounded-[32px] glass-premium text-center border-primary-500/10 shadow-xl"
                                >
                                    <div className="text-3xl font-black text-secondary-900 tracking-tighter leading-none mb-1">{item.value}</div>
                                    <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "desa-wisata",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <MapPin className="w-4 h-4 text-primary-400 animate-bounce" />
                        Integrated Creative Economy
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Desa Wisata <span className="text-primary-600 italic tracking-tighter">Integrated</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Ekosistem wisata mandiri yang 100% cashless dengan QRIS & Payment Gateway Bank Jateng.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 font-medium">
                    {[
                        { title: "Portal Promosi & Tiketing", entity: "DIGITAL TICKETING", desc: "Sistem booking online terintegrasi Virtual Account Bank Jateng.", icon: <Globe />, color: "from-slate-800 to-slate-950" },
                        { title: "BUMDes E-Wallet Ready", entity: "CASHLESS PAYMENT", desc: "Mewajibkan seluruh UMKM menggunakan QRIS Bank Jateng.", icon: <Smartphone />, color: "from-secondary-700 to-secondary-900" },
                        { title: "Homestay Booking System", entity: "ACCOMMODATION", desc: "Manajemen penginapan desa dengan split settlement otomatis.", icon: <MapIcon />, color: "from-primary-500 to-primary-600" },
                        { title: "1 Warung 1 QRIS", entity: "INCLUSIVE ECONOMY", desc: "Digitalisasi pedagang kecil untuk tracking PADesa real-time.", icon: <ShoppingBag />, color: "from-slate-700 to-slate-900" },
                        { title: "Dashboard Revenue Wisata", entity: "FINANCIAL DASHBOARD", desc: "Monitor cuan wisata live. Pendapatan diendapkan di Bank Jateng.", icon: <TrendingUp />, color: "from-secondary-600 to-secondary-800" },
                        { title: "Ride-Sharing Lokal", entity: "MOBILITY TECH", desc: "Sistem ojek desa bayar mantap pakai QRIS Bank Jateng.", icon: <Bot />, color: "from-primary-400 to-primary-600" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-premium p-8 rounded-[40px] relative overflow-hidden group hover:scale-[1.03] transition-all duration-300 shadow-2xl border-white/20"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-xl ring-8 ring-slate-500/5">
                                <div className="text-slate-900">{item.icon}</div>
                            </div>
                            <div className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mb-1">{item.entity}</div>
                            <h3 className="text-xl font-black text-slate-900 mb-2 italic tracking-tighter leading-tight">{item.title}</h3>
                            <p className="text-slate-600 text-[12px] font-medium leading-relaxed italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "impact-story",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <User className="w-4 h-4 text-emerald-400 animate-pulse" />
                        Strategic Citizen Impact
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Kisah Dampak: <span className="text-emerald-600 italic">Satu Hari di Desa</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Bagaimana digitalisasi Bank Jateng membentuk realitas baru bagi warga Jawa Tengah.</p>
                </div>

                <div className="relative w-full max-w-6xl mx-auto mt-12 z-10">
                    <div className="hidden lg:block absolute top-[64px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { time: "08:00", active: "ADMINISTRASI", title: "Surat Instan", desc: "Digital signature Kades menjamin layanan 24/7.", icon: <FileText />, color: "from-slate-800 to-slate-950" },
                            { time: "11:00", active: "FINANSIAL", title: "BLT Non-Tunai", desc: "Cair real-time ke rekening Bank Jateng warga.", icon: <Coins />, color: "from-emerald-600 to-emerald-800" },
                            { time: "15:00", active: "EKONOMI", title: "Cuan QRIS", desc: "Warung desa terima pembayaran digital Bank Jateng.", icon: <ShoppingBag />, color: "from-secondary-700 to-secondary-900" },
                            { time: "19:00", active: "INKLUSI", title: "Akses Modal", desc: "Data transaksi jadi dasar kredit KUR Bank Jateng.", icon: <ShieldCheck />, color: "from-slate-700 to-slate-900" }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-[24px] bg-white border-2 border-emerald-100 flex items-center justify-center mb-6 shadow-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all cursor-pointer relative z-10 ring-8 ring-emerald-50">
                                    {step.icon}
                                    <div className="absolute -top-3 px-3 py-1 bg-slate-900 text-white rounded-full text-[9px] font-black tracking-widest">{step.time}</div>
                                </div>
                                <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{step.active}</div>
                                <h4 className="text-xl font-black text-slate-900 mb-2 italic tracking-tighter">{step.title}</h4>
                                <p className="text-[12px] text-slate-500 leading-relaxed font-medium italic">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-16 glass-premium p-10 rounded-[60px] border-emerald-500/10 shadow-3xl relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col md:flex-row items-center gap-10"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5"><TrendingUp className="w-40 h-40" /></div>
                    <div className="w-24 h-24 rounded-[32px] bg-emerald-600 flex items-center justify-center text-white shadow-2xl shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                        <Users className="w-12 h-12" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-3xl font-black text-slate-900 italic tracking-tighter mb-2">Digital Inclusivity Score: <span className="text-emerald-600">Executive Consensus</span></h4>
                        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed">Pencapaian indeks desa digital yang mengonversi 'Citizen Benefit' menjadi LOYALITAS nasabah Bank Jateng dalam ekosistem perbankan yang tertutup (Closed Loop).</p>
                    </div>
                    <div className="w-24 h-24 rounded-full border-4 border-emerald-600 bg-white/20 backdrop-blur-md flex items-center justify-center text-emerald-900 text-2xl font-black shrink-0">
                        98%
                    </div>
                </motion.div>
            </div>
        ),
    },
    {
        id: "best-practice",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Zap className="w-4 h-4 text-primary-400 animate-pulse" />
                        Operational Alpha & ROI
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Success <span className="text-primary-600 italic tracking-tighter">Consensus</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Dampak kuantitatif nyata dalam 6 bulan pertama implementasi ekosistem digital Bank Jateng.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="md:col-span-12 lg:col-span-7 glass-premium p-10 rounded-[50px] border-white/20 shadow-3xl overflow-hidden relative group h-[450px]"
                    >
                        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
                             <Image 
                                src="/roi_success.png" 
                                alt="ROI" 
                                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000"
                                width={1200} height={800}
                             />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-10 space-y-4">
                            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight italic tracking-tighter uppercase">Pilot Phase <br/><span className="text-primary-400 font-medium">Validated</span></h3>
                            <p className="text-slate-300 max-w-md text-sm md:text-lg font-medium leading-relaxed italic">Transformasi melampaui wacana. 100% efisiensi operasional dan lonjakan CASA terbukti secara empiris.</p>
                        </div>
                    </motion.div>

                    <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass-premium p-8 rounded-[40px] border-secondary-500/10 shadow-2xl bg-secondary-900 text-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Trash2 className="w-32 h-32" /></div>
                            <div className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-2">Cost Efficiency Alpha</div>
                            <h4 className="text-6xl font-black italic tracking-tighter mb-2 italic">80%</h4>
                            <p className="text-slate-300 text-base font-medium leading-tight italic">Pengurangan biaya operasional logistik melalui sistem paperless integrasi Siskeudes.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-premium p-8 rounded-[40px] border-primary-500/10 shadow-2xl bg-white relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:-rotate-12 transition-transform"><Clock className="w-32 h-32" /></div>
                            <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-2">Service Acceleration</div>
                            <h4 className="text-6xl font-black italic tracking-tighter text-slate-900 mb-2 italic">7x <span className="text-2xl">Lipat</span></h4>
                            <p className="text-slate-500 text-base font-medium leading-tight italic">Dari 2 hari kerja menjadi real-time via Tanda Tangan Elektronik terintegrasi BSrE.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "funding-model",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Handshake className="w-4 h-4 text-primary-400 animate-pulse" />
                        Strategic Capital & Synergy
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight"
                    >
                        Funding <span className="text-primary-600 italic tracking-tighter">Architecture</span>
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium italic">Model investasi Multi-Stakeholder untuk akselerasi ekosistem Bank Jateng.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:col-span-12 lg:col-span-8 group relative rounded-[50px] overflow-hidden bg-slate-900 h-[400px] shadow-3xl"
                    >
                        <Image 
                            src="/village_digital_banking.png" 
                            alt="Banking" 
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                            width={1200} height={800}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-10 space-y-4 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-[10px] font-black tracking-widest uppercase">
                                <Landmark className="w-3.5 h-3.5" /> BUMDes Linkage
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight italic tracking-tighter uppercase">Credit Linkage <br/><span className="text-primary-400 font-medium">Validated</span></h3>
                            <p className="text-slate-300 max-w-lg text-sm md:text-base font-medium leading-relaxed italic">Penyaluran kredit produktif untuk infrastruktur teknologi desa. Mengubah desa menjadi aset aktif Bank Jateng.</p>
                        </div>
                    </motion.div>

                    <div className="md:col-span-12 lg:col-span-4 space-y-6">
                        {[
                            { title: "Revenue Sharing", value: "30/70", desc: "Profit sharing antara BUMDes & Bank Jateng.", icon: <TrendingUp /> },
                            { title: "Risk Mitigation", value: "SLA 99%", desc: "Jaminan uptime sistem digitalisasi.", icon: <ShieldCheck /> },
                            { title: "CASA Growth", value: "100%", desc: "Seluruh gaji perangkat desa via Bank Jateng.", icon: <Coins /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-premium p-6 rounded-[32px] border-white/20 shadow-xl flex items-center gap-5 group hover:bg-slate-900 hover:text-white transition-all"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-primary-600 uppercase tracking-widest mb-1 italic tracking-tighter">{item.title}</h4>
                                    <div className="text-2xl font-black italic tracking-tighter leading-none">{item.value}</div>
                                    <p className="text-[10px] text-slate-500 font-medium leading-tight group-hover:text-slate-400 italic">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "suka-desa-dashboard",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                            >
                                <LayoutDashboard className="w-4 h-4 text-primary-400 animate-pulse" />
                                Unified Command Center
                            </motion.div>
                            <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight italic">
                                Suka Desa <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-700 to-primary-900">Dashboard</span>
                            </h2>
                            <p className="text-slate-500 text-base md:text-xl font-medium max-w-xl italic">
                                Orchestrating village governance dengan monitoring real-time arus kas, statistik warga, dan integrasi Siskeudes.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "IBC Integration", desc: "Sinkronisasi otomatis saldo Bank Jateng." },
                                { title: "Data Agregator", desc: "Single source of truth kependudukan." },
                                { title: "Analytics Hub", desc: "Visualisasi PADesa & PBB sektor desa." },
                                { title: "Executive Alert", desc: "Sistem deteksi anomali anggaran." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="p-5 rounded-[28px] glass-premium border-white hover:bg-white hover:shadow-xl transition-all group"
                                >
                                    <div className="font-black text-slate-900 text-lg tracking-tighter mb-1 group-hover:text-primary-600 transition-colors italic">{item.title}</div>
                                    <div className="text-[12px] text-slate-500 font-medium leading-tight italic">{item.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-10 bg-gradient-to-tr from-primary-500/20 via-secondary-500/10 to-transparent blur-[100px] group-hover:opacity-100 transition-opacity" />
                        <div className="glass-premium p-4 rounded-[50px] border-white/40 shadow-3xl bg-white/30 backdrop-blur-3xl overflow-hidden relative z-10">
                            <Image 
                                src="/smart_village_dashboard.png" 
                                alt="Suka Desa Dashboard" 
                                className="w-full h-auto object-cover rounded-[36px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                                width={800} height={500}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 rounded-[30px] flex items-center justify-center text-white shadow-2xl z-20 group-hover:scale-110 transition-transform">
                            <Zap className="w-12 h-12" />
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: "suka-desa-mobile",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="order-2 lg:order-1 flex justify-center relative"
                    >
                         <div className="absolute -inset-20 bg-secondary-500/10 blur-[120px] rounded-full animate-pulse" />
                         <div className="relative z-10 w-full max-w-[320px]">
                            <div className="glass-premium p-3 rounded-[60px] border-white/30 shadow-3xl bg-slate-900 relative ring-12 ring-slate-900/5">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl z-20" />
                                <div className="rounded-[40px] overflow-hidden border-4 border-slate-800 shadow-inner">
                                    <Image 
                                        src="/citizen_app_mockup_1773145276670.png" 
                                        alt="Suka Desa Mobile" 
                                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                                        width={300} height={600}
                                    />
                                </div>
                            </div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -right-8 top-1/4 glass-premium p-4 rounded-2xl shadow-2xl border-white z-20 bg-white"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white"><CheckCircle2 className="w-5 h-5" /></div>
                                    <div className="text-[10px] font-black text-slate-900 uppercase">Payment Success</div>
                                </div>
                            </motion.div>
                         </div>
                    </motion.div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                            >
                                <Smartphone className="w-4 h-4 text-primary-400" />
                                Citizen Core Experience
                            </motion.div>
                            <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight italic">
                                Platform Desa <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-800 to-secondary-600">Dalam Genggaman</span>
                            </h2>
                            <p className="text-slate-500 text-base md:text-xl font-medium max-w-xl italic">
                                Memindahkan balai desa ke dalam saku warga. Layanan administrasi dan perbankan Bank Jateng terintegrasi 100%.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { icon: <ShieldCheck className="w-6 h-6" />, title: "Biometric Digital ID", desc: "Login biometrik dengan verifikasi identitas resmi." },
                                { icon: <CreditCard className="w-6 h-6" />, title: "Bank Jateng Wallet", desc: "Ekosistem pembayaran PPOB, PBB, & Transfer." },
                                { icon: <Zap className="w-6 h-6" />, title: "One-Click Services", desc: "Request surat keterangan tanpa antre via TTE." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex gap-5 items-start p-6 rounded-[32px] glass-premium border-white hover:bg-white hover:shadow-2xl transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-600 shadow-xl group-hover:rotate-6 transition-transform shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-lg tracking-tighter mb-1 italic">{item.title}</div>
                                        <div className="text-[12px] text-slate-500 font-medium leading-tight italic">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "data-privacy",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="text-center space-y-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                    >
                        <Lock className="w-4 h-4 text-emerald-400 animate-pulse" />
                        Data Sovereignity & Compliance
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight italic">
                        Cyber Security <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-900">Fortress</span>
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto text-base md:text-xl font-medium leading-relaxed italic">
                        Kepatuhan penuh UU PDP No. 27/2022. Menjamin kedaulatan data warga melalui enkripsi perbankan dan infrastruktur lokal aman.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                    {[
                        { title: "Military Encryption", desc: "Data kependudukan & finansial dienkripsi sesuai standar ISO 27001.", icon: <ShieldCheck className="w-10 h-10" /> },
                        { title: "Local Sovereignty", desc: "Data tersimpan di Jateng Government Cloud untuk kontrol akses penuh.", icon: <Database className="w-10 h-10" /> },
                        { title: "Permanent Audit Trail", desc: "Setiap akses tercatat permanen di ledger audit perbankan yang aman.", icon: <Activity className="w-10 h-10" /> }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="p-8 rounded-[40px] glass-premium border-white hover:bg-slate-900 hover:text-white group transition-all shadow-xl"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">{item.icon}</div>
                            <h4 className="text-xl font-black italic tracking-tighter mb-2 italic tracking-tighter uppercase">{item.title}</h4>
                            <p className="text-[12px] text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 italic">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            </div>
        )
    },
    {
        id: "training-support",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl"
                            >
                                <Users2 className="w-4 h-4 text-primary-400" />
                                Human Capital & Adoption
                            </motion.div>
                            <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter leading-tight italic">
                                Strategic <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-900">Transformation</span>
                            </h2>
                            <p className="text-slate-500 text-base md:text-xl font-medium max-w-xl italic">
                                Mencetak **Duta Desa Digital** di setiap wilayah melalui pendampingan berkelanjutan untuk memastikan keberhasilan adopsi teknologi.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Bimbingan Teknis (Bim Tek) Perangkat Desa Komprehensif.",
                                "Layanan Support 24/7 Troubleshooting Operasional.",
                                "Edukasi Literasi Keuangan & Digital Masyarakat Desa.",
                                "Monitoring Evaluasi Rutin (3 Bulanan) & Pelaporan."
                            ].map((text, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex gap-4 items-center font-black text-slate-900 text-sm italic tracking-tighter group cursor-default"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-[10px] group-hover:scale-110 transition-transform shadow-lg">{i+1}</div>
                                    <span className="group-hover:text-primary-600 transition-colors uppercase">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-premium p-10 rounded-[50px] bg-gradient-to-br from-primary-900/5 to-secondary-900/5 border-white shadow-3xl relative overflow-hidden group"
                    >
                        <Quote className="w-24 h-24 text-primary-200/20 absolute -top-4 -right-4 rotate-12" />
                        <div className="relative z-10 space-y-8">
                            <p className="text-xl md:text-3xl font-black text-slate-900 leading-tight italic tracking-tighter">
                                "Digitalisasi bukan hanya soal aplikasi, tapi soal mengubah pola pikir untuk melayani desa dengan lebih cepat, transparan, dan berdaya."
                            </p>
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100 group-hover:bg-slate-900 transition-colors group-hover:text-white">
                                    <Landmark className="w-8 h-8" />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-black text-slate-900 text-lg uppercase tracking-tighter italic">Suara Perangkat Desa</div>
                                    <div className="text-[10px] text-primary-600 font-black uppercase tracking-[0.3em]">Guardian of Digital Trust</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-500/10 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: "technology-partner",
        content: (
            <div className="min-h-[70vh] py-12 flex flex-col justify-center items-center text-center space-y-10 md:space-y-16 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative px-12 py-8 glass-premium rounded-[50px] border-white/40 shadow-3xl bg-white/20 backdrop-blur-3xl group"
                >
                    <div className="absolute inset-0 bg-violet-600/5 blur-[80px] rounded-full group-hover:bg-violet-600/10 transition-colors" />
                    <Image 
                        src="/Logo_violet.png" 
                        alt="PT. VIOLET GLOBAL INDONESIA" 
                        className="h-28 md:h-36 w-auto relative z-10 drop-shadow-3xl group-hover:scale-105 transition-transform"
                        width={300} height={150}
                    />
                </motion.div>

                <div className="space-y-8 max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-950 text-white text-[10px] font-black tracking-[0.4em] uppercase shadow-2xl"
                    >
                        Technology & Strategy Partner
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-8xl font-display font-black text-slate-900 tracking-tighter leading-tight italic">
                        VIOLET <span className="text-violet-600">GLOBAL</span>
                    </h2>
                    
                    <p className="text-lg md:text-2xl text-slate-500 font-black leading-relaxed italic max-w-3xl mx-auto tracking-tighter">
                        "Mewujudkan Kedaulatan Digital melalui Tata Kelola Pemerintahan yang Strategis dan Keunggulan Teknologi."
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-10 rounded-[50px] glass-premium bg-white/40 border-white shadow-2xl text-left space-y-6 group hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 shadow-lg group-hover:rotate-12 group-hover:bg-violet-600 group-hover:text-white transition-all shrink-0">
                            <Settings2 className="w-8 h-8" />
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-black italic tracking-tighter uppercase italic">Strategic Governance</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 italic">
                                Menyusun Peta Jalan Digitalisasi Sektor Publik, menjamin harmonisasi regulasi untuk efektivitas birokrasi daerah.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-10 rounded-[50px] bg-slate-900 text-white border-white/10 shadow-3xl text-left space-y-6 group hover:bg-violet-900 transition-all transform hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-400 shadow-lg group-hover:rotate-12 group-hover:bg-white group-hover:text-violet-600 transition-all shrink-0">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-2xl font-black italic tracking-tighter uppercase italic">Implementation Alpha</h4>
                            <p className="text-sm text-slate-400 leading-relaxed font-medium group-hover:text-slate-100 italic">
                                Mengintegrasikan solusi teknologi adaptif yang sesuai dengan karakteristik unik struktur tata kelola wilayah di Indonesia.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-500/5 blur-[150px] rounded-full pointer-events-none" />
            </div>
        )
    },
    {
        id: "closing",
        content: (
            <div className="relative w-full h-[600px] rounded-[60px] overflow-hidden flex items-center justify-center group">
                <Image 
                    src="/future_village_closing_1773146060875.png" 
                    alt="Future Village" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                    width={1600} height={900}
                />
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px] group-hover:bg-slate-950/40 transition-colors duration-1000" />
                <div className="relative z-10 text-center space-y-12 max-w-4xl px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="w-32 h-32 bg-white/10 backdrop-blur-3xl border border-white/30 rounded-[40px] flex items-center justify-center mx-auto shadow-3xl animate-pulse"
                    >
                        <Network className="w-16 h-16 text-white" />
                    </motion.div>
                    <div className="space-y-6">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter leading-tight italic"
                        >
                            Membangun <br />
                            <span className="text-primary-400 italic">Masa Depan</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-3xl text-blue-100 font-black tracking-tighter italic uppercase"
                        >
                            Akselerasi Jawa Tengah Menuju <br/><span className="text-white">Kedaulatan Digital Nasional.</span>
                        </motion.p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-6">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-white rounded-full text-slate-950 font-black text-xl shadow-3xl hover:bg-primary-400 transition-colors uppercase italic"
                        >
                            Mari Berkolaborasi
                        </motion.button>
                        <div className="flex items-center gap-6">
                            <Image src="/Bank_Jateng_logo.png" alt="Bank Jateng" className="h-10 w-auto brightness-0 invert opacity-80" width={150} height={60} />
                            <div className="h-10 w-px bg-white/20" />
                            <Image src="/Logo_violet.png" alt="Violet Global" className="h-8 w-auto brightness-0 invert opacity-80" width={100} height={40} />
                        </div>
                    </div>
                </div>
                {/* Tactical Overlays */}
                <div className="absolute top-10 left-10 text-[10px] font-black text-white/20 tracking-[0.5em] uppercase pointer-events-none">Mission Collective: 2024</div>
                <div className="absolute bottom-10 right-10 text-[10px] font-black text-white/20 tracking-[0.5em] uppercase pointer-events-none italic">Digital Sovereignty Validated</div>
            </div>
        )
    }
];
