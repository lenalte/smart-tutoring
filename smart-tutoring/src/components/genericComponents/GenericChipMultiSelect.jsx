import { Chip, createTheme, Grid, ThemeProvider } from '@mui/material';
import React from 'react';

const GenericChiptMultiSelect = ({ options, label, values, onChange }) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#e5e5e5',
            },
            secondary: {
                main: '#000000',
            },
        },
    });

    const toggleSelection = (id) => {
        if (values.includes(id)) {
            onChange(values.filter(i => i !== id));
        } else {
            onChange([...values, id]);
        }
    }

    return (
        <Grid container spacing={0}>
            {options.map(option => <Grid xs="auto">
                <ThemeProvider theme={theme}>
                    <Chip label={option}
                        style={{ margin: 3 }}
                        key={option}
                        color={values.includes(option) ? "secondary" : "primary"}
                        onClick={() => toggleSelection(option)}
                    />
                </ThemeProvider>
            </Grid>)}
        </Grid >

    )
}

export default GenericChiptMultiSelect;