import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia>
          <CardMedia
            sx={{ height: 345 }}
            image="https://images.pexels.com/photos/20106971/pexels-photo-20106971/free-photo-of-a-restaurant-sign-on-the-side-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              American Fast Food
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="text.secondary"
              component="div"
            >
              50% off on your first order
            </Typography>

            <div className="py-2 space-y-2">
              <p>czvzxv</p>
              <p className="text-sm text-blue-500">12/12/2022 12:00 AM</p>
              <p className="text-sm text-red-500">12/12/2022 12:00 PM</p>
            </div>
          </CardContent>
        </CardMedia>

        <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default EventCard;
