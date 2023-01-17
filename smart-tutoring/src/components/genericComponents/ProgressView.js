import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import ProgressLine from "../ProgressLine"
import Button from "@mui/material/Button"
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


const ProgressView = ({ steps, current, title, children, nextAction, nextLabel, topContent }) => {

    const navigate = useNavigate();
    // eslint-disable-next-line
    const [searchParams, _] = useSearchParams();
    const targetPath = searchParams.get("targetPath");



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
            <Button variant="contained"
                sx={{ borderRadius: 50 }}
                className='button'
                // onClick={nextAction}
                onClick={() => {
                    console.log('length', steps)
                    if (current === steps - 1) {
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
                    } else {
                        nextAction();
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
                {nextLabel}</Button>
        </Container></>
}

export default ProgressView;