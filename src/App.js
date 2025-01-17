import Signup from './pages/Signup';
 //import Signinout from './components/Signinout';
//import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <ToastContainer/>
<Router>
 <Routes>

    <Route path='/' element={<Signup/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
</Router>
    </div>
  );
}

export default App;
