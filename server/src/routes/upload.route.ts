import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import { uploadToCloudinary } from "../services/cloudinary.service";
import { createPost } from "../services/post.service";

const router = Router();

router.post('/', upload.single("media"), async (req, res) => {
  // multer (upload.single()) as a middleware adds req.file option to get media stored in ram as buffer
  // multer expects a files named "media" from the frontend that will be read in the req.file
  if (!req.file) return res.status(400).json({ message: "file not uploaded" });

  try {
    const uploadResult = await uploadToCloudinary(req.file.buffer);

    const post = await createPost({
      mediaUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id
    });

    res.json({
      success: true,
      post: post
    });
  }

  catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Upload failed",
    });
  }
})

export default router;