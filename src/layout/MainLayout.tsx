import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Sidebar from "../components/Sidebar";
import TrendingCard from "../components/TrendingCard";



function MainLayout() {
  const [posts, setPosts] = useState<string[]>([]);

  const addPost = (content: string) => {
    setPosts((prev) => [content, ...prev]);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-full px-32 min-h-screen mx-auto flex border-gray-800">
        
        {/* Left */}
        <div className="w-1/5 border-r border-gray-800">
          <Sidebar />
        </div>

        {/* Middle */}
        <div className="w-2/4 border-r border-gray-800">
          <div className="sticky top-0 bg-black/60 backdrop-blur-md flex text-center border border-gray-800">
            <div className="flex-1 hover:bg-gray-900">
              <div className="p-4">For you</div>
            </div>
            <div className="flex-1 hover:bg-gray-900">
              <div className="p-4 text-gray-500">Following</div>
            </div>
          </div>

          <CreatePost onAddPost={addPost} />

          {/* ✅ Posts visible here */}
          <div>
            {posts.map((post, index) => (
              <div
                key={index}
                className="border-b border-gray-800 p-4 hover:bg-gray-900"
              >
                {post}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-1/4 p-4">
          <TrendingCard />
        </div>

      </div>
    </div>
  );
}

export default MainLayout;