import { Download, Play } from "lucide-react";
import { useEffect, useRef } from "react";
// import soraVideo from "@/assets/your-video.mp4";

export default function GeneratedVideo() {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }, []);
  return (
    <div className="w-full px-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-semibold text-primaryDark">
          Generated Video
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="relative group w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-primaryDark shadow-lg">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300">
            {/* Download Button */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm border border-white/10">
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
}
