import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect } from "react";
import ImageRenderer from "../../components/media-render/image-render";
import Layout from "../../layout/_layout";
import { NextPageWithLayout } from "../../types";
import { getDescriptionsList, getImage } from "../../utils/openai";
import AudioRenderer from "../../components/media-render/audio-render";
import { birdDetails } from "../../constants/bird-details";
import { BirdDetailDtos } from "../../models/dtos/bird-detail";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkBreaks from "remark-breaks";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;
  debugger;
  const birdDetail = birdDetails.filter(bird);
  function bird(birdDetail) {
    if (birdDetail.id === id) {
      return birdDetail;
    }
  }
  // let descriptions;
  // let image;
  // try {
  //   descriptions = await getDescriptionsList(id);
  // } catch (e) {}
  // try {
  //   image = await getImage(id);
  // } catch (e) {}
  if (!birdDetail) return { notFound: true };
  return { props: { birdDetail } };
};

export async function getStaticPaths() {
  const paths = birdDetails.map((birdDetail) => {
    return {
      params: {
        id: birdDetail.id,
      },
    };
  });
  console.log("paths", paths);
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

interface IBirdProps {
  birdDetail: Array<BirdDetailDtos>;
}

const Bird: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ birdDetail }: IBirdProps) => {
  debugger;
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className=" overflow-hidden aspect-square rounded-lg">
          <ImageRenderer imageSrc={birdDetail[0].imageUrl} isCardView={false} />
        </div>
        <div className="mt-2 space-y-8">
          <p className="text-3xl font-medium">{birdDetail[0].name}</p>
          <AudioRenderer audioSrc={birdDetail[0].audioUrl} />
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            className="my-3"
            children={birdDetail[0].description}
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
