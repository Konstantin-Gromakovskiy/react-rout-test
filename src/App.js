import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import Homepage from './pages/Homepage.js';
import Aboutpage from './pages/Aboutpage.js';
import Blogpage from './pages/Blogpage.js';
import CreatePost from './pages/CreatePost.js';
import EditPost from './pages/EditPost.js';
import Notfoundpage from './pages/Notfoundpage.js';
import Layout from './components/layout.js';
import SinglePage from './pages/SinglePage.js';
import LoginPage from './pages/LoginPage.js';
import RequireAuth from './hoc/RequireAuth.js';
import {AuthProvider} from './hoc/AuthProvider.js';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>    
          <Route index element={<Homepage />} />
          <Route path='about' element={<Aboutpage />} />
          <Route path='about-us' element={<Navigate to='/about' replace/>} />
          <Route path='posts' element={<Blogpage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/new' element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path='posts/:id/edit' element={<EditPost />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>  
    </AuthProvider>
  );
}

export default App;
