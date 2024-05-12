import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, protein) {
  return { name, calories, fat, protein };
}

const rows = [
  createData('Location of Team', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Training', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Cost', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Commitment', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Location of Team', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Training', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Cost', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
  createData('Commitment', 'Often remote or varied', 'On-site or local', 'All reps based in US or your select country'),
];

export default function IndexTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FEATURES</TableCell>
            <TableCell align="left">MARKETING AGENCY</TableCell>
            <TableCell align="left">IN HOUSE SALES TEAM</TableCell>
            <TableCell align="left">LINKEDIN AGENTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
