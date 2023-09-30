import Formpage from './Components/Formpage';
import './App.css';
import Navbar  from './Components/Nav';
import { Routes,Route } from 'react-router-dom';
import Alldata from './Components/Alldata';
import  Update  from './Components/Update';
function App() {
  return (
    <div className='App'>
<Navbar></Navbar>
    


      <Routes>
        <Route path="/" element={<Formpage></Formpage>}></Route>
        <Route path='/Alldata' element={<Alldata></Alldata>}></Route>
        <Route path='/edit/:id' element={<Update></Update>}></Route>

      </Routes>
    </div>
  );
}

export default App;
