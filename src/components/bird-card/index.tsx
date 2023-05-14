import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { BirdDetailDtos } from '../../models/dtos/bird-detail';
import { SpeakerWave } from '../icons/speaker-wave';
import ImageRenderer from '../media-render/image-render';
import cn from 'classnames';
import { SpeakerXMark } from '../icons/speaker-x-mark';
import environments from '@app/configs/environments';

interface IBirdCardProps {
    birdDetail: BirdDetailDtos;
}

export default function BirdCard({ birdDetail }: IBirdCardProps) {
    // "http://localhost:8000/media?media_path=s3/image/spiny_babbler.jpg"
    const router = useRouter();
    const [isPlaying, changeAudioStatus] = useState(false);
    const myRef = useRef(null);
    const startAudio = () => {
        myRef.current.play();
        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        changeAudioStatus(false);
    };

    return (
        <div aria-hidden className="bg-white  relative my-4 dark:bg-neutral-800 flex justify-between flex-col shadow-md sm:hover:scale-100 lg:hover:scale-105 rounded-lg overflow-hidden transition duration-500" data-aos="fade-up">
            <div
                className="overflow-hidden aspect-square cursor-pointer"
                onClick={() => {
                    router.push(`bird/${birdDetail.id}`);
                }}
            >
                <ImageRenderer src={`${environments.DB_URL}/media?media_path=${birdDetail.image_path}`} />
            </div>
            <div className=" flex bg-white absolute bottom-0 items-center justify-between px-6 left-0 space-x-4 right-0 text-center">
                <p className="font-medium py-4">{birdDetail.bird_name}</p>
                <audio ref={myRef} src={`${environments.DB_URL}/media?media_path=${birdDetail.audio_path}`} />
                {isPlaying ? <SpeakerWave onClick={pauseAudio} className={cn('h-5 w-5 cursor-pointer text-blue-800')} /> : <SpeakerXMark onClick={startAudio} className={cn('h-5 w-5 cursor-pointer text-lightBlackColor')} />}
            </div>
        </div>
    );
}
