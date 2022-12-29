import * as React from 'react';
import Skills from '../components/Skills';
import Typography from '@mui/material/Typography';
import ProgressLine from '../components/ProgressLine';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';

const SkillB = () => (
        <div className="App">
          <HeaderBlack />
          <Container>
              <ProgressLine />
          </Container>
          <Container>
              <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={8}>
                Wie gut sprichst du <br></br> diese Sprachen?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}>
                  <Skills />
              </Box>
          </Container>
        </div>
)

export default SkillB;