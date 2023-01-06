import * as React from 'react';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

const subjects = [
    "Mathe",
    "Deutsch",
    "Englisch",
    "HSU",
    "Erdkunde",
    "Biologie",
    "Geschichte",
    "Chemie",
    "Physik",
    "Latein",
    "Französisch",
    "Religion",
    "Spanisch",
]

export default function Subjects() {

    // const theme = ({
    //     clickedColor: {
    //         backgroundColor: "black",
    //         label: "white",
    //     },
    //     unclicked: {
    //         backgroundColor: "white",
    //     }
    // })

    // const [changeColor, setChangeColor] = useState(false)

    const [selectedItems, setSelectedItems] = useState([])

    const handleClick = (subject) => {
        setSelectedItems()
    };



    return (
        <Grid container spacing={1}>
            {subjects.map(subject => <Grid xs="auto">
                <Chip label={subject} variant={selectedItems.includes(subject) ? "filled" : "outlined"} onClick={() => handleClick(subject)} />
            </Grid>)}
        </Grid >
    );
}