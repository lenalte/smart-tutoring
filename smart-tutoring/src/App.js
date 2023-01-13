import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionnaireB from './pages/QuestionnaireB';
import QuestionnaireFinder from './pages/QuestionnaireFinder';
import Login from './pages/Login-SignUp'

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderBlack /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questionnaireBecome' element={<QuestionnaireB />} />
        <Route path='questionnaireFind' element={<QuestionnaireFinder />} />
        <Route path='Login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
