import './App.css';
import { SignpostOutlined } from '@mui/icons-material';
import Home from './pages/Home';
// import HeaderBlack from './components/HeaderBlack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionnaireB from './pages/QuestionnaireB';
import QuestionnaireFinder from './pages/QuestionnaireFinder';
import MatchesB from './pages/MatchesB';
import ProfileB from './pages/ProfileB';
import SignUp from './pages/SignUp';
import ProfileF from './pages/ProfileF';
import MatchesF from './pages/MatchesF';
import SetDate from './pages/SetDate';

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
        <Route path='login' element={<SignUp />} />
        <Route path='profilefinder' element={<ProfileF />} />
        <Route path='matchesfinder' element={<MatchesF />} />
        <Route path='setdate' element={<SetDate />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
