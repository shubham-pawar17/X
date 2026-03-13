import Sidebar from "../components/Sidebar"
import TrendingCard from "../components/TrendingCard"

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto flex">
        
        {/* Left Sidebar */}
        <div className="w-1/5 border-r border-gray-800">
          <Sidebar />
        </div>

        {/* Middle Feed */}
        <div className="w-2/4 border-r border-gray-800">
        <div className="flex justify-evenly text-center border border-gray-800">
          <div className="flex-1 w-fit hover:bg-gray-900 "><div className="p-4">For you</div></div>
          <div className="flex-1 hover:bg-gray-900 "><div className="p-4">Following</div></div>
        </div>
          {children}
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