import React from "react";

import { Grid, Alert, AlertTitle } from "@mui/material";
import UploadImage from "./UploadImage";
import ProductForm from "./MembersForm";

import usePost from "../../api/hooks/post";

function AddMembers() {

    const [inputs, setInputs] = React.useState({});
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const { getData, data, loading, error } = usePost("users/", inputs)

    const handleSubmit = async (e) => {
        e.preventDefault();
        getData();
    }

    React.useEffect(() => {
        if (data && !data.errors) {
            setInputs({});
        }
    }, [data])



    return (
        <Grid container spacing={2} sx={{ my: 3 }} component="form" onSubmit={handleSubmit}>
            <Grid item xs={12} md={4}>
                <UploadImage inputs={inputs} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
                <ProductForm inputs={inputs} handleChange={handleChange} loading={loading} />
            </Grid>
            <Grid item xs={12} md={4}>
                {(error) && <Alert severity="error">
                    <AlertTitle>שגיאה</AlertTitle>
                    משהו בפרטי הלקוח לא תקין, אנא נסו שנית!!
                </Alert>}
                {(data && !data.errors) &&<Alert severity="success">
                    <AlertTitle>הצלחה</AlertTitle>
                    לקוח נשמר בהצלחה!
                </Alert>}
            </Grid>
        </Grid>
    )
}
export default AddMembers;


// import React from "react";
// import { Dialog,Box,LinearProgress, DialogTitle, DialogContent, IconButton, Alert, Button, Stack, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
// import useHttp from "../../api/hooks/http";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function AddMembers() {

//     const [fname, setFname] = React.useState("");
//     const [lName, setLname] = React.useState("");
//     const [id, setId] = React.useState("");
//     const [city, setCity] = React.useState("");
//     const [street, setStreet] = React.useState("");
//     const [houseNumber, setHouseNumber] = React.useState("");
//     const [dateOfBirth, setDateOfBirth] = React.useState("");
//     const [phone, setPhone] = React.useState("");
//     const [telphone, setTelPhone] = React.useState("");
//     const [firstVaccination, setFirstVaccination] = React.useState("");
//     const [secondVaccination, setSecondVaccination] = React.useState("");
//     const [thirdVaccination, setThirdVaccination] = React.useState("");
//     const [fourthVaccination, setFourthVaccination] = React.useState("");
//     const [positiveTest, setPositiveTest] = React.useState("");
//     const [recovery, setRecovery] = React.useState("");

  

//     const { getData, data, loading, error } = useHttp("register");

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         getData({fname, lName, id, city, street, houseNumber, dateOfBirth, phone, telphone, firstVaccination, secondVaccination, thirdVaccination, fourthVaccination, positiveTest, recovery});
//     }

//     React.useEffect(() => {
//         if (data && data.register) {
//             toast.success("ההוספה בוצעה בהצלחה");
//             // setTimeout(() => {
//             //     setOpen(false);
//             // }, 4000);
//             setFname("");
//             setLname("");
//             setId("");
//             setCity("");
//             setStreet("");
//             setHouseNumber("");
//             setDateOfBirth("");
//             setPhone("");
//             setTelPhone("");
//             setFirstVaccination("");
//             setSecondVaccination("");
//             setThirdVaccination("");
//             setFourthVaccination("");
//             setPositiveTest("");
//             setRecovery("");
//         }
//     }, [data]);
//     React.useEffect(() => {
//         if (error) {
//             toast.error("ההוספה נכשלה");
//         }
//     }, [error]);

//     return (
//         <Box>
//             <Typography variant="h4" component="h1" gutterBottom>
//                 הוספת חברים
//             </Typography>
//                 <Stack direction="column" spacing={2} component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
//                     <ToastContainer
//                         position="top-right"
//                         autoClose={4000}
//                         hideProgressBar={false}
//                         newestOnTop={false}
//                         closeOnClick
//                         rtl={false}
//                         pauseOnFocusLoss
//                         draggable
//                         pauseOnHover
//                     />
//                     <TextField
//                         label="שם פרטי"
//                         variant="outlined"
//                         value={fname}
//                         onChange={(e) => setFname(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="שם משפחה"
//                         variant="outlined"
//                         value={lName}
//                         onChange={(e) => setLname(e.target.value)}
//                         required
//                     />
//                     <TextField

//                         label="תעודת זהות"
//                         variant="outlined"
//                         value={id}
//                         onChange={(e) => setId(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="עיר"
//                         variant="outlined"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="רחוב"
//                         variant="outlined"
//                         value={street}
//                         onChange={(e) => setStreet(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="מספר בית"
//                         variant="outlined"
//                         value={houseNumber}
//                         onChange={(e) => setHouseNumber(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="תאריך לידה"
//                         variant="outlined"
//                         value={dateOfBirth}
//                         onChange={(e) => setDateOfBirth(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="טלפון נייד"
//                         variant="outlined"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="טלפון בבית"
//                         variant="outlined"
//                         value={telphone}
//                         onChange={(e) => setTelPhone(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="תאריך חיסון ראשון"
//                         variant="outlined"
//                         value={firstVaccination}
//                         onChange={(e) => setFirstVaccination(e.target.value)}
//                         required
//                     />
//                     <TextField
//                         label="תאריך חיסון שני"
//                         variant="outlined"
//                         value={secondVaccination}
//                         onChange={(e) => setSecondVaccination(e.target.value)}
//                     />
//                     <TextField
//                         label="תאריך חיסון שלישי"
//                         variant="outlined"
//                         value={thirdVaccination}
//                         onChange={(e) => setThirdVaccination(e.target.value)}
//                     />
//                     <TextField
//                         label="תאריך חיסון רביעי"
//                         variant="outlined"
//                         value={fourthVaccination}
//                         onChange={(e) => setFourthVaccination(e.target.value)}
//                     />
//                     <TextField
//                         label="תאריך קבלת תוצאה חיובית"
//                         variant="outlined"
//                         value={positiveTest}
//                         onChange={(e) => setPositiveTest(e.target.value)}
//                     />
//                     <TextField
//                         label="תאריך החלמה"
//                         variant="outlined"
//                         value={recovery}
//                         onChange={(e) => setRecovery(e.target.value)}
//                     />
//                     <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש </Button>
//                 </Stack>
//         </Box>
//     )
// }
// export default AddMembers;