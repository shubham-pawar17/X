import BookMarkIcon from "../icons/Bookmark"
import LikesIcon from "../icons/Like"
import ReplyIcon from "../icons/Reply"
import RepostIcon from "../icons/Repost"
import ShareIcon from "../icons/Share"
import ViewIcon from "../icons/View"
import type { post } from "../types/post"

interface Props {
  post: post
  onLike: (id: string) => void
}

export function PostCard({ post, onLike }: Props) {
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
        <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <ReplyIcon />
          <span className="text-sm">1M</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <RepostIcon />
          <span className="text-sm">1M</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <button onClick={() => onLike(post.id)}
            className="hover:text:red-500 transition">
            <LikesIcon /></button>
            <span className="text-sm">{post.likes}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <ViewIcon /><span className="text-sm">1M</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <BookMarkIcon />
          <span className="text-sm">1M</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-200">
          <ShareIcon />
          <span className="text-sm">1M</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard