import { predictionDto } from "@app/models/dtos/prediction";
import { selectBirdList } from "@app/store/bird/selectors";
import { useAppSelector } from "@app/store/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { MutableRefObject, useEffect, useState } from "react";
import { FaPause, FaPlay, FaStop, FaTimes } from "react-icons/fa";
import { birdDetails } from "../../constants/bird-details";
import { BirdDetailDtos } from "../../models/dtos/bird-detail";
import {
  responseApi,
  usePostPredictionResponseMutation,
} from "../../store/detail/api";
import BirdCard from "../bird-card";
import Button from "../ui/button/button";
import IconButton from "../ui/button/iconbutton";

interface IPlayerCard {
  waveform: MutableRefObject<any>;
  setPosition: any;
  currentPosition: any;
  setAudio: any;
  waveformComponent: any;
  isAudio: boolean;
  file: any;
}

export default function AudioPlayerCard({
  waveform,
  setPosition,
  currentPosition,
  setAudio,
  file,
  waveformComponent,
  isAudio,
}: IPlayerCard) {
  const [value, setValue] = useState<string>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const birdList = useAppSelector(selectBirdList);
  const [postFileString] = usePostPredictionResponseMutation();
  function bird(birdDetail: BirdDetailDtos) {
    const birdName = value.replace("/n ", "");
    if (birdDetail.bird_name.toLowerCase() === birdName.trim().toLowerCase()) {
      return birdDetail;
    }
  }
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
  const onClickHandler = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await postFileString(formData);
      if (res && "data" in res) {
        setValue(res.data.Predicted);
        setLoading(false);
      } else if (res && "error" in res) {
        setLoading(false);
        setError(res.error["error"]);
      } else {
        setLoading(false);
      }
    } catch (e) {
      setError("api issue");
    }
  };

  const getPredictedResult = () => {
    return isLoading ? (
      <div className="flex pt-5 justify-center">
        <CircularProgress size={40} />
      </div>
    ) : value ? (
      <div className="flex flex-col items-center space-y-6">
        <p className=" pt-2 text-center">{value.replace("/n ", "")} </p>
        {value !== "Unknown" && birdList.birdList.filter(bird).length !== 0 && (
          <div className="h-[400px] w-[300px]">
            <BirdCard birdDetail={birdList.birdList.filter(bird)[0]} />
          </div>
        )}
      </div>
    ) : (
      error !== "" && <p className="text-lg text-red-600">{error}</p>
    );
  };

  return (
    <div className="flex flex-col items-center w-full space-y-5 justify-center">
      <>
        <div className="lg:w-[600px] w-full  space-y-5  ">
          {isAudio && (
            <div className="flex flex-col items-end">
              <IconButton
                onClick={() => {
                  setAudio(false);
                  setPosition("");
                  setValue(null);
                  setError("");
                  waveform.current.stop();
                }}
                className="py-3 px-3"
              >
                <FaTimes className="h-8 w-4 text-lightBlackColor"></FaTimes>
              </IconButton>
            </div>
          )}
          {waveformComponent}
          {isAudio && (
            <div className="flex  justify-between px-5">
              <IconButton
                children={currentPosition == "Play" ? "Pause" : "Play"}
                onClick={handlePlay}
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
              <IconButton
                children="Stop"
                onClick={handleStop}
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
          )}
        </div>
        {isAudio && (
          <p className="mt-5 text-xl font-medium">
            You can get information about recorded Bird sound using listed
            models
          </p>
        )}
        {isAudio && (
          <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 mt-8 w-full justify-center lg:space-x-10 space-x-0">
            <Button
              children="Model I"
              className="bg-gray-400"
              onClick={onClickHandler}
            />
            <Button
              children="Model II"
              className="bg-gray-400"
              onClick={onClickHandler}
            />
            <Button
              children="Model III"
              className="bg-gray-400"
              onClick={onClickHandler}
            />
            <Button
              children="Model Ensemble"
              className="bg-gray-400"
              onClick={onClickHandler}
            />
          </div>
        )}
        {getPredictedResult()}
      </>
    </div>
  );
}
