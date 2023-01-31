import React from "react";
import cn from "classnames";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { customLoader } from "../../utils/customLoaderUtils";

const ImageDiv = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  object-fit: cover;
`;

const ImageRenderer: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  className,
}) => {
  const cardImage = (
    <ImageDiv
      className={cn("w-full h-full object-cover", className)}
      src={src}
    />
    // <Image
    //   alt="संरक्षण"
    //   src={imageSrc}
    //   blurDataURL="/blur.jpeg"
    //   placeholder="blur"
    //   height={500}
    //   loader={customLoader}
    //   width={500}
    //   className="w-full h-full object-cover"
    //   referrerPolicy="no-referrer"
    // />
  );

  return cardImage;
};

export default ImageRenderer;
