const { Storage } = require("@google-cloud/storage");

const GOOGLE_CLOUD_PROJECT_ID = " teloneros"; // Replace with your project ID
const GOOGLE_CLOUD_KEYFILE =
"/Users/oscarmartinezdelao/Desktop/web/prueba/app/loginapp/public/Teloneros-bac112559ffc.json"
exports.storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE
});

exports.getPublicUrl = (bucketName, fileName) => {
  `https://storage.googleapis.com/${bucketName}/${fileName}`;
};
