import * as React from 'react';
import Matches from '../components/Matches';
import Stack from '@mui/material/Stack';
import HeaderBlack from '../components/HeaderBlack';
import Typography from '@mui/material/Typography';


const MatchesF = () => {
    return <div>
        <Stack>
            <HeaderBlack />
            <Typography fontFamily={"Judson"} sx={{ fontSize: 27 }} variant="body1" lineHeight={1.2} paddingBottom={4} paddingTop={6} paddingLeft={12} color="black">
                Deine Matches
            </Typography>
            <Stack spacing={1.5}>
                <Matches />
            </Stack>
        </Stack>
    </div>
}

export default MatchesF;