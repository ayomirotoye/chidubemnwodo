import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useState } from 'react'






  const EmployeeTable = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const columns = [
      { id: 'name', label: 'Name', minWidth: 170 },
      { id: 'email', label: 'Email', minWidth: 100 },
      { id: 'date', label: 'Date', minWidth: 100 },
      { id: 'clockIn', label: 'Clock In', minWidth: 100 },
      { id: 'clockOut', label: 'Clock Out', minWidth: 100 },
    ];

    function createData(name, email, date, clockIn, clockOut) {
      return { name, email, date, clockIn, clockOut };
    }

    const rows = [
      createData('John Doe', 'john.doe@example.com', '2022-04-15', '08:00', '16:30'),
      createData('Jane Doe', 'jane.doe@example.com', '2022-04-15', '07:45', '16:15'),
      createData('Bob Smith', 'bob.smith@example.com', '2022-04-15', '08:10', '17:00'),
      createData('Bob Smith', 'bob.smith@example.com', '2022-04-15', '08:10', '17:00'),
      createData('Bob Smith', 'bob.smith@example.com', '2022-04-15', '08:10', '17:00'),
      createData('Bob Smith', 'bob.smith@example.com', '2022-04-15', '08:10', '17:00'),
      createData('Bob Smith', 'bob.smith@example.com', '2022-04-15', '08:10', '17:00'),
      createData('Bob Smith', 'bob.smith@example.com', '2022-04-15', '08:10', '17:00'),
      createData('John Doe', 'john.doe@example.com', '2022-04-15', '08:00', '16:30'),
      createData('John Doe', 'john.doe@example.com', '2022-04-15', '08:00', '16:30'),
    ];

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <Paper sx={{width:'100%'}}>
      <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default EmployeeTable