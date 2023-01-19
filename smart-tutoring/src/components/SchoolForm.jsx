import { Stack } from '@mui/system';
import React from 'react';
import GenericSelect from './genericComponents/GenericSelect';

const BASE_SCHOOL_OPTIONS = ["Hauptschule", "Realschule", "Gymnasium"].map(label => ({ label: label, value: label }));
const JOB_SCHOOL_OPTIONS = ["Ausbildung", "FOS", "Ausbildung + BOS"].map(label => ({ label: label, value: label }));
const UNIVERCITY_OPTIONS = ["Universität", "Hochschule", "private Hochschule"].map(label => ({ label: label, value: label }));

const SchoolForm = ({ value, onChange }) => {

    return <Stack spacing={2.5} paddingTop={1}>
        <GenericSelect value={value.baseSchool} onChange={val => onChange({ ...value, baseSchool: val })} label={"weiterführende Schule"} options={BASE_SCHOOL_OPTIONS} />
        <GenericSelect value={value.jobSchool} onChange={val => onChange({ ...value, jobSchool: val })} label={"berufsausbildende Schule"} options={JOB_SCHOOL_OPTIONS} />
        <GenericSelect value={value.univercity} onChange={val => onChange({ ...value, univercity: val })} label={"Studium"} options={UNIVERCITY_OPTIONS} />
    </Stack>
}

export default SchoolForm;