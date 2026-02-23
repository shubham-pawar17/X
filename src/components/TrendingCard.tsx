function TrendingCard() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Trends for you</h2>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-sm">Technology · Trending</p>
          <p className="font-semibold">#ReactJS</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Programming</p>
          <p className="font-semibold">#TypeScript</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">India · Trending</p>
          <p className="font-semibold">#Startup</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard