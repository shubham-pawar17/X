
import { useState } from "react";

interface Props {
    onAddPost: (content: string) => void
}

function CreatePost({ onAddPost }: Props) {
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!content.trim()) return

        onAddPost(content)
        setContent("")
    }

    return (
        <div className=" border-b border-gray-800 p-2">
            <div className="flex p-4 gap-2">
                <img src="../../hero.png" className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                    <textarea
                        placeholder="What's happening?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full bg-transparent text-lg placeholder-gray-500 focus:outline-none pt-1"
                    />
                </div>
            </div>
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