import axios from "axios";

export default axios.create({
  params: {
    baseUrl: "https://rawg.io/api",
    key: "cba9a66341de45bd8fee2f40dbd12a43",
  },
});
