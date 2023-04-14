import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react'

function EmployeeCard() {
  return (
<Card>
      <CardHeader
        avatar={
          <Avatar>
            {/* Insert employee avatar here */}
          </Avatar>
        }
        title="Employee Name"
        subheader="employee.email@example.com"
      />
    </Card>
  )
}

export default EmployeeCard