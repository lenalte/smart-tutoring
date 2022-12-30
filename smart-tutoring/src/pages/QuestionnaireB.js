import { useState } from 'react';
import Skills from '../components/Skills';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';
import ProgressView from '../components/genericComponents/ProgressView';
import Schools from '../components/Schools';
import Location from '../components/Location';
import Languages from '../components/Languages';
import Bio from '../components/Bio';

const steps = [
    // {
    //     title: <>Wie alt bist du?</>,
    //     content: <Age />
    // },
    {
        title: <>Auf welchen Schulen <br /> warst/bist du?</>,
        content: <Schools />
    },
    {
        title: <>Wo wohnst du aktuell?</>,
        content: <Location />
    },
    // {
    //     title: <>Wie viele Stunden in der <br/> Woche bist du bereit als <br/> Tutor tätig zu sein?</>,
    //     content: <Hours />
    // },
    {
        title: <>Welche Sprachen <br /> sprichst du?</>,
        content: <Languages />
    },
    {
        title: <>Wie gut sprichst du <br /> diese Sprachen?</>,
        content: <Skills />
    },
    {
        title: <>Etwas über dich (optional):</>,
        content: <Bio />
    }
    // {
    //     title: <>In welchen Fächern <br/> kannst du behilflich <br/> sein?</>,
    //     content: <Subjects />
    // }
]

const QuestionnaireB = () => {
    const [current, setCurrent] = useState(0);
    return <div className="App">
        <HeaderBlack />
        <ProgressView steps={steps.length} current={current + 1} title={steps[current].title} nextLabel="Next" nextAction={() => setCurrent(current + 1)}>
            {steps[current].content}
        </ProgressView>
    </div>
}

export default QuestionnaireB;