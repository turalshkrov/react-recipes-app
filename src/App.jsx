import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import Library from './pages/library/library';
import Search from './pages/search/search';

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/library' element={<Library />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
