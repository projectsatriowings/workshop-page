import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const figtreeDisplay = Figtree({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AI & The Future - Executive Masterclass Landing",
  description: "AI & The Future - Executive Masterclass Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${figtree.variable} ${figtreeDisplay.variable} ${jetBrainsMono.variable} antialiased selection:bg-[#FFB800]/30 selection:text-[#FF5C00]`}
      >
        {children}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yv034r19oi");
          `}
        </Script>
      </body>
    </html>
  );
}
