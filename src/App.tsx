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
    }

    setPosts([newPost, ...posts])
  }
  return (
    <MainLayout>
      <CreatePost onAddPost={addPost}/>
      <div className="p-4 space-y-4">
        {posts.map((post) =>(
          <PostCard key={post.id} post={post}/>
        ))}
      </div>
    </MainLayout>
  )
}

export default App