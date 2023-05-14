import { ImageLoader, ImageLoaderProps } from 'next/image';

export const customLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
    return src;
};
