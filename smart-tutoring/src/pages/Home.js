import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { } from '@mui/icons-material';
import RedButtons from '../components/RedButtons';
import BackgroundImage from '../img/BackgroundImage.png';
import HandsIllustration from '../img/HandsIllustration.png';
import ChildImage from '../img/ChildImage.png';
import HeaderWhite from '../components/HeaderWhite';
import Footer from '../components/Footer';
import { CssBaseline } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Home = () => (
    <Stack>
        <Paper 
        style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        }}>
            <CssBaseline />
            <HeaderWhite />
            <Container>
                <Typography fontFamily={"Judson"} variant="h3" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={10} paddingLeft={1.5} color="white">
                Finde deinen <br></br> Weg mit smart <br></br> tutoring
                </Typography>
                <Typography variant="body2" color="white" paddingLeft={1.5}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                </Typography>
                <Container 
                sx={{width: '13.5em'}}>
                    <RedButtons />
                </Container>
            </Container>
        </Paper>
        <Box
        sx={{
            width: "cover",
            height: 620,
            backgroundColor: 'black',
        }}>

        <Container>
            <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={9} paddingLeft={1.5} color="white">
            Über smart tutoring
            </Typography>
            <Typography variant="body2" color="white" paddingLeft={1.5}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>
        </Container>

        <Container>
            <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="white">
            Wie du helfen kannst
            </Typography>
            <Typography variant="body2" color="white" paddingLeft={1.5}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>
        </Container>
    
        </Box>

        <Paper style={{
                   backgroundImage: `url(${HandsIllustration})`,
                   backgroundSize: "100vw",
                   height: "35vh",
        }}>
            <Container>
                <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="black">
                So funktioniert's
                </Typography>
            </Container>
        </Paper>

        <Box  
        sx={{
            width: "cover",
            height: 200,
            backgroundColor: 'black',
        }}>
            <Typography variant="body2" color="white" paddingLeft={3.5} paddingTop={7} paddingRight={3.5}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>

        </Box>

        <Paper style={{
                   backgroundImage: `url(${ChildImage})`,
                   backgroundSize: "100vw",
                   height: "35vh",
        }}>
        </Paper>

         <Box
        sx={{
            width: "cover",
            height: 610,
            backgroundColor: 'black',
        }}>

        <Container>
            <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="white">
            Freie Räume
            </Typography>
            <Typography variant="body2" color="white" paddingLeft={1.5}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>
        </Container>

        <Container>
            <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="white">
            Zertifikate
            </Typography>
            <Typography variant="body2" color="white" paddingLeft={1.5}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </Typography>
        </Container>
        </Box>
        <Footer />

        </Stack>
)

export default Home;