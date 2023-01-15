import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import ProgressLine from "../ProgressLine"
import Button from "@mui/material/Button"

const ProgressView = ({ steps, current, title, children, nextAction, nextLabel, topContent }) => {



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
                onClick={nextAction}
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