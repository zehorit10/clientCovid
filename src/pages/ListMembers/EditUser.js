// import React from "react";
// import { Dialog, Box, LinearProgress, Collapse, DialogTitle, DialogContent, IconButton, Alert, Button, Stack, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import Context from "../../context";
// import usePut from "../../api/hooks/put";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import roles from "../../constant/roles";
// import Edit from "@mui/icons-material/Edit";
// import { SettingsAccessibilityRounded } from "@mui/icons-material";


// function EditUser({ openEdit, setOpenEdit, user }) {

//     const [fName, setFName] = React.useState(user.fName);
//     const [lName, setLName] = React.useState(user.lName);
//     const [id, setId] = React.useState(user._id);
//     const [city, setCity] = React.useState(user.address.city);
//     const [street, setStreet] = React.useState(user.address.street);
//     const [houseNumber, setHouseNumber] = React.useState(user.address.houseNumber);
//     const [phone, setPhone] = React.useState(user.phone);
//     const [telephone, setTelephone] = React.useState(user.telephone);
//     const [firstVaccinationDate, setFirstVaccinationDate] = React.useState(user.firstVaccination.date);
//     const [firstVaccinationVaccine, setFirstVaccinationVaccine] = React.useState(user.firstVaccination.vaccine);
//     const [secondVaccinationDate, setSecondVaccinationDate] = React.useState(user.secondVaccination.date);
//     const [secondVaccinationVaccine, setSecondVaccinationVaccine] = React.useState(user.secondVaccination.vaccine);
//     const [thirdVaccinationDate, setThirdVaccinationDate] = React.useState(user.thirdVaccination.date);
//     const [thirdVaccinationVaccine, setThirdVaccinationVaccine] = React.useState(user.thirdVaccination.vaccine);
//     const [fourthVaccinationDate, setFourthVaccinationDate] = React.useState(user.fourthVaccination.date);
//     const [fourthVaccinationVaccine, setFourthVaccinationVaccine] = React.useState(user.fourthVaccination.vaccine);
//     const [positiveTest, setPositiveTest] = React.useState(user.positiveTest);
//     const [recovery, setRecovery] = React.useState(user.recovery);

//     const { getData, data, loading, error } = usePut("users/", { _id: user._id, fName, lName, phone, city, street, houseNumber, telephone, firstVaccinationDate, firstVaccinationVaccine, secondVaccinationDate, secondVaccinationVaccine, thirdVaccinationDate, thirdVaccinationVaccine, fourthVaccinationDate, fourthVaccinationVaccine, positiveTest, recovery });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         getData();
//     }

//     React.useEffect(() => {
//         setFName(user.fName);
//         setLName(user.lName);
//         setCity(user.address.city);
//         setStreet(user.address.street);
//         setHouseNumber(user.address.houseNumber);
//         setPhone(user.phone);
//         setTelephone(user.telephone);
//         setFirstVaccinationDate(user.firstVaccination.date);
//         setFirstVaccinationVaccine(user.firstVaccination.vaccine);
//         setSecondVaccinationDate(user.secondVaccination.date);
//         setSecondVaccinationVaccine(user.secondVaccination.vaccine);
//         setThirdVaccinationDate(user.thirdVaccination.date);
//         setThirdVaccinationVaccine(user.thirdVaccination.vaccine);
//         setFourthVaccinationDate(user.fourthVaccination.date);
//         setFourthVaccinationVaccine(user.fourthVaccination.vaccine);
//         setPositiveTest(user.positiveTest);
//         setRecovery(user.recovery);
//     }, [user]);

//     React.useEffect(() => {
//         if (data && !error) {
//             toast.success("השינויים נשמרו בהצלחה");
//             setTimeout(() => {
//                 setOpenEdit(false);
//             }, 1000);
//         }
//     }, [data]);

//     React.useEffect(() => {
//         if (error) {
//             toast.error("העדכון נכשל");
//         }
//     }, [error]);

//     return (
//         <Dialog open={openEdit}>
//             <DialogTitle variant="contained" align="center">משתמש</DialogTitle>
//             <IconButton onClick={() => {
//                 setOpenEdit(false);
//             }} sx={{ position: "absolute", top: 6, right: 6 }}>
//                 <CloseIcon />
//             </IconButton>
//             <DialogContent>
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
//                         size="small"
//                         name="fName"
//                         value={fName || ''}
//                         onChange={(e) => setFName(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="שם משפחה"
//                         variant="outlined"
//                         size="small"
//                         name="lName"
//                         value={lName || ''}
//                         onChange={(e) => setLName(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="עיר"
//                         variant="outlined"
//                         size="small"
//                         name="address.city"
//                         value={address.city || ''}
//                         onChange={(e) => setCity(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="רחוב"
//                         variant="outlined"
//                         size="small"
//                         name="address.street"
//                         value={address.street || ""}
//                         onChange={(e) => setStreet(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="מספר בית"
//                         variant="outlined"
//                         size="small"
//                         name="address.houseNumber"
//                         value={address.houseNumber || ""}
//                         onChange={(e) => setHouseNumber(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך לידה"
//                         variant="outlined"
//                         size="small"
//                         name="dateOfBirth"
//                         value={dateOfBirth || ''}
//                         onChange={(e) => setDateOfBirth(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="טלפון נייד"
//                         variant="outlined"
//                         valsize="small"
//                         name="phone"
//                         value={"phone" || ''}
//                         onChange={(e) => setPhone(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="טלפון בבית"
//                         variant="outlined"
//                         size="small"
//                         name="telephone"
//                         value={telephone || ''}
//                         onChange={(e) => setTelephone(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך חיסון ראשון"
//                         variant="outlined"
//                         size="small"
//                         name="firstVaccination.date"
//                         value={firstVaccination.date || ''}
//                         onChange={(e) => setFirstVaccinationDate(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="חברה חיסון ראשון"
//                         variant="outlined"
//                         size="small"
//                         name="firstVaccination.vaccine"
//                         value={firstVaccination.vaccine || ''}
//                         onChange={(e) => setFirstVaccinationVaccine(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך חיסון שני"
//                         variant="outlined"
//                         size="small"
//                         name="secondVaccination.date"
//                         value={secondVaccination.date || ''}
//                         onChange={(e) => setSecondVaccinationDate(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="חברה חיסון שני"
//                         variant="outlined"
//                         size="small"
//                         name="secondVaccination.vaccine"
//                         value={"secondVaccination.vaccine" || ""}
//                         onChange={(e) => setSecondVaccinationVaccine(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך חיסון שלישי"
//                         variant="outlined"
//                         size="small"
//                         name="thirdVaccination.date"
//                         value={thirdVaccination.date || ''}
//                         onChange={(e) => setThirdVaccinationDate(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="חברה חיסון שלישי"
//                         variant="outlined"
//                         size="small"
//                         name="thirdVaccination.vaccine"
//                         value={thirdVaccination.vaccine || ''}
//                         onChange={(e) => setThirdVaccinationVaccine(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך חיסון רביעי"
//                         variant="outlined"
//                         size="small"
//                         name="fourthVaccination.date"
//                         value={fourthVaccination.date || ''}
//                         onChange={(e) => setFourthVaccinationDate(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="חברה חיסון רביעי"
//                         variant="outlined"
//                         size="small"
//                         name="fourthVaccination.vaccine"
//                         value={"fourthVaccination.vaccine" || ''}
//                         onChange={handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך קבלת תוצאה חיובית"
//                         variant="outlined"
//                         size="small"
//                         name="positiveTest"
//                         value={positiveTest || ''}
//                         onChange={(e) => setPositiveTest(e.target.value)}
//                         fullWidth
//                     />
//                     <TextField
//                         label="תאריך החלמה"
//                         variant="outlined"
//                         size="small"
//                         name="recovery"
//                         value={recovery || ''}
//                         onChange={(e) => setRecovery(e.target.value)}
//                         fullWidth
//                     />
//                     <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש </Button>
//                 </Stack>
//             </DialogContent>
//         </Dialog>
//     )
// }
// export default EditUser;