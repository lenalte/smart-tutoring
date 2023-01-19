import { CardActions, CardContent, Slider, Stack, Typography } from '@mui/material';
import React from 'react';

const GenericSliderCard = ({ label, value, onChange }) => {

    return <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                {label}:
            </Typography>
            <CardActions>
                <Slider
                    size="small"
                    value={value}
                    onChange={(_, val) => onChange(val)}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    style={{ color: "#eb4034" }}
                />
            </CardActions>
            <Stack direction="row" spacing={6.5}>
                <Typography sx={{ mb: 1.5, fontSize: 13 }} color="text.secondary">
                    schlecht
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 13 }} color="text.secondary">
                    mittel
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 13 }} color="text.secondary">
                    gut
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 13 }} color="text.secondary">
                    fließend
                </Typography>
            </Stack>
        </CardContent>
    </React.Fragment>
}

export default GenericSliderCard;