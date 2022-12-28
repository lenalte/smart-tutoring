import * as React from 'react';
import Location from '../components/Location';
import Typography from '@mui/material/Typography';
import ProgressLine from '../components/ProgressLine';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';

const LocationB = () => (
    <div className="App">
    <HeaderBlack />
    <Container>
        <ProgressLine />
    </Container>
    <Container>
        <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={14}>
          Wo wohnst du aktuell?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Location />
        </Box>
    </Container>
  </div>

)

export default LocationB;