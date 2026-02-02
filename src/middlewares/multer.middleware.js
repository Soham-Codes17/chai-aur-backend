import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // this is not a good practice to save file by user given name
  }
})

export const upload = multer({ 
    storage,
})

