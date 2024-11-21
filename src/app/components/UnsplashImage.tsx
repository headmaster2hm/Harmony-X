import Image from 'next/image'

interface UnsplashImageProps {
  imageUrl: string;
  alt: string;
}

export function UnsplashImage({ imageUrl, alt }: UnsplashImageProps) {
  return (
    <Image 
      src={imageUrl}
      alt={alt}
      width={300}
      height={300}
      layout="responsive"
    />
  )
}
