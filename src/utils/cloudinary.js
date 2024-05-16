import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRET'
});
const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        // upload file on cloud 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded!!! on cloudinary!!",response.url);
        return response;

    } catch(error){
        fs.unlinkSync(localFilePath) // remove the locally aved file temp. as the upload fot failed
        return null; 

    }
}

export {uploadOnCloudinary}