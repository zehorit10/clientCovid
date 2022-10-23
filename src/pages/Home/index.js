import React from "react";
import { Grid, Typography } from "@mui/material";

function Home() {
    return (
        <Grid container padding={3} spacing={2} sx={{ my: 3 }}>
            <Grid item xs={4}>
                <img src={`./images/Logo.jpg`} style={{
                    width: "100%",
                    maxHeight: "100%"
                }} />
            </Grid>
            <Grid item xs={8}>
            <br />

                <Typography align="center" variant="h4">מערכת ניהול קורונה</Typography>
                <Typography align="center" variant="body1">
                    <br />
                    
                    <br />
                    <br />
                    אנחנו מייצרים רהיטים מעץ מלא במחירים מיוחדים לפי כל מידה בנוסף מזרנים ומיטות מכל הסוגים ומקפידים על קידום ועכשווית מוצרינו.
                    <br />
                    <br />
                    מטרתנו העיקרית לדאוג שאתם תקבלו מוצרים איכותיים במחירים שפויים!
                </Typography>
            </Grid>
        </Grid>
    )
}
export default Home;