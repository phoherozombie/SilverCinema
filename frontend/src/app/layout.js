import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import "../styles/globals.css";
import "../styles/styles.css";
import '@ant-design/v5-patch-for-react-19';
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Silver Ciname",
  description: "Silver Cinema",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
