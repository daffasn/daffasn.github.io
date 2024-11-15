import { Signika } from 'next/font/google';

import "./globals.css";


const font = Signika({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Daffa Septian N's Portfolio",
  description: "This website is Daffa Septian N's Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
