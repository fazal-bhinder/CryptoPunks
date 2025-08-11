import "./globals.css"; // ✅ ADD THIS LINE

export const metadata = {
  title: "CryptoPunks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
