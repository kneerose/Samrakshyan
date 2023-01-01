import styled from "@emotion/styled";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import React from "react";
import Layout from "../../layout/_layout";
import { NextPageWithLayout } from "../../types";
import { getDescriptionsList, getImage } from "../../utils/openai";
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.query;
  let descriptions;
  let image;
  try {
    descriptions = await getDescriptionsList(id);
  } catch (e) {}
  try {
    image = await getImage(id);
  } catch (e) {}
  if (!descriptions) return { notFound: true };
  return { props: { descriptions, id, image } };
};

const Bird: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ descriptions, id, image }) => {
  console.log(descriptions);
  const ImageDiv = styled.img`
    height: auto;
    width: 100%;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    object-fit: cover;
  `;

  return (
    <div className="mx-auto w-full h-full transition-all">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-full max-h-auto w-full pb-4 md:mt-4 rounded-lg">
          <ImageDiv
            src={image}
            className="w-full h-full object-cover"
            alt={id}
          />
          ;
        </div>
        <div className="mt-2">
          <p className="text-3xl">{id}</p>
          {descriptions.map((description) => {
            return (
              <p key={description} className="my-3">
                {description}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Bird.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Bird;
