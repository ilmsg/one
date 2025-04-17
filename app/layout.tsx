import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Link from "next/link";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Sidebar } from "./components/Sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "one.ilmsg.in.th",
  description: "weblog ilmsg.in.th",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <nav className="flex space-x-4">
          <Link href="/">About</Link>&nbsp;|&nbsp;
          <Link href="/posts">Posts</Link>
        </nav> */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3" style={{ 'fontSize': 12.5 }}>
              <Sidebar />
            </div>
            <div className="col-sm-9">
              <div className="container-fluid">{children}</div>;
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
