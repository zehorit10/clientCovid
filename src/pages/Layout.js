import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';


function Layout() {
    return (
        <Box sx={{ width: 1}}>
            <Box component="header" sx={{ width: 1, height: "150px" }}>
                <Header />
            </Box>
            <Box component="main" sx={{ width: 1, minHeight: "85vh" }}>
                <Outlet />
            </Box>
            <Box component="footer" sx={{ width: 1 }}>
                <Typography variant="h6" align="center">zehorit cohen</Typography>
                <Typography variant="subtitle2" align="center">&copy; 2022</Typography>
            </Box>
        </Box>
    );
}

export default Layout;
