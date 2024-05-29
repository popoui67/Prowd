"use client"
// components/ImageUploadForm.tsx
import { UploadButton } from "../../lib/db";
import { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
const ImageUploadForm = () => {

  return (
    <div className='  text-center flex items-center '>
      <CldUploadWidget uploadPreset={process.env.NEXT_NAME_UPLAOD}>
        {({open})=>{
          return <Image 
          height={20}
          width={40}
          alt=''
          src="/assets/icons/add.svg"
          onClick={()=> open()}
          />
        }}

      </CldUploadWidget>
      {/*
         <form onSubmit={handleSubmit} className='  flex flex-col justify-center  gap-4 items-center '>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}

      */}
      
   
    </div>
  );
}

export default ImageUploadForm;

  /*
  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    console.log(file)
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
     console.log(data?.imageUrl)
     setImageUrl(data?.imageUrl)
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
  */

export const UploadThing =()=>{
  const [image , setImage ] =useState("")
  return (
    <>
    <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            setImage(res[0].url)
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
    
    
    </>
  )
}


