import {useState} from 'react'
import CloudService from "../../service/cloud.service";

const cloudService = new CloudService();

export const useFiledUpload = (initialState = ['']) => {

    const [ photo, setPhoto ] = useState(initialState)    
    
    const handleFileUpload = (e) => {

        const uploadData = new FormData();
        uploadData.append("photo", e.target.files[0]);

        cloudService
            .handleUpload(uploadData)
            .then((response) => setPhoto( response.data.secure_url ))
            .catch((err) => {console.log("Error while uploading the file: ", err)})
    };

    return [ photo , handleFileUpload ]
}
