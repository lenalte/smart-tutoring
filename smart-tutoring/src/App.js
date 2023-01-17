import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionnaireB from './pages/QuestionnaireB';
import QuestionnaireFinder from './pages/QuestionnaireFinder';
import MatchesB from './pages/MatchesB';
import ProfileFind from './pages/ProfileFindTutor';
import SignUp from './pages/SignUp';
import MatchesF from './pages/MatchesF';
import SetDate from './pages/SetDate';
import SignIn from './pages/SignIn';
import ProfileSelf from './pages/ProfileTutorSelf';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='questionnaireBecome' element={<QuestionnaireB />} />
        <Route path='questionnaireFind' element={<QuestionnaireFinder />} />
        <Route path='matchesBecome' element={<MatchesB />} />
        <Route path='profileFind' element={<ProfileFind />} />
        <Route path='login' element={<SignUp />} />
        <Route path='matchesfinder' element={<MatchesF />} />
        <Route path='setdate' element={<SetDate />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='profileSelf' element={<ProfileSelf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
