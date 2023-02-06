import { Button } from "@mui/material";
import React from "react";
export default function SMButton(props){
    const {variant,text,onClick}=props
    return <>
    <Button onClick={onClick} variant={variant??"outlined"}>{text}</Button>
    </>
}