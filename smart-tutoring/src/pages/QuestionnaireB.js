import { useState } from 'react';
import HeaderBlack from '../components/HeaderBlack';
import ProgressView from '../components/genericComponents/ProgressView';
import { Typography } from '@mui/material';
import GenericSelect from '../components/genericComponents/GenericSelect';
import SchoolForm from '../components/SchoolForm';
import GenericTextField from '../components/genericComponents/GenericTextField';
import GenericMultiSelect from '../components/genericComponents/GenericMultiSelect';
import GenericChipMultiSelect from '../components/genericComponents/GenericChipMultiSelect';
import LanguageForm from '../components/LanguageForm';
import userApi from '../services/userApi';


const LANGUAGES = ['Bulgarisch', 'Chinesisch', 'Dänisch', 'Deutsch', 'Englisch', 'Estnisch', 'Finnisch', 'Französisch', 'Griechisch',
    'Indonesisch', 'Italienisch', 'Japanisch', 'Lettisch', 'Litauisch', 'Niederländisch', 'Polnisch', 'Portugiesisch', 'Rumänisch',
    'Russisch', 'Schwedisch', 'Slowakisch', 'Slowenisch', 'Spanisch', 'Tschechisch', 'Türkisch', 'Ukrainisch', 'Ungarisch'];

const SUBJECTS = ["Mathe", "Deutsch", "Englisch", "HSU", "Erdkunde", "Biologie", "Geschichte", "Chemie", "Physik",
    "Latein", "Französisch", "Religion", "Spanisch"]


const QuestionnaireB = () => {

    const [age, setAge] = useState('');
    const [school, setSchool] = useState({ baseSchool: "", jobSchool: "", university: "" });
    const [location, setLocation] = useState("");
    const [hours, setHours] = useState('');
    const [languages, setLanguages] = useState([]);
    const [languageSkills, setLanguageSkills] = useState({});
    const [aboutyou, setAboutyou] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [loading, setLaoding] = useState(true);


    console.log("age", age);
    console.log("school", school);
    console.log("location", location);
    console.log("hours", hours);
    console.log("languages", languages);
    console.log("languageSkills", languageSkills);
    console.log("aboutyou", aboutyou);
    console.log("subjects", subjects);


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
                Willkommen
            </Typography>
                <Typography>
                    du musst nun ein paar Fragen beantworten, damit wir dich mit der richtigen Person matchen können!</Typography></>,
            title: <>Wie alt bist du?</>,
            content: <GenericSelect label="Alter" value={age} onChange={setAge} options={[...Array(99).keys()].map(idx => ({ label: `${idx}`, value: idx }))}
            />
        },
        {
            title: <>Auf welchen Schulen <br /> warst/bist du?</>,
            content: <SchoolForm value={school} onChange={setSchool} />
        },
        {
            title: <>Wo wohnst du aktuell?</>,
            content: <GenericTextField label="Postleitzahl" onChange={plzChangeHandler} value={location} id={"outlined-number"} />
        },
        {
            title: <>Wie viele Stunden in der Woche bist du bereit als Tutor tätig <br /> zu sein?</>,
            content: <GenericSelect label="in Stunden" value={hours} onChange={setHours} options={[...Array(31).keys()].map(idx => ({ label: `${idx}`, value: idx }))}
            />
        },
        {
            title: <>Welche Sprachen <br /> sprichst du?</>,
            content: <GenericMultiSelect label="Sprache auswählen" value={languages} onChange={setLanguages} options={LANGUAGES.map(label => ({ label: label, value: label }))}
            />
        },
        {
            title: <>Wie gut sprichst du <br /> diese Sprachen?</>,
            content: <LanguageForm value={languageSkills} languages={languages} onChange={setLanguageSkills} />
        },
        {
            title: <>Etwas über dich (optional):</>,
            content: <GenericTextField label="Etwas über dich" value={aboutyou} onChange={setAboutyou} />
        },
        {
            title: <>In welchen Fächern <br /> kannst du behilflich <br /> sein?</>,
            content: <GenericChipMultiSelect options={SUBJECTS} values={subjects} onChange={setSubjects} />
        }
    ]


    const send = () => {
        const langSkillExport = Object.keys(languageSkills).map(val => ({ language: val, level: languageSkills[val] }))
        const languagesExport = languages.map(lang => lang.label);
        const schoolExport = Object.values(school).filter(school => school !== "");

        setLaoding(true);
        return userApi.addUser(age, schoolExport, location, hours, languagesExport, langSkillExport, aboutyou, subjects).then(() => {
            setLaoding(false);
        })
    }


    const [current, setCurrent] = useState(0);

    console.log("current", current);



    return <div className="App">
        <HeaderBlack />
        <ProgressView topContent={steps[current].topContent} steps={steps.length} current={current + 1} title={steps[current].title} loading={loading} nextLabel="next" nextAction={() => {
            if (current === steps.length - 1) {
                send()
            } else {
                setCurrent(current + 1);
            }
        }}
            onChange={(event) => { console.log(event); }}>
            {steps[current].content}
        </ProgressView>
    </div >

}

export default QuestionnaireB;
