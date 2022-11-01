import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ResponsiveAppBar from './components/NavBar';
import { Home } from "./components/Home";
import { Recipes } from "./components/Recipes";
import { Aboutus } from './components/Aboutus';
import { SingleRecipe } from './components/SingleRecipe';
import { LoginForm } from './components/LoginForm';
import { dividerClasses } from '@mui/material';
import { SignUpForm } from './components/SignUp';

function App() {

  return (
    <Provider store={store}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/recipes/:id" element={<SingleRecipe />}></Route>
        <Route path="/" element={< SignUpForm />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
