import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Recursive } from "next/font/google";

// const pdfUrl ="https://robust-turtle-484.convex.cloud/api/storage/e5adb2ae-ac66-4b13-a484-3acd024c650c"
export async function GET(req){

    const reqUrl =req.url;
    const {searchParams} = new URL(reqUrl);
    const pdfUrl =searchParams.get('pdfUrl');
    console.log(pdfUrl);
    // 1. load the pdf files
    const response= await fetch(pdfUrl);
    const data= await response.blob();
    const loader = new WebPDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent ='';
    docs.forEach(doc=>{
        pdfTextContent=pdfTextContent+doc.pageContent;
    })

    //2. split the text to small chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 100,
        chunkOverlap: 20,
    });
    const output = await splitter.createDocuments([pdfTextContent]);
    
    let splitterList =[];
    output.forEach(doc=>{
        splitterList.push(doc.pageContent);
    })



    return NextResponse.json({result:splitterList})
}