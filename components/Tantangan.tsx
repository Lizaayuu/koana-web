"use client";
import { useState, useEffect } from 'react';

const getLocalDateStr = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export default function Tantangan() {
    const [mounted, setMounted] = useState(false);

    // State bawaan desain aslimu
    const [selectedHabit, setSelectedHabit] = useState('');
    const [customHabit, setCustomHabit] = useState('');
    const [days, setDays] = useState([
        { dateCompleted: '', note: '' },
        { dateCompleted: '', note: '' },
        { dateCompleted: '', note: '' }
    ]);

    // --- STATE BARU UNTUK DATABASE ---
    const [nama, setNama] = useState('');
    const [kelas, setKelas] = useState('');
    const [evaluasi, setEvaluasi] = useState('');
    const [pesan, setPesan] = useState('');

    // Status Pengiriman
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const habitOptions = [
        "Membagi tugas menjadi beberapa langkah kecil.",
        "Membuat jadwal belajar yang realistis.",
        "Mengambil jeda istirahat saat diperlukan.",
        "Menyiapkan perlengkapan belajar sebelum mulai.",
        "Meminta bantuan ketika tidak memahami materi.",
        "Lainnya"
    ];

    useEffect(() => {
        setMounted(true);
        const savedData = localStorage.getItem('koana_tantangan_v3');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setSelectedHabit(parsed.selectedHabit || '');
            setCustomHabit(parsed.customHabit || '');
            setDays(parsed.days || days);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('koana_tantangan_v3', JSON.stringify({
                selectedHabit, customHabit, days
            }));
        }
    }, [selectedHabit, customHabit, days, mounted]);

    const handleDayToggle = (index: number) => {
        if (!selectedHabit) {
            alert("Silakan pilih kebiasaan kecilmu terlebih dahulu di bagian atas!");
            return;
        }

        const todayStr = getLocalDateStr();
        const newDays = [...days];

        if (newDays[index].dateCompleted) {
            for (let i = index; i < newDays.length; i++) {
                newDays[i].dateCompleted = '';
            }
        } else {
            newDays[index].dateCompleted = todayStr;
        }
        setDays(newDays);
    };

    const handleNoteChange = (index: number, value: string) => {
        const newDays = [...days];
        newDays[index].note = value;
        setDays(newDays);
    };

    // --- FUNGSI PENGIRIM KE DATABASE ---
    const handleSubmitEvaluasi = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const kebiasaanFinal = selectedHabit === 'Lainnya' ? customHabit : selectedHabit;

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'tantangan',
                    data: {
                        nama,
                        kelas,
                        tanggalSelesai: getLocalDateStr(),
                        kebiasaan: kebiasaanFinal,
                        evaluasi,
                        pesan
                    }
                }),
            });

            if (res.ok) {
                setIsSuccess(true);
                // Kosongkan form identitas & evaluasi (Tracker hari tidak dikosongkan agar bukti 3 hari tidak hilang)
                setNama(''); setKelas(''); setEvaluasi(''); setPesan('');
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Gagal mengirim Evaluasi Tantangan. Coba lagi ya!");
            }
        } catch (error) {
            console.error("Error submitting:", error);
            alert("Terjadi kesalahan jaringan.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) return null;

    const today = getLocalDateStr();
    const allCompleted = days.every(d => d.dateCompleted !== '');

    return (
        <div className="animate-in fade-in duration-500 relative">

            {/* POP-UP MELAYANG (Toast Notification) - Selalu terlihat di posisi manapun! */}
            {isSuccess && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-bold shadow-lg z-50 flex items-center gap-3 animate-in slide-in-from-top-10 fade-in duration-300">
                    <span className="text-xl">🔥</span> Evaluasi Tantangan 3 Hari berhasil dikirim!
                </div>
            )}

            <div className="text-center mb-8 border-b border-slate-100 pb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">TANTANGAN 3 HARI</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto mt-2">
                    Pilih satu kebiasaan kecil yang ingin kamu coba selama tiga hari untuk membuat kegiatan belajar terasa lebih teratur dan nyaman.
                </p>
            </div>

            <form onSubmit={handleSubmitEvaluasi}>

                {/* --- TAMBAHAN: FORM IDENTITAS (Muncul agar bisa dikirim ke Bu Ajeng) --- */}
                <div className="grid md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Nama</label>
                        <input required value={nama} onChange={(e) => setNama(e.target.value)} type="text" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Masukkan namamu..." />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Kelas</label>
                        <input required value={kelas} onChange={(e) => setKelas(e.target.value)} type="text" className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all" placeholder="Contoh: XII IPA 1" />
                    </div>
                </div>

                {/* BAGIAN 1: PILIH KEBIASAAN */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm mb-8">
                    <h4 className="font-bold text-slate-700 mb-4">Kebiasaan kecil yang saya pilih:</h4>
                    <div className="space-y-3">
                        {habitOptions.map((option, idx) => (
                            <label key={idx} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${selectedHabit === option ? 'bg-orange-50 border-orange-300' : 'bg-slate-50 border-slate-100 hover:border-orange-200'}`}>
                                <input type="radio" name="habit" value={option} checked={selectedHabit === option} onChange={(e) => setSelectedHabit(e.target.value)} className="w-5 h-5 mt-0.5 text-orange-500 focus:ring-orange-500 border-slate-300" />
                                <span className={`text-sm md:text-base font-medium ${selectedHabit === option ? 'text-orange-900' : 'text-slate-600'}`}>{option}</span>
                            </label>
                        ))}
                        {selectedHabit === 'Lainnya' && (
                            <div className="pl-8 pt-2">
                                <input type="text" value={customHabit} onChange={(e) => setCustomHabit(e.target.value)} placeholder="Tuliskan kebiasaan kecilmu di sini..." className="w-full p-3 bg-white border border-orange-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm" />
                            </div>
                        )}
                    </div>
                </div>

                {/* BAGIAN 2: TRACKER 3 HARI */}
                <div className="space-y-4 mb-10">
                    {[1, 2, 3].map((hari, index) => {
                        const isCompleted = !!days[index].dateCompleted;
                        let isReady = false;
                        let lockedText = "🔒 Terkunci";

                        if (index === 0) {
                            if (selectedHabit && !isCompleted) isReady = true;
                            if (!selectedHabit) lockedText = "🔒 Pilih kebiasaan dulu";
                        } else {
                            const prevDay = days[index - 1];
                            if (!prevDay.dateCompleted) {
                                lockedText = `🔒 Selesaikan Hari ${index} dulu`;
                            } // else if (prevDay.dateCompleted === today) {
                            // lockedText = "🔒 Terbuka besok";
                            // } else 
                            {
                                if (!isCompleted) isReady = true;
                            }
                        }

                        const isDisabled = !isCompleted && !isReady;

                        return (
                            <div key={index} className={`p-5 md:p-6 rounded-2xl border-2 transition-all ${isCompleted ? 'bg-orange-50 border-orange-200' : isDisabled ? 'bg-slate-50 border-slate-100 opacity-70' : 'bg-white border-orange-200 shadow-sm'}`}>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                    <div className="flex items-center gap-4 w-full md:w-1/3 pt-1">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${isCompleted ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                                            H{hari}
                                        </div>
                                        <div>
                                            <button type="button" disabled={isDisabled} onClick={() => handleDayToggle(index)} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 w-full sm:w-auto text-left flex items-center justify-center gap-2 ${isCompleted ? 'bg-orange-100 border-orange-200 text-orange-700 hover:bg-orange-200' : isReady ? 'bg-white border-orange-500 text-orange-600 hover:bg-orange-50 shadow-sm' : 'bg-slate-100 border-transparent text-slate-400 cursor-not-allowed'}`}>
                                                {isCompleted ? '✅ Selesai' : isReady ? '⬜ Tandai Selesai' : lockedText}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <textarea disabled={!isCompleted} value={days[index].note} onChange={(e) => handleNoteChange(index, e.target.value)} placeholder={isCompleted ? "Bagaimana latihanmu hari ini? Ketik catatan singkatmu di sini..." : "Tombol harus dicentang selesai untuk menulis catatan."} className={`w-full p-4 rounded-xl outline-none text-sm transition-all resize-none ${isCompleted ? 'bg-white border border-orange-200 focus:ring-2 focus:ring-orange-500 shadow-sm' : 'bg-transparent border border-transparent'}`} rows={2}></textarea>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* BAGIAN 3: EVALUASI DIRI */}
                {allCompleted ? (
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-orange-200 shadow-lg shadow-orange-100/50 animate-in slide-in-from-bottom-4 mb-10">
                        <h4 className="text-xl font-bold text-orange-700 mb-6 flex items-center gap-2">
                            <span>D. EVALUASI DIRI</span>
                            <span className="text-2xl">🎉</span>
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Setelah mencoba kebiasaan tersebut, apa perubahan atau hal yang kamu pelajari?</label>
                                <textarea required value={evaluasi} onChange={(e) => setEvaluasi(e.target.value)} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 resize-none transition-all focus:bg-white" rows={3}></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan untuk diri sendiri:</label>
                                <div className="relative">
                                    <span className="absolute top-4 left-4 text-orange-400 font-serif text-2xl">"</span>
                                    <input required value={pesan} onChange={(e) => setPesan(e.target.value)} type="text" className="w-full p-4 pl-10 bg-orange-50/50 border border-orange-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-orange-900 font-medium italic" placeholder="Tuliskan apresiasi untuk dirimu..." />
                                    <span className="absolute top-4 right-4 text-orange-400 font-serif text-2xl">"</span>
                                </div>
                            </div>
                            <button disabled={isSubmitting} type="submit" className={`w-full font-bold py-4 rounded-xl mt-4 shadow-lg transition-all ${isSubmitting ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200 hover:-translate-y-1'}`}>
                                {isSubmitting ? 'Menyimpan...' : 'Kirim Evaluasi ke Konselor'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-10">
                        <p className="text-slate-500 text-sm">Selesaikan 3 hari tantangan untuk membuka form Evaluasi Diri.</p>
                    </div>
                )}
            </form>

            <div className="text-center pb-6 mt-6">
                <p className="text-orange-500/80 font-medium text-sm italic">
                    "Terima kasih sudah berani mencoba. Ingat, perubahan besar selalu dimulai dari satu langkah kecil."
                </p>
            </div>
        </div>
    );
}