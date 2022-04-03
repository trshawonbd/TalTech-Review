import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Reviews from '../src/components/Reviews/Reviews';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Blogs from '../src/components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
      </Routes>
      
    </div>
  );
}

export default App;
