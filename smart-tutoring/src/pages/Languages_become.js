import Languages from '../components/Languages';
import Typography from '@mui/material/Typography';
import ProgressLine from '../components/ProgressLine';
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { } from '@mui/icons-material';

const LanguagesB = () => (
        <div className="App">
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
        </div>
)

export default LanguagesB;