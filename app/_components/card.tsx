"use client"
import { DeletePost } from "@/lib/action/action.user"
import Image from "next/image"
import Link from "next/link"
 export interface Post {
    id      :  string 
  createdAt? :Date
  updatedAt?: Date
  published? : Boolean
  title    :string
  image     :     string
  description :   string
 }
export const Card =({post , isbotton} :{post :Post ,isbotton? :boolean })=>{

    return(
  
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img src={post.image} width={250} height={150} />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <p className="text-xs text-gray-500">{String(post.createdAt).slice(0,21)}</p>
                {isbotton===true && (
    <div className=" flex flex-row items-center w-full mb-10 mt-2">
       <Link className="  w-[50%]" href={`update/${post.id}`}>
       <Image 
        src="/assets/icons/check.svg"
        width={0}
        height={0}
        alt=""
        className=" w-[50%] mb-10 bp "
        />
       </Link>
        <Image 
        src="/assets/icons/close.svg"
        width={0}
        height={0}
        alt=""
        className=" w-[50%]  mb-10 bp"
        onClick={()=>DeletePost(post.id)}
        />
    </div>
   )}
            </div>
        </div>
    </div>
    )
}