import React from "react";
import { useParams } from 'react-router-dom'
import { Grid, Typography, Stack, LinearProgress, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Divider } from "@mui/material";
import { Box } from "@mui/system";
import useGet from "../../api/hooks/get";


function UserDetails() {

    const { id } = useParams();
    const { getData, data, loading, error } = useGet("users/" + ({_id} || "0"));
    

    if (loading) {
        return <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: "50vh" }}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </Stack>
    }
    
    if (error) {
        return <div>Error</div>;
    }

    return (
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={4}>
                <img src={data.image} alt={data.fName} style={{ width: "100%", maxHeight: "100%" }} />
            </Grid>
            <Grid item xs={8}>
                <Typography align="left" variant="h4">{data.fName} {data.lName}  </Typography>
                <Typography align="left" variant="body1">
                    <span>תעודת זהות: {data._id}</span>
                    <br />
                    <span>כתובת: {data.city} {data.street} {data.houseNumber}</span>
                    <br />
                    <span>מחיר: {data.price} ש"ח</span>
                    <br />
                    <span>תאריך יום הולדת: {data.dateOfBirth} </span>
                    <br />
                    <span>טלפון: {data.telephone} </span>
                    <br />
                    <span>פלאפון נייד: {data.phone} </span>
                    <br />
                    <span>זמין: {data.dateOfBirth} </span>
                    <br />
                    <span>חיסון ראשון: {data.firstVaccination.date} </span>
                    <span> חברת: {data.firstVaccination.vaccine} </span>
                    <br />
                    <span>חיסון שני: {data.secondVaccination.date} </span>
                    <span> חברת: {data.secondVaccination.vaccine} </span>
                    <br />
                    <span>חיסון שלישי: {data.thirdVaccination.date} </span>
                    <span> חברת: {data.thirdVaccination.vaccine} </span>
                    <br />
                    <span>חיסון רביעי: {data.fourthVaccination.date} </span>
                    <span> חברת: {data.fourthVaccination.vaccine} </span>
                    <br />
                    <span>מועד קבלת תוצאה חיובית: {data.positiveTest} </span>
                    <br />
                    <span>מועד ההחלמה: {data.recovery} </span>
                    <br />
                    

                </Typography>
            </Grid>
        </Grid>
    )
}
export default UserDetails;