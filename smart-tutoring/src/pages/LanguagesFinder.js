import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Grid from '@mui/material/Grid';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Languages() {
  return (
    <Grid>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={languages}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        style={{ width: 350 }}
        renderInput={(params) => (
          <TextField {...params} label="Sprache auswählen" placeholder="Sprachen" />
        )}
      />
    </Grid>
  );
}


const languages = [
  { title: 'Bulgarisch' },
  { title: 'Chinesisch' },
  { title: 'Dänisch' },
  { title: 'Deutsch' },
  { title: 'Englisch' },
  { title: "Estnisch" },
  { title: 'Finnisch' },
  { title: 'Französisch' },
  { title: 'Griechisch' },
  { title: 'Indonesisch' },
  { title: 'Italienisch' },
  { title: 'Japanisch' },
  { title: 'Lettisch' },
  { title: 'Litauisch' },
  { title: 'Niederländisch' },
  { title: "Polnisch" },
  { title: 'Portugiesisch' },
  { title: 'Rumänisch' },
  { title: 'Russisch' },
  { title: 'Schwedisch' },
  { title: 'Slowakisch' },
  { title: 'Slowenisch' },
  { title: 'Spanisch' },
  { title: "Tschechisch" },
  { title: 'Türkisch' },
  { title: 'Ukrainisch' },
  { title: 'Ungarisch' },
];