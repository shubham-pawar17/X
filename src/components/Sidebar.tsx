function Sidebar() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">X</h1>

      <nav className="space-y-4 text-lg">
        <p className="hover:text-blue-500 cursor-pointer">Home</p>
        <p className="hover:text-blue-500 cursor-pointer">Explore</p>
        <p className="hover:text-blue-500 cursor-pointer">Notifications</p>
        <p className="hover:text-blue-500 cursor-pointer">Messages</p>
        <p className="hover:text-blue-500 cursor-pointer">Profile</p>
      </nav>

      <button className="bg-blue-500 w-full py-2 rounded-full font-semibold hover:bg-blue-600">
        Post
      </button>
    </div>
  )
}

export default Sidebar