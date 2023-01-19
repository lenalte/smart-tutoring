import { useState } from 'react';
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


// const [age, setAge] = useState(0);
// const [schools, setSchools] = useState([]);
// const [location, setLocation] = useState('');
// const [languages, setLanguages] = useState([]);
// const [bio, setBio] = useState('');
// const [subjects, setSubjects] = useState([]);


const steps = [
    {
        topContent: <><Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={1} paddingTop={3}>
            Willkommen XY
        </Typography>
            <Typography>
                du musst nun ein paar Fragen beantworten, damit wir dich mit der richtigen Person matchen können!</Typography></>,
        title: <>Wie alt bist du?</>,
        content: <Age prop
        // onChange={(event) => setAge(event.target.value)} 
        />
    },
    {
        title: <>Auf welchen Schulen <br /> warst/bist du?</>,
        content: <Schools
        // onChange={(schools) => setSchools(schools)} 
        />
    },
    {
        title: <>Wo wohnst du aktuell?</>,
        content: <Location
        // onChange={(location) => setLocation(location)}
        />
    },
    {
        title: <>Wie viele Stunden in der Woche bist du bereit als Tutor tätig <br /> zu sein?</>,
        content: <Hours
        // onChange={(hours) => setHours(hours)}
        />
    },
    {
        title: <>Welche Sprachen <br /> sprichst du?</>,
        content: <Languages
        // onChange={(languages) => setLanguages(languages)}
        />
    },
    {
        title: <>Etwas über dich (optional):</>,
        content: <Bio
        // onChange={(bio) => setBio(bio)}
        />
    },
    {
        title: <>In welchen Fächern <br /> kannst du behilflich <br /> sein?</>,
        content: <Subjects
        // onChange={(subjects) => setSubjects(subjects)} 
        />
    }
]


const QuestionnaireB = () => {


    // let data = {
    //     age: 0,
    //     schools: []
    // };

    const [current, setCurrent] = useState(0);

    return <div className="App">
        <HeaderBlack />
        <ProgressView topContent={steps[current].topContent} steps={steps.length} current={current + 1} title={steps[current].title} nextLabel="next" nextAction={() => { setCurrent(current + 1); }}
            onChange={(event) => { console.log(event); }}>
            {steps[current].content}
        </ProgressView>
    </div >

}

export default QuestionnaireB;
