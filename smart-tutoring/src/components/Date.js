import * as React from 'react';
import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {
  PickersDay,
  // PickersDayProps 
} from '@mui/x-date-pickers/PickersDay';
import { Box, Stack } from '@mui/system';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: '#FF453C',
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

export default function CustomDay() {
  const [value, setValue] = React.useState(dayjs('2022-04-07'));

  const renderWeekPickerDay = (
    date,
    selectedDates,
    pickersDayProps
  ) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value.startOf('week');
    const end = value.endOf('week');

    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

    return (


      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />

    );
  };

  return (
    <Stack>
      <Box paddingBottom={3} paddingLeft={2} paddingTop={1}>
        <IconButton href='/profileBecome'>
          <ArrowBackIosIcon fontSize='medium' />
        </IconButton>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          label="Week picker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
    </Stack>
  )
}

