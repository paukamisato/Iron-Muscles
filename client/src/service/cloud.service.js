import axios from "axios";

class CloudService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/upload",
      withCredentials: true,
    });
  }
  handleUpload = (theFile) => this.app.post("/", theFile);
}

export default CloudService;
