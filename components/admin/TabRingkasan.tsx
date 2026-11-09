interface TabRingkasanProps {
    onSelectMenu: (menu: string) => void;
    aktivitas: Array<{
        id: number;
        tipe: string;
        nama: string;
        waktu: string;
        icon: string;
    }>;
}

export default function TabRingkasan({ onSelectMenu, aktivitas }: TabRingkasanProps) {
    return (
        <div className="animate-in fade-in duration-500 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    onClick={() => onSelectMenu('refleksi')}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer"
                >
                    <div className="w-16 h-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-3xl">📝</div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Refleksi Masuk</p>
                        <h3 className="text-3xl font-extrabold text-slate-800 mt-1">24 <span className="text-sm font-medium text-pink-500 ml-1">Siswa</span></h3>
                    </div>
                </div>

                <div
                    onClick={() => onSelectMenu('lkpd')}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer"
                >
                    <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-3xl">🎯</div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">LKPD Terisi</p>
                        <h3 className="text-3xl font-extrabold text-slate-800 mt-1">18 <span className="text-sm font-medium text-teal-500 ml-1">Siswa</span></h3>
                    </div>
                </div>

                <div
                    onClick={() => onSelectMenu('tantangan')}
                    className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer"
                >
                    <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-3xl">🔥</div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Lulus Tantangan</p>
                        <h3 className="text-3xl font-extrabold text-slate-800 mt-1">5 <span className="text-sm font-medium text-orange-500 ml-1">Siswa</span></h3>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                        Aktivitas Terbaru
                    </h3>
                </div>
                <div className="divide-y divide-slate-100">
                    {aktivitas.map((aktif) => (
                        <div key={aktif.id} className="p-5 md:px-8 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                            <div className="w-12 h-12 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center text-xl shrink-0">
                                {aktif.icon}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-slate-500">
                                    <span className="font-bold text-slate-800">{aktif.nama}</span> baru saja mengisi form <span className="font-bold">{aktif.tipe}</span>
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">{aktif.waktu}</p>
                            </div>
                            <button
                                onClick={() => onSelectMenu(aktif.tipe.toLowerCase())}
                                className="text-sm font-bold text-purple-600 bg-purple-50 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors hidden md:block"
                            >
                                Lihat Detail
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}