import soraImage1 from "@/assets/17c52441521434f4c2444cb53aad60b06a29e713.png";
import soraImage2 from "@/assets/4f7f68c012060f5e4375ab6f34883192ca33c2b1.png";
import soraImage3 from "@/assets/cde7f4dad622b9775339c32c8983bbc2b89a4f87.png";
import nanoImage1 from "@/assets/G1.png";
import nanoImage2 from "@/assets/G2.png";
import nanoImage3 from "@/assets/G3.png";

export const GENERATED_GROUPS = [
  {
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. natural window light, soft shadows natural window light, soft shadows natural window light, soft shadows",
        date: "05/02/2026",
        model: "Sora Image",
        images: [soraImage1, soraImage2, soraImage3, soraImage1],
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. photorealistic portrait of a young womanphotorealistic portrait of a young.",
        date: "04/02/2026",
        model: "Nano Banana",
        images: [nanoImage1, nanoImage2, nanoImage3, nanoImage1],
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. photorealistic portrait of a young woman. photorealistic portrait of a young woman.",
        date: "27/01/2026",
        model: "Sora Image",
        images: [soraImage2, soraImage1, soraImage3, soraImage2],
      },
    ],
  },
];
export const GENERATED_VideoGROUPS = [
  {
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. natural window light, soft shadows natural window light, soft shadows natural window light, soft shadows",
        date: "6/02/2026",
        model: "Sora Image",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. photorealistic portrait of a young womanphotorealistic portrait of a young.",
        date: "5/02/2026",
        model: "Nano Banana",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. photorealistic portrait of a young woman. photorealistic portrait of a young woman.",
        date: "20/01/2026",
        model: "Sora Image",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
];