import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Book from './pages/book/book';
import CuisinePage from './pages/cuisinePage/cuisinePage';
import DietPage from './pages/dietPage/dietPage';
import DishPage from './pages/dishPage/dishPage';
import ErrorPage from './pages/errorPage/errorPage';
import Home from './pages/home/home';
import Library from './pages/library/library';
import MealPage from './pages/mealPage/mealPage';
import Recipe from './pages/recipe/recipe';
import Search from './pages/search/search';

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/library' element={<Library />}/>
        <Route path='/recipes/:id' element={<Recipe />}/>
        <Route path='/library/books/:bookTitle' element={<Book/>}/>
        <Route path='/cuisine/:cuisineTitle' element={<CuisinePage />}/>
        <Route path='/meals/:mealType' element={<MealPage />}/>
        <Route path='/diets/:diet' element={<DietPage />}/>
        <Route path='/dishTypes/:dishType' element={<DishPage />}/>
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
