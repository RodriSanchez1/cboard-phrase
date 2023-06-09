import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import propTypes from 'prop-types';

StyledTable.propTypes = {
  data: propTypes.array.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#5c5c5d',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function StyledTable({ data }) {
  return (
    <TableContainer component={Paper} sx={{ padding: 2, paddingTop: 0 }}>
      <Table
        sx={{ minWidth: '300px', whiteSpace: 'pre', tableLayout: 'fixed' }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Sentence</StyledTableCell>
            <StyledTableCell align="right">Reproduced times</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.sentence}>
              <StyledTableCell component="th" scope="row">
                {row.sentence}
              </StyledTableCell>
              <StyledTableCell align="right">{row.count}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
