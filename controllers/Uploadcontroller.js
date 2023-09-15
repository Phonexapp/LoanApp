const processFile = require("../middleware/upload.js");
const { format } = require("util");
const { Storage } = require("@google-cloud/storage");
const GoogleCloudKey = require("../Googlecloudkey/matrimony-60dd1-046e504025d9.json");

// Instantiate a storage client with credentials
const storage = new Storage({ keyFilename: GoogleCloudKey });
const bucketName = "loanimage";
const bucket = storage.bucket(bucketName);

module.exports = async (req, res) => {
    // filePath = req.file.destination+req.file.filename;
    // console.log(filePath);

    // const storage = new Storage();
    // await storage.bucket(bucket).upload(filePath);
    // console.log(`${filePath} uploaded to ${bucket}`);
}
