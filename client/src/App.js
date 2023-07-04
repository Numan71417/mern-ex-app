import {Routes , Route} from 'react-router-dom'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <>
   {/* <Header/> */}
    <Routes>
      <Route path='/' element={ <HomePage/>} />
      <Route path='/register' element={ <Register/>} />
      <Route path='/login' element={ <Login/>} />
        
      
    </Routes>

    {/* <Footer/> */}
    </>
  );
}

export default App;
