import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nossarede.org",
  description: "Welcome to nossarede.org. Connect, share, and discover with our vibrant community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
