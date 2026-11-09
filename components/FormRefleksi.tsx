"use client";
import { useState } from 'react';

export default function FormRefleksi() {
    // 1. Membuat state untuk menampung ketikan siswa
    const [formData, setFormData] = useState({
        nama: '',
        kelas: '',
        tanggal: '',
        situasi: '',
        cemas: '',
        aksi: '',
        cara: '',
        support: '',
        pesan: ''
    });

    // State untuk mengatur status loading dan sukses
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // 2. Fungsi untuk menangkap setiap huruf yang diketik siswa
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 3. Fungsi untuk mengirim paket data ke API/Database saat tombol diklik
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'refleksi', // Memberi label ke API bahwa ini adalah form refleksi
                    data: formData
                }),
            });

            if (res.ok) {
                setIsSuccess(true);
                // Kosongkan form kembali setelah berhasil dikirim
                setFormData({ nama: '', kelas: '', tanggal: '', situasi: '', cemas: '', aksi: '', cara: '', support: '', pesan: '' });

                // Hilangkan pesan sukses setelah 5 detik
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Yahh, gagal mengirim curhatanmu. Coba lagi ya!");
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

            {/* Pop-up Notifikasi Sukses */}
            {isSuccess && (
                <div className="absolute -top-4 left-0 right-0 bg-green-100 text-green-700 p-4 rounded-xl text-center font-bold shadow-sm z-10 animate-in slide-in-from-top-2">
                    Yeay! Refleksimu sudah berhasil disimpan di Ruang Konselor. ✨
                </div>
            )}

            <div className="text-center mb-8 border-b border-slate-100 pb-6 mt-4">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">LEMBAR REFLEKSI DIRI</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    Luangkan waktu beberapa menit untuk memikirkan pengalaman belajarmu. Jawablah dengan jujur sesuai keadaan diri sendiri. Jawaban ini tidak dinilai benar atau salah.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Kolom Identitas */}
                <div className="grid md:grid-cols-3 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nama (opsional)</label>
                        <input name="nama" value={formData.nama} onChange={handleChange} required type="text" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all" placeholder="Masukkan nama..." />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Kelas</label>
                        <input name="kelas" value={formData.kelas} onChange={handleChange} required type="text" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all" placeholder="Contoh: XII IPA 1" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Tanggal</label>
                        <input name="tanggal" value={formData.tanggal} onChange={handleChange} required type="date" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all text-slate-600" />
                    </div>
                </div>

                {/* Kolom Pertanyaan */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            1. Situasi belajar apa yang paling sering membuat saya merasa khawatir atau gugup?
                        </label>
                        <textarea name="situasi" value={formData.situasi} onChange={handleChange} required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all focus:bg-white" rows={3}></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            2. Apa yang biasanya saya rasakan atau pikirkan ketika menghadapi situasi tersebut?
                        </label>
                        <textarea name="cemas" value={formData.cemas} onChange={handleChange} required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all focus:bg-white" rows={3}></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            3. Apa yang biasanya saya lakukan ketika mulai merasa cemas?
                        </label>
                        <textarea name="aksi" value={formData.aksi} onChange={handleChange} required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all focus:bg-white" rows={3}></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            4. Dari materi ini, cara apa yang ingin saya coba untuk mengelola kecemasan saat belajar?
                        </label>
                        <textarea name="cara" value={formData.cara} onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all focus:bg-white" rows={3}></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                            5. Siapa orang yang bisa saya hubungi ketika membutuhkan dukungan?
                        </label>
                        <input name="support" value={formData.support} onChange={handleChange} required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 transition-all focus:bg-white" placeholder="Misal: Teman sebangku, orang tua, Guru BK..." />
                    </div>

                    <div className="pt-4">
                        <label className="block text-sm font-bold text-pink-600 mb-2">
                            Hal yang ingin saya ingat:
                        </label>
                        <textarea name="pesan" value={formData.pesan} onChange={handleChange} required className="w-full p-4 bg-pink-50/50 border border-pink-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all focus:bg-white" rows={2} placeholder="Tulis pengingat positif untuk dirimu sendiri..."></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-xl mt-6 shadow-lg transition-all ${isSubmitting
                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            : 'bg-pink-500 hover:bg-pink-600 text-white shadow-pink-200 hover:-translate-y-1'
                        }`}
                >
                    {isSubmitting ? 'Mengirim Data...' : 'Simpan Refleksi Diri'}
                </button>
            </form>
        </div>
    );
}