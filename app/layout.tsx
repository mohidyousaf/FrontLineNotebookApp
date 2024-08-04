import "@/app/ui/global.css";
import { inter } from "@/app/ui/font";
import Header from "@/app/ui/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
