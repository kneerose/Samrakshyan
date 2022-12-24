import CircularProgress from "@mui/material/CircularProgress";
import { MutableRefObject, useEffect, useState } from "react";
import { FaPause, FaPlay, FaStop, FaTimes } from "react-icons/fa";
import { usePostPredictionResponseMutation } from "../../store/detail/api";
import Button from "../ui/button/button";

interface IPlayerCard {
  waveform: MutableRefObject<any>;
  setPosition: any;
  currentPosition: any;
  setAudio: any;
  waveformComponent: any;
  isAudio: boolean;
  file:any;
}

export default function PlayerCard({
  waveform,
  setPosition,
  currentPosition,
  setAudio,
  file,
  waveformComponent,
  isAudio,
}: IPlayerCard) {
  const [value, setValue] = useState<string>();
  const [isLoading,setLoading]=useState(false);
  const [postFileString] = usePostPredictionResponseMutation()
  const handlePlay = () => {
    if (waveform.current.isPlaying()) {
      waveform.current.pause();
      setPosition("Pause");
    } else {
      waveform.current.play();
      setPosition("Play");
    }
  };
  // const handlePause = () => {

  //   setPosition("Pause");
  // };
  const handleStop = () => {
    waveform.current.stop();
    setPosition("Stop");
  };

  return (
    <div className="lg:w-[600px] sm:w-full   space-y-5  ">
      {isAudio && (
        <div className="flex flex-col items-end">
          <button
            onClick={() => {
              setAudio(false);
              setPosition("");
              setValue(null);
              waveform.current.stop();
            }}
            className="py-3 px-3"
          >
            <FaTimes className="h-8 w-4 text-lightBlackColor"></FaTimes>
          </button>
        </div>
      )}
      {waveformComponent}
      {isAudio && (
        <div className="space-y-5">
          <div className="flex justify-between px-5">
            <Button
              text={currentPosition == "Play" ? "Pause" : "Play"}
              onClickHandler={handlePlay}
              className={` ${
                currentPosition == "Play" || currentPosition == "Pause"
                  ? "bg-buttonColor text-white"
                  : "bg-gray-400 text-black"
              } hover:bg-buttonColor group hover:text-white space-x-4`}
              icon={
                currentPosition == "Play" ? (
                  <FaPause
                    className={`h-4 w-4 ${
                      currentPosition == "Play" ? "text-white" : "text-black"
                    } group-hover:text-white `}
                  />
                ) : (
                  <FaPlay
                    className={`h-4 w-4 ${
                      currentPosition == "Pause" ? "text-white" : "text-black"
                    }  group-hover:text-white`}
                  />
                )
              }
            />
            <Button
              text="Stop"
              onClickHandler={handleStop}
              className={`${
                currentPosition == "Stop"
                  ? "bg-buttonColor text-white"
                  : "bg-gray-400 text-black"
              } hover:bg-buttonColor group hover:text-white space-x-4`}
              icon={
                <FaStop
                  className={`h-4 w-4 ${
                    currentPosition == "Stop" ? "text-white" : "text-black"
                  } group-hover:text-white`}
                />
              }
            />
          </div>
          <div className="flex  justify-center">
            <Button
              text="Predict the sound"
              className="bg-gray-400"
              onClickHandler={async() => {
                setLoading(true);
                const res = await postFileString(JSON.stringify(file));
                if (res && 'data' in res)
                {
                    setValue(res.data.Predicted);
                    setLoading(false);
                }
              }}
              icon={undefined}
            />
          </div>
          {value ? (
            <p className=" pt-2 text-center">{value} </p>
          ) : (
            isLoading && (
              <div className="flex pt-2 justify-center">
                <CircularProgress size={40} />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
