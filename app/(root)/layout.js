import '../globals.css'
import { Inter } from 'next/font/google'
import Socials from "@/components/socials";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lakshay Goyal - Portfolio",
  description:
    "Greetings! I am Lakshay Goyal, a web developer who crafts captivating digital experiences. With an artistic flair and a user-centric mindset, I weave wonders on the web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <Socials />
        </main>
      </body>
    </html>
  );
}
