import React from "react";
import SMInput from "../configuration/components/SMinput";
import { useState } from "react";
import SMButton from "../configuration/components/SMButton";
export default function LogIn() {
    const [count, setCount] = useState(0)
    let Increase=()=>{
        setCount(count+10)
    }
    return <>
        <div>{count}</div>
        <SMButton onClick={Increase} text="Increase" variant="contained"/>
        <SMInput label="Enter Name" />
        <SMInput label="Enter Password" />
    </>
}