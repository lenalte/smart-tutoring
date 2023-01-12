import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


export default function Matches() {
    // const [value, setValue] = React.useState(2);
    return (
        <Stack style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Card sx={{ minWidth: 250 }} style={{ backgroundColor: "#e5e5e5" }}>
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                            <Rating name="read-only" value={3} readOnly size="small" style={{ paddingTop: 8 }} />
                        </Box>
                        <Typography fontFamily={"Judson"} sx={{ fontSize: 17 }} variant="body1" color="black" gutterBottom>
                            Vorname Nachname <br /> Alter
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>

        </Stack>
    )
}