import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({rows}) {
  return (
    <TableContainer component={Paper} style={{
        // height : '100%',
        boxShadow:'none',
        backgroundColor:'transparent'
      }}>
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{row.Timestamp}</TableCell>
              <TableCell >{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
