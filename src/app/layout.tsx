import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Pokedle",
  description: "Wordle for Pokemon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Header/>
          {children}
        
      </body>
    </html>
  );
}
