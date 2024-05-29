import Image from "next/image"
import Link from "next/link"
export const Navbar =()=>{
return(
    <nav className=" bg-slate-200 bg-cover flex  flex-row flex-wrap gap-3  justify-between items-start">
<div className=" ml-4 items-center mt-3 flex flex-1 flex-row flex-wrap justify-start ">
<Link href="/">
<Image
src="/logo-icon.png"
width={120}
height={100}
alt=""
/>
</Link>

<p className=" text-[35px] text-indigo-700 font-mono ml-3"> Innovate</p>
</div>   
<ul className=" flex flex-row justify-end flex-wrap mr-3 gap-5 mt-8">
<Link href="">
<Image
src="/assets/icons/filter.svg"
width={60}
height={70}
alt=""
/>
</Link >
<Link href="/create" >
<Image
src="/assets/icons/add.svg"
width={60}
height={70}
alt=""
/>
</Link >
<Link href="">
<Image
src="/assets/icons/menu.svg"
width={60}
height={70}
alt=""
/>
</Link >

</ul>

    </nav>
)


}

export const Footer =()=>{
return(
    <div
    className="fixed bottom-0 w-full ">
    <footer className="  bg-slate-400 bg-cover flex   flex-row flex-wrap gap-3  justify-between items-start">
<div className=" ml-4 items-center mt-3 flex flex-1 flex-row flex-wrap justify-start ">
<Link href="/">
<Image
src="/logo.png"
width={190}
height={120}
alt=""
/>
</Link>
</div>   
<ul className=" flex flex-row justify-end flex-wrap mr-3  mb-2 gap-4 mt-3">

<Link href="" >
<Image
src="/1.jfif"
width={50}
height={50}
alt=""
className=" rounded-lg"
/>
</Link >
<Link href="">
<Image
src="/images.png"
width={50}
height={50}
alt=""
className=" rounded-lg"
/>
</Link >

</ul>



    </footer>

    </div>

)


}