import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "東京都内のバストアップサロンおすすめガイド【2026年最新】エリア別比較",
  description:
    "東京都内のバストアップサロン・育乳エステを徹底比較。銀座・恵比寿・新宿・表参道の人気サロンを料金・口コミ・施術タイプ別に紹介。編集部おすすめNo.1サロンも公開。",
  openGraph: {
    title:
      "東京都内のバストアップサロンおすすめガイド【2026年最新】エリア別比較",
    description:
      "東京都内のバストアップサロン・育乳エステを徹底比較。銀座・恵比寿・新宿・表参道の人気サロンをエリア別に紹介。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body className="min-h-screen bg-white font-[family-name:var(--font-noto-sans-jp)]">
        {children}
      </body>
    </html>
  );
}
