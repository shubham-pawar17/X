import MainLayout from "./layout/MainLayout"
import PostCard from "./components/PostCard"
import type { post } from "./types/post"
import { useState } from "react"
import CreatePost from "./components/CreatePost"
function App() {
  const [posts , setPosts] = useState<post[]>([])

  const addPost = (content : string) =>{
    const newPost : post ={
      id : crypto.randomUUID(),
      author: "Shubham Pawar",
      content,
      likes:0,
      createdAt: new Date().toISOString(),
      isliked: false
    }

    setPosts([newPost, ...posts])
  }

  const toggleLike = (id: string) => {
  setPosts((prevPosts) => {
    return prevPosts.map((post) =>{
      if (post.id === id){
      return { 
        ...post,
        isliked :!post.isliked,
        likes: post.isliked
        ? post.likes - 1
        : post.likes + 1
      }
    }
      return post
}
    )
  })
}
  return (
    <MainLayout>
      <CreatePost onAddPost={addPost}/>
      <div className="p-4 space-y-4">
        {posts.map((post) =>(
          <PostCard 
          key={post.id} 
          post={post}
          onLike={toggleLike}/>
        ))}
      </div>
    </MainLayout>
  )
}

export default App