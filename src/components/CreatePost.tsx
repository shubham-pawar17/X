import { useState } from "react";

interface Props{
    onAddPost :(content : string)=>void
}

function CreatePost({ onAddPost }: Props){
    const[content , setContent] = useState("");

    const handleSubmit = ()=>{
        if(!content.trim()) return

        onAddPost(content)
        setContent("")
    }

    return(
        <div className="border-b border-gray-800 p-4">
            <textarea
            className="w-full bg-black text-white resize-none outline-none text-lg"
            placeholder="What is happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />

            <div className="flex justify-end mt-3">
                <button onClick={handleSubmit}
                className="bg-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-blue-600">
                    Post
                </button>
            </div>
        </div>
    )
}

export default CreatePost;