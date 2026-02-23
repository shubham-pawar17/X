import MainLayout from "./layout/MainLayout"
import PostCard from "./components/PostCard"

function App() {
  return (
    <MainLayout>
      <div className="p-4 space-y-4">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </MainLayout>
  )
}

export default App