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
    LayoutGrid,
    Link,
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
    Server
} from "lucide-react";
import { motion } from "framer-motion";

export interface Slide {
    id: string;
    content: React.ReactNode;
}

export const slides: Slide[] = [
    {
        id: "intro",
        content: (
            <div className="relative w-full h-[600px] rounded-[40px] overflow-hidden flex flex-col justify-end p-12">
                <div className="absolute inset-0">
                    <img src="/futuristic_village_cover.png" alt="Desa Digital" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/10" />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 max-w-4xl space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-700 tracking-widest uppercase">Platform Digital Desa Indonesia</span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]"
                        >
                            Transformasi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                                Digitalisasi Desa
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed"
                        >
                            Membangun kedaulatan data dan efisiensi layanan publik dari tingkat akar rumput menuju tata kelola responsif & transparan.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="pt-8 flex gap-6 items-center border-t border-slate-200/80"
                    >
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm z-30">
                                <Database className="w-4 h-4" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-slate-400 shadow-sm z-20">
                                <Globe className="w-4 h-4" />
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm z-10">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="text-sm font-medium text-slate-500">
                            Terintegrasi dengan <br /><span className="text-slate-900 font-bold">11+ Modul Desa</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: "legal",
        content: (
            <div className="space-y-12 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Arah Kebijakan Nasional
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Landasan Hukum & Kebijakan</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Pilar utama transformasi layanan desa yang terintegrasi secara nasional.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                    {/* Pillar 1 */}
                    <div className="glass p-8 rounded-[32px] border border-slate-200 bg-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                            <FileText className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">UU Nomor 06 Tahun 2014</h3>
                        <div className="text-[11px] font-bold text-blue-600 mb-4 tracking-wider uppercase bg-blue-50 inline-block px-2 py-1 rounded">Beserta Perubahannya</div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Undang-Undang Desa menjadi landasan utama kedaulatan desa sebagai subjek pembangunan. Mengamanatkan kewajiban pengembangan sistem informasi terpadu untuk pelayanan masyarakat yang transparan dan akuntabel.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="glass p-8 rounded-[32px] border border-emerald-100 bg-gradient-to-b from-emerald-50/50 to-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all transform md:-translate-y-4">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                            <Zap className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">Mandatori Desa Digital</h3>
                        <div className="text-[11px] font-bold text-emerald-600 mb-4 tracking-wider uppercase bg-emerald-50 inline-block px-2 py-1 rounded">Arah Kebijakan 2025</div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Instruksi pusat untuk transformasi digital total di seluruh entitas desa. Fokus pada implementasi aplikasi pelayanan super, manajemen keuangan, hingga kependudukan dengan konsep <span className="font-semibold text-slate-800">Sistem Pemerintahan Berbasis Elektronik (SPBE)</span>.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="glass p-8 rounded-[32px] border border-slate-200 bg-white shadow-lg relative overflow-hidden group hover:shadow-xl transition-all">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
                        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 ring-4 ring-white shadow-sm">
                            <Coins className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">Alokasi APBN untuk Desa</h3>
                        <div className="text-[11px] font-bold text-amber-600 mb-4 tracking-wider uppercase bg-amber-50 inline-block px-2 py-1 rounded">Tahun 2025 - 2026</div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Intervensi pendanaan prioritas melalui Dana Desa untuk memastikan seluruh infrastruktur *Smart Village* terbangun. Mencakup pengadaan *command center* mini, sarana prasarana penunjang, dan keberlanjutan sistem integrasi desa.
                        </p>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">Regulasi Teknis Pendukung</span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { title: "Perpres SPBE", no: "No. 95 Tahun 2018", desc: "Integrasi Pelayanan Publik", icon: <Globe className="w-5 h-5" /> },
                            { title: "Dana Desa", no: "Permendesa PDTT", desc: "Digitalisasi Prioritas APBN", icon: <Coins className="w-5 h-5" /> },
                            { title: "UU PDP", no: "No. 27 Tahun 2022", desc: "Keamanan Data Penduduk", icon: <ShieldCheck className="w-5 h-5" /> },
                            { title: "Siskeudes", no: "Permendagri 20/2018", desc: "Transparansi Keuangan", icon: <Database className="w-5 h-5" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                                <div className="p-2.5 rounded-xl bg-white text-slate-400 group-hover:text-primary-600 border border-slate-200 shadow-sm transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.title}</h4>
                                    <div className="text-[10px] font-semibold text-slate-500 mb-0.5">{item.no}</div>
                                    <p className="text-[10px] text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "vision",
        content: (
            <div className="h-full flex flex-col justify-center">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7 space-y-8 pr-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                            >
                                <Globe className="w-4 h-4 text-blue-600" />
                                Rancang Bangun Masa Depan
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                                Visi & Misi <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Digitalisasi Desa</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Tata Kelola Resposif & Transparan",
                                    desc: "Membangun sistem pemerintahan desa yang terukur, akuntabel, dan bebas dari silo data melalui implementasi SPBE terpadu.",
                                    icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
                                    bg: "bg-primary-50",
                                    border: "border-primary-100"
                                },
                                {
                                    title: "Kemandirian Ekonomi Digital",
                                    desc: "Memberdayakan BUMDes dan UMKM pedesaan melalui ekosistem e-commerce lokal, pariwisata digital, dan pembayaran non-tunai.",
                                    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
                                    bg: "bg-emerald-50",
                                    border: "border-emerald-100"
                                },
                                {
                                    title: "Inklusi & Kesejahteraan Sosial",
                                    desc: "Memastikan seluruh warga, tanpa terkecuali, memiliki akses setara terhadap layanan administrasi, kesehatan, dan pendidikan berbasis teknologi.",
                                    icon: <Briefcase className="w-6 h-6 text-amber-600" />,
                                    bg: "bg-amber-50",
                                    border: "border-amber-100"
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
                                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-5 relative">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-blue-50 rounded-[40px] transform rotate-3 scale-105" />

                        <div className="glass rounded-[32px] p-10 border border-white bg-white/60 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-center h-full min-h-[400px]">
                            {/* Watermark Icon */}
                            <div className="absolute -top-10 -right-10 text-slate-900 opacity-[0.03] transform rotate-12">
                                <Cpu className="w-64 h-64" />
                            </div>

                            <Quote className="w-12 h-12 text-primary-200 mb-6 relative z-10" />

                            <blockquote className="text-2xl md:text-3xl font-light italic text-slate-800 relative z-10 leading-snug">
                                "Desa bukan lagi <span className="font-semibold text-primary-700">objek</span> pembangunan, melainkan <span className="font-semibold text-primary-700">subjek</span> inovasi yang menggerakkan kemajuan bangsa melalui teknologi."
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4 relative z-10 pt-6 border-t border-slate-200/50">
                                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-bold overflow-hidden">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Paradigma Baru</div>
                                    <div className="text-xs text-slate-500">Transformasi Desa 4.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "framework",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <LayoutGrid className="w-4 h-4 text-primary-600" />
                        Arsitektur Sistem
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Framework <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Desa Digital</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Ekosistem terintegrasi dari input warga hingga output kebijakan pimpinan desa, didukung teknologi AI & IoT.</p>
                </div>

                <div className="relative glass p-10 rounded-[40px] border border-slate-200 shadow-2xl overflow-hidden bg-white">
                    {/* Subtle gradient accent */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-400 via-primary-500 to-emerald-400" />

                    <div className="grid md:grid-cols-3 gap-10 relative z-10">
                        {/* Kolom 1: Input (Warga) */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Akses Warga</h3>
                                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Multikanal Platform</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { title: "Mobile App (Android/iOS)", desc: "Pelayanan surat, pengaduan, dan info desa mandiri.", icon: <Smartphone className="w-5 h-5" />, color: "text-blue-600 bg-blue-50" },
                                    { title: "Portal Web Desa", desc: "Informasi publik, potensi desa, dan transparansi anggaran.", icon: <Globe className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50" },
                                    { title: "DesaBot (WhatsApp AI)", desc: "Chatbot 24/7 untuk tanya jawab regulasi & layanan.", icon: <Bot className="w-5 h-5" />, color: "text-violet-600 bg-violet-50" },
                                    { title: "Anjungan Desa Mandiri", desc: "Kiosk layanan di kantor desa untuk warga non-digital.", icon: <LayoutDashboard className="w-5 h-5" />, color: "text-amber-600 bg-amber-50" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors group">
                                        <div className={`p-2 rounded-xl ${item.color} shrink-0 border border-white shadow-sm`}>{item.icon}</div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kolom 2: Proses (Sistem Inti) */}
                        <div className="space-y-5 relative">
                            {/* Connector lines */}
                            <div className="absolute top-1/2 -left-6 w-6 border-t-2 border-dashed border-primary-200 hidden md:block" />
                            <div className="absolute top-1/2 -right-6 w-6 border-t-2 border-dashed border-primary-200 hidden md:block" />

                            <div className="flex items-center gap-3 pb-4 border-b border-primary-100">
                                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center border border-primary-100 shadow-sm">
                                    <Database className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Sistem Inti Desa</h3>
                                    <p className="text-[11px] text-primary-600 font-semibold uppercase tracking-wider">SID (Proses & Integrasi)</p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-primary-50/50 to-white p-6 rounded-3xl shadow-lg border border-primary-100 space-y-3">
                                <div className="flex justify-center mb-2">
                                    <Database className="w-12 h-12 text-primary-500" />
                                </div>
                                {[
                                    "Database Kependudukan Terpadu",
                                    "Layanan Persuratan & TTE",
                                    "Integrasi Siskeudes (Keuangan)",
                                    "Absensi & Kepegawaian Desa",
                                    "Modul PBB & Retribusi",
                                    "PPOB & Payment Gateway",
                                    "E-Commerce & Wisata"
                                ].map((item, i) => (
                                    <div key={i} className="px-3 py-2 bg-white rounded-xl text-sm font-semibold text-slate-700 shadow-sm border border-slate-100 text-center">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kolom 3: Output (Pimpinan) */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Output Keputusan</h3>
                                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Executive Dashboard</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { title: "Dashboard Kades", desc: "Monitoring real-time seluruh layanan desa.", icon: <LayoutDashboard className="w-5 h-5" />, color: "text-primary-600 bg-primary-50" },
                                    { title: "Laporan Otomatis", desc: "Format siap cetak untuk LPPD, APBDes, dan SPJ.", icon: <FileText className="w-5 h-5" />, color: "text-amber-600 bg-amber-50" },
                                    { title: "Analitik Kebijakan", desc: "Data-driven policy making berbasis AI.", icon: <TrendingUp className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50" },
                                    { title: "Early Warning System", desc: "Notifikasi otomatis anomali sensor & aduan kritis.", icon: <ShieldCheck className="w-5 h-5" />, color: "text-red-600 bg-red-50" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors group">
                                        <div className={`p-2 rounded-xl ${item.color} shrink-0 border border-white shadow-sm`}>{item.icon}</div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
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
        id: "unified-ecosystem",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Globe className="w-4 h-4 text-blue-600" />
                        Omnichannel Platform
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Ekosistem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Terpadu</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Satu basis data tunggal yang melayani seluruh kanal akses — dari genggaman warga hingga meja pimpinan.</p>
                </div>

                {/* Central Hub Visual */}
                <div className="relative">
                    <div className="grid md:grid-cols-5 gap-6">
                        {[
                            {
                                title: "Aplikasi Mobile",
                                desc: "Layanan surat, pengaduan, info desa, pembayaran — langsung dari genggaman warga.",
                                icon: <Smartphone className="w-7 h-7" />,
                                theme: "bg-blue-50 text-blue-600 border-blue-100",
                                accent: "from-blue-400 to-blue-600"
                            },
                            {
                                title: "Portal Web Desa",
                                desc: "Wajah digital desa yang informatif, transparan, dan terintegrasi SEO.",
                                icon: <Globe className="w-7 h-7" />,
                                theme: "bg-emerald-50 text-emerald-600 border-emerald-100",
                                accent: "from-emerald-400 to-emerald-600"
                            },
                            {
                                title: "DesaBot (WA AI)",
                                desc: "Chatbot AI 24/7 via WhatsApp untuk tanya jawab regulasi & tracking surat.",
                                icon: <Bot className="w-7 h-7" />,
                                theme: "bg-violet-50 text-violet-600 border-violet-100",
                                accent: "from-violet-400 to-violet-600"
                            },
                            {
                                title: "Dashboard Pimpinan",
                                desc: "Visualisasi real-time untuk Kades, Camat, hingga Bupati — sesuai level akses.",
                                icon: <LayoutDashboard className="w-7 h-7" />,
                                theme: "bg-amber-50 text-amber-600 border-amber-100",
                                accent: "from-amber-400 to-amber-600"
                            },
                            {
                                title: "Kiosk & Anjungan",
                                desc: "Mesin layanan mandiri di kantor desa untuk warga tanpa smartphone.",
                                icon: <Cpu className="w-7 h-7" />,
                                theme: "bg-slate-50 text-slate-600 border-slate-200",
                                accent: "from-slate-400 to-slate-600"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className={`glass p-6 rounded-[28px] border ${item.theme.split(' ')[2]} flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all group relative overflow-hidden`}
                            >
                                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.accent}`} />
                                <div className={`p-3.5 rounded-2xl ${item.theme.split(' ')[0]} ${item.theme.split(' ')[1]} ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="glass p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { value: "1", label: "Data Engine Tunggal", icon: <Database className="w-5 h-5 text-primary-600" /> },
                            { value: "5+", label: "Kanal Akses Warga", icon: <Smartphone className="w-5 h-5 text-blue-600" /> },
                            { value: "24/7", label: "Layanan Non-Stop", icon: <Zap className="w-5 h-5 text-amber-600" /> },
                            { value: "User Tiered", label: "Hak Akses Berjenjang", icon: <ShieldCheck className="w-5 h-5 text-emerald-600" /> }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">{item.icon}</div>
                                <div className="text-2xl font-extrabold text-slate-900">{item.value}</div>
                                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "workflow",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        Kedaulatan Data Desa
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Alur Layanan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Kepemilikan Sistem</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Seluruh sistem adalah aset desa — data tersimpan lokal, bisa dikustomisasi, dan dikembangkan sesuai visi masing-masing desa.</p>
                </div>

                {/* Workflow Steps */}
                <div className="relative pt-8 pb-4 px-4">
                    <div className="absolute top-[72px] left-10 right-10 h-1 bg-gradient-to-r from-blue-200 via-primary-300 to-emerald-200 hidden md:block rounded-full" />
                    <div className="grid md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { step: "1", title: "Pengajuan Mandiri", desc: "Warga mengajukan surat via Mobile App dari rumah.", icon: <Smartphone className="w-7 h-7 text-blue-500" />, color: "border-blue-100 bg-blue-50" },
                            { step: "2", title: "Validasi Otomatis", desc: "Data dicocokkan dengan Dukcapil & Database lokal desa.", icon: <Database className="w-7 h-7 text-slate-600" />, color: "border-slate-200 bg-white" },
                            { step: "3", title: "Verifikasi e-Sign", desc: "Aparatur memeriksa & memberi Tanda Tangan Elektronik (TTE).", icon: <ShieldCheck className="w-7 h-7 text-primary-500" />, color: "border-primary-100 bg-primary-50" },
                            { step: "4", title: "Selesai Instan", desc: "Surat digital dikirim ke HP warga, tersimpan aman di server desa.", icon: <FileText className="w-7 h-7 text-emerald-500" />, color: "border-emerald-100 bg-emerald-50" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-3">
                                <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center shadow-lg relative ${item.color}`}>
                                    {item.icon}
                                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-md border-2 border-white">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="space-y-1 pt-2">
                                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center">
                    <p className="text-slate-600 font-medium italic">"Membangun ekosistem yang terintegrasi, bukan sekadar mengganti kertas menjadi layar."</p>
                </div>
            </div>
        ),
    },
    {
        id: "digital-sovereignty",
        content: (
            <div className="space-y-12 h-full flex flex-col justify-center">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-[0.2em]"
                            >
                                <Key className="w-3 h-3" /> Filosofi Non-Vendor Base
                            </motion.div>
                            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 leading-tight">
                                Kedaulatan & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-primary-600 to-emerald-600">
                                    Kepemilikan Desa
                                </span>
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                Aplikasi ini dibangun secara <span className="text-primary-600 font-bold border-b-2 border-primary-200">Custom</span> untuk setiap desa. Desa bukan lagi penyewa, melainkan <span className="font-bold text-slate-900 italic">Pemilik Sah</span> dari sistem ini.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-10 h-10 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        <Landmark className="w-5 h-5" />
                                    </div>
                                    <h5 className="font-bold text-slate-900 mb-1">Custom Ownership</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Nama, logo, and identitas aplikasi sepenuhnya milik desa.</p>
                                </div>
                                <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h5 className="font-bold text-slate-900 mb-1">Private Data</h5>
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Data kependudukan bersifat private di server internal desa.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5 relative">
                        <div className="absolute -inset-10 bg-gradient-to-br from-primary-200/40 via-blue-100/20 to-emerald-200/40 rounded-full blur-[80px] animate-pulse" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative glass p-1 rounded-[48px] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden"
                        >
                            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[44px] space-y-8">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Secure Node</span>
                                        </div>
                                        <div className="font-mono text-[10px] text-slate-400">ID: DESA-DIGITAL-VAULT-01</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
                                        <Database className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                        <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                                            <span>Encryption Status</span>
                                            <span className="text-emerald-600">Active</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                                className="h-full bg-emerald-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 rounded-xl bg-primary-50 border border-primary-100/50 text-center">
                                            <div className="text-[10px] text-primary-600 font-bold uppercase">Local Server</div>
                                            <div className="text-sm font-extrabold text-slate-900 mt-1">ON-SITE</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-blue-50 border border-blue-100/50 text-center">
                                            <div className="text-[10px] text-blue-600 font-bold uppercase">Uptime</div>
                                            <div className="text-sm font-extrabold text-slate-900 mt-1">99.9%</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-900 rounded-2xl p-4 flex items-center justify-between">
                                    <span className="text-white text-xs font-bold font-mono">ENCRYPTED_DATA_STORE</span>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400/50" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400/20" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Ownership Comparison — Premium Versus Battle UI */}
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    {/* Platform Milik Desa (The Winner) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="relative p-1 rounded-[32px] bg-gradient-to-br from-emerald-500/20 via-primary-500/10 to-transparent border border-emerald-500/30 shadow-xl"
                    >
                        <div className="bg-white/95 backdrop-blur-md p-7 rounded-[30px] h-full space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-200">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-extrabold text-slate-900">Platform Milik Desa</h3>
                                        <p className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em] mt-0.5">Kedaulatan Rakyat Desa ✓</p>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase">Champion</div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { text: "Server Lokal & Berdaulat", desc: "Data tidak diintip pihak luar" },
                                    { text: "Aset Inventaris Desa", desc: "Bukan sewa, jadi milik aset" },
                                    { text: "Bebas Kustomisasi", desc: "Sesuai RPJMDesa Anda" },
                                    { text: "Pengembangan Mandiri", desc: "Tak tergantung vendor" },
                                    { text: "Zero Recurring Fee", desc: "Efisiensi APBDes jangka panjang" },
                                    { text: "Source Code Open", desc: "Dimiliki penuh oleh PemDes" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50 transition-colors">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex shrink-0 items-center justify-center text-[10px]">✓</div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-900">{item.text}</p>
                                            <p className="text-[9px] text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Vendor Pihak Ketiga (The Loser) */}
                    <div className="relative p-1 rounded-[32px] bg-slate-100 border border-slate-200 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                        <div className="bg-white/60 p-7 rounded-[30px] h-full space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-200 text-slate-400 flex items-center justify-center">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-extrabold text-slate-400">Vendor Pihak Ketiga</h3>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">Sistem Sewa Umum ✗</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 grayscale opacity-60">
                                {[
                                    { text: "Data di Cloud Vendor", desc: "Rawan kebocoran & dipantau" },
                                    { text: "Status Pinjam/Sewa", desc: "Bukan aset resmi desa" },
                                    { text: "Template Kaku", desc: "Tidak bisa diubah-ubah" },
                                    { text: "Tergantung Vendor", desc: "Update lama & birokrasi" },
                                    { text: "Biaya Bulanan", desc: "Beban dana desa rutin" },
                                    { text: "Risiko Vendor Tutup", desc: "Seluruh data hilang total" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                        <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex shrink-0 items-center justify-center text-[10px]">✗</div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-500">{item.text}</p>
                                            <p className="text-[9px] text-slate-400">{item.desc}</p>
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
        id: "features",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <FileText className="w-4 h-4 text-primary-600" />
                        Super App Desa
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Fitur <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-amber-500">Administrasi Terotomasi</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Seluruh layanan desa dalam satu platform — dari persuratan hingga keuangan, semua transparan dan instan.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: "Layanan Surat Terpadu", desc: "Otomasi 30+ jenis surat (SKU, Domisili, Kematian) dengan TTE.", icon: <FileText className="w-5 h-5" />, color: "text-blue-600 bg-blue-50 border-blue-100" },
                            { title: "Absensi Aparatur", desc: "Kehadiran digital berbasis GPS & Face Recognition.", icon: <CalendarCheck className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                            { title: "Manajemen PBB", desc: "Monitoring pembayaran PBB real-time per warga & per dusun.", icon: <Coins className="w-5 h-5" />, color: "text-amber-600 bg-amber-50 border-amber-100" },
                            { title: "Integrasi Siskeudes", desc: "Sinkronisasi otomatis ke Sistem Keuangan Desa pusat.", icon: <Landmark className="w-5 h-5" />, color: "text-primary-600 bg-primary-50 border-primary-100" },
                            { title: "E-Commerce Desa", desc: "Marketplace UMKM lokal terintegrasi pembayaran digital.", icon: <ShoppingBag className="w-5 h-5" />, color: "text-violet-600 bg-violet-50 border-violet-100" },
                            { title: "PPOB & Payment", desc: "Pembayaran PLN, PDAM, pulsa, dan BPJS langsung dari app.", icon: <Zap className="w-5 h-5" />, color: "text-red-600 bg-red-50 border-red-100" },
                            { title: "Koperasi Digital", desc: "Simpan pinjam dan pencatatan anggota koperasi desa.", icon: <Briefcase className="w-5 h-5" />, color: "text-teal-600 bg-teal-50 border-teal-100" },
                            { title: "Wisata & Ride-Sharing", desc: "Promosi destinasi desa dan ojek desa berbasis GPS.", icon: <MapPin className="w-5 h-5" />, color: "text-pink-600 bg-pink-50 border-pink-100" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`p-4 rounded-2xl border ${item.color.split(' ')[2]} bg-white hover:shadow-lg transition-all group flex flex-col gap-3`}
                            >
                                <div className={`p-2.5 rounded-xl ${item.color.split(' ')[1]} ${item.color.split(' ')[0]} w-fit shadow-sm group-hover:scale-110 transition-transform border border-white`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="relative flex flex-col gap-6">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-blue-50 rounded-[40px] blur-3xl opacity-40" />
                        <div className="relative glass p-8 rounded-[32px] border border-slate-200 shadow-2xl flex flex-col gap-6 bg-white">
                            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Dashboard Realtime</h4>
                                    <p className="text-xs text-slate-500">Preview Sistem Manajemen Desa</p>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-emerald-700 uppercase">Live</span>
                                </div>
                            </div>

                            {/* KPI Cards */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: "Surat Diproses", value: "1,247", change: "+12%", color: "text-blue-600" },
                                    { label: "Tingkat Kepuasan", value: "98.2%", change: "+3.1%", color: "text-emerald-600" },
                                    { label: "Rata-rata Proses", value: "< 5 mnt", change: "-67%", color: "text-amber-600" }
                                ].map((kpi, i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
                                        <div className="text-[10px] font-semibold text-slate-500 uppercase">{kpi.label}</div>
                                        <div className={`text-2xl font-extrabold ${kpi.color}`}>{kpi.value}</div>
                                        <div className="text-[10px] font-bold text-emerald-600">{kpi.change}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Progress Bars */}
                            <div className="space-y-3">
                                {[
                                    { label: "Efisiensi Pelayanan", pct: 85, color: "bg-primary-500" },
                                    { label: "Digitalisasi Arsip", pct: 72, color: "bg-blue-500" },
                                    { label: "Kepatuhan Laporan", pct: 96, color: "bg-emerald-500" }
                                ].map((bar, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-[10px] font-semibold text-slate-600">
                                            <span>{bar.label}</span>
                                            <span>{bar.pct}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.pct}%` }} />
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
        id: "how-it-works",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-semibold tracking-wider uppercase">
                        <Cpu className="w-4 h-4" /> Cara Kerja Integrasi
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Arsitektur Data Driven</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Dari ragam sumber data mentah menjadi keputusan strategis kepala desa secara instan.</p>
                </div>

                <div className="glass p-8 rounded-[40px] border border-slate-200 bg-white shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary-100/30 blur-3xl rounded-full" />

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        {/* Data Sources */}
                        <div className="flex-1 space-y-4 w-full">
                            <h4 className="font-bold text-slate-500 text-sm text-center tracking-widest uppercase mb-6">Sumber Data</h4>
                            <div className="space-y-3">
                                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-blue-500" />
                                        <span className="font-semibold text-slate-600">Warga (Input Aplikasi)</span>
                                    </div>
                                    <Zap className="w-4 h-4 text-slate-600" />
                                </div>
                                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Radio className="w-5 h-5 text-emerald-500" />
                                        <span className="font-semibold text-slate-600">Sensor IoT Lapangan</span>
                                    </div>
                                    <Zap className="w-4 h-4 text-slate-600" />
                                </div>
                                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-amber-500" />
                                        <span className="font-semibold text-slate-600">Aparatur (Data Manual)</span>
                                    </div>
                                    <Zap className="w-4 h-4 text-slate-600" />
                                </div>
                            </div>
                        </div>

                        {/* Central Processing */}
                        <div className="flex flex-col items-center gap-4 shrink-0 px-4 md:px-8">
                            <div className="text-slate-600 hidden md:block">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                            <div className="text-slate-600 md:hidden">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <div className="w-32 h-32 rounded-3xl bg-primary-600 text-slate-900 flex flex-col items-center justify-center shadow-2xl relative">
                                <div className="absolute inset-0 bg-slate-200 rounded-3xl animate-ping opacity-20" />
                                <Brain className="w-10 h-10 mb-2" />
                                <span className="font-bold text-center text-sm leading-tight">Data<br />Lake Desa</span>
                            </div>
                            <div className="text-slate-600 hidden md:block">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                            <div className="text-slate-600 md:hidden">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>

                        {/* Outputs */}
                        <div className="flex-1 space-y-4 w-full">
                            <h4 className="font-bold text-slate-500 text-sm text-center tracking-widest uppercase mb-6">Analisis & Tindakan</h4>
                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100 flex gap-4 items-start shadow-sm">
                                    <LayoutDashboard className="w-6 h-6 text-indigo-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-indigo-900 text-sm">Real-time Warning</h5>
                                        <p className="text-xs text-indigo-600/80 leading-relaxed mt-1">Notifikasi otomatis jika ada sensor anomali atau aduan mendesak.</p>
                                    </div>
                                </div>
                                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 flex gap-4 items-start shadow-sm">
                                    <TrendingUp className="w-6 h-6 text-emerald-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-emerald-900 text-sm">Kebijakan Akurat</h5>
                                        <p className="text-xs text-emerald-600/80 leading-relaxed mt-1">Distribusi bansos atau bantuan pertanian berbasis data presisi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "pillars",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-bold text-slate-900">3 Pilar Utama Digitalisasi</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Fondasi dasar pengembangan ekosistem digital pedesaan yang berkelanjutan.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Network className="w-10 h-10" />,
                            title: "Infrastruktur",
                            desc: "Pembangunan jaringan internet merata dan penyediaan perangkat keras pendukung (Anjungan Desa Mandiri).",
                            color: "text-blue-600"
                        },
                        {
                            icon: <Smartphone className="w-10 h-10" />,
                            title: "Layanan Publik",
                            desc: "Sistem Administrasi Desa Terintegrasi (SISAD) untuk surat menyurat dan pelayanan kependudukan instan.",
                            color: "text-emerald-600"
                        },
                        {
                            icon: <Database className="w-10 h-10" />,
                            title: "Basis Data",
                            desc: "Big Data Desa untuk pengambilan kebijakan berbasis data (Data Driven Policy) yang lebih akurat.",
                            color: "text-amber-600"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl space-y-4 border border-slate-200"
                        >
                            <div className={`${item.color} mb-4`}>{item.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "ecosystem",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-bold text-slate-900">Ekosistem SID di Indonesia</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Platform dominan yang telah membantu ribuan desa beralih ke digital.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-3xl border border-slate-200 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">OpenSID</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Platform open-source berbasis komunitas paling populer. Digunakan lebih dari 5.000 desa di Indonesia.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                Gratis & Fleksibel (Versi Komunitas)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                Dukungan Komunitas Luas
                            </li>
                        </ul>
                    </div>
                    <div className="glass p-8 rounded-3xl border border-slate-200 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Digides</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Layanan premium yang fokus pada kepatuhan regulasi dan kemudahan operasional bagi perangkat desa.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Sinkronisasi Aturan Kemendagri
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Fitur Administrasi Terlengkap
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "koperasi-merah-putih",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Landmark className="w-4 h-4" />
                        Program Strategis Nasional
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Koperasi Desa <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Merah Putih</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Implementasi Inpres No. 9 Tahun 2025 — Membangun 80.000 koperasi desa sebagai motor ekonomi kerakyatan.</p>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    {/* Left: Info Cards */}
                    <div className="md:col-span-5 space-y-5">
                        <div className="glass p-6 rounded-[28px] border border-red-100 bg-gradient-to-b from-red-50/50 to-white shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 to-red-600" />
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center ring-4 ring-white shadow-sm border border-red-100">
                                    <Landmark className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Dasar Hukum</h3>
                                    <p className="text-xs text-slate-500">Inpres No. 9 Tahun 2025</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Dicanangkan langsung oleh Presiden Prabowo Subianto pada 3 Maret 2025. Didukung SE Menkop UKM No. 1/2025 sebagai panduan teknis di seluruh kabupaten/kota.
                            </p>
                        </div>

                        <div className="glass p-6 rounded-[28px] border border-slate-200 bg-white shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-3">3 Model Implementasi</h4>
                            <div className="space-y-2">
                                {[
                                    { label: "Baru", desc: "Desa yang belum punya koperasi" },
                                    { label: "Upgrade", desc: "Koperasi existing disesuaikan AD/ART" },
                                    { label: "Revitalisasi", desc: "Koperasi tidak aktif dihidupkan kembali" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold border border-red-100">{i + 1}</div>
                                        <div>
                                            <span className="text-sm font-bold text-slate-900">{item.label}</span>
                                            <span className="text-xs text-slate-500 ml-2">— {item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Funding */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                            <Coins className="w-6 h-6 text-emerald-600 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">Skema Pendanaan</h4>
                                <p className="text-xs text-slate-500">Optimalisasi Dana Desa + cicilan HIMBARA 3-5 tahun</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: 7 Unit Usaha */}
                    <div className="md:col-span-7 space-y-5">
                        <div className="glass p-8 rounded-[32px] border border-slate-200 bg-white shadow-lg">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">7 Unit Usaha Wajib</h3>
                                    <p className="text-xs text-slate-500">Standar nasional per koperasi desa</p>
                                </div>
                                <div className="px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-[10px] font-bold text-red-700 uppercase tracking-wider">
                                    Target: 80.000 Koperasi
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Kantor Koperasi", desc: "Pusat administrasi & layanan anggota", icon: <Briefcase className="w-5 h-5" />, color: "text-blue-600 bg-blue-50" },
                                    { title: "Cold Storage", desc: "Penyimpanan berpendingin hasil tani", icon: <Database className="w-5 h-5" />, color: "text-cyan-600 bg-cyan-50" },
                                    { title: "Klinik Desa", desc: "Layanan kesehatan dasar untuk warga", icon: <ShieldCheck className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50" },
                                    { title: "Gerai Sembako", desc: "Penjualan kebutuhan pokok terjangkau", icon: <ShoppingBag className="w-5 h-5" />, color: "text-amber-600 bg-amber-50" },
                                    { title: "Apotek Desa", desc: "Penyediaan obat-obatan esensial", icon: <Zap className="w-5 h-5" />, color: "text-red-600 bg-red-50" },
                                    { title: "Simpan Pinjam", desc: "Modal usaha mikro untuk warga desa", icon: <Coins className="w-5 h-5" />, color: "text-violet-600 bg-violet-50" },
                                    { title: "Logistik Distribusi", desc: "Rantai pasok dari desa ke kota", icon: <TrendingUp className="w-5 h-5" />, color: "text-indigo-600 bg-indigo-50" }
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-start gap-3 p-3 rounded-2xl border border-slate-100 hover:shadow-md transition-all group ${i === 6 ? 'col-span-2' : ''}`}>
                                        <div className={`p-2 rounded-xl ${item.color} shrink-0 border border-white shadow-sm group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-[11px] text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Digital Integration Callout */}
                        <div className="p-5 rounded-2xl bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-100 flex gap-4 items-start">
                            <Bot className="w-6 h-6 text-primary-600 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">Terintegrasi Aplikasi Desa Digital</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Seluruh administrasi koperasi — keanggotaan, simpan pinjam, laporan keuangan — terkoneksi langsung ke Dashboard Pimpinan dan Siskeudes secara real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "stunting-digital",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Program Prioritas Nasional
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Pencegahan <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500">Stunting Digital</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Integrasi data Posyandu, ibu hamil, dan balita ke dashboard pimpinan desa untuk early warning gizi buruk.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-[32px] border border-pink-100 bg-gradient-to-b from-pink-50/30 to-white shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-400 to-red-500" />
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Fitur Monitoring Stunting</h3>
                        <div className="space-y-3">
                            {[
                                { text: "Dashboard tracking pertumbuhan balita per dusun", icon: <LayoutDashboard className="w-5 h-5 text-pink-600" /> },
                                { text: "Data ibu hamil terintegrasi jadwal Posyandu", icon: <CalendarCheck className="w-5 h-5 text-pink-600" /> },
                                { text: "Early warning system gizi buruk otomatis", icon: <ShieldCheck className="w-5 h-5 text-red-600" /> },
                                { text: "Laporan ke Puskesmas & Dinkes otomatis", icon: <FileText className="w-5 h-5 text-pink-600" /> },
                                { text: "Notifikasi jadwal imunisasi & vitamin ke HP ibu", icon: <Smartphone className="w-5 h-5 text-pink-600" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-pink-50">
                                    <div className="p-2 rounded-xl bg-pink-50 shrink-0">{item.icon}</div>
                                    <p className="text-sm text-slate-700 font-medium">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="glass p-6 rounded-[28px] border border-slate-200 bg-white shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-4">Alur Data Stunting</h4>
                            <div className="space-y-3">
                                {[
                                    { step: "1", label: "Kader Posyandu input data timbang via app" },
                                    { step: "2", label: "Sistem deteksi otomatis anak di bawah garis merah" },
                                    { step: "3", label: "Alert dikirim ke Bidan Desa & Kades" },
                                    { step: "4", label: "Intervensi gizi & PMT langsung ditindaklanjuti" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="w-8 h-8 rounded-lg bg-pink-600 text-white flex items-center justify-center text-xs font-bold">{item.step}</div>
                                        <p className="text-sm text-slate-700">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: "0-59", label: "Bulan Usia", sub: "Target Balita" },
                                { value: "Real-time", label: "Monitoring", sub: "Per Dusun" },
                                { value: "Auto", label: "Laporan", sub: "Ke Dinkes" }
                            ].map((item, i) => (
                                <div key={i} className="p-3 rounded-2xl bg-pink-50 border border-pink-100 text-center">
                                    <div className="text-lg font-extrabold text-pink-700">{item.value}</div>
                                    <div className="text-[10px] font-semibold text-slate-600 uppercase">{item.label}</div>
                                    <div className="text-[9px] text-slate-500">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "mbg-digital",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Sprout className="w-4 h-4" />
                        Program Unggulan Pemerintah
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Makan Bergizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Gratis (MBG)</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Digitalisasi distribusi dan monitoring program MBG agar transparan, tepat sasaran, dan terukur di setiap desa.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Data Penerima", desc: "Integrasi data kependudukan untuk validasi penerima manfaat (anak sekolah & ibu hamil) secara otomatis.", icon: <Users className="w-6 h-6" />, color: "text-blue-600 bg-blue-50 border-blue-100", accent: "from-blue-400 to-blue-600" },
                        { title: "Distribusi & Logistik", desc: "Tracking distribusi makanan dari dapur pusat ke sekolah/posyandu, tercatat real-time di dashboard.", icon: <TrendingUp className="w-6 h-6" />, color: "text-amber-600 bg-amber-50 border-amber-100", accent: "from-amber-400 to-amber-600" },
                        { title: "Transparansi Anggaran", desc: "Setiap rupiah tercatat — dari pembelian bahan baku hingga jumlah porsi yang terdistribusi per hari.", icon: <Coins className="w-6 h-6" />, color: "text-emerald-600 bg-emerald-50 border-emerald-100", accent: "from-emerald-400 to-emerald-600" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass p-8 rounded-[32px] border ${item.color.split(' ')[2]} bg-white shadow-lg relative overflow-hidden hover:shadow-xl transition-all`}
                        >
                            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.accent}`} />
                            <div className={`w-14 h-14 rounded-2xl ${item.color.split(' ')[1]} ${item.color.split(' ')[0]} flex items-center justify-center mb-6 ring-4 ring-white shadow-sm`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="glass p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 flex items-center gap-4">
                    <Bot className="w-6 h-6 text-amber-600 shrink-0" />
                    <p className="text-sm text-slate-700"><span className="font-bold">Integrasi Otomatis:</span> Data MBG tersinkron dengan modul Stunting Digital dan Siskeudes — satu input, seluruh laporan terbentuk otomatis.</p>
                </div>
            </div>
        ),
    },
    {
        id: "blt-digital",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Coins className="w-4 h-4" />
                        Jaring Pengaman Sosial
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        BLT Dana Desa <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Digital</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Digitalisasi penyaluran Bantuan Langsung Tunai agar transparan, tepat sasaran, dan bebas dari manipulasi data.</p>
                </div>
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7 glass p-8 rounded-[32px] border border-slate-200 bg-white shadow-lg">
                        <h3 className="text-lg font-bold text-slate-900 mb-5">Alur BLT Digital</h3>
                        <div className="space-y-4">
                            {[
                                { step: "1", title: "Verifikasi Penerima", desc: "Data kemiskinan divalidasi silang dengan Dukcapil & DTKS pusat.", color: "bg-blue-600" },
                                { step: "2", title: "Musyawarah Desa Digital", desc: "Hasil musdes tercatat di sistem, transparan dan bisa diaudit.", color: "bg-primary-600" },
                                { step: "3", title: "Pencairan via Payment Gateway", desc: "Transfer langsung ke rekening/e-wallet penerima — tanpa perantara.", color: "bg-emerald-600" },
                                { step: "4", title: "Bukti Terima Digital", desc: "Penerima konfirmasi via app, bukti tersimpan otomatis di Siskeudes.", color: "bg-amber-600" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className={`w-10 h-10 rounded-xl ${item.color} text-white flex items-center justify-center text-sm font-bold shrink-0`}>{item.step}</div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-5 space-y-5">
                        <div className="glass p-6 rounded-[28px] border border-emerald-100 bg-emerald-50/30">
                            <h4 className="font-bold text-slate-900 mb-3">Keunggulan BLT Digital</h4>
                            <div className="space-y-2">
                                {["Bebas pungli & manipulasi data", "Audit trail lengkap & real-time", "Integrasi DTKS & Siskeudes", "Notifikasi penerima via SMS/WA", "Laporan SPJ otomatis"].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                        <span className="text-emerald-600">✓</span>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { value: "0%", label: "Pungli" },
                                { value: "100%", label: "Transparan" },
                                { value: "Auto", label: "SPJ" },
                                { value: "Real-time", label: "Tracking" }
                            ].map((item, i) => (
                                <div key={i} className="p-3 rounded-2xl bg-white border border-emerald-100 text-center shadow-sm">
                                    <div className="text-xl font-extrabold text-emerald-700">{item.value}</div>
                                    <div className="text-[10px] font-semibold text-slate-500 uppercase">{item.label}</div>
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
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <MapPin className="w-4 h-4" />
                        Ekonomi Kreatif Desa
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Desa Wisata <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Digital</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Promosi destinasi, booking online, dan ojek desa — seluruh ekosistem wisata terintegrasi dalam satu platform.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Portal Promosi Wisata", desc: "Landing page per desa wisata dengan galeri foto, peta lokasi, dan ulasan pengunjung terintegrasi SEO.", icon: <Globe className="w-6 h-6" />, color: "text-teal-600 bg-teal-50 border-teal-100" },
                        { title: "Booking & Tiket Online", desc: "Pemesanan homestay, paket wisata alam, dan event budaya langsung dari app — pembayaran digital.", icon: <Smartphone className="w-6 h-6" />, color: "text-blue-600 bg-blue-50 border-blue-100" },
                        { title: "Ride-Sharing Desa", desc: "Ojek desa berbasis GPS untuk antar-jemput wisatawan dari terminal/stasiun ke destinasi wisata.", icon: <MapIcon className="w-6 h-6" />, color: "text-amber-600 bg-amber-50 border-amber-100" },
                        { title: "Marketplace Oleh-oleh", desc: "Warga desa bisa jual produk kerajinan & kuliner lokal ke wisatawan via e-commerce terintegrasi.", icon: <ShoppingBag className="w-6 h-6" />, color: "text-pink-600 bg-pink-50 border-pink-100" },
                        { title: "Dashboard Revenue", desc: "Kades bisa monitor pendapatan wisata, jumlah pengunjung, dan rating destinasi secara real-time.", icon: <TrendingUp className="w-6 h-6" />, color: "text-emerald-600 bg-emerald-50 border-emerald-100" },
                        { title: "Tour Guide Digital", desc: "QR code di setiap titik wisata yang memunculkan narasi sejarah, budaya, dan peta interaktif.", icon: <Bot className="w-6 h-6" />, color: "text-violet-600 bg-violet-50 border-violet-100" }
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
                                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "local-potential",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold tracking-wider uppercase">
                        <Sprout className="w-4 h-4" /> Potensi Lokal Terintegrasi
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Ketahanan Pangan & Ekosistem UMKM</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Platform yang adaptif untuk segala jenis komoditas unggulan desa, dari pertanian hingga pariwisata.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Ketahanan Pangan */}
                    <div className="glass p-8 rounded-[32px] border border-slate-200 bg-slate-100 space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                            <Sprout className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Ketahanan Pangan Digital</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Sistem pencatatan digital untuk memantau stok hasil bumi, memetakan lahan produktif, dan memprediksi masa panen secara akurat. Memastikan kemandirian pangan desa terjaga sepanjang tahun tanpa defisit.</p>
                        <div className="space-y-3 pt-4 border-t border-slate-200">
                            {[
                                "Monitoring Stok Panen & Gudang Desa",
                                "Prediksi Cuaca & Masa Tanam (IoT)",
                                "Rantai Pasok (Supply Chain) Pertanian"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center text-sm text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UMKM & Ekonomi */}
                    <div className="glass p-8 rounded-[32px] border border-slate-200 bg-slate-100 space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                            <ShoppingBag className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Ekosistem UMKM & Desa Wisata</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Memberdayakan produk lokal agar naik kelas. Sistem ini sangat kompatibel dengan model bisnis apapun: baik desa penghasil kopi unggulan, sentra kerajinan, maupun destinasi desa wisata alam.</p>
                        <div className="space-y-3 pt-4 border-t border-slate-200">
                            {[
                                "E-Commerce Desa (Etalase Produk Lokal)",
                                "Digitalisasi Tiket & Promosi Wisata",
                                "Koperasi Digital untuk Modal Usaha"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center text-sm text-slate-600">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "smart-village",
        content: (
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <div className="text-primary-600 font-bold text-sm tracking-widest uppercase">Next Generation</div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Visi Smart Village</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { title: "E-Commerce Desa", desc: "Pasar produk unggulan desa.", icon: <ShoppingBag className="w-5 h-5" /> },
                            { title: "Promo Wisata", desc: "Digitalisasi destinasi lokal.", icon: <MapPin className="w-5 h-5" /> },
                            { title: "Ojek Desa", desc: "Transportasi warga terintegrasi.", icon: <Smartphone className="w-5 h-5" /> },
                            { title: "Bursa Keahlian", desc: "Portal lowongan & skill warga.", icon: <Briefcase className="w-5 h-5" /> },
                            { title: "Koperasi Digital", desc: "Pengelolaan simpan pinjam modern.", icon: <Handshake className="w-5 h-5" /> },
                            { title: "Smart Farming", desc: "IoT Sensor Tanah & Cuaca.", icon: <Sprout className="w-5 h-5" /> },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-50">
                                <div className="p-2 rounded-lg bg-primary-50 text-primary-600 shrink-0">{item.icon}</div>
                                <div>
                                    <h5 className="font-bold text-slate-900 text-xs">{item.title}</h5>
                                    <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="glass rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center shadow-xl relative border-8 border-white group">
                    <img
                        src="/smart_village_dashboard.png"
                        alt="Smart Village Command Center"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-100/80 to-transparent text-slate-900">
                        <h3 className="text-xl font-bold">Executive Command Center</h3>
                        <p className="text-primary-200 text-xs mt-1">Real-time monitoring & data analytics.</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "integration",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-bold text-slate-900">Sinergi & Integrasi Data</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Menghubungkan data desa dengan ekosistem digital nasional secara real-time.</p>
                </div>
                <div className="relative flex justify-center items-center h-64">
                    <div className="absolute w-full border-t border-dashed border-slate-200" />
                    <div className="grid grid-cols-3 gap-12 relative z-10 w-full">
                        <div className="text-center space-y-3">
                            <div className="w-20 h-20 mx-auto glass rounded-full flex items-center justify-center text-slate-600 font-bold border-2 border-primary-100">DTKS</div>
                            <p className="text-xs text-slate-500 font-semibold uppercase">Kesejahteraan</p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="w-28 h-28 mx-auto bg-primary-600 rounded-3xl flex items-center justify-center text-slate-900 font-bold shadow-xl border-4 border-white">SISAD</div>
                            <p className="text-sm text-primary-700 font-bold uppercase">Open Data Desa</p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="w-20 h-20 mx-auto glass rounded-full flex items-center justify-center text-slate-600 font-bold border-2 border-emerald-100">SISKEUDES</div>
                            <p className="text-xs text-slate-500 font-semibold uppercase">Keuangan</p>
                        </div>
                    </div>
                </div>
                <div className="glass p-6 rounded-2xl border border-slate-200 mt-8">
                    <div className="flex gap-4 items-center text-slate-600">
                        <Link className="w-5 h-5 text-primary-600" />
                        <p className="text-sm">Data tersinkronisasi otomatis dengan <span className="font-bold text-slate-900">Dukcapil</span> untuk validasi NIK yang akurat.</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "ai-innovations",
        content: (
            <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-100/10 blur-[120px] rounded-full" />

                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary-400 text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl border border-primary-500/20"
                    >
                        <Brain className="w-3.5 h-3.5" /> Deep Tech Implementation
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight">
                        Integrasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-violet-600 to-blue-600">Artificial Intelligence</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Membawa kecerdasan buatan ke level akar rumput untuk pelayanan yang lebih prediktif dan responsif.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                    {[
                        {
                            title: "DesaBot (Generative AI)",
                            desc: "Chatbot responsif 24/7 yang memahami konteks regulasi desa & bansos melalui Large Language Model.",
                            icon: <MessageSquare className="w-6 h-6" />,
                            tag: "NLP Engine",
                            color: "from-blue-500/20 to-indigo-500/10",
                            border: "border-blue-200/50"
                        },
                        {
                            title: "Visual OCR Intelligence",
                            desc: "Otomasi ekstraksi data dari KTP/KK/Surat dengan akurasi 99% — mempercepat administrasi instan.",
                            icon: <ShieldCheck className="w-6 h-6" />,
                            tag: "Computer Vision",
                            color: "from-violet-500/20 to-purple-500/10",
                            border: "border-violet-200/50"
                        },
                        {
                            title: "AI Poverty Mapping",
                            desc: "Algoritma pemetaan kemiskinan berbasis data spasial & ekonomi untuk ketepatan sasaran bantuan (BLT).",
                            icon: <TrendingUp className="w-6 h-6" />,
                            tag: "Predictive Analytics",
                            color: "from-emerald-500/20 to-teal-500/10",
                            border: "border-emerald-200/50"
                        },
                        {
                            title: "Executive Command Hub",
                            desc: "Panel analisis cerdas bagi Kepala Desa untuk memantau performa aparatur & kesehatan data desa.",
                            icon: <LayoutDashboard className="w-6 h-6" />,
                            tag: "Decision Support",
                            color: "from-amber-500/20 to-orange-500/10",
                            border: "border-amber-200/50"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`group relative p-8 rounded-[36px] bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-sm shadow-xl overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/20 transition-colors" />

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 rounded-2xl bg-white shadow-lg text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/50 border border-white/80 text-slate-600">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>

                            <div className="mt-6 pt-6 border-t border-black/5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Neural Link</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </>
        ),
    },
    {
        id: "iot-innovations",
        content: (
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Infrastruktur Berbasi IoT</h2>
                        <p className="text-slate-500 text-lg">Sensor cerdas yang mengoptimalkan produktivitas dan keamanan lingkungan desa secara real-time.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                label: "Smart Agriculture",
                                text: "Sensor kelembapan tanah, pH, dan nutrisi untuk sistem irigasi otomatis.",
                                icon: <Sprout className="w-5 h-5" />
                            },
                            {
                                label: "Mitigasi Bencana",
                                text: "Deteksi dini banjir dan longsor di wilayah rawan pedesaan.",
                                icon: <CloudRain className="w-5 h-5" />
                            },
                            {
                                label: "Smart Streetlighting",
                                text: "Penerangan jalan hemat energi dengan sensor gerak dan kontrol pusat.",
                                icon: <Zap className="w-5 h-5" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-3xl bg-slate-100 border border-slate-200">
                                <div className="shrink-0 p-2 rounded-xl bg-white shadow-sm text-primary-600">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <h5 className="font-bold text-slate-900">{item.label}</h5>
                                    <p className="text-sm text-slate-500">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative h-full glass rounded-[40px] border border-white p-8 flex flex-col justify-center items-center gap-8 shadow-2xl">
                        <div className="relative">
                            <Radio className="w-24 h-24 text-primary-600 animate-ping absolute opacity-20" />
                            <Radio className="w-24 h-24 text-primary-600 relative" />
                        </div>
                        <div className="text-center space-y-2">
                            <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Desa Terkoneksi</h4>
                            <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">LoRaWAN & NB-IoT Network</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full pt-4">
                            <div className="glass p-3 rounded-2xl text-center border-slate-200">
                                <p className="text-xs text-slate-500">Data Points</p>
                                <p className="text-lg font-bold text-slate-700">1.2K+</p>
                            </div>
                            <div className="glass p-3 rounded-2xl text-center border-slate-200">
                                <p className="text-xs text-slate-500">Uptime</p>
                                <p className="text-lg font-bold text-emerald-600">99.9%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "emergency-services",
        content: (
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-red-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative glass p-8 rounded-[40px] border border-red-50 shadow-xl overflow-hidden">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-red-600 text-slate-900 animate-pulse">
                                <PhoneCall className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Layanan Darurat</h3>
                                <p className="text-sm text-slate-500 font-mono tracking-tighter">CALL CENTER 24 JAM</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "Ambulans Desa", val: "SIAGA 24/7" },
                                { label: "Panic Button", val: "RESPONSE < 5 MIN" },
                                { label: "Aduan Masyarakat", val: "TERHUBUNG KADES" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                    <span className="text-sm font-bold text-slate-600">{item.label}</span>
                                    <span className="text-xs font-mono text-red-600 font-black">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-widest">
                            <MessageSquare className="w-3 h-3" /> Aspirasi Warga
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Sistem Aduan & Respon Cepat</h2>
                    </div>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Membangun jembatan komunikasi langsung antara warga dan pimpinan desa. Transparan, terukur, dan tuntas.
                    </p>
                    <div className="p-6 rounded-3xl bg-primary-50 border border-primary-100 text-slate-900 space-y-4 relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 p-4 text-primary-200">
                            <Zap className="w-16 h-16" />
                        </div>
                        <p className="text-sm font-mono text-primary-600 font-bold uppercase tracking-widest">Live Feedback Loop</p>
                        <h4 className="text-xl font-bold">Respon Aduan Maksimal 1x24 Jam</h4>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(star => <div key={star} className="w-3 h-3 bg-amber-400 rounded-full" />)}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "satu-data",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Database className="w-4 h-4" />
                        Perpres 39/2019
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Satu Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Indonesia</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Platform desa menjadi feeder data ke sistem nasional — memenuhi mandat Perpres 39/2019 tentang Satu Data Indonesia.</p>
                </div>
                <div className="glass p-10 rounded-[40px] border border-slate-200 bg-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-primary-500" />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto ring-4 ring-white shadow-sm border border-indigo-100">
                                <Database className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Data Desa</h3>
                            <p className="text-sm text-slate-500">Kependudukan, keuangan, aset, layanan — semua berawal dari input level desa.</p>
                            <div className="space-y-2">
                                {["Dukcapil Lokal", "Siskeudes", "Layanan Publik"].map((item, i) => (
                                    <div key={i} className="px-3 py-2 bg-indigo-50 rounded-xl text-xs font-bold text-indigo-700">{item}</div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4 text-center relative">
                            <div className="absolute top-8 -left-4 w-4 border-t-2 border-dashed border-indigo-200 hidden md:block" />
                            <div className="absolute top-8 -right-4 w-4 border-t-2 border-dashed border-indigo-200 hidden md:block" />
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto ring-4 ring-white shadow-sm border border-blue-100">
                                <Network className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">API Gateway</h3>
                            <p className="text-sm text-slate-500">Penghubung standar antar sistem — format data terbuka & interoperable.</p>
                            <div className="space-y-2">
                                {["REST API", "Data Standar", "Enkripsi E2E"].map((item, i) => (
                                    <div key={i} className="px-3 py-2 bg-blue-50 rounded-xl text-xs font-bold text-blue-700">{item}</div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mx-auto ring-4 ring-white shadow-sm border border-primary-100">
                                <Globe className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Sistem Nasional</h3>
                            <p className="text-sm text-slate-500">Data desa menjadi suplai untuk kebijakan di tingkat kabupaten hingga nasional.</p>
                            <div className="space-y-2">
                                {["DTKS Kemensos", "Satu Data Portal", "Dashboard Nasional"].map((item, i) => (
                                    <div key={i} className="px-3 py-2 bg-primary-50 rounded-xl text-xs font-bold text-primary-700">{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "sdgs-desa",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <Globe className="w-4 h-4" />
                        Pembangunan Berkelanjutan
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        SDGs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Desa</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Platform otomatis melacak 18 indikator SDGs Desa dari Kemendes PDTT — tanpa input manual.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { no: "01", title: "Desa Tanpa Kemiskinan", desc: "Tracking data warga miskin, penerima BLT, dan program pemberdayaan.", color: "bg-red-50 text-red-600 border-red-100" },
                        { no: "02", title: "Desa Tanpa Kelaparan", desc: "Integrasi data stunting, MBG, dan ketahanan pangan per dusun.", color: "bg-amber-50 text-amber-600 border-amber-100" },
                        { no: "03", title: "Desa Sehat & Sejahtera", desc: "Data Posyandu, imunisasi, dan akses kesehatan warga.", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
                        { no: "04", title: "Pendidikan Berkualitas", desc: "Tracking anak putus sekolah, beasiswa, dan fasilitas pendidikan.", color: "bg-blue-50 text-blue-600 border-blue-100" },
                        { no: "08", title: "Pertumbuhan Ekonomi", desc: "Data BUMDes, UMKM, koperasi, dan pendapatan desa.", color: "bg-violet-50 text-violet-600 border-violet-100" },
                        { no: "16", title: "Kelembagaan Damai", desc: "Transparansi anggaran, musdes digital, dan akuntabilitas.", color: "bg-slate-50 text-slate-600 border-slate-200" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={`p-5 rounded-[24px] border ${item.color.split(' ')[2]} bg-white hover:shadow-md transition-all flex gap-4 items-start`}
                        >
                            <div className={`w-12 h-12 rounded-2xl ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} flex items-center justify-center text-lg font-extrabold shrink-0 shadow-sm`}>
                                {item.no}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="glass p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 flex items-center gap-4">
                    <Database className="w-6 h-6 text-blue-600 shrink-0" />
                    <p className="text-sm text-slate-700"><span className="font-bold">Auto-Tracking:</span> Seluruh 18 indikator SDGs Desa terisi otomatis dari data operasional harian — tanpa perlu input manual atau laporan terpisah.</p>
                </div>
            </div>
        ),
    },
    {
        id: "benefits",
        content: (
            <div className="space-y-12 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/20 blur-[100px] rounded-full -mr-32 -mt-32" />

                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] border border-emerald-100 shadow-sm"
                    >
                        <Users className="w-3.5 h-3.5" /> Citizen-Centric Innovation
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Manfaat Langsung <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">bagi Warga Desa</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">Memberdayakan masyarakat melalui akses layanan digital yang inklusif, transparan, dan responsif.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                    {/* Left side: Grid of features */}
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            {
                                title: "Kemandirian Layanan Digital",
                                desc: "Akses 24/7 untuk pengajuan surat keterangan & dokumen kependudukan tanpa perlu antre di kantor desa.",
                                icon: <Smartphone className="w-5 h-5" />,
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                title: "Partisipasi Publik Aktif",
                                desc: "Saluran aspirasi langsung via E-Musrenbang & hub pengaduan warga untuk pembangunan yang lebih tepat sasaran.",
                                icon: <MessageSquare className="w-5 h-5" />,
                                color: "bg-violet-50 text-violet-600"
                            },
                            {
                                title: "Pemberdayaan Ekonomi",
                                desc: "Integrasi Pasar Desa & BUMDes untuk mempromosikan produk lokal UMKM ke ekosistem yang lebih luas.",
                                icon: <TrendingUp className="w-5 h-5" />,
                                color: "bg-emerald-50 text-emerald-600"
                            },
                            {
                                title: "Presisi Penyaluran Bantuan",
                                desc: "Transparansi data penerima bansos (BLT/PKH) yang terverifikasi AI untuk meminimalisir kesalahan sasaran.",
                                icon: <ShieldCheck className="w-5 h-5" />,
                                color: "bg-amber-50 text-amber-600"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex gap-5 p-5 rounded-[28px] bg-white/50 border border-slate-200/60 backdrop-blur-md hover:bg-white hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
                            >
                                <div className={`p-3.5 rounded-2xl ${item.color} shadow-sm shrink-0`}>
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        className="relative hidden md:block"
                    >
                        <div className="absolute inset-0 bg-emerald-400 blur-[80px] opacity-10 rounded-full scale-75" />
                        <div className="glass rounded-[48px] p-2 border border-slate-200/50 shadow-2xl relative z-10 overflow-hidden transform hover:rotate-2 transition-transform duration-500">
                            <img
                                src="/citizen_app_mockup_1773145276670.png"
                                alt="Citizen App Mockup"
                                className="w-full h-auto rounded-[40px] shadow-lg"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 z-20 flex items-center gap-3 animate-bounce shadow-emerald-200/50">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                <Zap className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-900 uppercase">Real-time Service</p>
                                <p className="text-[9px] text-slate-500">Aktif & Terintegrasi</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
    },
    {
        id: "best-practice",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wider uppercase">
                        <TrendingUp className="w-4 h-4" /> Bukti Nyata
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Best Practice & Return on Investment</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Dampak kuantitatif dan kualitatif setelah 6 bulan implementasi sistem digitalisasi desa secara menyeluruh.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        {[
                            {
                                "icon": <Trash2 className="w-6 h-6 text-red-500" />,
                                "title": "Paperless Office (Hemat 80%)",
                                "desc": "Pengurangan drastis penggunaan kertas, tinta tinta printer, dan biaya kurir antar dinas. Dari rata-rata 50 rim menjadi hanya 10 rim per bulan."
                            },
                            {
                                "icon": <Zap className="w-6 h-6 text-amber-500" />,
                                "title": "Kecepatan Layanan (7x Lipat)",
                                "desc": "Tanda Tangan Elektronik memangkas waktu birokrasi surat menyurat dari rata-rata 2 hari (karena Kades dinas luar) menjadi kurang dari 5 menit."
                            },
                            {
                                "icon": <TrendingUp className="w-6 h-6 text-emerald-500" />,
                                "title": "Peningkatan PADesa (UMKM)",
                                "desc": "Transaksi pasar desa online memutar roda ekonomi lokal, meningkatkan setoran bagi hasil BUMDes ke kas desa hingga 35% di tahun pertama."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 rounded-[24px] bg-slate-100 border border-slate-200">
                                <div className="shrink-0 pt-1">{item.icon}</div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative glass p-8 rounded-[40px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white shadow-2xl flex flex-col gap-8 h-full min-h-[400px]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-full blur-3xl" />
                        <div className="flex justify-between items-start relative z-10">
                            <Quote className="w-12 h-12 text-emerald-200" />
                            <div className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-emerald-600 shadow-sm border border-emerald-100 uppercase tracking-widest">
                                Kisah Sukses Desa Pilot
                            </div>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <p className="text-xl font-light italic text-slate-600 leading-relaxed">
                                "Sistem ini tidak hanya memudahkan pelayanan administrasi kami, tetapi menekan kebocoran PBB dan mengubah cara warga kami bertransaksi. Desa yang dulu tertinggal, kini menjadi center of excellence pelaporan tercepat se-Kecamatan."
                            </p>
                        </div>
                        <div className="mt-auto flex items-center gap-4 relative z-10 pt-6 border-t border-emerald-100">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                                KD
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Kepala Desa Percontohan</h4>
                                <p className="text-sm text-slate-500">Testimoni Implementasi Smart Village</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "literasi-digital",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <GraduationCap className="w-4 h-4" />
                        Capacity Building
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Pelatihan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">Literasi Digital</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Pendampingan intensif untuk aparatur desa dan warga agar adopsi teknologi berjalan lancar dan berkelanjutan.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-900">Program Pelatihan</h3>
                        {[
                            { title: "Training Aparatur Desa", desc: "Pelatihan operasional sistem untuk Sekdes, Kaur, dan operator desa (3-5 hari intensif).", icon: <User className="w-5 h-5" />, color: "text-blue-600 bg-blue-50" },
                            { title: "Pendampingan Kader", desc: "Pelatihan kader Posyandu & PKK untuk input data stunting, MBG, dan layanan sosial.", icon: <Users className="w-5 h-5" />, color: "text-pink-600 bg-pink-50" },
                            { title: "Sosialisasi Warga", desc: "Workshop penggunaan Mobile App untuk warga — dari pengajuan surat hingga pengaduan.", icon: <Smartphone className="w-5 h-5" />, color: "text-emerald-600 bg-emerald-50" },
                            { title: "Sertifikasi Digital", desc: "Aparatur mendapat sertifikat kompetensi digital dari lembaga terakreditasi.", icon: <GraduationCap className="w-5 h-5" />, color: "text-amber-600 bg-amber-50" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all group">
                                <div className={`p-2.5 rounded-xl ${item.color} shrink-0 shadow-sm border border-white group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="glass p-8 rounded-[32px] border border-violet-100 bg-gradient-to-b from-violet-50/30 to-white shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-400 to-purple-500" />
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Metode Pendampingan</h3>
                        <div className="space-y-4">
                            {[
                                { phase: "Bulan 1-2", title: "Instalasi & Setup", desc: "Pemasangan sistem, migrasi data, dan konfigurasi awal." },
                                { phase: "Bulan 3-4", title: "Training Intensif", desc: "Pelatihan hands-on untuk seluruh operator desa." },
                                { phase: "Bulan 5-6", title: "Pendampingan On-Site", desc: "Tim teknis hadir di desa untuk memastikan adopsi." },
                                { phase: "Bulan 7-12", title: "Support & Monitoring", desc: "Remote support via helpdesk + evaluasi triwulanan." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start p-3 rounded-xl bg-white border border-violet-50">
                                    <div className="px-2 py-1 rounded-lg bg-violet-100 text-violet-700 text-[10px] font-bold shrink-0 whitespace-nowrap">{item.phase}</div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-[11px] text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "funding-model",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-semibold tracking-wider uppercase">
                        <Handshake className="w-4 h-4" /> Kemitraan & Pendanaan
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Skema Pembiayaan & Kolaborasi</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Solusi investasi teknologi yang tidak membebani APBDes, melainkan menjadi sumber Pendapatan Asli Desa (PADesa).</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Model 1 */}
                    <div className="glass p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <Coins className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Alokasi Prioritas Dana Desa</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">Sesuai Permendes tentang Prioritas APBDes, pendanaan dapat dialokasikan dari anggaran peningkatan kapasitas SDM dan Sistem Informasi Desa.</p>
                        <div className="mt-auto pt-4 border-t border-slate-200 font-mono text-xs text-slate-500">STATUS: LEGAL & COMPLIANT</div>
                    </div>

                    {/* Model 2 */}
                    <div className="glass p-8 rounded-[32px] border border-primary-100 bg-primary-50 shadow-md relative overflow-hidden flex flex-col gap-4 transform md:-translate-y-4">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50" />
                        <div className="w-14 h-14 rounded-2xl bg-white text-primary-600 flex items-center justify-center shadow-sm relative z-10">
                            <Landmark className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 relative z-10">BUMDes sebagai Pengelola</h3>
                        <p className="text-slate-600 text-sm leading-relaxed relative z-10">BUMDes sebagai sentral layanan. Keuntungan dari transaksi e-commerce, payment gateway (PPOB), dan wisata digital otomatis menjadi sumber PADesa.</p>
                        <div className="mt-auto pt-4 border-t border-primary-100/50 font-bold text-xs text-primary-700 relative z-10">BEST RECOMMENDED MODEL</div>
                    </div>

                    {/* Model 3 */}
                    <div className="glass p-8 rounded-[32px] border border-slate-200 bg-white shadow-sm flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Kemitraan Pihak Ketiga (CSR)</h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">Membuka peluang gotong royong pendanaan awal melalui program Corporate Social Responsibility (CSR) dari BUMN/Swasta lokal.</p>
                        <div className="mt-auto pt-4 border-t border-slate-200 font-mono text-xs text-slate-500">STATUS: ALTERNATIVE FUNDING</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "roadmap",
        content: (
            <div className="space-y-12 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-50/10 blur-[120px] rounded-full" />

                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary-400 text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl border border-primary-500/20"
                    >
                        Strategic Journey
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                        Tahapan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600">Implementasi Strategis</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Roadmap transformasi digital menuju Desa Mandiri yang cerdas dan berkelanjutan.</p>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2">
                    {[
                        {
                            phase: "Phase 01",
                            period: "Bulan 1-3",
                            title: "Digital Foundation",
                            items: ["Audit Data Kependudukan", "Penyusunan Perdes SID", "Training SDM Aparatur"],
                            icon: <Database className="w-5 h-5 text-blue-600" />,
                            color: "from-blue-500/10 to-transparent",
                            borderColor: "border-blue-200/50"
                        },
                        {
                            phase: "Phase 02",
                            period: "Bulan 4-6",
                            title: "Service Integration",
                            items: ["Aktivasi App Warga", "Implementasi TTE (E-Sign)", "Satu Data Desa Terpadu"],
                            icon: <Link className="w-5 h-5 text-indigo-600" />,
                            color: "from-indigo-500/10 to-transparent",
                            borderColor: "border-indigo-200/50"
                        },
                        {
                            phase: "Phase 03",
                            period: "Bulan 7-9",
                            title: "Smart Economy",
                            items: ["Digitalisasi BUMDes", "Pasar Desa Online", "Portal Wisata & UMKM"],
                            icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
                            color: "from-emerald-500/10 to-transparent",
                            borderColor: "border-emerald-200/50"
                        },
                        {
                            phase: "Phase 04",
                            period: "Bulan 10-12",
                            title: "AI Transformation",
                            items: ["Prediksi Kemiskinan AI", "Bot Regulasi Otomatis", "Kemandirian Digital Total"],
                            icon: <Brain className="w-5 h-5 text-primary-600" />,
                            color: "from-primary-500/10 to-transparent",
                            borderColor: "border-primary-200/50"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="relative group"
                        >
                            {/* Connectors (Desktop only) */}
                            {i < 3 && (
                                <div className="hidden md:block absolute top-10 right-0 w-full h-[2px] bg-gradient-to-r from-slate-200 to-transparent z-0 translate-x-1/2" />
                            )}

                            <div className={`relative z-10 p-6 rounded-[32px] bg-gradient-to-b ${item.color} border ${item.borderColor} backdrop-blur-md shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 h-full`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-2xl bg-white shadow-md">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.phase}</span>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">{item.period}</p>
                                        <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {item.items.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 font-medium">
                                                <div className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "selling-points",
        content: (
            <div className="space-y-12 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="text-center space-y-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-primary-400 text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl border border-primary-500/20"
                    >
                        Strategic Advantage
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight">
                        Mengapa Harus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Platform Kami?</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Nilai tawar tertinggi untuk kemandirian digital desa yang berkelanjutan.</p>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Kedaulatan Total (Full Ownership)",
                            desc: "Bukan sistem langganan (SaaS) vendor. Desa memiliki 100% source code dan database. Sekali investasi untuk selamanya tanpa biaya sewa bulanan yang membebani APBDes.",
                            icon: <ShieldCheck className="w-8 h-8" />,
                            color: "from-emerald-500/10 to-transparent",
                            borderColor: "border-emerald-200/50",
                            accent: "bg-emerald-600"
                        },
                        {
                            title: "Ekosistem Satu Data Terpadu",
                            desc: "Sinkronisasi otomatis antara layanan administrasi warta, data bantuan sosial (DTKS), dan pelaporan keuangan. Tidak ada lagi input ganda dan data yang tumpang tindih.",
                            icon: <Zap className="w-8 h-8" />,
                            color: "from-blue-500/10 to-transparent",
                            borderColor: "border-blue-200/50",
                            accent: "bg-blue-600"
                        },
                        {
                            title: "Infrastruktur Mandiri & Hybrid",
                            desc: "Dapat dijalankan di server lokal desa (Offline-First) maupun Cloud. Menjamin aksesibilitas layanan tetap prima meskipun koneksi internet sedang tidak stabil.",
                            icon: <Server className="w-8 h-8" />,
                            color: "from-indigo-500/10 to-transparent",
                            borderColor: "border-indigo-200/50",
                            accent: "bg-indigo-600"
                        },
                        {
                            title: "Monetisasi & Profitabilitas Desa",
                            desc: "Platform dirancang sebagai profit-center. BUMDes dapat mengelola unit usaha marketplace, ride-sharing, dan pembayaran PBB secara digital untuk meningkatkan PADesa.",
                            icon: <TrendingUp className="w-8 h-8" />,
                            color: "from-primary-500/10 to-transparent",
                            borderColor: "border-primary-200/50",
                            accent: "bg-primary-600"
                        }
                    ].map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[40px] bg-gradient-to-br ${point.color} border ${point.borderColor} backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 group flex gap-6 items-start`}
                        >
                            <div className={`p-4 rounded-2xl ${point.accent} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                {point.icon}
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-primary-600 transition-colors uppercase tracking-tighter">{point.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">{point.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "consultant-profile",
        content: (
            <div className="space-y-10 h-full flex flex-col justify-center">
                <div className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold tracking-widest uppercase shadow-sm"
                    >
                        <GraduationCap className="w-4 h-4 text-primary-600" />
                        Inisiator & Konsultan
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        Gagasan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Strategi Desa Digital</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-12 gap-10 items-stretch">
                    {/* Left: Photo Card */}
                    <div className="md:col-span-4 relative group">
                        <div className="absolute -inset-3 bg-gradient-to-tr from-primary-200 to-blue-200 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative h-full overflow-hidden rounded-[32px] border-[6px] border-white shadow-2xl flex flex-col">
                            <div className="flex-1 relative overflow-hidden">
                                <img
                                    src="/material/Anton Susanto S.Ip.JPG"
                                    alt="Anton Susanto S.Ip"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                            </div>
                            <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                                <h3 className="text-2xl font-extrabold">Anton Susanto, S.IP</h3>
                                <p className="text-primary-200 font-semibold text-sm">Digital Transformation Consultant</p>
                                <div className="flex items-center gap-3 mt-3">
                                    <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                                        Smart Village Strategist
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                                        SPBE Advisor
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-8 space-y-6">
                        {/* Expertise Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Tata Kelola Pemerintahan",
                                    desc: "Modernisasi birokrasi desa berbasis data untuk efisiensi layanan publik yang responsif dan akuntabel.",
                                    icon: <ShieldCheck className="w-5 h-5" />,
                                    color: "text-primary-600 bg-primary-50 border-primary-100"
                                },
                                {
                                    title: "Layanan Publik Inklusif",
                                    desc: "Memastikan aksesibilitas layanan mandiri bagi seluruh lapisan masyarakat tanpa hambatan geografis.",
                                    icon: <User className="w-5 h-5" />,
                                    color: "text-blue-600 bg-blue-50 border-blue-100"
                                },
                                {
                                    title: "Keterbukaan Informasi",
                                    desc: "Implementasi transparansi digital untuk membangun kepercayaan masyarakat terhadap tata kelola desa.",
                                    icon: <Globe className="w-5 h-5" />,
                                    color: "text-emerald-600 bg-emerald-50 border-emerald-100"
                                },
                                {
                                    title: "Ekonomi Digital Desa",
                                    desc: "Pemberdayaan BUMDes, UMKM, dan Koperasi Merah Putih melalui ekosistem marketplace lokal.",
                                    icon: <TrendingUp className="w-5 h-5" />,
                                    color: "text-amber-600 bg-amber-50 border-amber-100"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-4 rounded-2xl border ${item.color.split(' ')[2]} bg-white hover:shadow-lg transition-all group flex gap-3 items-start`}
                                >
                                    <div className={`p-2.5 rounded-xl ${item.color.split(' ')[1]} ${item.color.split(' ')[0]} shrink-0 shadow-sm border border-white group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-[11px] text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quote */}
                        <div className="glass p-6 rounded-[24px] border border-primary-100 bg-gradient-to-r from-primary-50/50 to-blue-50/50 relative overflow-hidden">
                            <Quote className="absolute -top-2 -left-2 w-10 h-10 text-primary-200" />
                            <blockquote className="text-base md:text-lg italic text-slate-700 relative z-10 leading-relaxed pl-6">
                                "Digitalisasi bukan sekadar soal teknologi — melainkan transformasi budaya pelayanan publik yang lebih bermartabat, transparan, dan berkeadilan bagi seluruh warga desa di Indonesia."
                            </blockquote>
                        </div>

                        {/* Contact & Social */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: "Kontak", value: "antonsusanto.id", icon: <Globe className="w-4 h-4 text-primary-600" /> },
                                { label: "Pengalaman", value: "2+ Tahun Konsultasi", icon: <Briefcase className="w-4 h-4 text-blue-600" /> },
                                { label: "Fokus Area", value: "Smart Village & SPBE", icon: <Cpu className="w-4 h-4 text-emerald-600" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-200">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{item.label}</div>
                                        <div className="text-sm font-bold text-slate-900">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "outro",
        content: (
            <div className="relative w-full h-[600px] rounded-[48px] overflow-hidden flex items-center justify-center p-12">
                {/* Background with Cinematic Image */}
                <div className="absolute inset-0">
                    <img
                        src="/future_village_closing_1773146060875.png"
                        alt="Future Village Vision"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                </div>

                <div className="relative z-10 text-center space-y-12 max-w-5xl">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-[0.4em] shadow-xl"
                        >
                            Visionary Conclusion
                        </motion.div>
                        <div className="space-y-2">
                            <h2 className="text-5xl md:text-7xl font-display font-black text-slate-900 leading-tight">
                                Membangun Masa Depan <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Desa Indonesia</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-700 font-medium max-w-3xl mx-auto">
                                Mewujudkan tata kelola yang cerdas, inklusif, dan berdaulat untuk kesejahteraan seluruh warga desa.
                            </p>
                        </div>
                    </div>

                    {/* Summary Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Kedaulatan Data", icon: <ShieldCheck className="w-5 h-5" />, color: "text-emerald-600" },
                            { title: "Kesenjangan Digital", icon: <Network className="w-5 h-5" />, color: "text-blue-600" },
                            { title: "Ekonomi Mandiri", icon: <TrendingUp className="w-5 h-5" />, color: "text-amber-600" }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="glass px-6 py-4 rounded-2xl border border-white/60 shadow-lg flex items-center gap-3 bg-white/40 backdrop-blur-md"
                            >
                                <div className={`p-2 rounded-xl bg-white shadow-sm ${pillar.color}`}>{pillar.icon}</div>
                                <span className="text-sm font-bold text-slate-900 uppercase tracking-tighter">{pillar.title}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="pt-10"
                    >
                        <h3 className="text-6xl md:text-8xl font-display font-black text-slate-900 tracking-tighter">
                            Terima Kasih
                        </h3>
                    </motion.div>
                </div>
            </div>
        ),
    }
];
