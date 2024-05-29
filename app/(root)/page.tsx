import Image from "next/image";
import { GetAllPosts } from "@/lib/action/action.user";
import { Card, Post } from "../_components/card";
export default async function Home() {
 const post = await GetAllPosts()
  return (
    <div className="flex flex-col justify-center  items-center  h-auto">
<div className="  flex flex-wrap flex-row items-center justify-center  ml-6   gap-3">
<Image 
width={300}
height={300}
src="/assets/images/logo-icon.svg"
alt=""
className=" ml-4"
/>
<div className=" max-w-[70%] flex  justify-start ml-8">
<h2 className="dsc text-[60px]   ">
Welcome to <span className=" font-extrabold dsc">Innovate</span>, your ultimate destination for devertisment.
</h2>
</div>
</div>
{post.map((itm) => (
  <div className=" flex flex-wrap  flex-row gap-2">
 <Card post ={itm as Post} isbotton={true}/>
  </div>
))} 
    </div>
  );
}

