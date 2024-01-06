const fs = require('fs');
const multer = require('multer');
const path = require('path');

const img_destination = './uploads';

if (!fs.existsSync(img_destination)) {
  fs.mkdirSync(img_destination);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, img_destination);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  },
});

module.exports = multer({ storage });