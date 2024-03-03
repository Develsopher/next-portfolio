import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata = {
  title: "JunHyeong Chae's Portfolio",
  description: "A portfolio of web front-end development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
