import Schools from '../components/Schools';
import Typography from '@mui/material/Typography';
import ProgressLine from '../components/ProgressLine';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';

const SchoolB = () => (
    <div className="App">
    <HeaderBlack />
    <Container>
        <ProgressLine />
    </Container>
    <Container>
        <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={8}>
          Auf welchen Schulen <br></br> warst/bist du?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <Schools />
        </Box>
    </Container>
  </div>
)

export default SchoolB;