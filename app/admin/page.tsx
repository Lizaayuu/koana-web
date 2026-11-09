"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import TabRingkasan from '@/components/admin/TabRingkasan';
import TabelRefleksi from '@/components/admin/TabelRefleksi';
import TabelLkpd from '@/components/admin/TabelLkpd';
import TabelTantangan from '@/components/admin/TabelTantangan';
import ModalCetak from '@/components/admin/ModalCetak';

export default function AdminDashboard() {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    const [dbRefleksi, setDbRefleksi] = useState<any[]>([]);
    const [dbLkpd, setDbLkpd] = useState<any[]>([]);
    const [dbTantangan, setDbTantangan] = useState<any[]>([]);

    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    // --- STATE UNTUK MODAL HAPUS ---
    const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean, id: number | string | null, type: string }>({ isOpen: false, id: null, type: '' });
    const [isDeleting, setIsDeleting] = useState(false);

    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [modalType, setModalType] = useState<string>('');

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('koana_admin');
        if (!isLoggedIn) {
            router.push('/login');
        } else {
            setIsAuthorized(true);
            fetchDataDariDatabase();
        }
    }, [router]);

    const fetchDataDariDatabase = async () => {
        setIsRefreshing(true);
        try {
            const res = await fetch('/api/admin-data');
            const data = await res.json();

            setDbRefleksi(data.refleksi || []);
            setDbLkpd(data.lkpd || []);
            setDbTantangan(data.tantangan || []);
        } catch (error) {
            console.error("Gagal menarik data:", error);
        } finally {
            setIsLoading(false);
            setTimeout(() => setIsRefreshing(false), 500);
        }
    };

    // 1. Fungsi untuk MEMUNCULKAN modal konfirmasi (Bukan langsung hapus)
    const triggerDelete = (id: number | string, type: string) => {
        setDeleteModal({ isOpen: true, id, type });
    };

    // 2. Fungsi EKSEKUSI hapus saat tombol "Ya, Hapus" ditekan
    const confirmDelete = async () => {
        if (!deleteModal.id) return;
        setIsDeleting(true); // Memutar loading di tombol

        try {
            const res = await fetch('/api/delete', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: Number(deleteModal.id), type: deleteModal.type })
            });

            if (res.ok) {
                if (deleteModal.type === 'refleksi') setDbRefleksi(prev => prev.filter(item => item.id !== deleteModal.id));
                else if (deleteModal.type === 'lkpd') setDbLkpd(prev => prev.filter(item => item.id !== deleteModal.id));
                else if (deleteModal.type === 'tantangan') setDbTantangan(prev => prev.filter(item => item.id !== deleteModal.id));

                // Tutup modal setelah sukses
                setDeleteModal({ isOpen: false, id: null, type: '' });
            } else {
                alert("Gagal menghapus data.");
            }
        } catch (error) {
            alert("Terjadi kesalahan sistem saat menghapus.");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleOpenModal = (item: any, type: string) => {
        setSelectedItem(item);
        setModalType(type);
    };

    if (!isAuthorized) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-400 font-medium">Memuat ruang konselor...</div>;
    }

    const aktivitasTerbaru = [
        ...dbRefleksi.map(d => ({ id: Number(d.id) + 10000, tipe: "Refleksi", nama: String(d.nama || "-"), waktu: String(d.tanggal || "-"), icon: "📝" })),
        ...dbLkpd.map(d => ({ id: Number(d.id) + 20000, tipe: "LKPD", nama: String(d.nama || "-"), waktu: String(d.tanggal || "-"), icon: "🎯" })),
        ...dbTantangan.map(d => ({ id: Number(d.id) + 30000, tipe: "Tantangan", nama: String(d.nama || "-"), waktu: String(d.tanggalSelesai || "-"), icon: "🔥" }))
    ].slice(0, 5);

    return (
        <>
            <div className={`min-h-screen bg-slate-50 font-sans text-slate-800 ${selectedItem || deleteModal.isOpen ? 'print:hidden' : ''}`}>
                <div className="flex flex-col md:flex-row min-h-screen">
                    <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} setSearchQuery={setSearchQuery} />

                    <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">Halo, Ajeng Nabila 👋</h1>
                                <p className="text-slate-500 mt-2 text-lg">Semoga harimu menyenangkan. Berikut adalah data curhatan anak-anak.</p>
                            </div>

                            <button
                                onClick={fetchDataDariDatabase}
                                disabled={isRefreshing}
                                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200 font-bold transition-all active:scale-95 disabled:opacity-70 disabled:cursor-wait"
                            >
                                <svg className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-purple-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2V15" />
                                </svg>
                                {isRefreshing ? 'Menyegarkan...' : 'Segarkan Data'}
                            </button>
                        </header>

                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                                <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mb-4"></div>
                                <p className="font-medium animate-pulse">Menarik data dari database...</p>
                            </div>
                        ) : (
                            <>
                                {activeMenu === 'dashboard' && <TabRingkasan onSelectMenu={setActiveMenu} aktivitas={aktivitasTerbaru as any} />}

                                {activeMenu !== 'dashboard' && (
                                    <div className="animate-in fade-in duration-500">
                                        <div className="mb-6 relative max-w-md">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">🔍</span>
                                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cari nama siswa..." className="w-full py-3.5 pl-11 pr-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all" />
                                        </div>
                                        {/* Meneruskan triggerDelete ke komponen tabel */}
                                        {activeMenu === 'refleksi' && <TabelRefleksi data={dbRefleksi} searchQuery={searchQuery} onOpenModal={handleOpenModal} onDelete={triggerDelete} />}
                                        {activeMenu === 'lkpd' && <TabelLkpd data={dbLkpd} searchQuery={searchQuery} onOpenModal={handleOpenModal} onDelete={triggerDelete} />}
                                        {activeMenu === 'tantangan' && <TabelTantangan data={dbTantangan} searchQuery={searchQuery} onOpenModal={handleOpenModal} onDelete={triggerDelete} />}
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>

            <ModalCetak selectedItem={selectedItem} modalType={modalType} closeModal={() => setSelectedItem(null)} />

            {/* --- KOTAK MODAL HAPUS CUSTOM (MENGGANTIKAN ALERT BAWAAN) --- */}
            {deleteModal.isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 px-4">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
                        <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-5">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Hapus Permanen?</h3>
                        <p className="text-slate-500 text-center text-sm mb-8 leading-relaxed">
                            Data siswa ini akan dihapus selamanya dari database dan tidak dapat dikembalikan.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteModal({ isOpen: false, id: null, type: '' })}
                                disabled={isDeleting}
                                className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button
                                onClick={confirmDelete}
                                disabled={isDeleting}
                                className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-200 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                            >
                                {isDeleting ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2V15" />
                                        </svg>
                                        Proses...
                                    </>
                                ) : 'Ya, Hapus'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}