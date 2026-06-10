import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.post('/', upload.single("media"), (req, res) => { 
  // multer (upload.single()) as a middleware adds req.file option to get media stored in ram as buffer
  // multer expects a files named "media" from the frontend that will be read in the req.file

  console.log(req.file);

  res.send("OK");
})

export default router;