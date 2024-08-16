import multer from "multer";
import crypto from "crypto";
import path from "path";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12, (err, name) => {
        let fn = name.toString("hex") + path.extname(file.originalname);
        cb(null, fn);
      })
      
    }
  })
  
  export const upload = multer({ storage }) // from  ES6 