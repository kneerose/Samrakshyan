import React from "react";
import BirdCard from "../bird-card";
import AnchorLink from "../ui/links/anchor-link";
import Spinybabbler from "../../assets/images/birds/spiny_babbler.jpg";
import { birdDetails } from "../../constants/bird-details";
import { useGetAllBirdDetailsQuery } from "@app/store/bird/api";
import FullScreenLoader from "../ui/fullscreen-loader";
export default function BirdList() {
  const { data, isLoading } = useGetAllBirdDetailsQuery();
  return isLoading ? (
    <FullScreenLoader></FullScreenLoader>
  ) : (
    <div
      className={`grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-8 mt-4`}
    >
      {data.map((birdDetail) => {
        return <BirdCard key={birdDetail.id} birdDetail={birdDetail} />;
      })}
    </div>
  );
}
