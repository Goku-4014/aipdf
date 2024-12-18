"use client"
import React, { useEffect } from 'react'
import WorkspaceHeader from './_components/WorkspaceHeader';
import { useParams } from 'next/navigation';
import PdfViewer from './_components/PdfViewer';
import { useQueries, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import TextEditor from './_components/TextEditor';
function WorkSpace() {
    const {fileId}= useParams();
    const fileInfo =useQuery(api.pdfStorage.GetFileRecord,{fileId:fileId});

    useEffect(()=>{
     console.log(fileInfo);
    },[fileInfo])
    // const GetFileInfo =async()=>{
    //   const result = await GetFileInfo({fileId:fileId})
    // }
  return (
    <div>
      <WorkspaceHeader fileName ={fileInfo?.fileName}/>

      <div className='grid grid-cols-2 gap-5'>
        <div>
            {/* text editor */}
            <TextEditor fileId={fileId}/>
        </div>
        <div>
              {/* pdf viewer */}
              <PdfViewer  fileUrl ={fileInfo?.fileUrl}/>
        </div>
      </div>
    </div>
  )
}

export default WorkSpace
 