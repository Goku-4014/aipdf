"use client"
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react';
import React from 'react'
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import Link from 'next/link';

function Dashboard() {
  const  {user} = useUser();
  const fileList = useQuery(api.pdfStorage.GetUserFiles,{
    userEmail:user?.primaryEmailAddress?.emailAddress
  });
  console.log(fileList);
  return (
    <div>
      <h2 className='font-bold text-3xl'>WorkSpace</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  mt-10'>
        {fileList?.length>0?fileList?.map((file,index)=>(
          <Link href={'/workspace/'+file.fileId }  key={file.fileId || index} >
          <div  className='flex  p-5 border cursor-pointer hover:shadow-red-400 hover:scale-105 transition-all duration-400 shadow-md rounded-md flex-col items-center justify-center'>
          <Image src={'/pdflogo.png'} alt='pdfLogo' width={50} height={50}/>
          <h2 className='mt-3 font-medium text-xl'>{file?.fileName}</h2>
          {/* <h2>{file?Dashboard.}</h2> */}
          </div>
          </Link>
          
        ))
        :[1,2,3,4,5,6,7,8].map((item, index)=>(
          <div key={(index)} className='bg-slate-200 rounded-md h-[150px] animate-pulse'>

          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Dashboard
