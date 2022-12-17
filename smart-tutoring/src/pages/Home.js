import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { } from '@mui/icons-material';
import RedButtons from '../components/RedButtons';
import BackgroundImage from '../img/BackgroundImage.png';

const Home = () => (
    <Box     
    style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    height: "100vh",
    }}>
        <Container>
            <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={8} color="white">
            Finde deinen <br></br> Weg mit smart <br></br> tutoring
            </Typography>
            <Typography variant="body2" color="white">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            </Typography>
            <Container 
            sx={{width: '13.5em'}}>
                <RedButtons />
            </Container>
        </Container>
    </Box>
)

export default Home;