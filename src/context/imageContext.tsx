import { ReactNode, createContext } from "react";
import { Photo } from "../hooks/useImage";
import useImage from "../hooks/useImage";

interface ImageContextType {
  images: Photo[];
}
export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

const ImageProvider = ({ children }: { children: ReactNode }) => {
  const { images } = useImage();

  return (
    <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>
  );
};

export default ImageProvider;
