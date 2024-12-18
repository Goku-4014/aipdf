



// ...rest of your code
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";

import { action } from "./_generated/server.js";

import { TaskType } from "@google/generative-ai";
import {v}from "convex/values"


export const ingest = action({
  args: {
    splitText:v.any(),
    fileId:v.string()

  },
  handler: async (ctx,args) => {
    const metadata ={fileId:args.fileId};
    await ConvexVectorStore.fromTexts(
       args.splitText,
       metadata,
      
      new GoogleGenerativeAIEmbeddings({
        apiKey: 'AIzaSyCipHKRly1yhjIWoleyt8lIetmopz2tYDE',
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx },
      
      
    );
    return "completed...";
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId:v.string(),
  },
  handler: async (ctx, args) => {
    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey: 'AIzaSyCipHKRly1yhjIWoleyt8lIetmopz2tYDE',
        model: "text-embedding-004", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
       { ctx });
       
      // / / Perform similarity search
       const resultOne = await vectorStore.similaritySearch(args.query, 1);
   
       // Log the result to inspect its structure
       console.log(resultOne);
   
       // Check if the result is an array or contains a data field
       if (Array.isArray(resultOne)) {
         // Filter the results based on fileId if it's an array
         const filteredResults = resultOne.filter(q => q.metadata.fileId == args.fileId);
         return JSON.stringify(filteredResults);
       } else {
         // Handle cases where the result is not an array
         return JSON.stringify(resultOne);
       }
     },
   });
