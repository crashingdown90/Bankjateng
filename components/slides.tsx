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
    Users2
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
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/50 rounded-full blur-2xl md:blur-3xl opacity-60 hidden md:block" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-200/40 rounded-full blur-2xl md:blur-3xl opacity-60 hidden md:block" />

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto p-8 md:p-12 relative z-10">
                    
                    {/* Left Typography & Content */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start gap-4 mb-8">
                            <Image src="/Bank_BJB_logo.png" alt="Bank BJB Logo" className="h-16 md:h-20 w-auto" width={200} height={80} priority />
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 animate-pulse" />
                                <span className="text-[10px] sm:text-xs font-bold text-blue-800 tracking-wider flex items-center gap-1 uppercase">
                                    Strategic Proposal <span className="mx-1 text-slate-300">•</span> Sinergi BJB
                                </span>
                            </motion.div>
                        </div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]"
                            >
                                Ekosistem <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-700 to-amber-500">
                                    Desa Digital BJB
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-lg"
                            >
                                Inisiatif strategis akselerasi inklusi keuangan melalui digitalisasi layanan desa, mendorong pertumbuhan <span className="font-bold text-slate-800">CASA</span> dan <span className="font-bold text-slate-800">Fee-Based Income</span> secara masif.
                            </motion.p>
                        </div>

                        {/* Metrics/Pillars */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="pt-8 border-t border-slate-200/80 flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-hide"
                        >
                            {[
                                { val: "Transaksi PPOB", label: "bjb Bungah", textClass: "text-amber-600" },
                                { val: "Real-time IBC", label: "Siskeudes BJB", textClass: "text-blue-700" },
                                { val: "Akuisisi Masif", label: "Laku Pandai", textClass: "text-blue-800" }
                            ].map((stat, i) => (
                                <div key={i} className="shrink-0 min-w-[120px]">
                                    <div className={`text-base font-black ${stat.textClass} font-display leading-tight`}>{stat.val}</div>
                                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Visualizer */}
                    <div className="relative hidden md:flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-square max-w-md mx-auto"
                        >
                            {/* Decorative Rings */}
                            <div className="absolute inset-4 rounded-full border border-blue-200/50 animate-[spin_40s_linear_infinite]" />
                            <div className="absolute inset-8 rounded-full border border-dashed border-slate-300 animate-[spin_30s_linear_infinite_reverse]" />
                            
                            {/* Glass Card Stack representing connectivity */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-4/5 h-4/5">
                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-none md:backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl transform rotate-6 scale-95" />
                                    <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-none md:backdrop-blur-md border border-white/80 shadow-xl rounded-3xl transform -rotate-3 scale-100 flex items-center justify-center overflow-hidden">
                                        <Image src="/futuristic_village_cover.png" alt="Desa Digital UI" className="w-full h-full object-cover opacity-80 mix-blend-overlay" width={500} height={500} priority />
                                        
                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent px-6 pb-6 flex flex-col justify-end">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-none md:backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/30">
                                                <Network className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="text-white font-bold text-lg leading-tight">Connected Village Pipeline</div>
                                            <div className="text-blue-200 text-xs font-medium uppercase tracking-widest mt-1">Live Integration</div>
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
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Landmark className="w-4 h-4 text-blue-700" />
                        Landasan Hukum Bank BJB
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Regulasi & Mandat Digitalisasi</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Kewajiban strategis BJB sebagai tulang punggung ekonomi digital desa.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Pillar 1 */}
                    <div className="glass p-6 md:p-8 rounded-[32px] border border-slate-200 bg-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 inset-x-0 h-[6px] bg-gradient-to-r from-blue-600 to-blue-800" />
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                            <CreditCard className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">SE Kemendagri 2023</h3>
                        <div className="text-[11px] font-bold text-blue-700 mb-4 tracking-wider uppercase bg-blue-50 inline-block px-2 py-1 rounded">No. 100.3.3.3/2890/BPD</div>
                        <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">•</span>Akselerasi Transaksi Non-Tunai Pemdes.</li>
                            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">•</span>BPD (BJB) sebagai mitra utama.</li>
                            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold">•</span>Digitalisasi belanja untuk transparansi.</li>
                        </ul>
                    </div>

                    {/* Pillar 2 */}
                    <div className="glass p-6 md:p-8 rounded-[32px] border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all transform md:-translate-y-4">
                        <div className="absolute top-0 inset-x-0 h-[6px] bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500" />
                        <div className="w-14 h-14 rounded-2xl bg-blue-700 text-white flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                            <Database className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">Permendagri 20/2018</h3>
                        <div className="text-[11px] font-bold text-blue-100 mb-4 tracking-wider uppercase bg-blue-800 inline-block px-2 py-1 rounded italic">Siskeudes Integration</div>
                        <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                            <li className="flex gap-2 items-start"><span className="text-blue-700 font-bold">•</span>Mandat Pengelolaan Keuangan Desa.</li>
                            <li className="flex gap-2 items-start"><span className="text-blue-700 font-bold">•</span>Wajib terintegrasi sistem perbankan.</li>
                            <li className="flex gap-2 items-start"><span className="text-blue-700 font-bold">•</span>Sinergi <strong className="text-blue-800">Siskeudes</strong> & CMS BJB.</li>
                        </ul>
                    </div>

                    {/* Pillar 3 */}
                    <div className="glass p-6 md:p-8 rounded-[32px] border border-slate-200 bg-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 inset-x-0 h-[6px] bg-gradient-to-r from-amber-400 to-amber-500" />
                        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">Arah Kebijakan Gubernur</h3>
                        <div className="text-[11px] font-bold text-amber-600 mb-4 tracking-wider uppercase bg-amber-50 inline-block px-2 py-1 rounded">Katalisator Ekonomi</div>
                        <ul className="text-slate-600 text-sm leading-relaxed space-y-2 list-none">
                            <li className="flex gap-2 items-start"><span className="text-amber-500 font-bold">•</span>Instruksi digitalisasi di pelosok Jabar-Banten.</li>
                            <li className="flex gap-2 items-start"><span className="text-amber-500 font-bold">•</span>Pemberdayaan inklusi ekosistem desa.</li>
                            <li className="flex gap-2 items-start"><span className="text-amber-500 font-bold">•</span>BJB sebagai agen transformasi tunggal.</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">Referensi Regulasi Terkait</span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: "Permendagri 70/2019", no: "SIPD & Desa Online", desc: "Integrasi Data Nasional", icon: <Globe className="w-5 h-5" /> },
                            { title: "UU Desa No. 6/2014", no: "Pilar Kedaulatan", desc: "Digitalisasi Pelayanan Publik", icon: <Landmark className="w-5 h-5" /> },
                            { title: "Inpres No. 3/2003", no: "E-Government", desc: "Mandat Digitalisasi Instansi", icon: <Cpu className="w-5 h-5" /> },
                            { title: "POJK Inklusi", no: "Laku Pandai", desc: "Layanan Keuangan Tanpa Kantor", icon: <Coins className="w-5 h-5" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                                <div className="p-2 md:p-2.5 rounded-xl bg-white text-slate-400 group-hover:text-blue-700 border border-slate-200 shadow-sm transition-colors shrink-0">
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <AlertTriangle className="w-4 h-4" />
                        The Disconnected Reality
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Problematika Ekosistem Desa</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Tantangan kritis yang menghambat pertumbuhan ekonomi desa dan potensial merugikan pemerintah daerah.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 relative z-10 mt-8">
                    {[
                        {
                            title: "Kebocoran PADesa & PBB",
                            desc: "Sistem pungutan manual sangat rentan terhadap *fraud* (penggelapan) di tingkat akar rumput. Pajak Bumi Bangunan (PBB-P2) sering mengendap di tangan pengepul tanpa transparansi.",
                            icon: <AlertOctagon className="w-7 h-7" />,
                            color: "text-red-600",
                            bg: "bg-red-50"
                        },
                        {
                            title: "Birokrasi Lambat & Boros",
                            desc: "Pelayanan administrasi masih berbasis kertas. Warga butuh waktu berhari-hari hanya untuk selembar surat karena Kades sedang dinas luar (tidak bisa tanda tangan basah).",
                            icon: <Hourglass className="w-7 h-7" />,
                            color: "text-amber-600",
                            bg: "bg-amber-50"
                        },
                        {
                            title: "Distribusi Bansos Inakurat",
                            desc: "Pendataan warga miskin sporadis menyebabkan Bantuan Langsung Tunai (BLT) sering salah sasaran atau bahkan disunat oleh oknum tertentu secara tunai.",
                            icon: <FileWarning className="w-7 h-7" />,
                            color: "text-slate-700",
                            bg: "bg-slate-100"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
                        >
                            <div className="absolute top-0 inset-x-0 h-1 bg-slate-200 group-hover:bg-red-500 transition-colors" />
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform`}>
                                <div className={`${item.color}`}>{item.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{item.title}</h3>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10 mx-auto glass max-w-3xl rounded-3xl border border-blue-100 bg-blue-50/50 p-6 flex flex-col md:flex-row items-center gap-6"
                >
                    <div className="w-16 h-16 shrink-0 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                        <ZoomIn className="w-8 h-8 text-blue-700 animate-pulse" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">Status Quo Bukanlah Pilihan</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">Tanpa intervensi platform digital terpusat, Bank BJB kehilangan potensi akuisisi dana murah (CASA) bernilai triliunan rupiah dari jutaan warga desa yang *unbanked*.</p>
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
                    <div className="md:col-span-7 space-y-8 pr-0 md:pr-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                            >
                                <Landmark className="w-4 h-4 text-blue-700" />
                                Visi & Misi Bank BJB
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                                Selaras dengan Visi <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">Bank Pilihan Utama</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Mitra Utama Pemerintah Daerah",
                                    desc: "Sistem ini menjadikan Bank BJB sebagai tulang punggung (backbone) layanan operasional dan finansial seluruh desa di wilayah jangkauan.",
                                    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
                                    bg: "bg-blue-50",
                                    border: "border-blue-100"
                                },
                                {
                                    title: "Akselerasi Inklusi Keuangan",
                                    desc: "Mewujudkan misi peningkatkan inklusi keuangan melalui digitalisasi. Membawa desa masuk ke dalam ekosistem perbankan modern Bank BJB.",
                                    icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
                                    bg: "bg-amber-50",
                                    border: "border-amber-100"
                                },
                                {
                                    title: "Motor Penggerak Ekonomi Daerah",
                                    desc: "Memastikan investasi teknologi sejalan dengan pemberdayaan UMKM lokal dan optimalisasi Pendapatan Asli Daerah (PAD) serta Pendapatan Asli Desa.",
                                    icon: <Briefcase className="w-6 h-6 text-blue-700" />,
                                    bg: "bg-blue-50",
                                    border: "border-blue-100"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className={`p-3 rounded-2xl ${item.bg} border ${item.border} shrink-0 mt-1 shadow-sm group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base md:text-lg font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 relative">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[40px] transform rotate-3 scale-105" />

                        <div className="glass rounded-[32px] p-6 md:p-10 border border-white bg-white md:bg-white/60 backdrop-blur-none md:backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-center h-full min-h-[300px] md:min-h-[400px]">
                            {/* Watermark Icon */}
                            <div className="absolute -top-10 -right-10 text-slate-900 opacity-[0.03] transform rotate-12">
                                <Landmark className="w-64 h-64" />
                            </div>

                            <Quote className="w-12 h-12 text-blue-200 mb-6 relative z-10" />

                            <blockquote className="text-lg md:text-3xl font-light italic text-slate-800 relative z-10 leading-snug">
                                "Sinergi platform desa digital dengan <span className="font-semibold text-blue-800">Bank BJB</span> mengunci loyalitas nasabah dan <span className="font-semibold text-amber-600">memperluas ekosistem keuangan</span> di tingkat akar rumput."
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4 relative z-10 pt-6 border-t border-slate-200/50">
                                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-bold overflow-hidden">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Paradigma Baru</div>
                                    <div className="text-xs text-slate-500">Kolaborasi BJB & Desa</div>
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
            <div className="space-y-8 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Layers className="w-4 h-4" />
                        The Grand Digital Plan
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                        Ekosistem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500">Super App Desa</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Satu aplikasi "All-in-One" terpadu untuk warga desa, di mana <strong className="text-blue-800">Bank BJB</strong> hadir sebagai jantung penggerak seluruh transaksi keuangan dan ekonomi lokal.</p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[550px] flex items-center justify-center mt-4">
                    {/* Background Orbit Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-slate-200/60 border-dashed animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full border border-blue-100 animate-[spin_40s_linear_infinite_reverse]" />
                    </div>

                    {/* Surrounding Nodes (The Ecosystem) */}
                    {[
                        { title: "E-Government", desc: "Surat menyurat, Kependudukan, & TTD Elektronik", icon: <FileText className="w-6 h-6" />, pos: "top-[-5%] md:top-[5%] left-1/2 -translate-x-1/2", delay: 0.2, color: "text-slate-600 bg-white" },
                        { title: "Desa Wisata & BUMDes", desc: "Ticketing, E-Commerce Lokal, Pemesanan Homestay", icon: <MapPin className="w-6 h-6" />, pos: "top-[20%] right-[-5%] md:right-[5%]", delay: 0.3, color: "text-amber-600 bg-amber-50 border-amber-200" },
                        { title: "Jaring Pengaman", desc: "Penyaluran BLT, Bantuan Pangan, & Subsidi", icon: <ShieldCheck className="w-6 h-6" />, pos: "bottom-[5%] md:bottom-[15%] right-[5%] md:right-[15%]", delay: 0.4, color: "text-blue-700 bg-blue-50 border-blue-200" },
                        { title: "PPOB & Pajak", desc: "Pembayaran PBB, Listrik, Air, & Kendaraan Bermotor", icon: <Zap className="w-6 h-6" />, pos: "bottom-[-5%] md:bottom-[5%] left-1/2 -translate-x-1/2", delay: 0.5, color: "text-blue-800 bg-blue-100 border-blue-300" },
                        { title: "Aduan Publik", desc: "Pelaporan warga, aspirasi, & informasi desa", icon: <MessageSquare className="w-6 h-6" />, pos: "bottom-[5%] md:bottom-[15%] left-[5%] md:left-[15%]", delay: 0.6, color: "text-slate-700 bg-slate-50 border-slate-200" },
                        { title: "Kesehatan Desa", desc: "Posyandu, Penanganan Stunting, & Jadwal Nakes", icon: <Activity className="w-6 h-6" />, pos: "top-[20%] left-[-5%] md:left-[5%]", delay: 0.7, color: "text-amber-500 bg-white border-slate-200" }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: node.delay, type: "spring", stiffness: 100 }}
                            className={`absolute ${node.pos} w-[140px] md:w-[180px] p-3 md:p-4 rounded-3xl glass backdrop-blur-none md:backdrop-blur-xl border border-slate-200/80 shadow-xl text-center group hover:scale-105 transition-transform z-20`}
                        >
                            <div className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-2xl flex items-center justify-center mb-2 shadow-sm ${node.color}`}>
                                {node.icon}
                            </div>
                            <h4 className="text-[11px] md:text-sm font-bold text-slate-900 leading-tight mb-1">{node.title}</h4>
                            <p className="text-[9px] md:text-[10px] text-slate-500 leading-tight hidden md:block">{node.desc}</p>
                        </motion.div>
                    ))}

                    {/* Central Core (BJB) */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-30 w-[180px] h-[180px] md:w-[240px] md:h-[240px]"
                    >
                        {/* Core glow */}
                        <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl md:blur-3xl opacity-30 animate-pulse hidden md:block" />
                        
                        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-800 via-blue-700 to-amber-500 p-[2px] shadow-2xl shadow-blue-900/40">
                            <div className="w-full h-full rounded-[38px] bg-white flex flex-col items-center justify-center p-6 text-center transform transition-transform hover:scale-[1.02]">
                                <Landmark className="w-12 h-12 md:w-16 md:h-16 text-blue-800 mb-3" />
                                <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">BJB Open API</h3>
                                <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-1 mb-2">The Financial Core</div>
                                <div className="w-full h-px bg-slate-100 my-2" />
                                <p className="text-[10px] md:text-xs text-slate-500 font-medium">Payment Gateway, QRIS, & CMS Siskeudes</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-4 md:mt-0"
                >
                    <p className="text-sm md:text-base font-semibold text-slate-600">
                        *Konsultan Membangun Ekosistemnya <span className="text-blue-700">→</span> BJB Menjadi Mesin Transaksinya
                    </p>
                </motion.div>
            </div>
        ),
    },
    {
        id: "grand-vision",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Network className="w-4 h-4" />
                        Pondasi Desa Digital 4.0
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Kedaulatan & Transformasi Infrastruktur</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Mengubah entitas desa dari "Objek Pembangunan" menjadi <span className="font-semibold text-blue-800">"Subjek Inovasi"</span> melalui penguasaan teknologi mandiri secara end-to-end.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { 
                            title: "Kedaulatan Data Lokal", 
                            desc: "Platform berstatus 'Custom Ownership' alias milik desa sepenuhnya, menjamin keamanan data warganegara tingkat desa dari penyalahgunaan pihak ketiga.", 
                            icon: <ShieldCheck className="w-8 h-8" />, 
                            color: "bg-blue-700", 
                            lightColor: "bg-blue-50",
                            border: "border-blue-200"
                        },
                        { 
                            title: "Layanan Publik Mandiri", 
                            desc: "Sistem Administrasi Desa (SISAD) dengan Tanda Tangan Elektronik tersertifikasi, memangkas proses birokrasi dari berhari-hari menjadi 5 menit.", 
                            icon: <FileText className="w-8 h-8" />, 
                            color: "bg-amber-500", 
                            lightColor: "bg-amber-50",
                            border: "border-amber-200"
                        },
                        { 
                            title: "Big Data & Analitik", 
                            desc: "Pengambilan kebijakan (kebencanaan, kemiskinan, pupuk) berbasis data lapangan real-time, tidak lagi mengandalkan asumsi buta.", 
                            icon: <Database className="w-8 h-8" />, 
                            color: "bg-slate-700", 
                            lightColor: "bg-slate-100",
                            border: "border-slate-200"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className={`bg-white p-6 md:p-8 rounded-[40px] border ${item.border} shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col`}
                        >
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className={`w-16 h-16 rounded-2xl ${item.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <div className={`${item.color} text-white p-3 rounded-xl shadow-md`}>{item.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
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
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Cpu className="w-4 h-4" />
                        Strategic AI & IoT Ecosystem
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Evolusi Kecerdasan Buatan di Desa</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Transformasi tata kelola desa melalui kecerdasan kognitif untuk akurasi kebijakan dan keamanan finansial.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                    {/* Hero AI Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:col-span-12 lg:col-span-7 group relative rounded-[40px] overflow-hidden bg-indigo-950 h-[350px] md:h-[500px] shadow-2xl border border-indigo-500/30"
                    >
                        <Image 
                            src="/ai_village_evolution.png" 
                            alt="AI Evolution Future" 
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[3s]"
                            width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] font-black tracking-widest uppercase shadow-xl backdrop-blur-none md:backdrop-blur-md">
                                <Activity className="w-3.5 h-3.5" /> Cognitive Transformation
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Orkestrasi AI <br/>Digitalisasi Desa</h3>
                            <p className="text-indigo-200 max-w-xl text-sm md:text-base font-medium leading-relaxed">
                                Integrasi sensor cerdas dan Generative AI untuk mitigasi risiko sosial, kesehatan, dan keamanan finansial secara real-time.
                            </p>
                        </div>
                    </motion.div>

                    {/* Features Grid Right Side */}
                    <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-4">
                        {[
                            { 
                                title: "DesaBot (Gen-AI Support)", 
                                desc: "Asisten cerdas 24/7 bagi aparat desa untuk memandu regulasi (Perdes) dan SOP layanan publik berbasis AI.", 
                                icon: <Bot className="w-5 h-5" />,
                                color: "bg-indigo-600 text-white"
                            },
                            { 
                                title: "Fraud Detection (APBDes Guard)", 
                                desc: "Algoritma pemantauan real-time untuk mendeteksi anomali pada kas desa, menjamin transparansi akuntabilitas.", 
                                icon: <ShieldAlert className="w-5 h-5 text-indigo-200" />,
                                color: "bg-slate-900 border border-slate-700 text-white shadow-xl"
                            },
                            { 
                                title: "AI Precision Mapping", 
                                desc: "GIS kognitif untuk akurasi data Bansos & Stunting secara presisi, meminimalisir kesalahan target bantuan.", 
                                icon: <Brain className="w-5 h-5 text-indigo-600" />,
                                color: "bg-white border border-indigo-100 text-slate-900 shadow-sm"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className={`p-5 rounded-[32px] flex items-start gap-4 group hover:-translate-x-2 transition-all duration-300 ${item.color}`}
                            >
                                <div className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform ${item.color.includes('bg-white') ? 'bg-indigo-50' : 'bg-white/20'}`}>
                                    {item.icon}
                                </div>
                                <div className="space-y-0.5">
                                    <h4 className="text-base font-bold leading-tight tracking-tight">{item.title}</h4>
                                    <p className={`text-[10px] md:text-xs leading-relaxed font-medium ${item.color.includes('text-white') ? 'text-indigo-100/70' : 'text-slate-500'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        
                        {/* IoT Micro Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-5 rounded-[32px] bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 shadow-sm flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                                    <Radio className="w-5 h-5 animate-pulse" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Smart IoT Mitigation</h4>
                                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Early Warning System 4.0</p>
                                </div>
                            </div>
                            <Activity className="text-indigo-300 w-6 h-6 opacity-40 shrink-0" />
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
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider shadow-sm"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Monetisasi Sirkular
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Kemandirian Ekonomi BUMDes</h2>
                        <p className="text-slate-500 max-w-xl text-base md:text-lg">Ekosistem komersial ultra-mikro yang mengunci perputaran uang tetap berada di dalam kas desa (CASA Bank BJB).</p>
                    </div>
                </div>

                {/* Central Flowchart Diagram */}
                <div className="relative w-full max-w-6xl mx-auto rounded-[40px] border border-blue-100 bg-white shadow-xl shadow-blue-900/5 p-6 md:p-10 flex flex-col">
                    {/* Background Graphic */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/30 rounded-[40px] overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 w-full mb-10">
                        <div className="inline-flex items-center justify-center w-full gap-4">
                            <div className="h-px bg-slate-200 flex-grow" />
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4 border border-slate-200 rounded-full bg-white py-1.5">
                                Arus Transaksi Closed-Loop
                            </h3>
                            <div className="h-px bg-slate-200 flex-grow" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 md:gap-6 relative z-10 flex-grow">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-slate-100 rounded-full -z-10 overflow-hidden">
                            <motion.div 
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"
                            />
                        </div>

                        {/* Step 1: Sumber Dana */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="absolute -top-3 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 shadow-sm">1</div>
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Landmark className="w-8 h-8 text-slate-600" />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-2">Dana & Subsidi</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">Pemerintah pusat menyalurkan Dana Desa & PKH/BLT ke rekening desa.</p>
                            <div className="mt-auto px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full w-full">Kas Desa (BJB)</div>
                        </motion.div>

                        {/* Step 2: Distribusi Warga */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm relative group hover:shadow-md transition-shadow flex flex-col items-center text-center"
                        >
                            <div className="absolute -top-3 w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm">2</div>
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-2">Penyaluran Warga</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">Warga menerima haknya langsung melalui Super App ke dompet digital mereka.</p>
                            <div className="mt-auto px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full w-full">Rekening Nasabah (BJB)</div>
                        </motion.div>

                        {/* Step 3: Ekosistem BUMDes (The Pillars) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/80 backdrop-blur-none md:backdrop-blur-sm rounded-3xl p-1.5 border border-amber-200 shadow-sm relative group hover:shadow-lg transition-all flex flex-col items-center text-center ring-2 ring-amber-100 ring-offset-2"
                        >
                            <div className="absolute -top-3 w-6 h-6 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-[10px] font-bold text-amber-600 shadow-sm z-10">3</div>
                            <div className="w-full bg-amber-50 rounded-[22px] p-4 flex flex-col items-center flex-grow">
                                <Store className="w-10 h-10 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="text-base font-bold text-slate-900 mb-1">Belanja Ultra-Mikro</h4>
                                <p className="text-[11px] text-amber-700/80 leading-snug mb-3">Warga membelanjakan saldonya kembali di dalam desa.</p>
                                
                                <div className="grid grid-cols-2 gap-2 w-full mt-auto">
                                    <div className="bg-white p-2 rounded-xl border border-amber-100 flex flex-col items-center justify-center shadow-sm">
                                        <ShoppingBag className="w-4 h-4 text-amber-600 mb-1" />
                                        <span className="text-[9px] font-bold text-slate-700">Marketplace</span>
                                    </div>
                                    <div className="bg-white p-2 rounded-xl border border-amber-100 flex flex-col items-center justify-center shadow-sm">
                                        <Briefcase className="w-4 h-4 text-blue-600 mb-1" />
                                        <span className="text-[9px] font-bold text-slate-700">Koperasi</span>
                                    </div>
                                    <div className="bg-white p-2 rounded-xl border border-amber-100 flex flex-col items-center justify-center shadow-sm">
                                        <MapPin className="w-4 h-4 text-slate-600 mb-1" />
                                        <span className="text-[9px] font-bold text-slate-700">Ojek Desa</span>
                                    </div>
                                    <div className="bg-white p-2 rounded-xl border border-amber-100 flex flex-col items-center justify-center shadow-sm">
                                        <Network className="w-4 h-4 text-blue-800 mb-1" />
                                        <span className="text-[9px] font-bold text-slate-700">PPOB / Laku Pandai</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 4: The BJB Lock-In */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-b from-blue-800 to-slate-900 rounded-3xl p-6 border border-blue-700 shadow-xl relative group hover:-translate-y-1 transition-transform flex flex-col items-center text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl font-bold text-amber-600 shadow-sm z-10" />
                            
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-none md:backdrop-blur-md flex items-center justify-center mb-4 relative z-10 border border-white/20 group-hover:scale-110 transition-transform">
                                <Lock className="w-8 h-8 text-amber-400" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-2 relative z-10">100% Retensi BJB</h4>
                            <p className="text-xs text-blue-200 leading-relaxed mb-4 relative z-10">Uang hasil belanja BUMDes mengendap kembali sebagai <span className="text-amber-300 font-bold">CASA Bank BJB</span>, memicu *Fee-Based Income* masif.</p>
                            <div className="mt-auto px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 text-[10px] font-black tracking-widest uppercase rounded-full w-full relative z-10 shadow-lg">
                                Ultimate Lock-In
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "bjb-programs",
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
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Integrasi Lintas Platform BJB</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Mengorkestrasi inisiatif unggulan Bank BJB dalam satu platform desa super app yang komprehensif.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { title: "bjb Bungah", subtitle: "Bumdes Ngahiji", desc: "Digitalisasi pembayaran PBB-P2 dan pajak kendaraan via BUMDes, mendongkrak fee-based income BJB.", icon: <Coins className="w-8 h-8" />, color: "from-blue-500/10 to-transparent", borderColor: "border-blue-200", accent: "text-blue-700" },
                        { title: "Siskeudes IBC", subtitle: "Internet Banking Corp", desc: "Integrasi real-time keuangan desa dengan sistem BJB. Meningkatkan transaparansi dan volume transaksi giro desa.", icon: <Database className="w-8 h-8" />, color: "from-slate-500/10 to-transparent", borderColor: "border-slate-200", accent: "text-slate-700" },
                        { title: "PESAT UMKM", subtitle: "Pemberdayaan Ekonomi", desc: "Memfasilitasi UMKM desa masuk e-commerce terintegrasi QRIS BJB, membuka jalur kredit mikro bagi pelaku usaha lokal.", icon: <ShoppingBag className="w-8 h-8" />, color: "from-amber-500/10 to-transparent", borderColor: "border-amber-200", accent: "text-amber-600" },
                        { title: "bjb BiSA!", subtitle: "Laku Pandai", desc: "Menjadikan aplikasi desa sebagai pintu percepatan program 1 BUMDes 1 Agen, mengakuisisi ribuan nasabah baru massal.", icon: <Network className="w-8 h-8" />, color: "from-blue-800/10 to-transparent", borderColor: "border-blue-300", accent: "text-blue-800" }
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
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest shadow-lg"
                    >
                        <Target className="w-3.5 h-3.5" />
                        Strategic Value Proposition
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">3 Pilar Utama Keuntungan BJB</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Mengapa kolaborasi ini adalah prioritas mutlak bagi pertumbuhan bisnis Bank BJB.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { title: "Customer Lock-in", desc: "Mengunci loyalitas seluruh perangkat desa & warga melalui ekosistem transaksi harian yang terintegrasi penuh dengan rekening BJB.", icon: <ShieldCheck className="w-8 h-8" />, color: "bg-blue-700", lightColor: "bg-blue-50" },
                        { title: "Massive Acquisition", desc: "Akuisisi nasabah baru secara otomatis & massal melalui digitalisasi layanan kependudukan dan bantuan sosial desa.", icon: <Users className="w-8 h-8" />, color: "bg-amber-500", lightColor: "bg-amber-50" },
                        { title: "Revenue Stream", desc: "Menciptakan aliran Fee-Based Income baru dari setiap transaksi PBB, PPOB, dan aktivitas ekonomi BUMDes di platform.", icon: <HandCoins className="w-8 h-8" />, color: "bg-slate-700", lightColor: "bg-slate-100" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <div className={`${item.color} text-white p-3 rounded-xl`}>{item.icon}</div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
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
                <div className="space-y-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold uppercase tracking-wider"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            The Blue Ocean Market
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 leading-tight">Potensi Skala <br className="hidden lg:block"/><span className="text-blue-700 italic">Jabar & Banten</span></h2>
                        <p className="text-lg text-slate-600 leading-relaxed">Wilayah *home base* Bank BJB menyimpan potensi ekonomi digital pedesaan yang belum tergarap maksimal.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: "Total Desa", value: "5.312+", sub: "Desa di Jabar", icon: <MapPin className="w-5 h-5 text-blue-700" /> },
                            { label: "Populasi Desa", value: "35jt+", sub: "Potensi Nasabah", icon: <Users className="w-5 h-5 text-amber-600" /> },
                            { label: "Dana Desa", value: "RP 6T+", sub: "Per Tahun", icon: <Coins className="w-5 h-5 text-slate-600" /> },
                            { label: "UMKM Desa", value: "1.2jt+", sub: "Potensi Kredit Mikro", icon: <Briefcase className="w-5 h-5 text-blue-800" /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="p-5 rounded-3xl bg-slate-50 border border-slate-100"
                            >
                                <div className="mb-3">{stat.icon}</div>
                                <div className="text-2xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                                <div className="text-[10px] text-slate-400 mt-1">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-blue-700/5 rounded-[60px] transform rotate-3 scale-105" />
                    <div className="relative glass h-[450px] rounded-[50px] border border-white p-6 md:p-10 overflow-hidden flex flex-col justify-center items-center text-center">
                        <PieChart className="w-48 h-48 text-blue-100 absolute -top-10 -right-10 opacity-20" />
                        <div className="space-y-6 relative z-10 w-full">
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mx-auto shadow-2xl shadow-blue-200"
                            >
                                <TrendingUp className="w-12 h-12 text-white" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-slate-900">Dominasi Market Share</h3>
                            <p className="text-slate-500 max-w-xs mx-auto">Satu-satunya solusi perbankan yang terintegrasi langsung ke sistem Tanda Tangan Elektronik dan SIA Desa.</p>
                            
                            <div className="pt-6 space-y-4">
                                {/* Animated Chart Bars */}
                                {[
                                    { label: "BJB (Current)", val: "65%", color: "bg-blue-600" },
                                    { label: "Target (2026)", val: "92%", color: "bg-gradient-to-r from-blue-700 to-amber-500" },
                                ].map((bar, idx) => (
                                    <div key={idx} className="space-y-1.5">
                                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                                            <span>{bar.label}</span>
                                            <span>{bar.val}</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
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
        id: "bjb-killer-features",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Zap className="w-4 h-4" />
                        Exclusive Banking Edge
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Supercharged BJB Integration</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Empat pilar "Killer Features" yang menjadikan Bank BJB sebagai satu-satunya poros perputaran uang (CASA) dan gaya hidup warga desa.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 relative z-10 pt-4">
                    {[
                        {
                            title: "Data-Driven KUR (Credit Scoring)",
                            badge: "Mitigasi NPL 0%",
                            desc: "AI menganalisa riwayat bayar PBB, utilitas, dan daya beli warga di Super App untuk melahirkan *Alternative Credit Score*. BJB bisa *Pre-Approve* KUR tanpa ragu berkat data valid, melesatkan kredit UMKM pelosok secara aman.",
                            icon: <BarChart className="w-7 h-7 text-white" />,
                            colorBg: "bg-blue-700",
                            glowColor: "group-hover:shadow-blue-200"
                        },
                        {
                            title: "Payroll Ekosistem Pemerintahan",
                            badge: "250K+ Nasabah Baru Terkunci",
                            desc: "Sistem otomatis yang mewajibkan Penghasilan Tetap (Siltap) Kades, Perangkat Desa, RT/RW, Linmas, hingga insentif Guru Ngaji terdistribusi eksklusif melalui jaringan rekening Payroll Bank BJB secara serentak.",
                            icon: <HandCoins className="w-7 h-7 text-white" />,
                            colorBg: "bg-amber-500",
                            glowColor: "group-hover:shadow-amber-200"
                        },
                        {
                            title: "Co-Branding Smart Card Terpadu",
                            badge: "BJB DigiCash Expansion",
                            desc: "Kartu Pelayanan Masyarakat (Smart ID Desa) dicetak terintegrasi dengan teknologi *e-Money* (BJB TapCash/Digicash). Bisa langsung digunakan warga untuk naik angkutan, tol, belanja, dan menerima BLT digital.",
                            icon: <CreditCard className="w-7 h-7 text-white" />,
                            colorBg: "bg-slate-800",
                            glowColor: "group-hover:shadow-slate-200"
                        },
                        {
                            title: "Gamifikasi CSR 'Desa BJB Juara'",
                            badge: "Zero CAC Marketing",
                            desc: "Hentikan bakar uang promosi mandek! Sistem kompetisi antar desa: Desa dengan transaksi tertinggi di ujung tahun diganjar _Reward_ CSR BJB (E-Ambulance/WiFi). Kades akan sukarela memaksa warganya bertransaksi via BJB.",
                            icon: <Trophy className="w-7 h-7 text-white" />,
                            colorBg: "bg-emerald-600",
                            glowColor: "group-hover:shadow-emerald-200"
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
                            className={`p-6 md:p-8 rounded-[32px] bg-white border border-slate-200 shadow-lg hover:-translate-y-2 transition-transform duration-300 group cursor-default ${feature.glowColor}`}
                        >
                            <div className="flex flex-col sm:flex-row gap-5 md:gap-6 items-start">
                                <div className={`shrink-0 w-16 h-16 rounded-2xl ${feature.colorBg} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider uppercase mb-2">
                                        {feature.badge}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight">{feature.title}</h3>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
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
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider"
                        >
                            <BarChart3 className="w-3.5 h-3.5" />
                            Financial Impact Analysis
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Proyeksi ROI untuk BJB</h2>
                        <p className="text-slate-500 max-w-xl text-base md:text-lg">Analisis peningkatan profitabilitas melalui digitalisasi ekosistem desa.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                        {[
                            { title: "Pertumbuhan CASA", value: "Proyeksi Rp 1.5 T", sub: "Hingga 2026", desc: "Digitalisasi 5.312 desa di Jabar & Banten mengunci likuiditas dana desa eksklusif di ledger Bank BJB.", icon: <Coins className="w-6 h-6" />, color: "text-blue-700", bg: "bg-blue-50", percentage: "85%" },
                            { title: "Fee-Based Income", value: "↑ 185%", sub: "Transaksi PPOB & PBB", desc: "Monetisasi setiap transaksi pembayaran pajak dan tagihan warga melalui ekosistem BJB Digi.", icon: <CreditCard className="w-6 h-6" />, color: "text-blue-800", bg: "bg-blue-100/50", percentage: "70%" },
                            { title: "Efisiensi Operasional", value: "↓ 40%", sub: "Cost reduction", desc: "Digitalisasi memangkas biaya distribusi bantuan tunai dan monitoring manual melalui sistem real-time.", icon: <Zap className="w-6 h-6" />, color: "text-amber-600", bg: "bg-amber-50", percentage: "40%" },
                            { title: "Competitive Moat", value: "Banking Ledger", sub: "Vs Fintech Wallets", desc: "BJB memiliki keunggulan regulasi sebagai pemegang rekening kas desa yang tidak dimiliki Fintech.", icon: <ShieldCheck className="w-6 h-6" />, color: "text-slate-700", bg: "bg-slate-100", percentage: "100%" }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-[32px] bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl ${card.bg} ${card.color} group-hover:rotate-12 transition-transform`}>{card.icon}</div>
                                    <div>
                                        <div className={`text-2xl font-black ${card.color}`}>{card.value}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{card.sub}</div>
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">{card.desc}</p>
                                {/* Animated Progress Meter */}
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mt-auto">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: card.percentage }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className={`h-full ${card.color.replace('text', 'bg')}`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="md:col-span-4 bg-slate-900 rounded-[40px] p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <BarChart className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <h3 className="text-2xl font-bold leading-tight italic">"Digitalisasi desa adalah investasi dengan resiko rendah namun berdampak tinggi (High Impact, Low Risk)."</h3>
                            <div className="space-y-4 pt-6">
                                <div className="flex justify-between text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    <span>Financial Health Score</span>
                                    <span>Excellent</span>
                                </div>
                                <div className="grid grid-cols-5 gap-1">
                                    {[1, 2, 3, 4, 5].map(b => <div key={b} className={`h-2 rounded-full ${b <= 4 ? 'bg-blue-500' : 'bg-slate-700'}`} />)}
                                </div>
                            </div>
                            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Leaf className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-bold text-white tracking-widest uppercase">ESG Boost Framework</span>
                                </div>
                                <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                                    <li><strong className="text-white">E</strong>nvironmental: Paperless Office</li>
                                    <li><strong className="text-white">S</strong>ocial: Inklusi Keuangan Warga</li>
                                    <li><strong className="text-white">G</strong>overnance: Transparansi PBB & DD</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-white/10 mt-6">
                            <div className="text-3xl font-black text-blue-400 tracking-tighter">SUSTAINABLE</div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Growth Model 2025 - 2030</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "bjb-strategic-dominance",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900 border border-blue-800 text-blue-100 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase shadow-lg shadow-blue-900/40"
                    >
                        <Lock className="w-4 h-4 text-amber-400" />
                        The Ultimate Advantage
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tighter">Strategic Dominance <span className="text-blue-700">Bank BJB</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium">Ini bukan sekadar kemitraan, ini adalah penguasaan ekosistem melalui *Banking Moat* yang tidak bisa ditembus oleh kompetitor.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-6">
                    {[
                        {
                            title: "Zero-Cost Acquisition",
                            subtitle: "CAC Rp 0",
                            desc: "Mengakuisisi puluhan ribu nasabah baru tanpa anggaran marketing tebal dan tanpa perlu repot membuka kantor cabang fisik di desa-desa pelosok.",
                            icon: <Target className="w-8 h-8 text-blue-700" />,
                            bg: "bg-blue-50 border-blue-200"
                        },
                        {
                            title: "Monopoli Big Data",
                            subtitle: "Data Intelijen Warga",
                            desc: "BJB akan menguasai tambang data terbesar di Jabar: Profil belanja, kapasitas utang, hingga siklus panen warga sebagai aset penawaran asuransi dan kredit terarah.",
                            icon: <Database className="w-8 h-8 text-amber-600" />,
                            bg: "bg-amber-50 border-amber-200"
                        },
                        {
                            title: "Infinite Loop FBI",
                            subtitle: "Fee-Based Income",
                            desc: "Mengubah miliaran rupiah peredaran PBB, pajak kendaraan, dan e-commerce BUMDes menjadi aliran _Fee Based Income_ berulang dari dalam ekosistem eksklusif BJB.",
                            icon: <Coins className="w-8 h-8 text-emerald-600" />,
                            bg: "bg-emerald-50 border-emerald-200"
                        },
                        {
                            title: "The Defensive Moat",
                            subtitle: "Benteng Kompetisi",
                            desc: "Sistem pemerintahan desa yang terintegrasi secara teknis (API) dengan Bank BJB akan otomatis menendang keluar dan memblokir Bank Himbara maupun *Fintech* lainnya masuk ke area ini.",
                            icon: <ShieldCheck className="w-8 h-8 text-slate-700" />,
                            bg: "bg-slate-50 border-slate-300"
                        }
                    ].map((perks, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.6 }}
                            className={`p-6 rounded-[32px] ${perks.bg} border relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}
                        >
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-white rounded-full blur-2xl opacity-50 group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                {perks.icon}
                            </div>
                            <div className="relative z-10 font-bold text-[11px] uppercase tracking-widest text-slate-500 mb-2">
                                {perks.subtitle}
                            </div>
                            <h3 className="relative z-10 text-xl font-black text-slate-900 mb-3 leading-tight">{perks.title}</h3>
                            <p className="relative z-10 text-sm text-slate-600 font-medium leading-relaxed mt-auto">
                                {perks.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "integration-roadmap",
        content: (
            <div className="space-y-8 md:space-y-12 min-h-[70vh] py-6 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black tracking-widest uppercase shadow-sm"
                    >
                        <Route className="w-4 h-4" />
                        Akselerasi Transformasi Digital
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Executive Implementation Roadmap</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-medium">Orkestrasi integrasi sistem yang terukur untuk menjamin keberlanjutan ekosistem perbankan desa.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
                    {/* Visual Roadmap Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12 group relative rounded-[40px] overflow-hidden bg-slate-50 border border-slate-200 shadow-2xl h-[250px] md:h-[350px]"
                    >
                        <Image 
                            src="/strategic_roadmap.png" 
                            alt="Strategic Roadmap" 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            width={1200} height={400} sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
                        <div className="absolute inset-0 flex items-center justify-between px-12 pointer-events-none md:flex hidden">
                            <div className="p-4 bg-white/10 backdrop-blur-none md:backdrop-blur-md rounded-2xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">Digital Governance</div>
                            <div className="p-4 bg-white/10 backdrop-blur-none md:backdrop-blur-md rounded-2xl border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">Financial Inclusion</div>
                        </div>
                    </motion.div>

                    {/* Roadmap Phases Grid */}
                    <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                phase: "Fase 01", 
                                title: "Harmonisasi & Integrasi", 
                                period: "Bulan 1-2",
                                desc: "Penyelarasan API antara CMS BJB dan Portal Desa serta formalisasi regulasi piloting.", 
                                color: "border-blue-200 bg-blue-50/50",
                                icon: <Link className="w-5 h-5 text-blue-700" />
                            },
                            { 
                                phase: "Fase 02", 
                                title: "Akselerasi Piloting", 
                                period: "Bulan 3-4",
                                desc: "Onboarding 100 desa perdana, pelatihan perangkat desa, dan aktivasi fungsionalitas perbankan.", 
                                color: "border-emerald-200 bg-emerald-50/50",
                                icon: <Smartphone className="w-5 h-5 text-emerald-700" />
                            },
                            { 
                                phase: "Fase 03", 
                                title: "Ekspansi Ekosistem", 
                                period: "Bulan 5-9",
                                desc: "Rollout masif seluruh wilayah, integrasi QRIS BUMDes, dan aktivasi bjbBISA.", 
                                color: "border-amber-200 bg-amber-50/50",
                                icon: <LayoutGrid className="w-5 h-5 text-amber-700" />
                            },
                            { 
                                phase: "Fase 04", 
                                title: "Optimasi Big Data", 
                                period: "Bulan 10+",
                                desc: "Implementasi AI Credit Scoring berbasis histori transaksi untuk penyaluran KUR yang presisi.", 
                                color: "border-slate-200 bg-slate-50/50",
                                icon: <Cpu className="w-5 h-5 text-slate-700" />
                            }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className={`p-6 rounded-[32px] border ${step.color} shadow-sm group hover:shadow-xl transition-all duration-300`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{step.phase}</div>
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        {step.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{step.title}</h4>
                                <div className="text-[9px] font-bold text-slate-500 italic mb-3">{step.period}</div>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
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
                <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
                    {/* Left Side: Strategic Narrative */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-[11px] font-black uppercase tracking-wider shadow-sm"
                            >
                                <Users2 className="w-3.5 h-3.5" />
                                Strategic Partnership Model
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 leading-[1.1]">Sinergi Tiga Pilar <br/><span className="text-blue-700 italic">Membangun Negeri</span></h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">Orkestrasi kolaboratif untuk menjamin keberlanjutan ekosistem digitalisasi dan kemandirian fiskal desa.</p>
                        </div>

                        <div className="space-y-3">
                            {[
                                { role: "Regulator", entity: "Pemerintah Daerah", desc: "Digital Policy & Regulatory Harmony", icon: <ShieldCheck className="w-5 h-5 text-slate-400" />, color: "border-slate-200" },
                                { role: "Financial Backbone", entity: "Bank BJB", desc: "Financial Core & Infrastructure", icon: <Landmark className="w-5 h-5 text-blue-700" />, color: "border-blue-200 bg-blue-50/50" },
                                { role: "Technology Partner", entity: "Mitra Teknologi", desc: "Innovation & Solution Operator", icon: <Cpu className="w-5 h-5 text-amber-600" />, color: "border-amber-100" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className={`flex items-center gap-4 p-4 rounded-2xl border ${item.color} shadow-sm group hover:scale-[1.02] transition-transform`}
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.role}</div>
                                        <div className="text-base font-bold text-slate-900">{item.entity}</div>
                                        <div className="text-[10px] font-bold text-blue-600/70 italic uppercase tracking-tight">{item.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Synergy Visual Hero */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative rounded-[60px] overflow-hidden bg-slate-900 aspect-square md:aspect-video lg:aspect-square shadow-2xl group border border-slate-800">
                            <Image 
                                src="/strategic_synergy.png" 
                                alt="Strategic Synergy" 
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                                width={800} height={800} sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20" />
                            
                            {/* Floating Labels */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                                <div className="flex justify-between items-start">
                                    <div className="px-5 py-2 glass rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-2xl">Policy</div>
                                    <div className="px-5 py-2 glass rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-2xl">Integrity</div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="px-6 md:px-8 py-3 md:py-4 glass-dark rounded-[24px] md:rounded-[30px] border border-blue-400/30 text-center">
                                        <div className="text-blue-300 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">Unified Goal</div>
                                        <div className="text-white text-xl md:text-2xl font-black italic">DIGITAL SOVEREIGNTY</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div className="px-5 py-2 glass rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-2xl">Capital</div>
                                    <div className="px-5 py-2 glass rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-2xl">Tech</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Blur */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] md:blur-[100px] -z-10 hidden md:block" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 hidden md:block" />
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: "compliance",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-white text-xs font-bold tracking-widest uppercase shadow-xl"
                    >
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        Governance & Compliance
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Tata Kelola & Kepatuhan</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Menjamin kepastian hukum dan keamanan data bagi Bank BJB dan Pemerintah Desa.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                        { 
                            title: "Smart Village alignment", 
                            entity: "Kemendes PDTT", 
                            desc: "Sesuai Permendesa No. 2/2024 tentang akselerasi Desa Cerdas Nasional.", 
                            icon: <Globe className="w-6 h-6" />, 
                            borderColor: "border-blue-100",
                            iconColor: "text-blue-700"
                        },
                        { 
                            title: "ISO & Anti-Ransomware", 
                            entity: "Cybersecurity", 
                            desc: "Infrastruktur berlapis dengan perlindungan Enkripsi 256-bit dan Data Center Tier 3.", 
                            icon: <ShieldAlert className="w-6 h-6" />, 
                            borderColor: "border-blue-200",
                            iconColor: "text-blue-800"
                        },
                        { 
                            title: "UU PDP Compliance", 
                            entity: "Data Privacy", 
                            desc: "Proteksi penuh data NIK dan KTP warga dari insiden kebocoran pihak ketiga.", 
                            icon: <Lock className="w-6 h-6" />, 
                            borderColor: "border-amber-100",
                            iconColor: "text-amber-600"
                        },
                        { 
                            title: "Siskeudes Integration", 
                            entity: "Kemendagri", 
                            desc: "Modul transaksi sesuai standar Laporan Keuangan Permendagri 20/2018.", 
                            icon: <Database className="w-6 h-6" />, 
                            borderColor: "border-slate-200",
                            iconColor: "text-slate-900"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-[32px] border ${item.borderColor} bg-white shadow-lg hover:shadow-xl transition-all group`}
                        >
                            <div className={`${item.iconColor} mb-4 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.entity}</div>
                            <h4 className="text-base font-bold text-slate-900 mb-2 leading-tight">{item.title}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-[40px] flex md:flex-row flex-col items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                            <Scale className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900">Legal Safeguard (PKS/MoU)</h4>
                            <p className="text-xs text-slate-500">Dukungan payung hukum melalui kerja sama resmi dengan Pemerintah Kabupaten sebagai dasar operasional Bank BJB.</p>
                        </div>
                    </div>
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-slate-300 animate-pulse" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-700 flex items-center justify-center text-[10px] font-bold text-white z-10">
                            +BJB
                        </div>
                    </div>
                </div>
            </div>
        ),
    },

    {
        id: "blt-digital",
        content: (
            <div className="space-y-10 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Coins className="w-4 h-4" />
                        Jaring Pengaman Sosial via BJB
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        BLT Dana Desa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500">Digital</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">Digitalisasi penyaluran Bantuan Langsung Tunai agar transparan, tepat sasaran, dan 100% menggunakan infrastruktur <span className="font-bold text-blue-800">Bank BJB</span>.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-7 glass p-6 md:p-8 rounded-[32px] border border-blue-100 bg-white shadow-lg">
                        <h3 className="text-lg font-bold text-slate-900 mb-5 text-blue-900">Alur Pencairan BLT via BJB</h3>
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Verifikasi Penerima via Dukcapil", desc: "Data kemiskinan divalidasi silang dengan Dukcapil & DTKS pusat.", color: "bg-blue-700" },
                                { step: "2", title: "Musyawarah Desa Terpusat", desc: "Hasil musdes tercatat di sistem, transparan dan bisa diaudit secara real-time.", color: "bg-blue-800" },
                                { step: "3", title: "Pencairan BJB Payment Gateway", desc: "Transfer langsung ke rekening BJB penerima via fasilitas Payroll BJB.", color: "bg-amber-500" },
                                { step: "4", title: "Auto-Reporting Siskeudes", desc: "Bukti mutasi BJB tersimpan otomatis di Siskeudes sebagai SPJ Sah.", color: "bg-slate-700" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-50 hover:bg-white hover:shadow-md transition-all">
                                    <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm`}>{item.step}</div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-5 space-y-5">
                        <div className="glass p-6 rounded-[28px] border border-blue-200 bg-gradient-to-br from-blue-50/80 to-amber-50/30">
                            <div className="flex items-center gap-3 mb-4">
                                <Landmark className="text-blue-700 w-6 h-6" />
                                <h4 className="font-bold text-slate-900">Keunggulan Integrasi BJB</h4>
                            </div>
                            <div className="space-y-3">
                                {[
                                    "Rekening BJB untuk 100% Penerima BLT",
                                    "Bebas pungli & potongan liar",
                                    "Mutasi tercatat langsung di Siskeudes",
                                    "Mengunci likuiditas Dana Desa di BJB",
                                    "SMS Banking BJB Notification"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                                            <span className="text-amber-600 text-xs">✓</span>
                                        </div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { value: "100%", label: "CASA BJB" },
                                { value: "0", label: "Kebocoran Dana" },
                                { value: "Auto", label: "Mutasi SPJ" },
                                { value: "Real-time", label: "Pencairan" }
                            ].map((item, i) => (
                                <div key={i} className="p-3 rounded-2xl bg-white border border-blue-100 text-center shadow-sm">
                                    <div className="text-xl font-extrabold text-blue-700">{item.value}</div>
                                    <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">{item.label}</div>
                                </div>
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
            <div className="space-y-10 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <MapPin className="w-4 h-4" />
                        Ekonomi Kreatif Desa Terpadu
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Desa Wisata <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-amber-500">Terintegrasi BJB QRIS</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Digitalisasi seluruh ekosistem wisata desa, dimana **semua transaksi** difasilitasi oleh Bank BJB melalui QRIS dan Payment Gateway.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                        { title: "Portal Promosi & Tiket BJB", desc: "Pemesanan tiket masuk dan event budaya terintegrasi channel pembayaran BJB untuk tracking PADesa real-time.", icon: <Globe className="w-6 h-6" />, color: "text-blue-700 bg-blue-50 border-blue-100" },
                        { title: "BUMDes E-Wallet Ready", desc: "Wisatawan dapat menggunakan e-wallet (BJB Digi) untuk seluruh transaksi di kawasan desa wisata.", icon: <Smartphone className="w-6 h-6" />, color: "text-amber-600 bg-amber-50 border-amber-100" },
                        { title: "Homestay Booking System", desc: "Pemesanan penginapan desa dibayar via Virtual Account BJB, dana langsung masuk ke kas BUMDes.", icon: <MapIcon className="w-6 h-6" />, color: "text-blue-800 bg-blue-50 border-blue-100" },
                        { title: "1 Warung 1 QRIS BJB", desc: "Mewajibkan seluruh UMKM / warung / kios oleh-oleh di kawasan wisata menggunakan QRIS Bank BJB.", icon: <ShoppingBag className="w-6 h-6" />, color: "text-blue-800 bg-blue-100/50 border-blue-200" },
                        { title: "Dashboard Revenue Wisata", desc: "Kades & Pengurus BUMDes monitor cuan wisata live. Pendapatan diendapkan di simpanan BJB.", icon: <TrendingUp className="w-6 h-6" />, color: "text-amber-700 bg-amber-50 border-amber-100" },
                        { title: "Ride-Sharing Lokal", desc: "Sistem ojek desa bayar mantap pakai QRIS BJB, membesarkan inklusi keuangan tukang ojek wisata.", icon: <Bot className="w-6 h-6" />, color: "text-slate-700 bg-slate-50 border-slate-200" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={`p-5 rounded-[24px] border ${item.color.split(' ')[2]} bg-white hover:shadow-lg transition-all group flex gap-4 items-start`}
                        >
                            <div className={`p-3 rounded-2xl ${item.color.split(' ')[1]} ${item.color.split(' ')[0]} shrink-0 shadow-sm border border-white group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                <p className="text-[11px] text-slate-600 leading-relaxed mt-1 font-medium">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "impact-story",
        content: (
            <div className="space-y-10 min-h-[70vh] py-8 flex flex-col justify-center origin-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black tracking-widest uppercase shadow-sm"
                    >
                        <User className="w-4 h-4" />
                        A Citizen's Journey
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Kisah Dampak: <span className="text-emerald-600">Satu Hari di Desa</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg italic">"Dulu kami tertinggal, kini kami terdepan bersama Bank BJB."</p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto mt-8">
                    {/* Journey Line (Desktop) */}
                    <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-slate-200" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { time: "08:00", active: "Administrasi", title: "Surat Instan", desc: "Warga mengajukan surat via HP, Kades TTD via sistem di manapun. Tanpa antri.", icon: <FileText className="w-6 h-6" /> },
                            { time: "11:00", active: "Finansial", title: "BLT Langsung", desc: "Notifikasi SMS BJB cair. Uang mendarat di rekening tanpa potongan oknum.", icon: <Coins className="w-6 h-6" /> },
                            { time: "15:00", active: "Ekonomi", title: "QRIS BUMDes", desc: "Warga belanja di warung desa pakai BJB Digi. Uang berputar di kas desa.", icon: <ShoppingBag className="w-6 h-6" /> },
                            { time: "19:00", active: "Inklusivitas", title: "Inklusi Digital", desc: "Akses asuransi & perbankan terbuka bagi warga pelosok berkat data valid.", icon: <ShieldCheck className="w-6 h-6" /> }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="absolute -top-3 px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-black text-emerald-600 shadow-sm z-10">{step.time}</div>
                                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-emerald-100 flex items-center justify-center mb-6 shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-all cursor-default relative">
                                    {step.icon}
                                    <div className="absolute -bottom-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white md:block hidden" />
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{step.active}</div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 p-8 rounded-[40px] bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="absolute right-0 top-0 p-12 opacity-10">
                        <Quote className="w-40 h-40" />
                    </div>
                    <div className="w-24 h-24 rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-none md:backdrop-blur-md flex items-center justify-center text-4xl font-black shrink-0">
                        98%
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h4 className="text-2xl font-bold italic leading-tight">"Digitalisasi ini bukan sekadar aplikasi, tapi martabat baru bagi desa kami."</h4>
                        <p className="text-emerald-100 text-sm font-medium">— Kepuasan Warga dalam Pilot Project (Survei 2024)</p>
                    </div>
                </motion.div>
            </div>
        ),
    },
    {
        id: "best-practice",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold tracking-wider uppercase">
                        <TrendingUp className="w-4 h-4" /> Bukti Nyata
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Best Practice & ROI</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">Dampak kuantitatif dan kualitatif setelah 6 bulan implementasi sistem digitalisasi desa secara menyeluruh.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                    {/* Hero Impact Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:col-span-12 lg:col-span-8 group relative rounded-[40px] overflow-hidden bg-slate-900 h-[300px] md:h-[450px] shadow-2xl"
                    >
                        <Image 
                            src="/roi_success.png" 
                            alt="ROI Success" 
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                            width={800} height={600} sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-black tracking-widest uppercase">
                                <TrendingUp className="w-3.5 h-3.5" /> Bukti Nyata & ROI
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Implementasi <br/>Fase I Berhasil</h3>
                            <p className="text-slate-300 max-w-xl text-sm md:text-lg font-medium">
                                Transformasi digital bukan sekadar wacana. Pilot project membuktikan efisiensi operasional masif dan lonjakan pendapatan asli desa yang terukur.
                            </p>
                        </div>
                    </motion.div>

                    {/* Efficiency Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-6 lg:col-span-4 p-6 md:p-8 rounded-[40px] bg-blue-600 text-white shadow-xl flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                                <Trash2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-4xl font-black mb-1">80%</h4>
                                <p className="text-sm font-bold opacity-80 uppercase tracking-tighter">Efisiensi Biaya Operasional</p>
                            </div>
                            <p className="text-sm text-blue-100 font-medium">Penghematan signifikan pada pengadaan kertas (Paperless) dan logistik kurir antar dinas.</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                            <span className="text-[10px] font-black tracking-widest uppercase opacity-60">Verified Stats</span>
                            <Zap className="w-4 h-4" />
                        </div>
                    </motion.div>

                    {/* Service Speed Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-6 lg:col-span-4 p-6 md:p-8 rounded-[40px] bg-white border border-slate-100 shadow-lg flex flex-col gap-4"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900">7x Lipat</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Akselerasi layanan administrasi desa. Dari 2 hari kerja menjadi <span className="font-bold text-slate-900">kurang dari 5 menit</span> via Tanda Tangan Elektronik.
                        </p>
                        <div className="mt-auto flex items-center gap-2">
                            <div className="h-1.5 flex-grow bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[90%] bg-amber-400 rounded-full" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400">90% Faster</span>
                        </div>
                    </motion.div>

                    {/* Testimonial Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-12 lg:col-span-8 p-8 md:p-10 rounded-[40px] bg-slate-50 border border-slate-200/50 shadow-inner relative overflow-hidden"
                    >
                        <Quote className="absolute -top-4 -right-4 w-40 h-40 text-slate-200/50 pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-grow space-y-4">
                                <p className="text-lg md:text-xl text-slate-700 italic font-medium leading-relaxed">
                                    "Digitalisasi ini menutup celah kebocoran PBB dan mengubah wajah ekonomi desa kami. Kini kami menjadi rujukan pelaporan tercepat se-Kecamatan."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold uppercase tracking-tighter">KD</div>
                                    <div>
                                        <div className="font-bold text-slate-900">H. Tatang Rustandi</div>
                                        <div className="text-xs text-slate-500 font-medium tracking-tight">Kepala Desa Percontohan Digital</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-px h-px md:h-24 bg-slate-200" />
                            <div className="flex flex-col items-center md:items-start shrink-0">
                                <div className="text-emerald-600 text-3xl font-black italic">+35%</div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">PADesa Growth</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: "funding-model",
        content: (
            <div className="space-y-10 md:space-y-12 min-h-[70vh] py-8 flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-black tracking-widest uppercase shadow-sm"
                    >
                        <Handshake className="w-4 h-4" />
                        Strategic Investment Proposal
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Skema Pembiayaan & Akselerasi</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium">Model investasi _Multi-Stakeholder_ yang dirancang khusus untuk profitabilitas perbankan tinggi dengan mitigasi risiko pemerintah.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                    {/* Hero Card with Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:col-span-8 group relative rounded-[40px] overflow-hidden bg-slate-900 aspect-[16/9] md:aspect-auto md:h-[400px] shadow-2xl"
                    >
                        <Image 
                            src="/village_digital_banking.png" 
                            alt="Village Digital Banking" 
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                            width={800} height={400} sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-[10px] font-bold tracking-widest uppercase">
                                <Landmark className="w-3.5 h-3.5" /> Core Investment
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">BUMDes Credit <br/>Linkage Model</h3>
                            <p className="text-slate-300 max-w-lg text-sm md:text-base font-medium">
                                Penyaluran kredit produktif (Capex) untuk infrastruktur teknologi desa. Mengubah desa menjadi aset aktif Bank BJB dengan risiko terukur.
                            </p>
                            <div className="pt-4 flex items-center gap-4">
                                <span className="text-xs font-black text-blue-400 tracking-tighter uppercase">PORTFOLIO EXPANSION</span>
                                <div className="h-px flex-grow bg-white/20" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Upper: Revenue Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 group relative rounded-[40px] overflow-hidden bg-emerald-900 h-[240px] md:h-auto shadow-xl"
                    >
                        <Image 
                            src="/financial_data_growth.png" 
                            alt="Financial Data" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:rotate-3 transition-transform duration-700"
                            width={400} height={400} sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end gap-2">
                            <h4 className="text-xl font-bold text-white">Shared-Revenue</h4>
                            <p className="text-xs text-emerald-100/80 leading-relaxed font-medium">Bagi hasil otomatis dari setiap Rupiah biaya admin transaksi (FBI).</p>
                            <div className="mt-2 text-[10px] font-black text-emerald-300 uppercase tracking-widest">High Profit Yield</div>
                        </div>
                    </motion.div>

                    {/* Bottom Row - 3 Cards */}
                    <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "CSR Acceleration",
                                desc: "Opsi pendanaan grant awal untuk fase piloting 100 desa pertama.",
                                icon: <HeartHandshake className="w-6 h-6 text-rose-600" />,
                                color: "bg-rose-50 border-rose-100",
                                img: "/csr_impact_village.png"
                            },
                            {
                                title: "Risk Mitigation",
                                desc: "Mitigasi resiko fiskal melalui jaminan dana pendamping Pemprov.",
                                icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
                                color: "bg-amber-50 border-amber-100",
                                label: "Provincial Support"
                            },
                            {
                                title: "Auto-Repayment",
                                desc: "Pengembalian modal otomatis dipotong langsung dari arus kas transaksi.",
                                icon: <Zap className="w-6 h-6 text-slate-700" />,
                                color: "bg-slate-50 border-slate-200",
                                label: "Secured Recoupment"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className={`group relative p-6 rounded-[32px] ${item.color} border overflow-hidden shadow-md flex flex-col h-full hover:shadow-xl transition-all`}
                            >
                                {item.img && (
                                    <Image src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt={item.title} width={400} height={300} />
                                )}
                                <div className="relative z-10 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="relative z-10 font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="relative z-10 text-xs text-slate-600 leading-relaxed font-medium mb-4 flex-grow">{item.desc}</p>
                                {item.label && <div className="relative z-10 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{item.label}</div>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "technology-partner",
        content: (
            <div className="min-h-[70vh] py-12 flex flex-col justify-center items-center text-center space-y-10 md:space-y-14">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-violet-200 blur-3xl opacity-20 rounded-full" />
                    <Image 
                        src="/Logo_violet.png" 
                        alt="PT. VIOLET GLOBAL INDONESIA" 
                        className="h-24 md:h-32 w-auto relative z-10 drop-shadow-2xl"
                        width={200} height={100}
                    />
                </motion.div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-black tracking-[0.2em] uppercase shadow-sm"
                    >
                        Technology & Strategy Partner
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-tight">
                        PT. VIOLET <span className="text-violet-600">GLOBAL INDONESIA</span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed italic">
                        "Mewujudkan Kedaulatan Digital melalui Tata Kelola Pemerintahan yang Strategis dan Keunggulan Teknologi."
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="p-6 md:p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl text-left space-y-4 group hover:border-violet-200 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 mb-2">
                            <Settings2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 italic">Tata Kelola Strategis</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            Berpengalaman dalam mendampingi pemerintah daerah menyusun Peta Jalan (*Roadmap*) Digitalisasi Sektor Publik, menjamin harmonisasi regulasi pusat dan daerah untuk efektivitas birokrasi.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-6 md:p-8 rounded-[40px] bg-slate-900 text-white shadow-xl text-left space-y-4 group hover:bg-slate-800 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-400 mb-2">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold italic">Akselerasi Implementasi</h4>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">
                            Bukan sekadar penyedia perangkat lunak, kami mengintegrasikan solusi teknologi yang adaptif dan komprehensif, sesuai dengan karakteristik unik struktur tata kelola wilayah di Indonesia.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-8 border-t border-slate-100 w-full max-w-md flex flex-col items-center gap-2"
                >
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Future-Proof Government</div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-slate-600">Terpercaya & Berpengalaman</span>
                    </div>
                </motion.div>
            </div>
        ),
    }
];
