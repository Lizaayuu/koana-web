import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Memanggil jembatan yang kita buat di Langkah 1

export async function GET() {
    try {
        // Mengambil semua data dari ketiga tabel, diurutkan dari yang paling baru
        const dataRefleksi = await prisma.refleksi.findMany({ orderBy: { createdAt: 'desc' } });
        const dataLkpd = await prisma.lkpd.findMany({ orderBy: { createdAt: 'desc' } });
        const dataTantangan = await prisma.tantangan.findMany({ orderBy: { createdAt: 'desc' } });

        return NextResponse.json({
            refleksi: dataRefleksi,
            lkpd: dataLkpd,
            tantangan: dataTantangan
        });
    } catch (error) {
        console.error("Gagal mengambil data:", error);
        return NextResponse.json({ error: "Gagal mengambil data dari database" }, { status: 500 });
    }
}