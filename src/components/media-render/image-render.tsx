import React from "react";
import cn from "classnames";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";

interface IImageRenderer {
  imageSrc: any;
  isCardView: boolean;
}

export default function ImageRenderer({
  imageSrc,
  isCardView,
}: IImageRenderer) {
  const cardImage = (
    <Image
      alt="संरक्षण"
      src={imageSrc}
      blurDataURL="/blur.jpeg"
      placeholder="blur"
      loading="lazy"
      height={500}
      width={500}
      className="w-full h-full object-cover"
      referrerPolicy="no-referrer"
    />
  );

  return cardImage;
}
