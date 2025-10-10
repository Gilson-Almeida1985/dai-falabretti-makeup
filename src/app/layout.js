import "./globals.css";

export const metadata = {
  title: "Dai Falabretti Makeup",
  description: "Elevando sua beleza, realçando sua essência.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}