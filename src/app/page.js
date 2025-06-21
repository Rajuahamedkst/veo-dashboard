import VideoPlayer from "@/client/VideoPlayer";

const videos = [
  {
    id: 1,
    videoFile: '/videos/man.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  {
    id: 2, 
    videoFile: '/videos/chief.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  // Add at least 3 more videos to see the grid properly
  {
    id: 3,
    videoFile: '/videos/women.mp4',
    thumbnail: '/thumbnails/women.png'
  },
  {
    id: 4,
    videoFile: '/videos/cat.mp4',
    thumbnail: '/thumbnails/cat.png'
  },
  {
    id: 5,
    videoFile: '/videos/mountain.mp4',
    thumbnail: '/thumbnails/mountain.png'
  },
  {
    id: 6,
    videoFile: '/videos/monkey.mp4',
    thumbnail: '/thumbnails/monkey.png'
  },
  {
    id: 7,
    videoFile: '/videos/man.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  {
    id: 8, 
    videoFile: '/videos/chief.mp4',
    thumbnail: '/thumbnails/chief.png'
  },
  // Add at least 3 more videos to see the grid properly
  {
    id: 9,
    videoFile: '/videos/women.mp4',
    thumbnail: '/thumbnails/women.png'
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
    </div>
    <div className="homeVideo">
      {videos.map(video => (
            <div key={video.id} className="video-cards">
              <VideoPlayer video={video} />
            </div>
          ))}
    </div>
   </div>
    </main> 
    </>
  );
}
