import { Box, Grid } from '@mui/material';
import GenericSliderCard from './genericComponents/GenericSliderCard';
import React from 'react';

const LanguageForm = ({ languages, value, onChange }) => {

    console.log("languanges", languages)

    return (
        <Grid>
            <Box paddingBottom={20}>
                {languages.map(lang => <GenericSliderCard label={lang.label} value={value?.[lang.value] ?? 0} onChange={val => onChange({ ...value, [lang.value]: val })} />)}
            </Box>
        </Grid>
    )
}

export default LanguageForm;

