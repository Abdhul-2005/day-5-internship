import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddEmployee = () => {
  var [inputs, setInputs] = useState({
    ename:"",
    eage:"",
    eposition:""
  })
  const inputHandler = (e) => {
    const { name,value } = e.target
    setInputs((prevData) => ({ ...prevData, [name]: value }))
    console.log(inputs)
  }
  const addHandler = () => {
    console.log("button clicked");
    axios.post("http://localhost:3005/create", inputs)
          .then((response) => {
            console.log(response.data)
          })
          .catch((err) => console.log(err))
 }
 return (
    <div style={{paddingTop:"80px"}}>
        <Typography varient='h4'>
          Add Employee Form 
        </Typography>
        <br /><br  />
        <TextField
          label='Employee Name'
          varient='outlined'
          name='ename'
          value={inputs.ename}
          onChange={inputHandler}
      />
      <br /><br />
      <TextField 
        label='Employee Age'
        varient='outlined'
          name='eage'
          value={inputs.eage}
          onChange={inputHandler}
      />
      <br /><br />
      <TextField 
        label='Employee Position'
        varient='outlined'
          name='eposition'
          value={inputs.eposition}
          onChange={inputHandler}
      />
      <br /><br />
      <TextField 
        label='Employee Salary'
        varient='outlined'
          name='esalary'
          value={inputs.esalary}
          onChange={inputHandler}
      />
      <br /><br />
      <Button variant='contained' color='secondary' onClick={addHandler}>Submit
      </Button>
    </div>
  )
}

export default AddEmployee
