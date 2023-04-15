import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function EmployeeCard() {
  return (
    <Card sx={{ maxWidth: 240, minWidth:"fit-content" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Employee photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Employee Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          employee.mail@example.com
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EmployeeCard;
