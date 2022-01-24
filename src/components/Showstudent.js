import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { deletestudent } from '../action/studentaction';



const Showstudent = () => {
  const dispatch = useDispatch()
    
    const navigte = useNavigate();

    const state = useSelector(state => state.addstudentred)

    const mydelete = (id)=>{
      dispatch(deletestudent(id))

    }

   

    

    return (

        <div className='container'>
      <br />

      <div className='d-flex justify-content-between'>
        <h1>Students Deatils</h1>


        <Link to='/student/des'><Button variant="contained" className='btnStudent'>Add New Student</Button></Link>




      </div>
      <br />



      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>Age</strong></TableCell>
              <TableCell align="right"><strong>Course</strong></TableCell>
              <TableCell align="right"><strong>Batch</strong></TableCell>
              <TableCell align="right"><strong>Change</strong></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {state.map((row) => (
              <TableRow
                key={row.Id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Age}</TableCell>
                <TableCell align="right">{row.Course}</TableCell>
                <TableCell align="right">{row.Batch}</TableCell>
                <TableCell align="right"><i className="fas fa-edit" onClick={() => { navigte(`/student/des/${row.Id}`) }} ></i>
                <i style={{marginLeft:"15px"}} className="fas fa-trash-alt" onClick={()=> mydelete(row.Id)} ></i></TableCell>
                



              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
    )
}

export default Showstudent