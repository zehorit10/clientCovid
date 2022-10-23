import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Tabs, Tab, Typography } from '@mui/material';

function Header() {
    const [value, setValue] = React.useState("/");
    let navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue);
    };

    return (
        <>
            <Box sx={{ width: 1, height: 0.65, backgroundColor: "primary.main" }}>
                <Typography align="center" color="secondary" variant="h3">
                    מערכת ניהול קורונה לקופת חולים
                </Typography>
            </Box>
            <Box sx={{ width: 1, height: 0.35, backgroundColor: "secondary.main" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="דף הבית" value="/" />
                    <Tab label="הוספת חבר לקופה" value="/addMembers" />
                    <Tab label="רשימת החברים בקופה" value="/listMembers" />
                </Tabs>
            </Box>

        </>
    );
}
export default Header;