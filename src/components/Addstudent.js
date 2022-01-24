import React, {useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addstudent, updatestudent } from '../action/studentaction';

const Addstudent = () => {

    const student = useSelector(state => state.addstudentred)

    const dispatch = useDispatch()


    const navigte = useNavigate();

    const { id } = useParams();
    const [dataa, setdataa] = useState({
        Id: "",
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    })



   

    
  
    useEffect(() => {
        const loaduserdata = async () => {

            const amy = await student.filter((vii) => vii.Id === id)
            amy.map((val) => setdataa(val))
    
        }
        loaduserdata();

    },[id,student]);
    

    const onhdlechng = (e) => {
        const name = e.target.id
        const value = e.target.value
        setdataa({ ...dataa, [name]: value })


    }

    const btnsub = (e) => {
        e.preventDefault();

        if (!id === "") {
            const newdata = { ...dataa, Id: id }
            dispatch(updatestudent(newdata))

        }
        else {
            const newdata = { ...dataa, Id: `${student.length + 1}` }

            dispatch(addstudent(newdata))
        }

        navigte('/student')
    }

        return (
            <div className='container my-5'>

                <div className='d-flex justify-content-between mx-3 my-5'>
                    <TextField className='mx-5' color="primary" value={dataa.Name} onChange={onhdlechng} fullWidth id="Name" label="Name" />
                    <TextField className='mx-5' color="primary" value={dataa.Age} onChange={onhdlechng} fullWidth id="Age" label="Age" />
                </div>

                <div className='d-flex justify-content-between mx-3 my-5'>
                    <TextField className='mx-5' color="primary" value={dataa.Course} onChange={onhdlechng} fullWidth id="Course" label="Course" />
                    <TextField className='mx-5' color="primary" value={dataa.Batch} onChange={onhdlechng} fullWidth id="Batch" label="Batch" />
                </div>

                <div className='d-flex justify-content-end mx-5'>


                    <Link to='/student' className='txtDec'><Button className='mx-4 ' variant="outlined">Cancel</Button></Link>

                    <Button className='mx-3' variant="contained" onClick={btnsub}>Submit</Button>

                </div>




            </div>
        )
    }

    export default Addstudent