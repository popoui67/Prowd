import { CreateUser, GetUser } from "@/lib/action/action.user";
import { SignIn } from "@clerk/nextjs";
import {  auth, currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
export default async function Page() {
  
  return <SignIn path="/sign-in" />


  
}