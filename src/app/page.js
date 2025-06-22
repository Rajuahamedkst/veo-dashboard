import VideoPlayerTwo from "@/client/VideoPlayerTwo";
import Link from "next/link";

const posts = [
    {
      id: 1,
      username: "Lars_Pragmata",
      handle: "@Lars_pragmata",
      content: "A different kind of sport #Veo2 #VideoFX #AI #Sora",
      action: "Watch on X",
      time: "5:50 AM - Dec 18, 2024",
      stats: "1.0K",
      linkText: "Check a 24-seat link"
    },
    {
      id: 2,
      username: "Oliver Wang",
      handle: "@oliver_wang",
      content: "Penguins deserve to experience flight tool #veo2",
      action: "View replies",
      time: "8:20 AM - Dec 17, 2024",
      stats: "1.4K",
      linkText: "Check 48-seat links"
    },
    {
      id: 3,
      username: "MBZ",
      handle: "@babaetzadeh",
      content: "How good is #Veo2? Let's look at some samples. 'a sitcom tv show about potatoes' #Veo",
      action: "Watch on X",
      time: "",
      stats: "",
      linkText: ""
    }
  ];
  


export default function Home() {
  return (
    <>
    <main className="main-home">
 <div className="homeGrid">
    <div className="leftHome">
     <div className="leftHomeTxt">
      <span>Veo 2</span>: Ushering in a New Era of AI Video Creation
     </div>
     <article>Effortlessly create high-quality videos with Veo 2 to enhance audience engagement.</article>
     <div className="homeButtons mt-5">
      <button className="button1"><Link href="/dashboard">Get Started <i className="fa-solid fa-arrow-right ms-2"></i></Link></button>
      <button className="button2"><Link href="/dashboard/veo-3">Try Veo3</Link></button>
    </div>
    </div>
   {/* Render Home Videos */}
   <VideoPlayerTwo/>
   </div>
    </main> 
    <section>
   <div className="showcaseTxt">
     <h6>Showcase</h6>
    <h2>Featured Creations</h2>
    <article>Discover what is possible with our powerful video effects and tools</article>
   </div>
    <div className="container showcasePost py-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-secondary me-2" style={{ width: '40px', height: '40px' }}></div>
                  <div>
                    <h6 className="mb-0 fw-bold">{post.username}</h6>
                    <small className="text-muted">{post.handle}</small>
                  </div>
                  <button className="btn btn-outline-primary btn-sm ms-auto">Follow</button>
                </div>
                
                <p className="card-text mb-2">{post.content}</p>
                
                {post.action && (
                  <Link href="#" className="text-primary mb-2 d-block">{post.action}</Link>
                )}
                
                {post.time && (
                  <small className="text-muted d-block mb-3">{post.time}</small>
                )}
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex gap-3">
                    <button className="btn btn-sm text-muted p-0">
                      <i className="far fa-comment me-1"></i> {post.stats}
                    </button>
                    <button className="btn btn-sm text-muted p-0">
                      <i className="fas fa-retweet me-1"></i>
                    </button>
                    <button className="btn btn-sm text-muted p-0">
                      <i className="far fa-heart me-1"></i>
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-sm text-muted p-0">
                      <i className="far fa-bookmark me-1"></i>
                    </button>
                    <button className="btn btn-sm text-muted p-0">
                      <i className="far fa-share-square"></i>
                    </button>
                  </div>
                </div>
                
                {post.linkText && (
                  <div className="border-top pt-2">
                    <small className="text-muted">{post.linkText}</small>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </section>
    </>
  );
}
