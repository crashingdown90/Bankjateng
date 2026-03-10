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
    Key
} from "lucide-react";
import { motion } from "framer-motion";

export const slides = [
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
        id: "workflow",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold tracking-wider uppercase">
                        <Link className="w-4 h-4" /> Alur Kerja Otomatis
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Alur Pengajuan Surat Desa</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">Proses birokrasi berbelit kini dipangkas menjadi sistem mandiri yang cepat, transparan, dan terlacak.</p>
                </div>

                <div className="relative pt-12 pb-8 px-4">
                    {/* Connecting Line */}
                    <div className="absolute top-[88px] left-10 right-10 h-1 bg-gradient-to-r from-blue-200 via-primary-300 to-emerald-200 hidden md:block rounded-full" />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {[
                            { step: "1", title: "Pengajuan Mandiri", desc: "Warga mengajukan surat via Mobile App dari rumah.", icon: <Smartphone className="w-8 h-8 text-blue-500" />, color: "border-blue-100 bg-blue-50" },
                            { step: "2", title: "Validasi Sistem", desc: "Data dicocokkan dengan Dukcapil & Database Desa otomatis.", icon: <Database className="w-8 h-8 text-slate-600" />, color: "border-slate-200 bg-white" },
                            { step: "3", title: "Verifikasi e-Sign", desc: "Aparatur memeriksa & memberi Tanda Tangan Elektronik (TTE).", icon: <ShieldCheck className="w-8 h-8 text-primary-500" />, color: "border-primary-100 bg-primary-50" },
                            { step: "4", title: "Selesai Otomatis", desc: "Surat digital dikirim ke HP warga, cetak jika perlu.", icon: <FileText className="w-8 h-8 text-emerald-500" />, color: "border-emerald-100 bg-emerald-50" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-4">
                                <div className={`w-20 h-20 rounded-full border-[6px] flex items-center justify-center shadow-lg relative ${item.color}`}>
                                    {item.icon}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-slate-900 flex items-center justify-center font-bold shadow-md border-2 border-white">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="space-y-2 pt-4">
                                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
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
        id: "digital-sovereignty",
        content: (
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest">
                            <Key className="w-3 h-3" /> Filosofi Non-Vendor Base
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight italic">
                            Kedaulatan & <br />Kepemilikan Desa
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Aplikasi ini dibangun secara <span className="font-bold text-primary-600 underline decoration-2 underline-offset-4">Custom</span> untuk setiap desa. Desa bukan lagi penyewa, melainkan <span className="font-bold">Pemilik Sah</span> dari sistem ini.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <h5 className="font-bold text-slate-900 mb-1">Custom Ownership</h5>
                                <p className="text-xs text-slate-500">Nama, logo, dan identitas aplikasi sepenuhnya milik desa.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <h5 className="font-bold text-slate-900 mb-1">Private Data</h5>
                                <p className="text-xs text-slate-500">Data kependudukan bersifat private di server internal desa.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-primary-100/20 rounded-full blur-3xl animate-pulse" />
                    <div className="relative glass p-8 rounded-[40px] border border-white shadow-2xl space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                            <div className="font-mono text-xs text-slate-500">STATUS: PRIVATE OWNERSHIP</div>
                            <ShieldCheck className="text-emerald-500 w-6 h-6" />
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 w-3/4 bg-slate-100 rounded-full" />
                            <div className="h-4 w-full bg-slate-100 rounded-full" />
                            <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
                        </div>
                        <div className="pt-4 border-t border-slate-200">
                            <div className="p-4 rounded-2xl bg-primary-600 text-slate-900 text-center font-bold">
                                SISTEM MILIK DESA MANDIRI
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
        id: "ai-innovations",
        content: (
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold uppercase tracking-widest">
                        <Brain className="w-3 h-3" /> Inovasi AI
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Kecerdasan Buatan di Desa</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "DesaBot (Gen AI)",
                            desc: "Chatbot responsif 24/7 untuk menjawab pertanyaan warga terkait regulasi, layanan, dan bantuan sosial.",
                            icon: <Bot className="w-8 h-8" />,
                            color: "bg-blue-50 text-blue-600"
                        },
                        {
                            title: "Analisis Kemiskinan AI",
                            desc: "Algoritma cerdas untuk memetakan warga rentan secara presisi melalui integrasi data lintas sektor.",
                            icon: <TrendingUp className="w-8 h-8" />,
                            color: "bg-emerald-50 text-emerald-600"
                        },
                        {
                            title: "Otomasi Dokumen",
                            desc: "Ekstraksi data otomatis dari KTP/KK untuk mempercepat pengisian formulir administrasi tanpa kesalahan.",
                            icon: <ShieldCheck className="w-8 h-8" />,
                            color: "bg-violet-50 text-violet-600"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl border border-slate-200 flex flex-col gap-4 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                {item.icon}
                            </div>
                            <div className={`p-3 rounded-2xl ${item.color} w-fit`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
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
        id: "benefits",
        content: (
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="glass rounded-3xl p-1 shadow-xl overflow-hidden aspect-video relative flex items-center justify-center bg-white border border-slate-200/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 to-transparent pointer-events-none" />
                    <Smartphone className="w-32 h-32 text-slate-700 absolute animate-pulse" />
                    <div className="text-center z-10 px-8">
                        <p className="text-primary-600 font-mono text-sm mb-2 uppercase tracking-widest">Visual Concept</p>
                        <h4 className="text-2xl font-bold text-slate-700">Smart Village App Mockup</h4>
                        <p className="text-slate-500 text-xs mt-2 italic">Representasi aplikasi super-app desa dalam genggaman warga.</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-4xl font-display font-bold text-slate-900">Manfaat Langsung bagi Warga</h2>
                    <ul className="space-y-4">
                        {[
                            { icon: <ShieldCheck className="w-5 h-5" />, text: "Akses Layanan 24/7 Tanpa Antre" },
                            { icon: <Users className="w-5 h-5" />, text: "Keterlibatan Masyarakat dalam Aspirasi (E-Musrenbang)" },
                            { icon: <TrendingUp className="w-5 h-5" />, text: "Promosi UMKM Desa ke Pasar Nasional & Internasional" },
                            { icon: <Database className="w-5 h-5" />, text: "Penerima Bantuan Sosial yang Lebih Tepat Sasaran" },
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-600">
                                <div className="text-primary-600">{item.icon}</div>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
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
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-display font-bold text-slate-900">Tahapan Implementasi</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Langkah strategis menuju kemandirian digital desa.</p>
                </div>
                <div className="relative pt-8">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-100 hidden md:block" />
                    <div className="space-y-12 relative">
                        {[
                            { step: "Phase 1", title: "Kesiapan SDM & Regulasi", desc: "Pelatihan perangkat desa & Perdes Sistem Informasi Desa." },
                            { step: "Phase 2", title: "Infrastruktur & Data", desc: "Internet desa & Migrasi data penduduk ke sistem digital." },
                            { step: "Phase 3", title: "Layanan Mandiri", desc: "Peluncuran aplikasi portal warga & Anjungan Desa Mandiri." },
                        ].map((phase, i) => (
                            <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <div className="flex-1 text-left md:text-right hidden md:block">
                                    {i % 2 !== 0 && (
                                        <div className="space-y-2">
                                            <h4 className="font-bold text-slate-900">{phase.title}</h4>
                                            <p className="text-sm text-slate-500">{phase.desc}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="relative z-10 w-12 h-12 rounded-full bg-primary-600 border-4 border-white shadow-lg flex items-center justify-center text-slate-900 font-bold">
                                    {i + 1}
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="md:hidden space-y-1 mb-2">
                                        <span className="text-xs font-bold text-primary-600 uppercase tracking-widest">{phase.step}</span>
                                    </div>
                                    {i % 2 === 0 ? (
                                        <div className="space-y-2">
                                            <h4 className="font-bold text-slate-900">{phase.title}</h4>
                                            <p className="text-sm text-slate-500">{phase.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="md:hidden space-y-2">
                                            <h4 className="font-bold text-slate-900">{phase.title}</h4>
                                            <p className="text-sm text-slate-500">{phase.desc}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "consultant-profile",
        content: (
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200 to-indigo-200 rounded-[40px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border-8 border-white shadow-2xl">
                        <img
                            src="/material/Anton Susanto S.Ip.JPG"
                            alt="Anton Susanto S.Ip"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-100/80 via-slate-100/40 to-transparent">
                            <h3 className="text-2xl font-bold text-slate-900">Anton Susanto, S.IP</h3>
                            <p className="text-primary-700 font-medium">Digital Transformation Consultant</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider">
                            <GraduationCap className="w-3 h-3" /> Kepemimpinan Strategis
                        </div>
                        <h2 className="text-4xl font-display font-bold text-slate-900">Gagasan & Strategi Desa Digital</h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                title: "Tata Kelola Pemerintah",
                                text: "Mendorong modernisasi birokrasi desa berbasis data untuk efisiensi layanan publik yang lebih responsif.",
                                icon: <ShieldCheck className="w-5 h-5" />
                            },
                            {
                                title: "Layanan Publik Inklusif",
                                text: "Memastikan aksesibilitas layanan mandiri bagi seluruh lapisan masyarakat tanpa hambatan geografis.",
                                icon: <User className="w-5 h-5" />
                            },
                            {
                                title: "Keterbukaan Informasi",
                                text: "Implementasi transparansi digital guna membangun kepercayaan masyarakat terhadap tata kelola desa.",
                                icon: <Link className="w-5 h-5" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4 p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="shrink-0 p-3 rounded-2xl bg-slate-100 text-primary-600">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-6 rounded-3xl bg-primary-50 border border-primary-100 italic text-primary-700 relative">
                        <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary-200 -z-10" />
                        "Digitalisasi bukan sekadar teknologi, melainkan sebuah perubahan budaya untuk pelayanan publik yang lebih bermartabat dan transparan."
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "outro",
        content: (
            <div className="text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900">Mari Berkolaborasi</h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                        Wujudkan Desa Digital yang tangguh, mandiri, dan berdaya saing global mulai hari ini.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="glass px-8 py-4 rounded-2xl border border-slate-200/50">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Contact Person</p>
                        <p className="font-bold text-slate-600">admin@desakita.go.id</p>
                    </div>
                    <div className="glass px-8 py-4 rounded-2xl border border-slate-200/50">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Website</p>
                        <p className="font-bold text-slate-600">www.digitalisasidesa.id</p>
                    </div>
                </div>
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-primary-600 font-display font-black text-2xl tracking-tighter opacity-20"
                >
                    MAJU BERSAMA TEKNOLOGI
                </motion.div>
            </div>
        ),
    }
];
