import logo,{useEffect} from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Body from './Components/Body';

function App() {




  return (
    <div className='app_body' >
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Body />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
