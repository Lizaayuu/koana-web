export default function Materi() {
    return (
        <div className="animate-in fade-in duration-500 space-y-12">

            {/* 1. Mengenal Mental Health */}
            <section>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b border-slate-100 pb-4">1. Mengenal Mental Health</h3>
                <p className="text-slate-600 leading-relaxed bg-purple-50 p-5 rounded-2xl border border-purple-100">
                    Mental health atau kesehatan mental adalah keadaan yang membantu seseorang mengenali perasaan, mengelola tekanan, menjalin hubungan dengan orang lain, dan menjalani kegiatan sehari-hari. Kesehatan mental bukan berarti harus selalu bahagia atau tidak pernah merasa khawatir. Perasaan sedih, takut, kecewa, dan cemas dapat dialami siapa saja.
                </p>
            </section>

            {/* 2. Apa Itu Kecemasan Saat Belajar */}
            <section>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b border-slate-100 pb-4">2. Apa Itu Kecemasan Saat Belajar?</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Kecemasan saat belajar adalah rasa khawatir, takut, atau gelisah yang muncul ketika menghadapi situasi belajar tertentu. Misalnya, saat akan ujian, presentasi, menerima tugas, atau ketika merasa belum memahami pelajaran.
                </p>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <p className="font-bold text-slate-700 mb-2">Contoh situasi:</p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2">
                        <li>Takut memperoleh nilai yang tidak sesuai harapan.</li>
                        <li>Gugup ketika harus berbicara di depan kelas.</li>
                        <li>Khawatir tidak mampu menyelesaikan tugas tepat waktu.</li>
                        <li>Takut bertanya karena merasa malu atau takut dianggap tidak paham.</li>
                        <li>Membandingkan kemampuan diri dengan teman.</li>
                    </ul>
                </div>
                <p className="text-slate-500 italic mt-4 text-sm">
                    *Merasa cemas sesekali merupakan hal yang wajar. Namun, jika kecemasan terus berulang atau mulai mengganggu konsentrasi, tidur, hubungan, dan aktivitas sehari-hari, penting untuk mencari dukungan.
                </p>
            </section>

            {/* 3. Mengenali Tanda dan Pemicu */}
            <section>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b border-slate-100 pb-4">3. Mengenali Tanda dan Pemicu Kecemasan</h3>
                <p className="text-slate-600 mb-6">Kecemasan dapat dirasakan dengan cara yang berbeda pada setiap orang. Beberapa tanda yang mungkin muncul antara lain:</p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-rose-50 p-5 rounded-2xl border border-rose-100">
                        <h4 className="font-bold text-rose-700 mb-3 flex items-center gap-2">❤️ Fisik</h4>
                        <ul className="list-disc list-inside text-rose-900/80 space-y-1.5 text-sm">
                            <li>Jantung berdebar</li>
                            <li>Tangan berkeringat</li>
                            <li>Tubuh terasa tegang</li>
                            <li>Sulit tidur</li>
                        </ul>
                    </div>
                    <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                        <h4 className="font-bold text-amber-700 mb-3 flex items-center gap-2">🧠 Pikiran</h4>
                        <ul className="list-disc list-inside text-amber-900/80 space-y-1.5 text-sm">
                            <li>Takut gagal</li>
                            <li>Merasa tidak mampu</li>
                            <li>Memikirkan hasil buruk</li>
                            <li>Sulit fokus</li>
                        </ul>
                    </div>
                    <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                        <h4 className="font-bold text-indigo-700 mb-3 flex items-center gap-2">🏃 Perilaku</h4>
                        <ul className="list-disc list-inside text-indigo-900/80 space-y-1.5 text-sm">
                            <li>Menunda tugas</li>
                            <li>Menghindari presentasi</li>
                            <li>Enggan bertanya</li>
                            <li>Kehilangan semangat</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-4">Hal-hal yang dapat memicu kecemasan belajar:</h4>
                    <ol className="list-decimal list-inside text-slate-600 space-y-3">
                        <li><strong className="text-slate-700">Tuntutan akademik:</strong> tugas, ujian, dan target nilai yang terasa banyak.</li>
                        <li><strong className="text-slate-700">Takut gagal:</strong> khawatir hasil tidak sesuai harapan.</li>
                        <li><strong className="text-slate-700">Kurang percaya diri:</strong> merasa kemampuan diri lebih rendah daripada orang lain.</li>
                        <li><strong className="text-slate-700">Tekanan lingkungan:</strong> takut dikritik, diejek, atau dibandingkan.</li>
                        <li><strong className="text-slate-700">Kurang persiapan:</strong> belum memahami materi atau belum mengatur waktu belajar.</li>
                    </ol>
                </div>
            </section>

            {/* 4. Cara Mengelola */}
            <section>
                <h3 className="text-2xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-4">4. Cara Mengelola Kecemasan Saat Belajar</h3>
                <div className="space-y-4">
                    {[
                        { title: "Kenali dan beri nama perasaanmu.", desc: "Coba tanyakan kepada diri sendiri: “Apa yang sedang membuatku khawatir?” Mengetahui pemicunya dapat membantu menentukan langkah berikutnya." },
                        { title: "Beri jeda dan atur napas.", desc: "Berhenti sejenak, duduk dengan nyaman, lalu bernapas secara perlahan tanpa memaksakan. Arahkan perhatian pada napas sampai tubuh terasa lebih tenang." },
                        { title: "Pecah tugas menjadi langkah kecil.", desc: "Pilih satu hal yang bisa dikerjakan terlebih dahulu. Misalnya, membaca dua halaman, membuat tiga poin rangkuman, atau mengerjakan satu soal." },
                        { title: "Susun jadwal yang realistis.", desc: "Tentukan prioritas, sisipkan waktu istirahat, dan hindari menumpuk semua pekerjaan menjelang tenggat." },
                        { title: "Ubah cara berbicara kepada diri sendiri.", desc: "Ganti kalimat yang menjatuhkan diri dengan kalimat yang lebih realistis dan mendukung." },
                        { title: "Jaga kebutuhan diri.", desc: "Usahakan tidur cukup, makan teratur, bergerak, dan melakukan kegiatan yang menyenangkan. Istirahat adalah bagian dari proses belajar." },
                        { title: "Cari dukungan.", desc: "Berceritalah kepada orang tua, teman yang dipercaya, wali kelas, Guru BK, atau tenaga profesional jika membutuhkan bantuan." }
                    ].map((item, index) => (
                        <div key={index} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl">
                            <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold shrink-0 mt-1">{index + 1}</div>
                            <div>
                                <h5 className="font-bold text-slate-800 mb-1">{item.title}</h5>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Mengubah Pikiran */}
            <section>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b border-slate-100 pb-4">5. Mengubah Pikiran yang Membebani</h3>
                <p className="text-slate-600 mb-6">Pikiran yang muncul saat cemas terkadang terdengar sangat meyakinkan. Cobalah memeriksa apakah pikiran tersebut merupakan fakta atau kekhawatiran. Setelah itu, cari kalimat pengganti yang lebih seimbang.</p>

                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                            <span className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-2 block">Pikiran Membebani</span>
                            <p className="font-medium text-rose-900">"Aku pasti gagal ujian."</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2 block">Pikiran Lebih Seimbang</span>
                            <p className="font-medium text-teal-900">"Aku belum tahu hasilnya. Aku bisa mempersiapkan diri sedikit demi sedikit."</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                            <p className="font-medium text-rose-900">"Aku tidak pintar."</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                            <p className="font-medium text-teal-900">"Aku masih perlu waktu dan cara belajar yang sesuai untuk memahami materi."</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                            <p className="font-medium text-rose-900">"Semua teman lebih hebat."</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                            <p className="font-medium text-teal-900">"Setiap orang punya proses dan kecepatan belajar yang berbeda."</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                            <p className="font-medium text-rose-900">"Aku tidak akan bisa presentasi."</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                            <p className="font-medium text-teal-900">"Aku bisa berlatih dan menyiapkan poin penting sebelum presentasi."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Strategi Singkat BTL */}
            <section>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 border-b border-slate-100 pb-4">6. Strategi Singkat: B - T - L</h3>
                <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-lg">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center font-bold text-xl shrink-0">B</div>
                            <div>
                                <h5 className="font-bold text-lg mb-1 text-rose-300">BERHENTI</h5>
                                <p className="text-slate-300">Ambil jeda ketika mulai merasa kewalahan.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-xl shrink-0">T</div>
                            <div>
                                <h5 className="font-bold text-lg mb-1 text-amber-300">TENANG</h5>
                                <p className="text-slate-300">Atur napas, sadari perasaan, dan ingatkan diri bahwa kamu boleh mengerjakan sesuatu secara bertahap.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xl shrink-0">L</div>
                            <div>
                                <h5 className="font-bold text-lg mb-1 text-emerald-300">LANJUTKAN</h5>
                                <p className="text-slate-300">Pilih satu langkah kecil yang paling mungkin dilakukan sekarang.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Kapan Perlu Mencari Bantuan */}
            <section>
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-3xl border border-pink-200 text-center">
                    <h3 className="text-xl font-bold mb-3 text-slate-800">7. Kapan Perlu Mencari Bantuan?</h3>
                    <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
                        Mintalah bantuan kepada orang dewasa tepercaya atau Guru BK jika rasa cemas sering muncul, terasa sulit dikendalikan, membuatmu menghindari sekolah atau kegiatan belajar, atau mengganggu tidur dan aktivitas sehari-hari.
                    </p>
                    <p className="font-bold text-pink-600 bg-white inline-block px-6 py-2 rounded-full shadow-sm">
                        Kamu tidak harus menghadapi semuanya sendirian.
                    </p>
                </div>
            </section>

            {/* 8. PENUTUP (Dipindahkan dari Tantangan) */}
            <section>
                <div className="bg-slate-800 text-center p-8 md:p-10 rounded-3xl relative overflow-hidden mt-12">
                    <div className="relative z-10">
                        <h4 className="text-pink-400 font-bold tracking-widest text-sm mb-4">PENUTUP</h4>
                        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                            Mengelola kecemasan bukan berarti menghilangkan semua rasa khawatir. Tujuannya adalah belajar mengenali perasaan, memilih respons yang membantu, dan mencari dukungan ketika dibutuhkan. Mulailah dari satu langkah kecil. Proses setiap orang berbeda, dan kamu berhak mendapatkan bantuan.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl inline-block shadow-lg">
                            <p className="text-white font-extrabold text-lg md:text-xl tracking-wide leading-relaxed">
                                BELAJAR BOLEH BERTAHAP.<br />
                                ISTIRAHAT BOLEH.<br />
                                MEMINTA BANTUAN JUGA BOLEH.
                            </p>
                        </div>
                    </div>

                    {/* Dekorasi Cahaya */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
                </div>
            </section>

        </div>
    );
}