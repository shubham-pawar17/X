import type { post } from "../types/post"

type Props ={
    post:post
}

export function PostCard({ post }:Props) {
  return (
    <div className="border border-gray-800 p-4 rounded-lg hover:bg-gray-900 transition">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full" />
        <div>
          <p className="font-semibold">{post.author}</p>
          <p className="text-gray-400 text-sm">@shubham · 2h</p>
        </div>
      </div>

      <p className="mt-3">{post.content}</p>

      <div className="flex justify-between mt-4 text-gray-400 text-sm">
        <span>💬 12</span>
        <span>🔁 5</span>
        <span>❤️ {post.likes}</span>
      </div>
    </div>
  )
}

export default PostCard