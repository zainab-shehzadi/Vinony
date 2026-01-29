import soraImage1 from "@/assets/4f7f68c012060f5e4375ab6f34883192ca33c2b1.png";
import soraImage2 from "@/assets/17c52441521434f4c2444cb53aad60b06a29e713.png";
import soraImage3 from "@/assets/cde7f4dad622b9775339c32c8983bbc2b89a4f87.png";
import { Download } from "lucide-react";

const SoraImage = [
  soraImage1,
  soraImage2,
  soraImage3,
  soraImage1,
  soraImage3,
  soraImage2,
];
export default function GeneratedImage() {
  return (
    <>
      <div className={`w-full px-4 overflow-y-auto`}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-semibold text-primaryDark">
            Generated Images
          </h3>
          <p className="text-[16px] font-medium text-accent">
            {SoraImage.length} images
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SoraImage.map((image, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100"
            >
              <img
                src={image}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                alt="Generated"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm">
                  <Download size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
