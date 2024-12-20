"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from "@/components/ui/progress"

import { Layout, Shield } from 'lucide-react'
import UploadPdf from './UploadPdf'
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideBar() {
  const  {user} = useUser();
  const path=usePathname();
  const fileList = useQuery(api.pdfStorage.GetUserFiles,{
    userEmail:user?.primaryEmailAddress?.emailAddress
  });
  return (
    <div className='shadow-md h-screen p-7'>
      <img alt='' src={'/logo1.png'} width={175} height={120} />

      <div className='mt-10'>
        <UploadPdf isMaxFile ={fileList?.length>=5?true:false}>
        <Button className ="w-full">+ Upload PDF</Button>
        </UploadPdf>

        <Link href ={'/dashboard'}>
           <div className={` flex gap-2 items-center p-3 mt-5 hover:bg-slate-200 rounded-lg cursor-pointer  ${path=='/dashboard' && 'bg-slate-200'}`}>
            <Layout/>
            <h2>WorkSpace</h2>
           </div>
        </Link>
        <Link href ={'/dashboard/upgrade'}>
        <div className={` flex gap-2 items-center p-3 mt-5 hover:bg-slate-200 rounded-lg cursor-pointer 
         ${path =='/dashboard/upgrade' &&'bg-slate-200'}`}>
            <Shield/>
            <h2>Upgrade</h2>
        </div>
        </Link>
      </div>
      <div className=' absolute bottom-10 w-[80%]'>
        <Progress value={(fileList&&fileList?.length/5)*100} />
        <p className='text-sm mt-1'>{fileList&&fileList?.length} out of 5 pdf uploaded</p>
        <p className='text-sm text-gray-500 mt-2'>Upgrade to upload more..</p>
      </div>
    </div>
  )
}

export default SideBar
