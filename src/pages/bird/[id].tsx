import { GetServerSidePropsContext, GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useEffect, useState } from 'react';
import ImageRenderer from '../../components/media-render/image-render';
import Layout from '../../layout/_layout';
import { NextPageWithLayout } from '../../types';
import { getDescriptionsList, getImage } from '../../utils/openai';
import AudioRenderer from '../../components/media-render/audio-render';
import environments from '@app/configs/environments';
export async function getServerSideProps(context) {
    const { id } = context.query;
    const apiUrl = `${environments.DB_URL}/items/id/${id}`;
    let birdDetail;
    try {
        const birdRes = (await fetch(apiUrl).catch((err: any) => err)) ?? null;
        const data = (await birdRes.json().catch((err: any) => err)) ?? null;
        birdDetail = data ?? null;
    } catch (e) {}

    if (!birdDetail) return { notFound: true };

    return { props: { birdDetail } };
}

const Bird = ({ birdDetail }) => {
    return (
        <div className="w-full h-full">
            <div className="grid grid-cols-1 md:gap-16 gap-4 md:grid-cols-2">
                <div className=" overflow-hidden aspect-square rounded-lg">
                    <ImageRenderer src={`${environments.DB_URL}/media?media_path=${birdDetail.image_path}`} />
                </div>
                <div className="mt-2 lg:space-y-8 space-y-4">
                    <p className="lg:text-3xl text-xl font-medium">{birdDetail.bird_name}</p>
                    <AudioRenderer audioSrc={`${environments.DB_URL}/media?media_path=${birdDetail.audio_path}`} />
                    <div
                        // remarkPlugins={[remarkBreaks]}
                        className="my-3 lg:text-lg text-sm "
                        dangerouslySetInnerHTML={{ __html: birdDetail.description }}
                        // children={birdDetail.description}
                    />
                </div>
            </div>
        </div>
    );
};
Bird.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default Bird;
