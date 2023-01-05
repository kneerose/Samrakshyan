import Image from "next/image";
import dynamic from "next/dynamic";
import Bird from "../assets/images/banner.png";
import { ArrowRightCircle } from "../components/icons/arrow-right-circle";
import { useRouter } from "next/router";
import BirdList from "../components/bird-list";
const Waveform = dynamic(() => import("../components/wavesurfer/waveform"), {
  ssr: false,
});
export default function Homecontainer() {
  const router = useRouter();
  return (
    <div className=" lg:space-y-28 sm:space-y-12">
      <div className="flex lg:flex-row sm:flex-col w-full h-full lg:mt-24 sm:mt-5 lg:px-20 sm:px-4 justify-center  sm:space-y-16 lg:space-y-0 lg:space-x-32 sm:space-x-0 items-center">
        <Image alt="Bird" src={Bird} height={350} width={350} priority />
        <div className="flex flex-col space-y-3 lg:text-start sm:text-center lg:w-5/12 sm:w-full">
          <p className="lg:text-4xl sm:text-3xl  font-bold">Helping you</p>
          <p className="lg:text-3xl sm:text-2xl text-gray-800">
            to get information about recorded Bird sound.
          </p>
          <div className="flex space-x-6 items-center lg:justify-start sm:justify-center">
            <p className="font-medium lg:text-3xl sm:text-2xl">Lets Begin </p>
            <ArrowRightCircle
              className="h-14 w-14 cursor-pointer animate-bounce text-buttonColor"
              onClick={() => {
                router.push("/predict");
              }}
            />
          </div>

          {/* <Waveform /> */}
        </div>
      </div>
      <div className="space-y-10">
        <p className=" font-semibold text-2xl">Birds</p>
        <BirdList />
      </div>
    </div>
  );
}
