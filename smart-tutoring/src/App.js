import './App.css';
import { } from '@mui/icons-material';
import Home from './pages/Home';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionnaireB from './pages/QuestionnaireB';
import QuestionnaireFinder from './pages/QuestionnaireFinder';
import MatchesB from './pages/MatchesB';
import ProfileB from './pages/ProfileB';

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderBlack /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questionnaireBecome' element={<QuestionnaireB />} />
        <Route path='questionnaireFind' element={<QuestionnaireFinder />} />
        <Route path='matchesBecome' element={<MatchesB />} />
        <Route path='profileBecome' element={<ProfileB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
