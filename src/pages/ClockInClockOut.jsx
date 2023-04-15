import { Button, Grid } from "@mui/material";
import React from "react";
import EmployeeCard from "../components/EmployeeCard";

function ClockInClockOut() {
  const handleClockIn = () => {
    // handle clock in logic
  };

  const handleClockOut = () => {
    // handle clock out logic
  };
  return (
    <Grid
      px="2rem"
      container
      spacing={8}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      direction="column"
    >
      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <Grid item>
          <EmployeeCard />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        spacing="1rem"
      >
        <Grid item>
          <Button variant="contained" color="info" onClick={handleClockIn}>
            Clock In
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="warning" onClick={handleClockOut}>
            Clock Out
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ClockInClockOut;
