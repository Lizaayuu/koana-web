import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { id, type } = body;

        // Memilih tabel mana yang mau dihapus berdasarkan tipe
        if (type === 'refleksi') {
            await prisma.refleksi.delete({ where: { id: Number(id) } });
        } else if (type === 'lkpd') {
            await prisma.lkpd.delete({ where: { id: Number(id) } });
        } else if (type === 'tantangan') {
            await prisma.tantangan.delete({ where: { id: Number(id) } });
        } else {
            return NextResponse.json({ error: "Tipe tidak dikenali" }, { status: 400 });
        }

        return NextResponse.json({ success: true, message: "Data berhasil dihapus selamanya!" });
    } catch (error) {
        console.error("Gagal menghapus data:", error);
        return NextResponse.json({ error: "Gagal menghapus data" }, { status: 500 });
    }
}