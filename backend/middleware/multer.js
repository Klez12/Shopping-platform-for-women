import multer from "multer";

const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer ({storage})

export default upload



// import multer from "multer";
// import path from "path";
// import fs from "fs";

// // Make sure upload folder exists
// const uploadPath = "uploads/";
// if (!fs.existsSync(uploadPath)) {
//   fs.mkdirSync(uploadPath);
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, uploadPath); // save in /uploads folder
//   },
//   filename: function (req, file, callback) {
//     // generate a unique filename
//     const uniqueName = Date.now() + '-' + file.originalname;
//     callback(null, uniqueName);
//   }
// });

// const upload = multer({ storage });

// export default upload;
