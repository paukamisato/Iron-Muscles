const express = require("express");
const router = express.Router();

// include CLOUDINARY:
const uploader = require("../config/cloudinary-setup");

router.post("/", uploader.single("photo"), (req, res, next) => {
  // console.log('file is: ', req.file)
  console.log(req.file);
  if (!req.file) {
    res.status(500).json({ code: 500, message: "Error loading the file" });
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.status(200).json({ secure_url: req.file.path });
});

module.exports = router;
