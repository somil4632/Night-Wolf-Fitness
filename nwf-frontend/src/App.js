import Home from './Pages/Home/home' ;
import {Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className= "">
      <Routes>
         <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
