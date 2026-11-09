interface TabelLkpdProps {
    data: any[];
    searchQuery: string;
    onOpenModal: (item: any, type: string) => void;
    onDelete?: (id: number | string, type: string) => void;
}

export default function TabelLkpd({ data, searchQuery, onOpenModal, onDelete }: TabelLkpdProps) {
    const filteredData = data.filter((item) =>
        item.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-teal-50 to-white">
                <div>
                    <h3 className="font-bold text-xl mb-1 text-teal-900">Data Hasil LKPD</h3>
                    <p className="text-sm text-slate-500">Klik baris tabel untuk membaca detail dan mencetak laporan.</p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                        <tr>
                            <th className="p-5 font-bold uppercase tracking-wider text-xs">Nama Siswa</th>
                            <th className="p-5 font-bold uppercase tracking-wider text-xs">Kelas</th>
                            <th className="p-5 font-bold uppercase tracking-wider text-xs">Tanggal</th>
                            <th className="p-5 font-bold uppercase tracking-wider text-xs">Situasi</th>
                            <th className="p-5 text-right font-bold uppercase tracking-wider text-xs"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {filteredData.map((item) => (
                            <tr key={item.id} className="hover:bg-teal-50/50 transition-colors cursor-pointer group">
                                <td onClick={() => onOpenModal(item, 'lkpd')} className="p-5 font-bold text-slate-800">{item.nama}</td>
                                <td onClick={() => onOpenModal(item, 'lkpd')} className="p-5 font-medium">{item.kelas}</td>
                                <td onClick={() => onOpenModal(item, 'lkpd')} className="p-5">{item.tanggal}</td>
                                <td onClick={() => onOpenModal(item, 'lkpd')} className="p-5 max-w-[200px] truncate">{item.situasi}</td>
                                <td className="p-5 flex justify-end items-center gap-3">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onOpenModal(item, 'lkpd');
                                        }}
                                        className="bg-white shadow-sm border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 transition-colors"
                                    >
                                        Lihat Kertas 📄
                                    </button>

                                    {/* ICON HAPUS MINIMALIS */}
                                    {onDelete && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDelete(item.id, 'lkpd');
                                            }}
                                            className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-all"
                                            title="Hapus Data Permanen"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {filteredData.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-10 text-center text-slate-400 font-medium">Belum ada data LKPD yang masuk.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}