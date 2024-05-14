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
  createData('Training', 'Standardized across clients', 'Customized to product', 'No training required.'),
  createData('Cost', 'Monthly retainer + campaign costs ($2,500 + thousands in ad spend)/ month', 'Salary + benefits + training + recruiting + commissions + onboarding $5,000-$10,000 a month + thousands in training + thousands in recruiting + thousands in onboarding', '$180/month, significant cost savings'),
  createData('Commitment', 'Average 3-6 months ', 'Limited by team capacity', 'Month to month, no long-term commitments'),
  createData('Focus', 'Spread throughout clients', 'Mixed: sales and administrative', 'Purely sales-driven, direct outreach'),
  createData('Implementation Speed', 'Weeks to months for full ramp-up', 'Recruitment + training time', '5-7 business days for optimization, quick scale-up possible'),
  createData('Customization', 'Generally broad strategies', 'Tailored to company needs', 'Deeply personalized, offer-centric approach'),
  createData('ROI Visibility', 'Indirect, longer-term', 'Direct but with high upfront costs', 'Direct, immediate, and high ROI with lower costs'),
];

export default function IndexTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: "10rem"}}>FEATURES</TableCell>
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
