
import multer from "multer";

// Configure Multer
const storage = multer.diskStorage({
  destination:"public/uploads/", 
  filename: (req, file, cb) => {
    const unixtime = Date.now()
    const name_ary = file.originalname.split(".")
    cb(null, `${file.originalname.split(0,-1)}_${unixtime}.${name_ary[name_ary.length-1]}`)

  },
});


const image_upload = multer({storage:storage}).single("pic") // pic is the name of file input in input file tag


export {image_upload}

