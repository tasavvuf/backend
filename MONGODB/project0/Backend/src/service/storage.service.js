const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadMedia({ file, fileName }) {
  try {
    const result = await imagekit.files.upload({ file, fileName });
    return result;
  } catch (error) {
    console.error("ImageKit Error:", error);
    throw error; 
  }
}

module.exports = uploadMedia;