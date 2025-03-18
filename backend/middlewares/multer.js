import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDirectory = path.join("uploads");

// Ensure the uploads folder exists
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDirectory);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only images allowed!"), false);
    }
};

const upload = multer({ storage, fileFilter });

export default upload;


























// import multer from "multer";

// const storage = multer.diskStorage({
//     filename: function (req, file, callback) {
//         callback(null, file.originalname);
//     }
// });

// const upload = multer({
//     storage
// });

// export default upload;