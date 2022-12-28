import * as React from 'react';
import Bio from '../components/Bio';
import Typography from '@mui/material/Typography';
import ProgressLine from '../components/ProgressLine';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { } from '@mui/icons-material';
import HeaderBlack from '../components/HeaderBlack';

const BioB = () => (
        <div className="App">
          <HeaderBlack />
          <Container>
              <ProgressLine />
          </Container>
          <Container>
              <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={8}>
                Etwas über dich <br></br> (optional)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}>
                  <Bio />
              </Box>
          </Container>
        </div>
)

export default BioB;