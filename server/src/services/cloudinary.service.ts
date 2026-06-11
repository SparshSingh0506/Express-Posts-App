import cloudinary from '../config/cloudinary.config';
import type { UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

export const uploadToCloudinary = async (mediaBuffer: Buffer, folder = "upload"): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto", folder: folder },
      (error, uploadResult) => {
        if (error) return reject(error);

        resolve(uploadResult as UploadApiResponse);
      }
    );

    Readable.from(mediaBuffer).pipe(uploadStream);
  }); 
}