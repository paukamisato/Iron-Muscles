import axios from "axios";

class CloudService {
  constructor() {
    this.app = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL + "/upload",
      withCredentials: true,
    });
  }
  handleUpload = (theFile) => this.app.post("/", theFile);
}

export default CloudService;
