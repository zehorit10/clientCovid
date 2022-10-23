import { TextField, Stack, Button, LinearProgress, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";

function MembersForm({ inputs, handleChange, loading }) {

   const [isLoading, setIsLoading] = useState(loading);
   useEffect(() => {
      setIsLoading(loading);
   }, [loading])

   return (
      <Stack direction="column" spacing={2}>
         <TextField
            label="שם פרטי"
            variant="outlined"
            size="small"
            name="fName"
            value={inputs["fName"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="שם משפחה"
            variant="outlined"
            size="small"
            name="lName"
            value={inputs["lName"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField

            label="תעודת זהות"
            variant="outlined"
            size="small"
            name="_id"
            value={inputs["_id"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="עיר"
            variant="outlined"
            size="small"
            name="address.city"
            value={inputs["address.city"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="רחוב"
            variant="outlined"
            size="small"
            name="address.street"
            value={inputs["address.street"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="מספר בית"
            variant="outlined"
            size="small"
            name="address.houseNumber"
            value={inputs["address.houseNumber"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="תאריך לידה"
            variant="outlined"
            size="small"
            name="dateOfBirth"
            value={inputs["dateOfBirth"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="טלפון נייד"
            variant="outlined"
            valsize="small"
            name="phone"
            value={inputs["phone"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="טלפון בבית"
            variant="outlined"
            size="small"
            name="telephone"
            value={inputs["telephone"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="תאריך חיסון ראשון"
            variant="outlined"
            size="small"
            name="firstVaccination.date"
            value={inputs["firstVaccination.date"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="חברה חיסון ראשון"
            variant="outlined"
            size="small"
            name="firstVaccination.vaccine"
            value={inputs["firstVaccination.vaccine"] || ""}
            onChange={handleChange}
            fullWidth
            required
         />
         <TextField
            label="תאריך חיסון שני"
            variant="outlined"
            size="small"
            name="secondVaccination.date"
            value={inputs["secondVaccination.date"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="חברה חיסון שני"
            variant="outlined"
            size="small"
            name="secondVaccination.vaccine"
            value={inputs["secondVaccination.vaccine"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="תאריך חיסון שלישי"
            variant="outlined"
            size="small"
            name="thirdVaccination.date"
            value={inputs["thirdVaccination.date"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="חברה חיסון שלישי"
            variant="outlined"
            size="small"
            name="thirdVaccination.vaccine"
            value={inputs["thirdVaccination.vaccine"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="תאריך חיסון רביעי"
            variant="outlined"
            size="small"
            name="fourthVaccination.date"
            value={inputs["fourthVaccination.date"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="חברה חיסון רביעי"
            variant="outlined"
            size="small"
            name="fourthVaccination.vaccine"
            value={inputs["fourthVaccination.vaccine"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="תאריך קבלת תוצאה חיובית"
            variant="outlined"
            size="small"
            name="positiveTest"
            value={inputs["positiveTest"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            label="תאריך החלמה"
            variant="outlined"
            size="small"
            name="recovery"
            value={inputs["recovery"] || ""}
            onChange={handleChange}
            fullWidth
         />
         {isLoading && <LinearProgress />}
         <Button type="submit" variant="contained" disabled={isLoading}>
            שמירת לקוח
         </Button>
      </Stack>
   )
}
export default MembersForm;