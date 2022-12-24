import Image from "next/image";
import dynamic from "next/dynamic";
import Bird from "../assets/images/bird.png"
const Waveform = dynamic(() => import("../components/wavesurfer/waveform"), { ssr: false });
export default function Homecontainer() {
  return (
    <div className="flex lg:flex-row sm:flex-col w-full h-full lg:mt-10 sm:mt-5 lg:px-20 sm:px-4 justify-center  sm:space-y-10 lg:space-y-0 lg:space-x-32 sm:space-x-0 items-center">
      <Image src={Bird} height={350} width={350} />
      <div className="flex flex-col items-center space-y-3 lg:w-5/12 sm:w-full">
        <p className="lg:text-4xl sm:text-3xl font-bold">Helping you </p>
        <p className="lg:text-3xl sm:text-2xl text-center">to get information about recorded Bird sound.</p>
        <Waveform/>
        </div>
       
      </div>
    
  );
}
