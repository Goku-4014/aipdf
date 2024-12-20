"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export default function Home() {
  const {user} = useUser();
   const createUser = useMutation(api.user.createUser);
   useEffect(()=>{
    user&&CheckUser();
   },[user])

  const CheckUser=async()=>{
    const result = await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      imageUrl:user?.imageUrl,
      userName:user?.fullName
    });
    console.log(result)

  }
  return (
    <div className="bg-gradient-to-b from-pink-100 to-blue-100 backdrop-blur-sm min-h-screen">
      <header className="transparent ">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="logo">
            <img src="logo.svg" alt="Logoipsum Logo" className="h-10 w-auto" />
          </div>
          <nav> 
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Features</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Solution</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Testimonials</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a></li>

              <li><a href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 mt-19 ">
        <div className="hero text-center">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Simplify <span className="text-[#ec2e0a] ">PDF</span> Note-Taking <br/> with <span className="text-[#1e4bf2]">AI</span>-Powered</h1>
          <p className="text-lg mb-8 mt-8 drop-shadow-lg">Elevate your note-taking experience with our AI-powered PDF app. Seamlessly extract key insights, summaries, and annotations <br/>from any PDF with just a few clicks.</p>
          <div className="flex justify-center space-x-4 mt-10">
          <Link href={'/dashboard'} >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
          </Link>
            
            <button className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded-full">Learn More</button>
          </div>
        </div>

        {/* <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-20">
          <div className=" transparent  rounded-md p-8">
            <h3 className="text-xl font-semibold mb-2">The Lowest Price</h3>
            
          </div>
          <div className="feature bg-transparent  rounded-md p-8">
            <h3 className="text-xl font-semibold mb-2">The Fastest on the Market</h3>
            
          </div>
          <div className="feature transparent  rounded-md p-8">
            <h3 className="text-xl font-semibold mb-2">The Most Loved</h3>
            
          </div>
        </div> */}
      </main>

      <footer className="absolute bottom-0 w-full bg-transparent text-black font-medium py-6 flex items-center justify-center">
  <div className="text-center">
    <p>&copy; 2023 Gypsy. made with love  </p>
  </div>
</footer>

    </div>
  );

}
