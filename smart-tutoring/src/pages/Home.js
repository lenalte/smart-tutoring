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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#e5e5e5',
        }
    },
});


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
                <Typography variant="body1" color="white" paddingLeft={1.5} paddingRight={1.5}>
                    Entdecke die Vorteile einer individuellen Nachhilfe! Unsere Plattform bietet dir die Möglichkeit, schnell und einfach den perfekten Tutor für dich zu finden. Verbessere deine Noten und erreiche deine Ziele mit unserer Hilfe. Jetzt registrieren und deinen persönlichen Tutor finden!
                </Typography>
                <Container
                    sx={{ width: '13.5em' }}>
                    <RedButtons />
                </Container>



                <ThemeProvider theme={theme}>
                    <Box style={{ paddingLeft: 168, paddingTop: 127 }}>
                        <ArrowDownwardIcon fontSize='large' color='primary' />
                    </Box>
                </ThemeProvider>



            </Container>
        </Paper>
        <Box
            sx={{
                width: "cover",
                height: 690,
                backgroundColor: 'black',
            }}>

            <Container>
                <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={9} paddingLeft={1.5} color="white">
                    Über smart tutoring
                </Typography>
                <Typography variant="body2" color="white" paddingLeft={1.5}>
                    Um die bestmögliche Unterstützung für deine Lernbedürfnisse zu erhalten, bitten wir dich, dich zunächst anzumelden. Sobald du dich angemeldet hast, wirst du einige personenbezogene Fragen beantworten müssen, um deine Bedürfnisse besser nachvollziehen zu können.
                    <br /> <br /> Die Beantwortung dieser Fragen dauert nur wenige Minuten und ermöglicht es uns, den bestmöglichen Tutor für dich auszuwählen.
                </Typography>
            </Container>

            <Container>
                <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="white">
                    Wie du helfen kannst
                </Typography>
                <Typography variant="body2" color="white" paddingLeft={1.5} paddingRight={1.5}>
                    Du bist schon mit der Schule fertig oder hast einen guten Überblick über das Schulsystem?  Wir suchen engagierte Tutoren, die anderen helfen möchten, ihre Schulziele zu erreichen. Als Tutor auf unserer Plattform können Sie Ihre Fähigkeiten und Erfahrungen nutzen, um Schülern individuelle Unterstützung zu bieten.
                    Melden sie sich einfach an und los geht’s!
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
                height: 430,
                backgroundColor: 'black',
            }}>
            <Typography variant="body2" color="white" paddingLeft={3.5} paddingTop={7} paddingRight={3.5}>
                Wenn Schüler sich auf unserer Plattform registrieren, werden sie gebeten, einige personenbezogene Fragen zu beantworten, die uns dabei helfen, ihre Lernbedürfnisse und Ziele besser zu verstehen. Tutoren, die sich auf unserer Plattform registrieren, geben Informationen über ihre Qualifikationen und Erfahrungen an. Diese Informationen werden dann verwendet, um sicherzustellen, dass der Schüler mit einem Tutor gematcht wird, der die bestmögliche Unterstützung bieten kann.
                <br /> <br />
                Unser Algorithmus berücksichtigt auch die Verfügbarkeit des Tutors und die Nähe zum Schüler, um sicherzustellen, dass die Nachhilfe-Sessions so einfach wie möglich organisiert werden können.
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
                height: 830,
                backgroundColor: 'black',
            }}>

            <Container>
                <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="white">
                    Freie Räume
                </Typography>
                <Typography variant="body2" color="white" paddingLeft={1.5} paddingRight={1.5}>
                    Wir haben nun auch Schulen in unserem Netzwerk, die Räume für smart-tutoring zur Verfügung stellen. Das bedeutet, dass sowohl Tutoren als auch Schüler, die Nachhilfe suchen, die Möglichkeit haben, in einer sicheren und geeigneten Umgebung zu lernen.
                    <br></br>
                    <br></br>
                    Für Tutoren bedeutet dies, dass Sie nun Zugang zu Räumlichkeiten haben, die perfekt für Nachhilfe geeignet sind, ohne dass Sie sich Gedanken über die Verfügbarkeit von Räumlichkeiten machen müssen.
                    Weitere Informationen folgen.
                </Typography>
            </Container>

            <Container>
                <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.2} paddingBottom={4} paddingTop={7} paddingLeft={1.5} color="white">
                    Zertifikate
                </Typography>
                <Typography variant="body2" color="white" paddingLeft={1.5} paddingRight={1.5}>
                    Wir möchten unseren Tutoren dafür danken, dass sie ihre Zeit und Fähigkeiten zur Verfügung stellen, um Schülern zu helfen. Um ihre Bemühungen zu würdigen, bieten wir Zertifikate für unsere freiwilligen Tutoren an. Diese Zertifikate bestätigen die Anzahl der geleisteten Tutor-Stunden und die Fächer, in denen sie unterrichtet haben.
                    <br /> <br />
                    Diese Zertifikate können bei Bewerbungen, sei es für eine feste Anstellung oder für Praktika, als Nachweis für ihre Erfahrungen und Fähigkeiten im Bereich der Nachhilfe verwendet werden. Es zeigt ihre Bereitschaft, ihre Kenntnisse und Fähigkeiten zu teilen und anderen zu helfen.
                </Typography>
            </Container>
        </Box>
        <Footer />

    </Stack>
)

export default Home;
