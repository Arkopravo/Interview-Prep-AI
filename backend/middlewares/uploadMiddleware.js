const multer = require("multer");

// configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`)
  }
});


// file filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if(allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only .jpeg, .jpg and .png file are allowed"), false);
    }
}


const upload = multer({ storage, fileFilter });
module.exports = upload;





















// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // create uploads folder if it doesn't exist
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

// // configure storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir); // save in ./uploads inside project
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()} - ${file.originalname}`);
//   }
// });

// // file filter
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only .jpeg, .jpg and .png files are allowed"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });
// module.exports = upload;
