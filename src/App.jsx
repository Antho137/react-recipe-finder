import Header from './components/Header';
import RecipesList from './components/RecipesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className='recipe-app'>
      <Header />
      <RecipesList />
    </div>
  )
}

export default App
