"use client";
import { useRouter } from 'next/navigation';

interface SidebarProps {
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
    setSearchQuery: (query: string) => void;
}

export default function Sidebar({ activeMenu, setActiveMenu, setSearchQuery }: SidebarProps) {
    const router = useRouter();

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
        setSearchQuery('');
    };

    const handleLogout = () => {
        // Menghapus kunci login dan menendang kembali ke halaman utama
        localStorage.removeItem('koana_admin');
        router.push('/');
    };

    return (
        <aside className="w-full md:w-72 bg-white border-r border-slate-100 flex flex-col print:hidden shadow-sm z-10">
            <div className="p-8 border-b border-slate-100">
                <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 tracking-tight">KOANA.</h2>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Ruang Konselor</p>
            </div>

            <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                <button
                    onClick={() => handleMenuClick('dashboard')}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all ${activeMenu === 'dashboard' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                >
                    <span>📊</span> Ringkasan
                </button>
                <button
                    onClick={() => handleMenuClick('refleksi')}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all ${activeMenu === 'refleksi' ? 'bg-pink-100 text-pink-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                >
                    <span>📝</span> Data Refleksi
                </button>
                <button
                    onClick={() => handleMenuClick('lkpd')}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all ${activeMenu === 'lkpd' ? 'bg-teal-100 text-teal-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                >
                    <span>🎯</span> Hasil LKPD
                </button>
                <button
                    onClick={() => handleMenuClick('tantangan')}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold transition-all ${activeMenu === 'tantangan' ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                >
                    <span>🔥</span> Evaluasi 3 Hari
                </button>
            </nav>

            {/* Tombol Logout di bagian bawah */}
            <div className="p-6 border-t border-slate-100">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-rose-500 font-bold bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
                >
                    🚪 Keluar
                </button>
            </div>
        </aside>
    );
}