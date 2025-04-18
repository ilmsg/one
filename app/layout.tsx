import type { Metadata } from 'next';

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Sidebar } from "./components/Sidebar";

export const metadata: Metadata = {
  title: 'one.ilmsg.in.th',
  description: 'weblog ilmsg.in.th',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3" style={{ 'fontSize': 12.5 }}>
              <Sidebar />
            </div>
            <div className="col-sm-9">
              <div className="container-fluid">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
