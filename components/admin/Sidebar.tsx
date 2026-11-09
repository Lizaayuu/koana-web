import Link from 'next/link';

interface SidebarProps {
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
    setSearchQuery: (query: string) => void;
}

export default function Sidebar({ activeMenu, setActiveMenu, setSearchQuery }: SidebarProps) {
    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
        setSearchQuery(''); // Reset pencarian saat pindah tab
    };

    return (
        <aside className="w-full md:w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm sticky top-0 md:h-screen">
            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">K</div>
                <div>
                    <h2 className="text-xl font-extrabold tracking-wide text-slate-800 leading-tight">KOANA Admin</h2>
                    <p className="text-xs text-slate-500 font-medium">Panel Konselor</p>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                <button onClick={() => handleMenuClick('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'dashboard' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-xl">📊</span> Ringkasan
                </button>
                <button onClick={() => handleMenuClick('refleksi')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'refleksi' ? 'bg-pink-50 text-pink-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-xl">📝</span> Lembar Refleksi
                </button>
                <button onClick={() => handleMenuClick('lkpd')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'lkpd' ? 'bg-teal-50 text-teal-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-xl">🎯</span> Hasil LKPD
                </button>
                <button onClick={() => handleMenuClick('tantangan')} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'tantangan' ? 'bg-orange-50 text-orange-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-xl">🔥</span> Evaluasi Tantangan
                </button>
            </nav>

            <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
                <Link href="/" className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:text-purple-600 hover:border-purple-200 shadow-sm transition-all hover:-translate-y-0.5">
                    <span>🏠</span> Kembali ke Portal
                </Link>
            </div>
        </aside>
    );
}