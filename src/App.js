import './App.css';
import { Routes, Route, Link } from 'react-router';
import Homepage from './pages/Homepage.js';
import Aboutpage from './pages/Aboutpage.js';
import Blogpage from './pages/Blogpage.js';
import Notfoundpage from './pages/Notfoundpage.js';
import Layout from './components/layout.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>    
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>  
    </>
  );
}

export default App;
