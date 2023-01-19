import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import ProgressLine from "../ProgressLine"
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


const ProgressView = ({ steps, current, title, children, nextAction, nextLabel, topContent, loading }) => {

    const navigate = useNavigate();
    // eslint-disable-next-line
    const [searchParams, _] = useSearchParams();
    const targetPath = searchParams.get("targetPath");

    // const handleNextClick = () => {
    //     const data = [age, schools, location, languages, bio, subjects];
    //     // send data to the backend

    //     fetch('/api/data', {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       });
    //   }

    console.log("loading", loading, typeof (loading))


    return <><Container>
        {topContent}
        <ProgressLine steps={steps} current={current} />
    </Container>
        <Container>
            <Typography fontFamily={"Judson"} variant="h4" component="h2" lineHeight={1.5} paddingBottom={8}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                {children}
            </Box>
            <LoadingButton variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                loading={loading}
                // onClick={nextAction}
                onClick={() => {
                    console.log('length', steps)
                    nextAction();
                    if (current === steps) {
                        switch (targetPath) {
                            case 'becomeTutor':
                                navigate(`/profileSelf?targetPath=becomeTutor`);
                                console.log('Hello')
                                break;
                            case 'findTutor':
                                navigate(`/matchesfinder?targetPath=findTutor`);
                                console.log('Hello2')
                                break;
                            default:
                                console.log('Hello3')
                                navigate('/');
                        }
                        // navigate('/profileBecome');
                    }
                }}
                style={{
                    position: 'fixed',
                    width: '9em',
                    justifyContent: 'center',
                    left: '7em',
                    bottom: '4em',
                    color: 'white',
                    fontFamily: 'Judson',
                    fontSize: '17px',
                    textTransform: 'none',
                    padding: '8px 65px 8px 65px',
                    backgroundColor: 'black',
                }}>
                {nextLabel}</LoadingButton>
        </Container></>
}

export default ProgressView;