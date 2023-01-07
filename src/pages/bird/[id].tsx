import {
  GetServerSidePropsContext,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import React, { useEffect, useState } from "react";
import ImageRenderer from "../../components/media-render/image-render";
import Layout from "../../layout/_layout";
import { NextPageWithLayout } from "../../types";
import { getDescriptionsList, getImage } from "../../utils/openai";
import AudioRenderer from "../../components/media-render/audio-render";
import { birdDetails } from "../../constants/bird-details";
import { BirdDetailDtos } from "../../models/dtos/bird-detail";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkBreaks from "remark-breaks";
import { useGetBirdByIdentifierQuery } from "@app/store/bird/api";
import { useRouter } from "next/router";
import { useIsMounted } from "@app/lib/hooks/use-is-mounted";
import environments from "@app/configs/environments";
import FullScreenLoader from "@app/components/ui/fullscreen-loader";

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const id = params.id;

//   // const birdDetail = birdDetail.filter(bird);
//   // function bird(birdDetail) {
//   //   if (birdDetail.id === id) {
//   //     return birdDetail;
//   //   }
//   // }
//   // let descriptions;
//   // let image;
//   // try {
//   //   descriptions = await getDescriptionsList(id);
//   // } catch (e) {}
//   // try {
//   //   image = await getImage(id);
//   // } catch (e) {}
//   // if (!isError) return { notFound: true };
//   return { props: { id } };
// };

// export async function getStaticPaths() {
//   const paths = birdDetails.map((birdDetail) => {
//     return {
//       params: {
//         id: birdDetail.id,
//       },
//     };
//   });
//   console.log("paths", paths);
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// interface IBirdProps {
//   birdDetail: Array<BirdDetailDtos>;
// }
export async function getServerSideProps(context) {
  const { id } = context.query;
  const apiUrl = `${environments.API_URL}/${id}`;
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
  // const router = useRouter();
  // const [birdDetail, setBirdDetail] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  // const { id } = router.query;
  // if (id) {
  //   const { data, isLoading } = useGetBirdByIdentifierQuery(id.toString());
  //   setLoading(isLoading);
  //   if (!isLoading) {
  //     setBirdDetail(data);
  //   }
  // }
  // const { data, isLoading } = useGetBirdByIdentifierQuery(id.toString());

  debugger;
  // const router = useRouter();
  // const isMounted = useIsMounted();
  // const { id } = router.query;

  // debugger;
  // const birdDetail = birdDetails;
  // const { data } = useGetBirdByIdentifierQuery(id);
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className=" overflow-hidden aspect-square rounded-lg">
          <ImageRenderer
            imageSrc={`${environments.API_URL}/media?media_path=${birdDetail.image_path}`}
            isCardView={false}
          />
        </div>
        <div className="mt-2 space-y-8">
          <p className="text-3xl font-medium">{birdDetail.bird_name}</p>
          <AudioRenderer
            audioSrc={`${environments.API_URL}/media?media_path=${birdDetail.audio_path}`}
          />
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            className="my-3"
            children={birdDetail.description}
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
