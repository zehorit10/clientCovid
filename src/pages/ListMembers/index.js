import React from "react";
import useGet from "../../api/hooks/get";
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { Grid, Stack, LinearProgress, Box, Button } from "@mui/material";
// import {useState, useEffect} from 'react';
// import SharchBar from "./SearchBar";

function ListMembers() {

    let navigate = useNavigate();


    // const [users, setUsers] = useState([]);
    // const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     useGet("users").then((res) => {
    //         setUsers(res);
    //         return res; 
    //     }).then((res) => {
    //         setSearchResults(res);
    //     })  
    // },[])

    const { getData, data, loading, error } = useGet("users/");

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
        <Grid container spacing={4} padding={3} sx={{ my: 4 }}>

            <Button variant='contained' fullWidth onClick={() => navigate("../AddMembers")}>הוספת לקוח</Button>
            {/* <SharchBar users={users} setSearchResults={setSearchResults} /> */}
            {data.map((u, i) => <Grid key={i} item xs={2}><UserCard user={u} /></Grid>)}
        </Grid>
    );
}
export default ListMembers;

// import useGet from "../../api/hooks/get";

// function ListMembers() {
//     const { data, loading, error } = useGet("users");
//     if (loading) {
//         return <div>loading...</div>
//     }
//     if (error) {
//         return <div>error</div>
//     }


//     return (
//         <div>
//             <h1>רשימת חברים</h1>
//             {/* {loading && <p>טוען...</p>}
//             {error && <p>שגיאה</p>}
//             {data && data.members && data.members.map(member => <p>{member.name}</p>)} */}
//         </div>
//     )
// }
// export default ListMembers;