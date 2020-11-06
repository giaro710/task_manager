import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID EejTyB0CKlGgFN2SH_WaEliguzOR1sMIuLkZonjlbZg",
  },
  params: { query: "instagram pics" },
});
