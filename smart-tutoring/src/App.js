import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
import LanguagesB from './pages/Languages_become';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='languages_become' element={<LanguagesB />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
