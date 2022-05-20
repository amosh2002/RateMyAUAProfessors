import React, { useState } from "react";

import useStyles from "./styles";
import FileBase64 from 'react-file-base64';
import { useDispatch } from "react-redux";

import { TextField, Button, Typography, Paper } from "@mui/material";
import { createProfessor } from "../../actions/posts";


const Form = () => {
    const [profesorData, setProfesorData] = useState({
        //todo: add array and selecting support for courses
        fullName: '', courses: '', imageFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProfessor(profesorData));
    }

    const clearAll = () => {

    }
    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">Add a Professor</Typography>
                    <TextField
                        name="fullName"
                        variant="outlined"
                        label="Full Name"
                        fullWidth
                        value={profesorData.fullName}
                        onChange={(e) => setProfesorData({ ...profesorData, fullName: e.target.value })}
                    />
                    <TextField
                        name="courses"
                        variant="outlined"
                        label="Courses"
                        fullWidth
                        value={profesorData.courses}
                        onChange={(e) => setProfesorData({ ...profesorData, courses: e.target.value })}
                    />
                    <div className={classes.fileInput}>
                        <FileBase64
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => setProfesorData({ ...profesorData, imageFile: base64 })}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="container" size="large" type="submit" fullWidth>
                        Add
                    </Button>

                    <Button variant="contained" color="secondary" size="small" onClick={clearAll}>
                        CLear all fields
                    </Button>

                </form>
            </Paper>
        </div>
    )
}

export default Form;