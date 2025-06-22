// app/layout.jsx
import { Nunito } from "next/font/google"; // Import Nunito
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Link from "next/link";

// Configure Nunito with the weights you need
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adjust weights as needed
  display: "swap", // Optional: Ensures text remains visible during font load
});

export const metadata = {
  title: "AI Video Studio",
  description: "Create amazing videos with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
        <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </head>
      <body className="pure-black-bg">
        {/* Fixed Header with corrected alignment */}
        <header className="header">
          <div className="header-container">
            <div className="header-left">
              <Link href="/" className="gradient-logo">
              Veo2
              </Link>
              
              <nav className="header-nav">
                <Link href="#">Showcase</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/dashboard">Dashboard</Link>
              </nav>
            </div>
            <div className="header-right">
              <button className="signup-button">Sign Up</button>
            </div>
          </div>
        </header>
        <div>
          <main>{children}</main>
        </div>
          <div className="footer-content">
        <div className="footercontent">
        <div className="support">
                <h3>Veo</h3>
            <article><i className="fa-solid fa-envelope"></i> support@veo2.org</article>
        </div>
        <div className="services">
            <h4>Services</h4>
            <li><Link href="#">Video Generator</Link></li>
            <li><Link href="#">Video History</Link></li>
        </div>
        <div className="resources">
            <h4>Resources</h4>
             <li><Link href="#">Video Generator</Link></li>
            <li><Link href="#">Video History</Link></li>
             <li><Link href="#">Video Generator</Link></li>
            <li><Link href="#">Video History</Link></li>
        </div>
        <div className="legal">
            <h4><Link href="#">Legal</Link></h4>
             <li><Link href="#">Video Generato</Link></li>
            <li><Link href="#">Video History</Link></li>
             <li><Link href="#">Video Generator</Link></li>
            <li><Link href="#">Video History</Link></li>
        </div>
        </div>
        <div className="country">
         <div className="countrylist mt-4">
          <li>🇪🇬العربية</li>
          <li>🇩🇪 Deutsch</li>
          <li>🇬🇧 English</li>
          <li>🇪🇸 Español</li>
          <li>🇨🇳 简体中文</li>
          <li>🇫🇷 Français</li>
          <li>🇮🇹 Italiano</li>
          <li>🇯🇵 日本語</li>
          <li>🇰🇷 한국어</li>
          <li>🇳🇱 Nederlands</li>
          <li>🇧🇷 Português</li>
          <li>🇷🇺 Русский</li>
          <li>🇹🇷 Türkçe</li>
         </div>
        </div>
        <div className="rightreserved">
          <article className="mt-4">© 2025 Veo2. All rights reserved.</article>
        </div>
      </div>
      </body>
    </html>
  );
}