import Link from 'next/link';

interface SidebarProps {
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
    setSearchQuery: (query: string) => void;
}

export default function Sidebar({ activeMenu, setActiveMenu, setSearchQuery }: SidebarProps) {
    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
        setSearchQuery('');
    };

    return (
        <aside className="w-full md:w-72 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col md:shadow-sm md:sticky md:top-0 md:h-screen z-10 flex-shrink-0">
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between md:justify-start gap-3 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <img 
                        src="/logo-unikama.png" 
                        alt="Logo UNIKAMA" 
                        className="w-12 h-12 object-contain" 
                    />
                    <div>
                        <h2 className="text-xl font-extrabold tracking-wide text-slate-800 leading-tight">KOANA</h2>
                        <p className="text-xs text-slate-500 font-medium"> Dashboard Admin</p>
                    </div>
                </div>
                <Link href="/" className="md:hidden flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-purple-600 hover:border-purple-200 shadow-sm transition-all" title="Kembali ke Portal">
                    <span>🏠</span>
                </Link>
            </div>

            {/* PERBAIKAN: md:flex-col ditambahkan di sini biar di laptop nyusun ke bawah */}
            <nav className="flex md:flex-col md:flex-1 p-2 md:p-4 overflow-x-auto md:overflow-y-auto space-x-2 md:space-x-0 md:space-y-2 flex-shrink-0 scrollbar-hide">
                <button onClick={() => handleMenuClick('dashboard')} className={`whitespace-nowrap flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'dashboard' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-lg md:text-xl">📊</span> Ringkasan
                </button>
                <button onClick={() => handleMenuClick('refleksi')} className={`whitespace-nowrap flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'refleksi' ? 'bg-pink-50 text-pink-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-lg md:text-xl">📝</span> Refleksi
                </button>
                <button onClick={() => handleMenuClick('lkpd')} className={`whitespace-nowrap flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'lkpd' ? 'bg-teal-50 text-teal-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-lg md:text-xl">🎯</span> LKPD
                </button>
                <button onClick={() => handleMenuClick('tantangan')} className={`whitespace-nowrap flex-shrink-0 flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3.5 rounded-xl transition-all font-semibold ${activeMenu === 'tantangan' ? 'bg-orange-50 text-orange-700' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <span className="text-lg md:text-xl">🔥</span> Tantangan
                </button>
            </nav>

            <div className="hidden md:block p-6 border-t border-slate-100 bg-slate-50 mt-auto flex-shrink-0">
                <Link href="/" className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:text-purple-600 hover:border-purple-200 shadow-sm transition-all hover:-translate-y-0.5">
                    <span>🏠</span> Kembali ke Portal
                </Link>
            </div>
        </aside>
    );
}