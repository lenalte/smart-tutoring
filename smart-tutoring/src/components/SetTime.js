import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


export default function ResponsiveTimePickers() {
    const [value, setValue] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{
                position: 'absolute',
                width: '315px',
                height: '50px',
                left: '34px',
                top: '435px',
            }}>
                <Stack spacing={3}>
                    <MobileTimePicker
                        label="Zeit"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </div>
        </LocalizationProvider>
    )
}