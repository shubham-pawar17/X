import BookMarkIcon from "../icons/Bookmark"
import ChatIcon from "../icons/Chat"
import ExploreIcon from "../icons/Explore"
import GrokIcon from "../icons/Grok"
import HomeIcon from "../icons/Home"
import MoreIcon from "../icons/More"
import NotificationsIcon from "../icons/Notifications"
import PremiumIcon from "../icons/Premium"
import ProfileIcon from "../icons/profileIcon"
import XIcon from "../icons/X"

function Sidebar() {
  return (
    <div>
      <nav className="font-semibold text-xl">
        <div className="pt-3 px-3 pb-3"><XIcon /></div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer">
          <div><HomeIcon /></div><div>Home</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><ExploreIcon /></div><div>Explore</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><NotificationsIcon /></div><div>Notifications</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><ChatIcon /></div><div>Chat</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><GrokIcon /></div><div>Grok</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><BookMarkIcon /></div><div>Bookmarks</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div ><PremiumIcon /></div><div>Premium</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><ProfileIcon /></div><div>Profile</div>
        </div>
        <div className="flex w-fit  gap-5 p-3 px-4 items-center  rounded-4xl hover:bg-gray-900 cursor-pointer ">
          <div><MoreIcon /></div><div>More</div>
        </div>
        <div className="bg-white text-black mt-2 p-4 mx-4 rounded-full text-center font-bold hover:bg-gray-200">
          Post
        </div>
      </nav>
      <div className="fixed bottom-0 flex justify-between p-2 gap-4 m-4 rounded-4xl hover:bg-gray-900 ">
          <div className="flex items-center gap-3">
            <img src="../../hero.png" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-semibold">Shubham Pawar</span>
              <span className="text-sm text-gray-600">@Shubham_pawar18</span>
            </div>
          </div>
          <span className="text-2xl text-white">...</span>
       </div>
    </div>
  )
}

export default Sidebar