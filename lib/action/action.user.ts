"use server"

import { User } from "@prisma/client"
import prisma, { postProp } from "../db"
import { revalidatePath } from "next/cache"
import { Post } from "@/app/_components/card"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function CreatePosts(data :postProp ) {
    const published =true 
    console.log(data)

   await prisma.post.create({
        data: {
          image :data.image,
          title:data.title,
          published,
          description:data.description,
        },
      })
      console.log("create")

}
export async function  CreateUser(user :User | any ){
 

  await prisma.user.create({
  data :{
    username :user.username,
    email :user.externalAccounts[0].emailAddress,
    name :user.name ,
    imagePro :user.imageUrl
  }

})
revalidatePath("/")

}
export async function   GetUser(user :User  ){
  console.log(user)
  if(user  !== undefined ){

    
    const User = await prisma.user.findUnique({
      where :{
      username : user.username
      }
    
    })
    return User

 
  }else {

  }
  }
 
  
  export async function   GetAllPosts( ){
    const Post = await prisma.post.findMany()
    return Post 
  }
 
  export const  UpdatePost =async(id :string , data:Post | any)=>{
    const Post = await prisma.post.findUnique({
      where : {
        id :id
      }
    })
    if(Post){
      const updatedEntry = await prisma.post.update({
        where: { id },
        data: data
    })

    revalidatePath("/")
    redirect("/")
    }

else {
  return Error("now post with id")
}
  }

  export const  DeletePost =async(id :string )=>{
    const Post = await prisma.post.findUnique({
      where : {
        id :id
      }
    })
    if(Post){
      await prisma.post.delete({
        where: { id },
  
    })

    revalidatePath("/")
    redirect("/")
    }

else {
  return Error("now post with id")
}
  }
  
  export const  getOnePost =async( id :string) =>{
    const Post = await prisma.post.findUnique({
      where : {
        id :id
      }
    })
    if(Post){
      await prisma.post.delete({
        where: { id },
  
    })
    return Post

  }
}
