import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

//Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
    
    
const uploadOncloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null

        //upload the file on cloudinary 
        const response = await cloudinary.uploader.upload
        (localFilePath ,{
            resource_type : "auto"
        })

        //file has been uploaded successfully
        // console.log("file is uploaded on cloudinary" , response.url)  this both lines were for understanding
        // console.log(response) //future main file will be unlink agar success yaa error kuch bhi aaye
        fs.unlinkSync(localFilePath)
        return response;
    }   
    catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the 
        //upload operation got failed 

        return null
    }
}

export {uploadOncloudinary}