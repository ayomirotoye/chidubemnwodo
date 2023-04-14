import { Button, Grid } from '@mui/material'
import React from 'react'
import EmployeeCard from '../components/EmployeeCard'

function ClockInClockOut() {
  const handleClockIn = () => {
    // handle clock in logic
  }

  const handleClockOut = () => {
    // handle clock out logic
  }
  return (
    <Grid px="2rem" container spacing={2} justifyContent="center" alignItems="center" minHeight="100vh">
      <Grid item xs={12} sm={6} md={4}>
        <EmployeeCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" color="primary" onClick={handleClockIn}>
          Clock In
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" color="secondary" onClick={handleClockOut}>
          Clock Out
        </Button>
      </Grid>
    </Grid>
  )
}

export default ClockInClockOut