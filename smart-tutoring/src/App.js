import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
import LanguagesB from './pages/Languages_become';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SchoolB from './pages/School_become';
import LocationB from './pages/Location_become';
import BioB from './pages/Bio_become';
import SkillB from './pages/Skill_become';

function App() {
  return (
  <BrowserRouter>
  {/* <HeaderBlack /> */}
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='schoolBecome' element={<SchoolB />}/>
    <Route path='languagesBecome' element={<LanguagesB />}/>
    <Route path='locationBecome' element={<LocationB />}/>
    <Route path='bioBecome' element={<BioB />}/>
    <Route path='skillBecome' element={<SkillB />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
