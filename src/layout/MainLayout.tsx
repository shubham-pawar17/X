import CreatePost from "../components/CreatePost"
import Sidebar from "../components/Sidebar"
import TrendingCard from "../components/TrendingCard"

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-full px-32 min-h-screen mx-auto flex  border-gray-800">
        
        {/* Left Sidebar */}
        <div className="w-1/5 border-r border-gray-800">
          <Sidebar />
        </div>

        {/* Middle Feed */}
        <div className="w-2/4 border-r border-gray-800">
        <div className="sticky top-0 bg-black/60 backdrop-blur-md flex justify-evenly text-center border border-gray-800">
          <div className="flex-1 hover:bg-gray-900 "><div className="p-4 ">For you</div></div>
          <div className="flex-1 hover:bg-gray-900 "><div className="p-4 text-gray-500">Following</div></div>
        </div>
        <div><CreatePost/></div>
        <div>{children}</div>
        </div>

        {/* Right Trending */}
        <div className="w-1/4 p-4">
          <TrendingCard />
        </div>

      </div>
    </div>
  )
}

export default MainLayout