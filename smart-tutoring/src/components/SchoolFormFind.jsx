import { Stack } from '@mui/system';
import React from 'react';
import GenericSelect from './genericComponents/GenericSelect';

const CURRENT_SCHOOL_OPTIONS = ["Grundschule", "Gymnasium", "Realschule", "Hauptschule"].map(label => ({ label: label, value: label }));
const WISH_SCHOOL_OPTIONS = ["Gymnasium", "Realschule", "Hauptschule", "FOS", "Ausbildung", "Studium"].map(label => ({ label: label, value: label }));

const SchoolForm = ({ value, onChange }) => {

    return <Stack spacing={2.5} paddingTop={1}>
        <GenericSelect value={value.baseSchool} onChange={val => onChange({ ...value, baseSchool: val })} label={"aktuelle Schule"} options={CURRENT_SCHOOL_OPTIONS} />
        <GenericSelect value={value.jobSchool} onChange={val => onChange({ ...value, jobSchool: val })} label={"Wunschschule"} options={WISH_SCHOOL_OPTIONS} />
    </Stack>
}

export default SchoolForm;