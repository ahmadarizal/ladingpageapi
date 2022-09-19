import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className="app">
      <div className='brand'>Website Fikri</div>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/profile" className='nav-item'>profile</Link>
        <Link to="/blog" className='nav-item'>Blog</Link>
        <Link to="/contact" className='nav-item'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetail />} />
        <Route path='contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
