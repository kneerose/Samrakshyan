import dynamic from "next/dynamic";
import { ArrowRightCircle } from "../components/icons/arrow-right-circle";
import { useRouter } from "next/router";
import BirdList from "../components/bird-list";
import ImageRenderer from "@app/components/media-render/image-render";
export default function Homecontainer() {
  const router = useRouter();
  // console.log(data);
  return (
    <div className=" lg:space-y-28 sm:space-y-12">
      <div className="flex lg:flex-row flex-col w-full h-full lg:my-24 my-8 lg:px-20 px-4 justify-center  space-y-10 lg:space-y-0 lg:space-x-32 space-x-0 items-center">
        <div className="lg:h-[380px] lg:w-[300px] h-[210px] w-[167px]">
          <ImageRenderer src="/images/banner.png" />
        </div>
        <div className="flex flex-col space-y-3 lg:text-start text-center lg:w-5/12 sm:w-full">
          <p className="lg:text-4xl sm:text-3xl  font-bold">Helping you</p>
          <p className="lg:text-3xl sm:text-2xl text-gray-800">
            to get information about recorded Bird sound.
          </p>
          <div className="flex space-x-6 items-center lg:justify-start justify-center">
            <p className="font-medium lg:text-3xl sm:text-2xl">Lets Begin </p>
            <ArrowRightCircle
              className="lg:h-14 lg:w-14 h-8 w-8 cursor-pointer animate-bounce text-buttonColor"
              onClick={() => {
                router.push("/predict");
              }}
            />
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <p className=" font-semibold text-2xl">Birds</p>
        <BirdList />
      </div>
    </div>
  );
}
