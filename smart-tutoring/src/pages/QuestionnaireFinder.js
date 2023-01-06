import { useState } from 'react';
import Skills from '../components/Skills';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';
import ProgressView from '../components/genericComponents/ProgressView';
import Location from '../components/Location';
import Languages from '../components/Languages';
import Bio from '../components/Bio';
import Subjects from '../components/Subjects';
import Age from '../components/Age';
import Hours from '../components/Hours';
import SelectSchoolsFinder from '../components/SchoolsFinder';

const steps = [
    {
        title: <>Wie alt ist dein Kind?</>,
        content: <Age />
    },
    {
        title: <>Auf welche Schule geht Dein Kind <br />  aktuell/möchtes es gehen?</>,
        content: <SelectSchoolsFinder />
        // Extra Component für Schools (zum Beispiel SchoolsFind.js) muss erstellt werden, da der Teil sich unterscheidet
    },
    {
        title: <>Wo wohnt ihr aktuell?</>,
        content: <Location />
    },
    {
        title: <>Wie viele Stunden in der Woche braucht dein   <br /> Kind einen Tutor?</>,
        content: <Hours />
    },
    {
        title: <>Welche Sprachen  <br /> sprichst du/dein Kind?</>,
        content: <Languages />
    },
    {
        title: <>Wie gut sprichst du/dein Kind <br /> diese Sprachen?</>,
        content: <Skills />
    },
    {
        title: <>Etwas über dich/dein Kind (optional):</>,
        content: <Bio />
    },
    {
        title: <>In welchen Fächern <br /> brauchst du/dein Kind <br /> Hilfe?</>,
        content: <Subjects />
    }
]

const QuestionnaireFinder = () => {
    const [current, setCurrent] = useState(0);
    return <div className="App">
        <HeaderBlack />
        <ProgressView steps={steps.length} current={current + 1} title={steps[current].title} nextLabel="next" nextAction={() => setCurrent(current + 1)}>
            {steps[current].content}
        </ProgressView>
    </div>
}

export default QuestionnaireFinder;