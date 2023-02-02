const multer = require("multer");

const path = require("path");


var storage = multer.diskStorage({


  destination: path.join(__dirname, '../../public/images'),
  filename: (req, file, cb) => {
    
    cb(null, Date.now() + "-" + file.originalname);

  } 
}

);


const upload = multer({ storage: storage })

const imagesUpload = upload.single('file')


module.exports = { imagesUpload };
