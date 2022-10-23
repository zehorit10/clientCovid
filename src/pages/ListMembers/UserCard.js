import * as React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import UserDetails from './UserDetails';
import {useNavigate} from 'react-router-dom';
import { IconButton, Alert,  Link, Typography, Button, CardMedia, CardContent, CardActions, Card } from "@mui/material";
import usePost from "../../api/hooks/post";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function UserCard({ user }) {

  let navigate = useNavigate();

  return (
    // <Card sx={{ maxWidth: 345 }}>
    <Card>
      <CardMedia
        width="25%"
        component="img"
        height="140"
        image={user.image}
        alt={user.fName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.fName} {user.lName}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          תעודת זהות: {user._id}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          {user.dateOfBirth}.time
          {/* תאריך לידה:  {user.dateOfBirth.year}/{user.dateOfBirth.month}/{user.dateOfBirth.day} */}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          פלאפון: {user.phone}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          כתובת: {user.address.city} {user.address.street} {user.address.houseNumber}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' fullWidth onClick={() => navigate("/UserDetails/" + user._id )}>פרטים נוספים</Button>
        {/* <Button variant='contained' fullWidth onClick={() => <UserDetails user/>}>פרטים נוספים</Button> */}
      </CardActions>
    </Card>
  );
}