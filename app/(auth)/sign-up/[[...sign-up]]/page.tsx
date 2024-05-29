import { CreateUser } from "@/lib/action/action.user";
import { SignUp } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

export  default async function Page() { 
  const user = await currentUser() as User | any 
  return (
    <>
   <SignUp path="/sign-up"  />
{ await CreateUser(user)}    
    </>

);
}