"use client";
import { useState } from 'react';

export default function FormLkpd() {
    // 1. State penampung data
    const [formData, setFormData] = useState({
        nama: '',
        kelas: '',
        tanggal: '',
        a_perasaan: '',
        a_pikiran: '',
        a_tindakan1: '',
        a_tindakan2: '',
        situasi: '',
        cemas: '',
        seimbang: '',
        langkah: '',
        support: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 2. Fungsi penangkap ketikan
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Fungsi pengirim ke API
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'lkpd', // Label khusus untuk tabel LKPD
                    data: formData
                }),
            });

            if (res.ok) {
                setIsSuccess(true);
                // Kosongkan form kembali
                setFormData({ nama: '', kelas: '', tanggal: '', a_perasaan: '', a_pikiran: '', a_tindakan1: '', a_tindakan2: '', situasi: '', cemas: '', seimbang: '', langkah: '', support: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Yahh, gagal mengirim jawaban LKPD-mu. Coba lagi ya!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Terjadi kesalahan jaringan.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-in fade-in duration-500 relative">

            {/* Pop-up Sukses (Toast Melayang) */}
            {isSuccess && (
                <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-teal-100 text-teal-800 px-6 py-4 rounded-2xl text-center font-bold shadow-xl z-[100] animate-in slide-in-from-top-5 fade-in duration-300 border border-teal-200">
                    Keren! Rencana aksimu sudah berhasil disimpan. 🎯
                </div>
            )}

            {/* Judul & Tujuan */}
            <div className="text-center mb-8 border-b border-slate-100 pb-6 mt-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">LEMBAR KERJA PESERTA DIDIK (LKPD)</h3>
                <p className="text-teal-600 font-bold mb-3">“Kenali Kecemasan, Temukan Langkahmu”</p>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
                    <span className="font-semibold text-slate-700">Tujuan:</span> Siswa mampu mengenali pemicu kecemasan dalam situasi belajar dan menyusun langkah sederhana untuk menghadapinya.
                </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>

                {/* Identitas */}
                <div className="grid md:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nama</label>
                        <input required name="nama" value={formData.nama} onChange={handleChange} type="text" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Kelas</label>
                        <input required name="kelas" value={formData.kelas} onChange={handleChange} type="text" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Tanggal</label>
                        <input required name="tanggal" value={formData.tanggal} onChange={handleChange} type="date" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all text-slate-600" />
                    </div>
                </div>

                {/* BAGIAN A: ANALISIS SITUASI */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-teal-100 shadow-sm">
                    <h4 className="text-lg font-bold text-teal-700 mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">A</span>
                        ANALISIS SITUASI
                    </h4>

                    <div className="bg-teal-50/50 p-5 rounded-xl border border-teal-100 mb-6">
                        <p className="text-sm text-slate-700 leading-relaxed">
                            <strong>Situasi:</strong> Besok kamu harus melakukan presentasi di depan kelas. Kamu sudah menyiapkan materi, tetapi masih khawatir akan salah berbicara dan ditertawakan teman.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">1. Perasaan apa yang mungkin muncul dalam situasi tersebut?</label>
                            <textarea name="a_perasaan" value={formData.a_perasaan} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 resize-none transition-all focus:bg-white" rows={2}></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">2. Pikiran apa yang mungkin membuat kecemasan semakin kuat?</label>
                            <textarea name="a_pikiran" value={formData.a_pikiran} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 resize-none transition-all focus:bg-white" rows={2}></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">3. Tuliskan dua tindakan yang dapat dilakukan untuk menghadapi situasi tersebut.</label>
                            <div className="space-y-3">
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-slate-400">a.</span>
                                    <input name="a_tindakan1" value={formData.a_tindakan1} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <span className="font-bold text-slate-400">b.</span>
                                    <input name="a_tindakan2" value={formData.a_tindakan2} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BAGIAN B: RENCANA AKSI SAYA */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-teal-100 shadow-sm">
                    <h4 className="text-lg font-bold text-teal-700 mb-2 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">B</span>
                        RENCANA AKSI SAYA
                    </h4>
                    <p className="text-sm text-slate-500 mb-6">Pilih satu situasi belajar yang ingin kamu hadapi dengan lebih tenang. Buat rencana sederhana berikut.</p>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Situasi yang ingin saya hadapi:</label>
                            <input required name="situasi" value={formData.situasi} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Hal yang membuat saya cemas:</label>
                            <input required name="cemas" value={formData.cemas} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Pikiran yang lebih seimbang:</label>
                            <input required name="seimbang" value={formData.seimbang} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Langkah kecil yang akan saya lakukan:</label>
                            <input required name="langkah" value={formData.langkah} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Orang yang dapat mendukung saya:</label>
                            <input required name="support" value={formData.support} onChange={handleChange} type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-teal-500 transition-all focus:bg-white" />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-xl mt-4 shadow-lg transition-all ${isSubmitting
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'bg-teal-500 hover:bg-teal-600 text-white shadow-teal-200 hover:-translate-y-1'
                        }`}
                >
                    {isSubmitting ? 'Menyimpan...' : 'Simpan Rencana Aksi'}
                </button>
            </form>
        </div>
    );
}