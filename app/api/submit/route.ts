import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        // Menerima paket data dari halaman depan (beranda siswa)
        const body = await req.json();
        const { type, data } = body;

        // Memilah data dan memasukkannya ke tabel yang tepat di Neon
        if (type === 'refleksi') {
            await prisma.refleksi.create({ data });
        } else if (type === 'lkpd') {
            await prisma.lkpd.create({ data });
        } else if (type === 'tantangan') {
            await prisma.tantangan.create({ data });
        } else {
            return NextResponse.json({ error: "Tipe form tidak dikenali" }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: "Data berhasil dikirim ke Bu Ajeng!" });
    } catch (error) {
        console.error("Gagal menyimpan data:", error);
        return NextResponse.json({ error: "Gagal menyimpan data ke database" }, { status: 500 });
    }
}