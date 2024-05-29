"use client"

import { CreatePosts } from "@/lib/action/action.user"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import Image from "next/image"
import { UploadButton } from "../../../lib/db";
import { CldUploadWidget } from 'next-cloudinary';
import ImageUploadForm, { UploadThing } from "@/app/_components/formImage"
export default  function Page() 
{
    const [title , setTitle] = useState("")
    const [description , setdes] =useState("")
    const [image , setImage]=useState("")
    const router =useRouter()
    const HandleSubmit =async (e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()
try{
    const data ={
        title:title,
        image :image,
        description
    }

await CreatePosts(data)
router.push("/")
}
catch(err:any){

}


    }
return (
    <div className=" flex flex-row flex-wrap  gap-10  ml-5 justify-center items-center ">

<div className=" flex flex-col rounded-lg overflow-hidden">
<div className="px-4 py-2  text-center mt-3 ">
    <h2 className=" p-4 text-xl font-extrabold text-[37px] text-gray-800 font-mono ">Create a Post</h2>
  </div>
  <div className="px-4 py-2 mt-3  bg-slate-500"> 
<form className=" flex flex-col gap-6" onSubmit={HandleSubmit}>
<label  className=" font-mono text-white">
    Title
</label>
<input 
value={title}
onChange={(e) => setTitle(e.target.value)}
className=" text-black"
/>
<label className=" font-mono text-white">
    description
</label>
<textarea 
value={description}
onChange={(e) => setdes(e.target.value)}
className=" text-black"
/>
<label  className=" font-mono text-white">
    Image
</label>
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
    
    
<button type="submit" className=" p-2 bg-slate-100 rounded-lg hover:bg-green-600"> Create </button>
</form>
</div>
</div>

<div className="  flex  bg-black  rounded-lg ">
        <Image 
        src="/assets/icons/stars.svg"
        width={0}
        height={0}
        alt=""
        className=" rounded-lg  img "
        />
        </div>


    </div>

    
)

}
