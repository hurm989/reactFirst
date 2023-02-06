import { TextField } from "@mui/material";
import React from "react";
export default function SMInput(props) {
    const {label,variant}=props
    return <>
        <TextField required={true} id="standard-basic" label={label} variant={variant??"standard"} />
    </>
}