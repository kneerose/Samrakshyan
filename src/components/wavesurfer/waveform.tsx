import Button from "../ui/button/button";
import { useEffect, useRef, useState } from "react";
import { useIsMounted } from "../../lib/hooks/use-is-mounted";
import AudioPlayerCard from "../audioplayer-card";
import dynamic from "next/dynamic";
// import { Flex, Button } from "@chakar-ui/react";
const Waveform = () => {
  const waveform = useRef(null);
  const [isAudio, setAudio] = useState(false);
  const isMounted = useIsMounted();
  var file;
  const [currentPosition, setPosition] = useState<string>();
  let fileInput;
  const createWaveform = (e) => {
    setAudio(true);
    file = e.target.files[0];
    if (file) {
      waveform.current.load(URL.createObjectURL(file));
      waveform.current.play();
      setPosition("Play");
    }
  };
  const getWaveformComponent = () => {
    return <div id="waveform" className={isAudio ? "visible" : "hidden"} />;
  };
  useEffect(() => {
    // Check if wavesurfer object is already created.
    const initProcess = async () => {
      const WaveSurfer = (await import("wavesurfer.js")).default;
      if (!waveform.current) {
        // Create a wavesurfer object
        debugger;
        waveform.current = WaveSurfer.create({
          barWidth: 3,
          barRadius: 3,
          barGap: 2,
          barMinHeight: 1,
          barHeight: 20,
          cursorWidth: 1,
          container: "#waveform",
          backend: "MediaElement",
          height: 200,
          progressColor: "#4353FF",
          responsive: true,
          waveColor: "#567FFF",
          cursorColor: "#567FFF",
        });
      }
      // waveform.current.load("/spinybabbler.mp3");
    };
    initProcess();
  }, []);
  return (
    <div className="flex flex-col w-full space-y-10 items-center justify-center pt-10">
      <div className="flex justify-center">
        <input
          type="file"
          accept="audio/*"
          className="opacity-0 w-0 h-2"
          ref={(fileinput) => (fileInput = fileinput)}
          onChange={createWaveform}
        />
        <Button
          text="Import Sound"
          onClickHandler={() => fileInput.click()}
          className="bg-buttonColor text-white"
          icon={undefined}
        />
      </div>
      <AudioPlayerCard
        waveform={waveform}
        setPosition={setPosition}
        currentPosition={currentPosition}
        setAudio={setAudio}
        isAudio={isAudio}
        waveformComponent={getWaveformComponent()}
        file={file}
      />
      {/* <div id="waveform" className="hidden"></div> */}
    </div>
  );
};

export default Waveform;
