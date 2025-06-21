import Link from "next/link";

export const metadata = {
  title: "AI Video Studio",
  description: "Create amazing videos with AI",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="pure-black-bg">
        {/* Sidebar and main content */}
        <div className="app-content">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <Link href="/dashboard" className="sidebar-link">
                <i className="fa-solid fa-maximize pe-2"></i>Dashboard
              </Link>
              <Link href="/dashboard/explore" className="sidebar-link">
               <i className="fa-solid fa-leaf pe-2"></i>Explore
              </Link>
              <Link href="/dashboard/text-to-video" className="sidebar-link">
               <i className="fa-solid fa-photo-film pe-2"></i> Text to Video
              </Link>
              <Link href="/dashboard/image-to-video" className="sidebar-link">
                <i className="fa-solid fa-image pe-2"></i>Image to Video
              </Link>
              <Link href="/dashboard/ai-video-effects" className="sidebar-link">
               <i className="fa-solid fa-cubes-stacked pe-2"></i>AI Video Effects
              </Link>
              <Link href="/dashboard/image-blend-video" className="sidebar-link">
                <i className="fa-solid fa-wand-magic-sparkles pe-2"></i>Image Blend Video
              </Link>
              <Link href="/dashboard/veo-3" className="sidebar-link">
                <div className="proversion">
                  <div className="protext">
                    <i className="fa-solid fa-video pe-2"></i>Veo 3
                  </div>
                  <div className="protext">
                    <article>New</article>
                  </div>
                </div>
              </Link>
              <Link href="/dashboard/my-creations" className="sidebar-link">
                <i className="fa-solid fa-wand-sparkles pe-2"></i>My Creations
              </Link>
              <Link href="/pricing" className="sidebar-link">
                <i className="fa-solid fa-money-check-dollar pe-2"></i>Pricing
              </Link>
            </nav>
          </aside>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
