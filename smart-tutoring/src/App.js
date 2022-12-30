import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionnaireB from './pages/QuestionnaireB';

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderBlack /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questionnaireBecome' element={<QuestionnaireB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
