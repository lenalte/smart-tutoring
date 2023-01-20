import * as React from 'react';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const subjects = [
    { id: 1, label: "Mathe" },
    { id: 2, label: "Deutsch" },
    { id: 3, label: "Englisch" },
    { id: 4, label: "HSU" },
    { id: 5, label: "Erdkunde" },
    { id: 6, label: "Biologie" },
    { id: 7, label: "Geschichte" },
    { id: 8, label: "Chemie" },
    { id: 9, label: "Physik" },
    { id: 10, label: "Latein" },
    { id: 11, label: "Französisch" },
    { id: 12, label: "Religion" },
    { id: 13, label: "Spanisch" }
]

export const theme = createTheme({
    palette: {
        primary: {
            main: '#e5e5e5',
        },
        secondary: {
            main: '#000000',
        },
    },
});



export default function Subjects() {


    const [selectedId, setSelectedId] = useState([]);

    const toggleSelection = (id) => {
        if (selectedId.includes(id)) {
            setSelectedId(selectedId.filter(i => i !== id));
        } else {
            setSelectedId([...selectedId, id]);
        }
    }

    return (
        <Grid container spacing={1}>
            {subjects.map(subject => <Grid xs="auto">
                <ThemeProvider theme={theme}>
                    <Chip label={subject.label}
                        key={subject.id}
                        color={selectedId.includes(subject.id) ? "secondary" : "primary"}
                        onClick={() => toggleSelection(subject.id)}
                    />
                </ThemeProvider>
            </Grid>)}
        </Grid >
    );
}
