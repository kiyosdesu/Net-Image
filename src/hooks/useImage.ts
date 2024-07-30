import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";

export interface Photo {
  urls: {
    small: string;
  };
}

interface Fetched {
  results: Photo[];
}

const useImage = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiClient
      .get<Fetched>(
        `https://api.unsplash.com/search/photos?page=1&query=basketball`
      )
      .then((res) => setImages(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { images, error };
};

export default useImage;
