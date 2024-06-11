import Carousels from "@/components/Carousel";
import Explore from "@/components/Explore";
import OurObjective from "@/components/OurVision";
import Subfooter from "@/components/Subfooter";


export default function Home() {
  return (
    <div className="">
      <Carousels />
      <div className="relative">
        <Explore />
        <OurObjective />
        <Subfooter />
       
      </div>
    </div>
  );
}
