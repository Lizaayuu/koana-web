"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginAdmin() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State untuk fitur mata
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'ajeng123') {
            localStorage.setItem('koana_admin', 'true');
            router.push('/admin');
        } else {
            setError(true);
            // setPassword(''); <-- Kita hapus baris ini agar sandi tidak hilang saat salah, jadi bisa dikoreksi
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-slate-100 animate-in fade-in zoom-in duration-500">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner">
                        🔐
                    </div>
                    <h1 className="text-2xl font-extrabold text-slate-800">Ruang Konselor</h1>
                    <p className="text-slate-500 text-sm mt-2">Silakan masukkan kata sandi untuk masuk ke Dashboard KOANA.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Kata Sandi</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                                // text-slate-800 ditambahkan agar tulisan terlihat sangat jelas
                                className={`w-full p-4 pr-12 bg-slate-50 border rounded-xl outline-none focus:ring-2 transition-all text-slate-800 font-medium tracking-wide ${error ? 'border-rose-500 focus:ring-rose-200 bg-rose-50' : 'border-slate-200 focus:ring-pink-500'
                                    }`}
                                placeholder="Masukkan sandi..."
                            />

                            {/* Tombol Mata */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                                title={showPassword ? "Sembunyikan sandi" : "Tampilkan sandi"}
                            >
                                {showPassword ? (
                                    // Ikon Mata Silang (Sembunyikan)
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    // Ikon Mata Terbuka (Lihat)
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {error && <p className="text-rose-500 text-sm mt-2 font-medium animate-pulse">Kata sandi salah, coba periksa ketikanmu!</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
                    >
                        Masuk ke Dashboard
                    </button>
                </form>

                <button
                    onClick={() => router.push('/')}
                    className="w-full mt-4 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
                >
                    &larr; Kembali ke Beranda Siswa
                </button>
            </div>
        </div>
    );
}