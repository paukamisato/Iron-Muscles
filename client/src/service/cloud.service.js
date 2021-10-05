import axios from "axios";

class CloudService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true,
    });
  }
  handleUpload = (theFile) => this.app.post("/upload", theFile);
  saveNewThing = (newThing) => this.app.post("/things/create", newThing);
}

export default CloudService;
