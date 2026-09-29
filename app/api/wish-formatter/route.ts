import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// "AI Wish Formatter" — merapikan ucapan tamu agar terdengar lebih hangat
// dan puitis sebelum ditampilkan di wishlist, menggunakan Gemini API.
// GEMINI_API_KEY disimpan di server (.env.local), tidak pernah dikirim ke client.

const apiKey = process.env.GEMINI_API_KEY;

export async function POST(req: NextRequest) {
  let message = "";
  try {
    const body = await req.json();
    message = body.message;
    const guestName = body.guestName;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Pesan tidak boleh kosong." }, { status: 400 });
    }

    // Batasi panjang input untuk mencegah penyalahgunaan
    if (message.length > 600) {
      return NextResponse.json(
        { error: "Pesan terlalu panjang (maksimal 600 karakter)." },
        { status: 400 }
      );
    }

    if (!apiKey) {
      // Tanpa API key, kembalikan pesan asli apa adanya agar fitur tetap
      // berjalan (graceful fallback) alih-alih mematahkan form RSVP/wishlist.
      return NextResponse.json({ formatted: message, fallback: true });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Kamu adalah editor bahasa untuk ucapan selamat pernikahan di sebuah undangan digital.
Tugasmu: rapikan dan perindah kalimat ucapan dari tamu bernama "${guestName || "seorang tamu"}" berikut ini
agar terdengar lebih hangat, tulus, dan sedikit puitis, TANPA mengubah makna atau maksud aslinya,
dan TANPA menambahkan informasi baru yang tidak ada di pesan asli.

Aturan:
- Pertahankan bahasa Indonesia.
- Panjang hasil maksimal sedikit lebih panjang dari aslinya (jangan berlebihan).
- Jangan tambahkan tanda kutip, emoji berlebihan, atau salam pembuka baru.
- Kembalikan HANYA teks ucapan yang sudah dirapikan, tanpa penjelasan tambahan.

Pesan asli:
"""
${message}
"""`;

    const result = await model.generateContent(prompt);
    const formatted = result.response.text().trim();

    return NextResponse.json({ formatted: formatted || message, fallback: false });
  } catch (err) {
    console.error("[wish-formatter] error:", err);
    // Fallback aman: tampilkan pesan asli tamu jika AI gagal
    return NextResponse.json(
      { formatted: message, fallback: true, error: "Gagal memproses dengan AI, menampilkan pesan asli." },
      { status: 200 }
    );
  }
}
