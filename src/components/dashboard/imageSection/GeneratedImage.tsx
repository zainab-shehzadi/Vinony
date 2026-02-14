import soraImage1 from "@/assets/4f7f68c012060f5e4375ab6f34883192ca33c2b1.png";
import soraImage2 from "@/assets/17c52441521434f4c2444cb53aad60b06a29e713.png";
import soraImage3 from "@/assets/cde7f4dad622b9775339c32c8983bbc2b89a4f87.png";
import { Download } from "lucide-react";
import { useState } from "react";
import { downloadImage } from "@/services/download-image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const SoraImage = [
  soraImage1,
  soraImage2,
  soraImage3,
  soraImage1,
  soraImage3,
  soraImage2,
];
export default function GeneratedImage() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <>
      <div className={`w-full px-4 mt-2 lg:mt-5`}>
        <div className="flex items-center justify-between mb-3">
          <h3 className=" lg:mt-6 text-xl font-semibold text-foreground">
            Generated Images
          </h3>
          <p className="text-[16px] font-medium text-accent">
            {SoraImage.length} images
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SoraImage.map((image, index) => (
            <div
              key={index}
              className="relative group aspect-square rounded-2xl overflow-hidden border border-border"
            >
              <img
                src={image}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                alt="Generated"
              />
              <div
                className="absolute top-3 right-3 opacity-100 transition-opacity"
                onClick={() =>
                  setOpenDropdown(openDropdown === index ? null : index)
                }
              >
                {" "}
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <button className="p-1.5 bg-black/40 hover:bg-black/60 rounded-lg text-white backdrop-blur-sm">
                      <Download size={18} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="border border-border p-2 bg-input"
                  >
                    <DropdownMenuItem
                       onClick={() =>
                        downloadImage(image, "png", setOpenDropdown)
                      }
                      className="text-foreground cursor-pointer focus:bg-hover/20 focus:text-accent"
                    >
                      PNG
                    </DropdownMenuItem>
                    <hr className="border border-border" />
                    <DropdownMenuItem
                       onClick={() =>
                        downloadImage(image, "jpg", setOpenDropdown)
                      }
                      className="text-foreground cursor-pointer focus:bg-hover/20 focus:text-accent"
                    >
                      JPG
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>            
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
