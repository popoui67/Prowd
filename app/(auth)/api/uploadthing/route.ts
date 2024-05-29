// pages/api/upload.ts
/*
import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

// Configure Cloudinary with your credentials
cloudinary.v2.config({
  cloud_name:process.env.CLOUD_NAME ,
  api_key: process.env.API_KEY!,
  api_secret:process.env.API_SECRET! ,
});

export  async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { file } = req.body;

    // Upload the image to Cloudinary
    
    const uploadedImage = await cloudinary.v2.uploader.upload(file, {
      folder: 'uploads', // Specify the folder in Cloudinary
    });
    res.status(200).json({ imageUrl: uploadedImage.secure_url });
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    res.status(500).json({ error: 'Error uploading image' });
  }
}
*/
import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
 
  // Apply an (optional) custom config:
  // config: { ... },
});