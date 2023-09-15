const routers = require("express").Router();
const UploadController = require("../controllers/Uploadcontroller.js");
const multer = require('multer')
// var multerGoogleStorage = require("multer-google-storage");
var multerGoogleStorage = require("multer-cloud-storage");

const GoogleCloudKey = require("../Googlecloudkey/matrimony-60dd1-046e504025d9.json");

// Instantiate a storage client with credentials
// const storage = new Storage({ keyFilename: GoogleCloudKey });
const bucketName = "loanimage";

var uploadHandler = multer({
    storage: multerGoogleStorage.storageEngine({
        autoRetry: true,
        bucket:"loanimage",
        projectId: 'matrimony-60dd1',
        keyFilename:"./matrimony-60dd1-046e504025d9.json",
        uniformBucketLevelAccess:true,
        filename: (req, file, cb) => {
            cb(null, `/projectimages/${file.originalname}`);
        }
    })
});

routers.post("/upload", uploadHandler.any("file"), UploadController);

module.exports = routers;