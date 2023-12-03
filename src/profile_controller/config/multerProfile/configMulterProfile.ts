import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/img/profile/uploads');
    },
    filename: (req, file, cb) => {
     return cb(null, Date.now() + '_' + file.originalname);
    },
  });
  
const upload_img = multer({ storage: storage });
  
export {storage,upload_img}