import { Download, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
// import soraVideo from "@/assets/your-video.mp4";

export default function GeneratedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full mt-5">
      <div className="flex items-center justify-between mb-2 lg:mb-5">
        <h3 className="text-xl font-semibold text-foreground">
          Generated Video
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-10">
        <div className="relative group w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-input shadow-lg">
          <video
            ref={videoRef}
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loop
            muted
            playsInline
            controls={false}
          />

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className={`p-4 bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-all scale-90 group-hover:scale-100 border border-white/20
          ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            >
              {isPlaying ? (
                <Pause size={32} fill="currentColor" />
              ) : (
                <Play size={32} fill="currentColor" />
              )}
            </button>
            {/* Download Button */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm border border-white/10">
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div ref={messagesEndRef} /> */}
    </div>
  );
}
