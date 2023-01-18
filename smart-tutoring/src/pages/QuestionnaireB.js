import { useState } from 'react';
// import Skills from '../components/Skills';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';
import ProgressView from '../components/genericComponents/ProgressView';
import Schools from '../components/Schools';
import Location from '../components/Location';
import Languages from '../components/Languages';
import Bio from '../components/Bio';
import Subjects from '../components/Subjects';
import Age from '../components/Age';
import Hours from '../components/Hours';
import { Typography } from '@mui/material';
// import PickerDemo from '../components/Picker';

const steps = [
    {
        topContent: <><Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={1} paddingTop={3}>
            Willkommen XY
        </Typography>
            <Typography>
                du musst nun ein paar Fragen beantworten, damit wir dich mit der richtigen Person matchen können!</Typography></>,
        title: <>Wie alt bist du?</>,
        content: <Age />
    },
    {
        title: <>Auf welchen Schulen <br /> warst/bist du?</>,
        content: <Schools />
    },
    {
        title: <>Wo wohnst du aktuell?</>,
        content: <Location />
    },
    {
        title: <>Wie viele Stunden in der Woche bist du bereit als Tutor tätig <br /> zu sein?</>,
        content: <Hours />
    },
    {
        title: <>Welche Sprachen <br /> sprichst du?</>,
        content: <Languages />
    },
    {
        title: <>Etwas über dich (optional):</>,
        content: <Bio />
    },
    {
        title: <>In welchen Fächern <br /> kannst du behilflich <br /> sein?</>,
        content: <Subjects />
    }
]

const QuestionnaireB = () => {
    const [current, setCurrent] = useState(0);

    return <div className="App">
        <HeaderBlack />
        <ProgressView topContent={steps[current].topContent} steps={steps.length} current={current + 1} title={steps[current].title} nextLabel="next" nextAction={(event) => {
            console.log(event);
            setCurrent(current + 1);

        }}>
            {steps[current].content}
        </ProgressView>
    </div >

}

export default QuestionnaireB;
