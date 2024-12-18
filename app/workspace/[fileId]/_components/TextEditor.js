import React, { useEffect } from 'react'
import { Editor , useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import EditorExtension from './EditorExtension'
import Underline from '@tiptap/extension-underline'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'



function TextEditor({fileId}) {

    const notes =useQuery(api.notes.GetNotes,{
        fileId:fileId,
    })

    console.log(notes);


    const editor = useEditor({
        extensions: [StarterKit,
            Underline,
            Placeholder.configure({
                placeholder:"Try Me...."
            })
        ],
        content: '',
        immediatelyRender: false,
        editorProps:{
            
            attributes:{
                class:'focus:outline-none h-screen p-5'
            }
        }
      })

      useEffect(()=>{
        editor&&editor.commands.setContent(notes)
      },[notes&&editor])
// used to get notes sored in the database

      
  return (
    <div>
        <EditorExtension editor ={editor}/>
        <div className='overflow-scroll h-[88vh]'>
        <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default TextEditor
