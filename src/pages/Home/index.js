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
                    הנגיף עובר מאדם לאדם כאשר נשא נושם החוצה נתז נשימתי ואירוסולים המרחפים באוויר, שמכילים את הווירוס. אדם אחר יכול לנשום פנימה את הנתז הנשימתי והאירוסולים.
                    <br />
                    <br />
                    כמו כן הם יכולים לנחות על העיניים האף והפה, במיוחד במקרה של שיעול ועיטוש.
                    <br />
                    <br />
                    הדבקה ממשטחים נגועים וממגע של הידיים בעיניים אף ופה אינה נחשבת נפוצה, למרות מה שחשבו בהתחלה.                
                    </Typography>
            </Grid>
        </Grid>
    )
}
export default Home;