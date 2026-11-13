"use client";
import { useState } from 'react';
import Materi from '@/components/Materi';
import FormRefleksi from '@/components/FormRefleksi';
import FormLkpd from '@/components/FormLkpd';
import Tantangan from '@/components/Tantangan';

export default function KoanaPortal() {
  // State untuk navigasi halaman utama
  const [activePage, setActivePage] = useState('beranda');
  // State untuk navigasi tab di dalam Rube
  const [activeTab, setActiveTab] = useState('materi');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-pink-200 pb-20">

      {/* NAVIGATION BAR */}
      <nav className="bg-white shadow-sm border-b border-slate-100 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('beranda')}>
          {/* KODE BARU */}
          <img 
              src="/logo-unikama.png" 
              alt="Logo UNIKAMA" 
              className="w-8 h-8 object-contain" 
          />
          <span className="text-xl font-bold text-slate-800 tracking-wide">KOANA</span>
        </div>
        <div className="flex gap-6 md:gap-8 font-medium text-slate-500">
          <button
            onClick={() => setActivePage('beranda')}
            className={`hover:text-purple-600 transition-colors ${activePage === 'beranda' && 'text-purple-600 font-bold'}`}
          >
            Beranda
          </button>
          <button
            onClick={() => setActivePage('rube')}
            className={`hover:text-purple-600 transition-colors ${activePage === 'rube' && 'text-purple-600 font-bold'}`}
          >
            Rube
          </button>
          <button
            onClick={() => setActivePage('kontak')}
            className={`hover:text-pink-500 transition-colors ${activePage === 'kontak' && 'text-pink-500 font-bold'}`}
          >
            Kontak
          </button>
        </div>
      </nav>

      {/* ---------------- TAMPILAN 1: BERANDA ---------------- */}
      {activePage === 'beranda' && (
        <div className="animate-in fade-in duration-500">
          <header className="bg-gradient-to-b from-purple-100/60 to-slate-50 pt-20 pb-16 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
              Kelola Kecemasan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Tenangkan Pikiran.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Platform self-healing mandiri untuk membantumu mengenali perasaan dan menemukan cara belajar yang lebih nyaman.
            </p>
            <button
              onClick={() => setActivePage('rube')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-purple-200 transition-all hover:-translate-y-1 text-lg"
            >
              Masuk ke Rube (Ruang Belajar)
            </button>
          </header>

          <section className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🌱</div>
              <h3 className="font-bold text-lg mb-3 text-slate-800">Langkah Awal</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Tidak perlu takut. Ini adalah ruang aman untuk jujur pada diri sendiri dan menyadari apa yang sedang kamu rasakan sebelum bertemu konselor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📖</div>
              <h3 className="font-bold text-lg mb-3 text-slate-800">Tujuan Materi</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Memberikan pemahaman dasar tentang kesehatan mental agar kamu tahu bahwa merasa cemas saat belajar adalah hal yang sangat wajar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🎯</div>
              <h3 className="font-bold text-lg mb-3 text-slate-800">Kenali & Atasi</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Lewat Lembar Refleksi dan LKPD, kita akan mengurai kebingunganmu perlahan-lahan dan menyusun rencana kecil untuk bangkit.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* ---------------- TAMPILAN 2: RUANG BELAJAR (RUBE) ---------------- */}
      {activePage === 'rube' && (
        <main className="max-w-5xl mx-auto px-6 pt-10 animate-in fade-in duration-500">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Rube (Ruang Belajar)</h2>
            <p className="text-slate-500">Pilih menu di bawah ini untuk memulai prosesmu.</p>
          </div>

          <div className="flex flex-col md:flex-row bg-white p-2 rounded-2xl shadow-sm border border-slate-200 gap-2 mb-8">
            <button
              onClick={() => setActiveTab('materi')}
              className={`flex-1 py-3 px-3 rounded-xl font-semibold transition-all ${activeTab === 'materi' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Materi Edukasi
            </button>
            <button
              onClick={() => setActiveTab('refleksi')}
              className={`flex-1 py-3 px-3 rounded-xl font-semibold transition-all ${activeTab === 'refleksi' ? 'bg-pink-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Lembar Refleksi
            </button>
            <button
              onClick={() => setActiveTab('lkpd')}
              className={`flex-1 py-3 px-3 rounded-xl font-semibold transition-all ${activeTab === 'lkpd' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Rencana Aksi
            </button>
            <button
              onClick={() => setActiveTab('tantangan')}
              className={`flex-1 py-3 px-3 rounded-xl font-semibold transition-all ${activeTab === 'tantangan' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              Tantangan 3 Hari 🔥
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10 transition-all duration-300">
            {/* Memanggil Komponen yang sudah kita pisahkan */}
            {activeTab === 'materi' && <Materi />}
            {activeTab === 'refleksi' && <FormRefleksi />}
            {activeTab === 'lkpd' && <FormLkpd />}
            {activeTab === 'tantangan' && <Tantangan />}
          </div>
        </main>
      )}

      {/* ---------------- TAMPILAN 3: KONTAK (MARI BERCERITA) ---------------- */}
      {activePage === 'kontak' && (
        <div className="animate-in fade-in duration-500 max-w-3xl mx-auto px-6 pt-16 md:pt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">Mari Bercerita</h2>
          <p className="text-lg text-slate-500 mb-16">Punya pertanyaan atau butuh teman cerita? Lanjutkan di sini...</p>

          {/* Kartu Profil - Desain Baru yang Lebih Presisi */}
          <div className="relative bg-white rounded-[2rem] shadow-xl shadow-pink-100/40 border border-slate-100 pb-10">

            {/* Header Gradasi Atas (Tinggi diperkecil agar pas) */}
            <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-t-[2rem] w-full"></div>

            {/* Avatar - Posisi Absolut tepat di garis perbatasan */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
              <div className="w-28 h-28 bg-white rounded-full p-2 shadow-sm border border-slate-50 flex items-center justify-center">
                <div className="w-full h-full bg-pink-100 rounded-full flex items-center justify-center text-6xl">
                  👩‍🏫
                </div>
              </div>
            </div>

            {/* Area Konten Profil */}
            <div className="pt-20 px-8 flex flex-col items-center">
              <h3 className="text-3xl font-bold text-slate-800 mb-1">Ajeng Nabila</h3>
              <p className="text-pink-500 font-bold mb-6 text-sm tracking-widest uppercase">Mahasiswa Bimbingan & Konseling</p>

              <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed italic">
                "Tidak perlu ragu untuk menyapa. Rahasiamu aman, dan kita akan cari jalan keluarnya perlahan-lahan."
              </p>

              <a
                href="https://wa.me/6281358885383?text=Halo%20Bu%20Ajeng,%20saya%20ingin%20bercerita..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3.5 px-8 rounded-full transition-transform hover:scale-105 shadow-md shadow-pink-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Lanjutkan di WhatsApp
              </a>

              <div className="mt-10 pt-6 border-t border-slate-100 w-full text-center">
                <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mt-20 pb-8">
        <a href="/login" className="text-xs font-semibold text-slate-300 hover:text-slate-500 transition-colors">
          Area Admin
        </a>
      </div>
    </div>
  );
}