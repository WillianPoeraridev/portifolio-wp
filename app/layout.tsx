import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Willian Poerari | Full-Stack Developer AI-First",
  description: "Desenvolvedor autodidata com sistemas em produção. Especializado em Next.js, React e soluções impulsionadas por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}