import {  PrismaClient } from "@prisma/client";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
 
import type { OurFileRouter } from "../app/(auth)/api/uploadthing/core";
declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = client
export default client

export interface postProp {
title :string
image :string
description :string
published?:boolean

}
export interface User {
  id ?: string
  name :string
  emailAddress? :string | any
  createdAt? : Date
role? : Role[]
Post? : Post[]
imageUrl? : string 
username :string
 }

 
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
