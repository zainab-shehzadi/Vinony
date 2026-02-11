import { Download, Pause, Play } from "lucide-react";
import React, { useRef, useState } from "react";

interface Iprop {
  videoSrc: string;
  isActive: boolean;
}

export default function VideoPlayer({ videoSrc, isActive }: Iprop) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };
  return (
    <div
      className={`relative group w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border-2 flex items-center justify-center
      ${
        isActive
          ? "border-primary ring-4 ring-primary/10 bg-primary/5 dark:bg-zinc-800"
          : "border-border bg-foreground"
      }`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loop
        muted
        playsInline
      />

      {/* Play/Pause Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className={`p-4 bg-white/20 hover:bg-white/40 dark:bg-black/20 dark:hover:bg-black/40 rounded-full text-white backdrop-blur-md transition-all scale-90 group-hover:scale-100 border border-white/20
          ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
        >
          {playing ? (
            <Pause size={32} fill="currentColor" />
          ) : (
            <Play size={32} fill="currentColor" className="ml-1" />
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
  );
}
