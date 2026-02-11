import frame1 from "@/assets/WideFrame.png";
import frame2 from "@/assets/Frame (1).png";
import frame3 from "@/assets/Frame.png";
import frame4 from "@/assets/Frame (2).png";
import frame5 from "@/assets/Frame (3).png";

const images =[frame2, frame3, frame4, frame5]

export default function AgentFrame() {
  return (
    <div className='w-full grid grid-cols-1 gap-2 mt-5 pl-12'>
        <div className='grid grid-cols-1'>
            <img src={frame1} alt="Frame1" className="w-full h-full object-cover overflow-hidden rounded-2xl"/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {images.map((image, index)=>(
                <img src={image} alt="image" key={index} className="w-full h-full object-cover overflow-hidden rounded-2xl"/>
            ))}
        </div>
    </div>
  )
}
