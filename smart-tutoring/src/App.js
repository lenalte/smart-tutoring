import './App.css';
import Languages from './components/Languages';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import ProgressLine from './components/ProgressLine';
import NextButton from './components/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { } from '@mui/icons-material';
// import TitleBar from './components/TitleBar'

function App() {
  return (
    <div className="App">
      {/* <TitleBar /> */}
      <Header />
      <Container>
          <ProgressLine />
      </Container>
      <Container>
          <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={8}>
            Welche Sprachen <br></br> sprichst du?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center"
            }}>
              <Languages />
          </Box>
      </Container>
      <Container>
          <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
            >
          <NextButton />
          </Box>
      </Container>
    </div>
  );
}

export default App;
