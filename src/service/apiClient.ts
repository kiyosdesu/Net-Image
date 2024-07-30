import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dfxOKm05iwxDrtQG_87Vg2LWOcMVqPUjlVlJiegCqTs",
  },
});
