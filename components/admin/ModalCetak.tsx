import { useEffect } from 'react';

interface ModalCetakProps {
    selectedItem: any;
    modalType: string;
    closeModal: () => void;
}

export default function ModalCetak({ selectedItem, modalType, closeModal }: ModalCetakProps) {

    // Mengubah judul browser LANGSUNG saat pop-up dibuka (tidak nunggu tombol dipencet)
    useEffect(() => {
        if (selectedItem) {
            const newTitle = `${modalType.toUpperCase()} - ${selectedItem.nama || 'Siswa'}`;
            document.title = newTitle;

            // Kembalikan ke judul asli saat pop-up disilang/tutup
            return () => {
                document.title = "KOANA";
            };
        }
    }, [selectedItem, modalType]);

    if (!selectedItem) return null;

    return (
        // UBAH KUNCI 1: Pakai print:static agar browser bisa memotong halaman dengan normal
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 print:static print:inset-auto print:block print:w-full print:h-auto print:p-0 print:bg-white">

            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm print:hidden" onClick={closeModal}></div>

            {/* UBAH KUNCI 2: print:static dan print:py-12 print:px-8 (memaksa ada margin aman di dalam kertas cetak) */}
            <div className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto overflow-x-hidden bg-white rounded-2xl shadow-2xl px-8 pb-12 z-10 text-slate-800 print:static print:max-w-full print:w-full print:max-h-none print:overflow-visible print:shadow-none print:rounded-none print:border-none print:py-12 print:px-8">

                <div className="flex justify-end gap-3 mb-6 border-b border-slate-100 pb-4 pt-8 print:hidden sticky top-0 bg-white z-20">
                    <button onClick={() => window.print()} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-md">
                        🖨️ Cetak PDF
                    </button>
                    <button onClick={closeModal} className="flex items-center gap-2 bg-rose-100 hover:bg-rose-200 text-rose-700 px-8 py-2.5 rounded-lg font-bold transition-all">
                        Tutup
                    </button>
                </div>

                {/* ================= 1. KERTAS REFLEKSI ================= */}
                {modalType === 'refleksi' && (
                    <div className="print:text-black">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-2 inline-block">LEMBAR REFLEKSI DIRI</h2>
                            <p className="mt-3 text-sm text-slate-600 print:text-black">Luangkan waktu beberapa menit untuk memikirkan pengalaman belajarmu. Jawablah dengan jujur sesuai keadaan diri sendiri. Jawaban ini tidak dinilai benar atau salah.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 print:bg-transparent p-4 rounded-lg border border-slate-200 print:border-black">
                            <p><strong>Nama:</strong> {selectedItem.nama}</p><p><strong>Kelas:</strong> {selectedItem.kelas}</p><p className="col-span-2"><strong>Tanggal:</strong> {selectedItem.tanggal}</p>
                        </div>

                        <div className="space-y-6 text-sm md:text-base">
                            <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">1. Situasi belajar apa yang paling sering membuat saya merasa khawatir atau gugup?</p><div className="p-4 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.situasi}</div></div>
                            <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">2. Apa yang biasanya saya rasakan atau pikirkan ketika menghadapi situasi tersebut?</p><div className="p-4 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.cemas}</div></div>
                            <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">3. Apa yang biasanya saya lakukan ketika mulai merasa cemas?</p><div className="p-4 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.aksi}</div></div>
                            <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">4. Dari materi ini, cara apa yang ingin saya coba untuk mengelola kecemasan saat belajar?</p><div className="p-4 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.cara || "-"}</div></div>
                            <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">5. Siapa orang yang bisa saya hubungi ketika membutuhkan dukungan?</p><div className="p-4 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.support}</div></div>

                            <div className="pt-4 break-inside-avoid print:mt-8">
                                <p className="font-bold italic text-pink-600 print:text-black mb-2">Hal yang ingin saya ingat:</p>
                                <div className="p-4 bg-pink-50 border border-pink-200 rounded-lg print:border-black print:bg-transparent font-medium italic">"{selectedItem.pesan}"</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= 2. KERTAS LKPD ================= */}
                {modalType === 'lkpd' && (
                    <div className="print:text-black">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-2 inline-block">LEMBAR KERJA PESERTA DIDIK (LKPD)</h2>
                            <p className="mt-2 text-slate-600 print:text-black font-bold">“Kenali Kecemasan, Temukan Langkahmu”</p>
                            <p className="mt-2 text-sm text-slate-600 print:text-black"><strong>Tujuan:</strong> Siswa mampu mengenali pemicu kecemasan dalam situasi belajar dan menyusun langkah sederhana untuk menghadapinya.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 print:bg-transparent p-4 rounded-lg border border-slate-200 print:border-black">
                            <p className="col-span-2"><strong>Identitas</strong></p>
                            <p><strong>Nama:</strong> {selectedItem.nama}</p><p><strong>Kelas:</strong> {selectedItem.kelas}</p><p className="col-span-2"><strong>Tanggal:</strong> {selectedItem.tanggal}</p>
                        </div>

                        <div className="space-y-8 text-sm md:text-base">
                            <div className="break-inside-avoid">
                                <h3 className="font-bold text-lg mb-2">A. ANALISIS SITUASI</h3>
                                <p className="mb-3">Bacalah situasi berikut, kemudian jawab pertanyaannya.<br /><strong>Situasi:</strong> Besok kamu harus melakukan presentasi di depan kelas. Kamu sudah menyiapkan materi, tetapi masih khawatir akan salah berbicara dan ditertawakan teman.</p>
                                <div className="space-y-4 pl-4 border-l-2 border-slate-200 print:border-black">
                                    <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">1. Perasaan apa yang mungkin muncul dalam situasi tersebut?</p><div className="p-3 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.a_perasaan || "-"}</div></div>
                                    <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">2. Pikiran apa yang mungkin membuat kecemasan semakin kuat?</p><div className="p-3 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.a_pikiran || "-"}</div></div>
                                    <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">3. Tuliskan dua tindakan yang dapat dilakukan untuk menghadapi situasi tersebut.</p>
                                        <div className="space-y-2">
                                            <div className="flex gap-2 items-center"><span className="font-bold">a.</span><div className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.a_tindakan1 || "-"}</div></div>
                                            <div className="flex gap-2 items-center"><span className="font-bold">b.</span><div className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.a_tindakan2 || "-"}</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Jarak aman paksa di halaman 2 */}
                            <div className="break-inside-avoid pt-6 border-t border-slate-200 print:border-black print:mt-12">
                                <h3 className="font-bold text-lg mb-2">B. RENCANA AKSI SAYA</h3>
                                <p className="mb-4">Pilih satu situasi belajar yang ingin kamu hadapi dengan lebih tenang. Buat rencana sederhana berikut.</p>
                                <table className="w-full text-left border-collapse border border-slate-300 print:border-black break-inside-avoid">
                                    <thead>
                                        <tr className="bg-slate-100 print:bg-transparent"><th className="border border-slate-300 print:border-black p-3 w-1/2">Bagian</th><th className="border border-slate-300 print:border-black p-3 w-1/2">Jawaban saya</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td className="border border-slate-300 print:border-black p-3 font-semibold">Situasi yang ingin saya hadapi</td><td className="border border-slate-300 print:border-black p-3">{selectedItem.situasi}</td></tr>
                                        <tr><td className="border border-slate-300 print:border-black p-3 font-semibold">Hal yang membuat saya cemas</td><td className="border border-slate-300 print:border-black p-3">{selectedItem.cemas}</td></tr>
                                        <tr><td className="border border-slate-300 print:border-black p-3 font-semibold">Pikiran yang lebih seimbang</td><td className="border border-slate-300 print:border-black p-3">{selectedItem.seimbang}</td></tr>
                                        <tr><td className="border border-slate-300 print:border-black p-3 font-semibold">Langkah kecil yang akan saya lakukan</td><td className="border border-slate-300 print:border-black p-3">{selectedItem.langkah}</td></tr>
                                        <tr><td className="border border-slate-300 print:border-black p-3 font-semibold">Orang yang dapat mendukung saya</td><td className="border border-slate-300 print:border-black p-3">{selectedItem.support}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= 3. KERTAS TANTANGAN ================= */}
                {modalType === 'tantangan' && (
                    <div className="print:text-black">
                        <div className="text-center mb-10"><h2 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-2 inline-block">C & D. TANTANGAN & EVALUASI DIRI</h2></div>

                        <div className="grid grid-cols-2 gap-4 mb-8 bg-slate-50 print:bg-transparent p-4 rounded-lg border border-slate-200 print:border-black">
                            <p><strong>Nama:</strong> {selectedItem.nama}</p><p><strong>Kelas:</strong> {selectedItem.kelas}</p><p className="col-span-2"><strong>Selesai pada:</strong> {selectedItem.tanggalSelesai}</p>
                        </div>

                        <div className="space-y-6 text-sm md:text-base">
                            <div className="break-inside-avoid print:mt-4"><p className="font-bold mb-2">Kebiasaan kecil yang dipilih (Tantangan 3 Hari):</p><div className="p-4 bg-orange-50 border border-orange-200 rounded-lg print:border-black print:bg-transparent font-bold">{selectedItem.kebiasaan}</div></div>
                            <div className="break-inside-avoid pt-4 print:mt-8"><p className="font-bold mb-2 text-lg">D. EVALUASI DIRI</p><p className="mb-2">Setelah mencoba kebiasaan tersebut, apa perubahan atau hal yang kamu pelajari?</p><div className="p-4 bg-slate-50 border border-slate-200 rounded-lg print:border-black print:bg-transparent">{selectedItem.evaluasi}</div></div>
                            <div className="mt-8 text-center pt-8 border-t border-slate-200 print:border-black break-inside-avoid print:mt-12"><p className="font-bold text-slate-500 print:text-black mb-2">Pesan untuk diri sendiri:</p><h3 className="text-2xl font-serif italic text-orange-600 print:text-black">"{selectedItem.pesan}"</h3></div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}