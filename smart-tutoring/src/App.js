import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
import LanguagesB from './pages/Languages_become';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SchoolB from './pages/School_become';
import LocationB from './pages/Location_become';

function App() {
  return (
  <BrowserRouter>
  {/* <HeaderBlack /> */}
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='schoolBecome' element={<SchoolB />}/>
    <Route path='languagesBecome' element={<LanguagesB />}/>
    <Route path='locationBecome' element={<LocationB />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
