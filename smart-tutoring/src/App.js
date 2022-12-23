import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
import LanguagesB from './pages/Languages_become';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  {/* <HeaderBlack /> */}
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='languagesBecome' element={<LanguagesB />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
