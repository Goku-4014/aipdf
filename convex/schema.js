import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values"
import { mutation } from "./_generated/server";


  

export default defineSchema({
    users:defineTable({
        userName:v.string(),
        email:v.string(),
        imageUrl:v.string()
    }),
    

    pdfFiles:defineTable({
        fileId:v.string(),
        storageId:v.id("_storage"),
        fileName:v.string(),
        fileUrl:v.string(),
        createdBy:v.string()

    }),
    documents: defineTable({
    embedding: v.array(v.number()),
    text: v.string(),
    metadata:v.object({fileId:v.string()}),
  }).vectorIndex("byEmbedding", {
    vectorField: "embedding",
    dimensions: 768,
  }),


  notes:defineTable({
    fileId:v.string(),
    notes:v.any(),
    createdBy:v.string()
  })
    


   
})