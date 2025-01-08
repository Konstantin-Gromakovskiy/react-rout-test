import './App.css';
import { Routes, Route } from 'react-router';
import Homepage from './pages/Homepage.js';
import Aboutpage from './pages/Aboutpage.js';
import Blogpage from './pages/Blogpage.js';
import CreatePost from './pages/CreatePost.js';
import EditPost from './pages/EditPost.js';
import Notfoundpage from './pages/Notfoundpage.js';
import Layout from './components/layout.js';
import SinglePage from './pages/SinglePage.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>    
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/new' element={<CreatePost />} />
          <Route path='posts/:id/edit' element={<EditPost />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>  
    </>
  );
}

export default App;
