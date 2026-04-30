import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Upload from './pages/upload'
import Feed from './pages/feed'
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Posts App</h1>
        <nav className="nav-links">
          <Link to="/upload" className="nav-link">Upload</Link>
          <Link to="/feed" className="nav-link">Feed</Link>
        </nav>
      </header>
     <Routes>
      <Route path="/upload" element={<Upload />} />
      <Route path='/feed' element={<Feed/>} />
     </Routes>
    </div>
  )
}

export default App