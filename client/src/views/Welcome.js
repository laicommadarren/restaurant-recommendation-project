import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button} from "@mui/material";


export default () => {
    const navigate = useNavigate();

    return (
        <div div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
            <div style={{textAlign:"center"}}>
                <h2>Hate making decisions? <br/>
                or spending time to research new restaurants?</h2>
                <h3>Let us recommend something for you!</h3>
                <h2>How does it work?</h2>
                <h3> Just answer a few questions!</h3>
                <Button onClick={navigate("/start")} >Get Started</Button>
            </div>
        </div>
    )
}