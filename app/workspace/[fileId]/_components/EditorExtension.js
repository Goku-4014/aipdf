"use client"
import Underline from '@tiptap/extension-underline';
import { useAction, useMutation } from 'convex/react';
import { Bold, Italic,  Sparkles,  UnderlineIcon } from 'lucide-react';
import React from 'react';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { chatSession } from '@/configs/AIModel';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';

function EditorExtension({ editor }) {
    const {fileId} = useParams();

    const SearchAI= useAction(api.myActions.search);
    const saveNotes =useMutation(api.notes.AddNotes);
    const {user} = useUser();


     const onAiClick =async()=>{
        toast("AI is Generating...")
        const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '

        );
        console.log("selectedText", selectedText);

        const result = await SearchAI({
            query:selectedText,
            fileId:fileId
        })

        const UnformattedAns = JSON.parse(result);
        let AllUnformattedAns ='';
        UnformattedAns&&UnformattedAns.forEach(item => {
          AllUnformattedAns=AllUnformattedAns+item.pageContent
        });

        const PROMPT ="for question:" +selectedText+ "and with the given content as answer,"+
        "please give appropriate answer in HTML format. the answer content is: "+ AllUnformattedAns;
        // console.log("unformatted ans", result);

        const AiModelResult = await chatSession.sendMessage(PROMPT);
        console.log(AiModelResult.response.text());
       const  FinalAnswer =AiModelResult.response.text().replace('```', '').replace('html','').replace('```','');

        const AllText =editor.getHTML();
        editor.commands.setContent(AllText+'<p><strong>Answer:</strong>'+FinalAnswer+'</p>')
        
        saveNotes({
          notes:editor.getHTML(),
          fileId:fileId,
          createdBy:user?.primaryEmailAddress?.emailAddress
        })

     }

  return (
    editor && (
      <div className="p-5">
        <div className="control-group">
          <div className="button-group flex gap-3">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'text-blue-500' : ''}
            >
              <Bold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'text-blue-500' : ''}
            >
              <Italic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'text-blue-500' : ''}
            >
              <UnderlineIcon/>
            </button>
            <button
              onClick={() => onAiClick()}
              className={ 'hover:text-blue-500'}
            >
              <Sparkles/>
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default EditorExtension;
