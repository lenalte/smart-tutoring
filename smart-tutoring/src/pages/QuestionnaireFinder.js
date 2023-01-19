import { useState } from 'react';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';
import ProgressView from '../components/genericComponents/ProgressView';
import Typography from '@mui/material/Typography';
import GenericSelect from '../components/genericComponents/GenericSelect';
import SchoolForm from '../components/SchoolForm';
import GenericTextField from '../components/genericComponents/GenericTextField';
import GenericMultiSelect from '../components/genericComponents/GenericMultiSelect';
import LanguageForm from '../components/LanguageForm';
import GenericChiptMultiSelect from '../components/genericComponents/GenericChipMultiSelect';


const LANGUAGES = ['Bulgarisch', 'Chinesisch', 'Dänisch', 'Deutsch', 'Englisch', 'Estnisch', 'Finnisch', 'Französisch', 'Griechisch',
    'Indonesisch', 'Italienisch', 'Japanisch', 'Lettisch', 'Litauisch', 'Niederländisch', 'Polnisch', 'Portugiesisch', 'Rumänisch',
    'Russisch', 'Schwedisch', 'Slowakisch', 'Slowenisch', 'Spanisch', 'Tschechisch', 'Türkisch', 'Ukrainisch', 'Ungarisch'];

const SUBJECTS = ["Mathe", "Deutsch", "Englisch", "HSU", "Erdkunde", "Biologie", "Geschichte", "Chemie", "Physik",
    "Latein", "Französisch", "Religion", "Spanisch"]



const QuestionnaireFinder = () => {

    const [age, setAge] = useState('');
    const [school, setSchool] = useState({ baseSchool: "", jobSchool: "", university: "" });
    const [location, setLocation] = useState("");
    const [hours, setHours] = useState('');
    const [languages, setLanguages] = useState([]);
    const [aboutyou, setAboutyou] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [languageSkills, setLanguageSkills] = useState({});


    console.log("languageSkills", languageSkills);

    const plzChangeHandler = (plz) => {
        if (plz === undefined || plz === null || plz === "") {
            setLocation("");
        }
        const val = plz.match(/\d+/);
        if (val !== null) {
            setLocation(val.join(""));
        }
    }


    const steps = [
        {
            topContent: <><Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={1} paddingTop={3}>
                Willkommen XY
            </Typography>
                <Typography>
                    du musst nun ein paar Fragen beantworten, damit wir dich mit der richtigen Person matchen können!</Typography></>,
            title: <>Wie alt ist dein Kind?</>,
            content: <GenericSelect label="Alter" value={age} onChange={setAge} options={[...Array(99).keys()].map(idx => ({ label: `${idx}`, value: idx }))} />
        },
        {
            title: <>Auf welche Schule geht Dein Kind <br />  aktuell/möchtes es gehen?</>,
            content: <SchoolForm value={school} onChange={setSchool} />

        },
        {
            title: <>Wo wohnt ihr aktuell?</>,
            content: <GenericTextField label="Postleitzahl" onChange={plzChangeHandler} value={location} id={"outlined-number"} />
        },
        {
            title: <>Wie viele Stunden in der Woche braucht dein   <br /> Kind einen Tutor?</>,
            content: <GenericSelect label="in Stunden" value={hours} onChange={setHours} options={[...Array(31).keys()].map(idx => ({ label: `${idx}`, value: idx }))} />
        },
        {
            title: <>Welche Sprachen  <br /> sprichst du/dein Kind?</>,
            content: <GenericMultiSelect label="Sprache auswählen" value={languages} onChange={setLanguages} options={LANGUAGES.map(label => ({ label: label, value: label }))} />
        },
        {
            title: <>Wie gut sprichst du/dein Kind  <br /> diese Sprachen?</>,
            content: <LanguageForm value={languageSkills} languages={languages} onChange={setLanguageSkills} />
        },
        {
            title: <>Etwas über dich/dein Kind (optional):</>,
            content: <GenericTextField label="Etwas über dich" value={aboutyou} onChange={setAboutyou} />
        },
        {
            title: <>In welchen Fächern <br /> brauchst du/dein Kind <br /> Hilfe?</>,
            content: <GenericChiptMultiSelect options={SUBJECTS} values={subjects} onChange={setSubjects} />
        }
    ]


    const [current, setCurrent] = useState(0);
    return <div className="App">
        <HeaderBlack />
        <ProgressView topContent={steps[current].topContent} steps={steps.length} current={current + 1} title={steps[current].title} nextLabel="next" nextAction={() => setCurrent(current + 1)}>
            {steps[current].content}
        </ProgressView>
    </div>
}

export default QuestionnaireFinder;