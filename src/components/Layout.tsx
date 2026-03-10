import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div style={{ flex:1, width: "150px", borderRight: "1px solid gray" }}>
        <h2>X Clone</h2>
        <nav>
          <p><Link to="/home">Home</Link></p>
          <p><Link to="/">Logout</Link></p>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 3, padding: "20px" }}>
        {children}
      </div>

      {/* Right Panel */}
      <div style={{flex: 2 , width: "200px", borderLeft: "1px solid gray" }}>
        <h3>Trends</h3>
      </div>
    </div>
  )
}

export default Layout
