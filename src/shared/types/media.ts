export interface ImageAsset {
  src: string;
  alt: string;
}

export interface ResponsiveImageAsset {
  mobile: string;
  desktop: string;
  alt: string;
}

export interface VideoAsset {
  id: string;
  title: string;
  type: "video";
  src: string;
  poster: string;
  alt: string;
}

export interface CertificateAsset {
  src: string;
  title: string;
  alt: string;
}
