import axios from "axios";

const CloudService = () => {
 
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + "/upload",
    withCredentials: true,
  });
  
  const handleUpload = (theFile) => instance.post("/", theFile);
  return (handleUpload);
}

export default CloudService;
