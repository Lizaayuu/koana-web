import React from 'react';

interface TabRingkasanProps {
    onSelectMenu: (menu: string) => void;
    aktivitas: Array<{ id: number; tipe: string; nama: string; waktu: string; icon: string }>;
    dataRefleksi?: any[];
    dataLkpd?: any[];
    dataTantangan?: any[];
}

export default function TabRingkasan({ onSelectMenu, aktivitas, dataRefleksi = [], dataLkpd = [], dataTantangan = [] }: TabRingkasanProps) {
    return (
        <div className="animate-in fade-in duration-500">
            {/* Kartu Ringkasan (Angka Otomatis) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div
                    onClick={() => onSelectMenu('refleksi')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 cursor-pointer hover:border-purple-200 hover:shadow-md transition-all active:scale-95 group"
                >
                    <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-purple-100 transition-colors">
                        📝
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Refleksi Masuk</p>
                        <h3 className="text-3xl font-black text-slate-800 flex items-end gap-2">
                            {dataRefleksi.length} <span className="text-sm font-semibold text-pink-500 mb-1">Siswa</span>
                        </h3>
                    </div>
                </div>

                <div
                    onClick={() => onSelectMenu('lkpd')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 cursor-pointer hover:border-teal-200 hover:shadow-md transition-all active:scale-95 group"
                >
                    <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-teal-100 transition-colors">
                        🎯
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">LKPD Terisi</p>
                        <h3 className="text-3xl font-black text-slate-800 flex items-end gap-2">
                            {dataLkpd.length} <span className="text-sm font-semibold text-teal-500 mb-1">Siswa</span>
                        </h3>
                    </div>
                </div>

                <div
                    onClick={() => onSelectMenu('tantangan')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-5 cursor-pointer hover:border-orange-200 hover:shadow-md transition-all active:scale-95 group"
                >
                    <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-orange-100 transition-colors">
                        🔥
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Lulus Tantangan</p>
                        <h3 className="text-3xl font-black text-slate-800 flex items-end gap-2">
                            {dataTantangan.length} <span className="text-sm font-semibold text-orange-500 mb-1">Siswa</span>
                        </h3>
                    </div>
                </div>
            </div>

            {/* Aktivitas Terbaru */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <h3 className="font-bold text-slate-800">Aktivitas Terbaru</h3>
                </div>
                <div>
                    {aktivitas.length > 0 ? (
                        aktivitas.map((act) => (
                            <div key={act.id} className="p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors flex items-center justify-between gap-4 group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-lg">
                                        {act.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-700">
                                            <span className="font-bold text-slate-900">{act.nama}</span> baru saja mengisi form <span className="font-bold text-slate-800">{act.tipe}</span>
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">{act.waktu}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => onSelectMenu(act.tipe.toLowerCase())}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-purple-50 text-purple-600 text-xs font-bold rounded-lg hover:bg-purple-100"
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="p-10 text-center text-slate-400 font-medium">
                            Belum ada aktivitas siswa saat ini.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}