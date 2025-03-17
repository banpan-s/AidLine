import multer from "multer";
import path from 'path'
const storage=multer.diskStorage(
    {
        destination:'./public/profilePic',
        filename:(req,file,cb)=>{

            const uniqueSuffix=Date.now();
            cb(null, `${file.originalname}_${uniqueSuffix}`);
        }
    }
)