import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

 


const uploadOnCloudinary = async (localFilePath) => {

        // Configuration
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET 
        });



    try {
       
        
        if(!localFilePath) return null
        // upload the file on cloudinary
        const respose = await cloudinary.uploader.upload(
            localFilePath, {
                resource_type: "auto"
            }
        )
        
        // file has been uploded successfull
       fs.unlinkSync(localFilePath);
        return respose;
        


    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got 
        return null
    }
}

export {uploadOnCloudinary}