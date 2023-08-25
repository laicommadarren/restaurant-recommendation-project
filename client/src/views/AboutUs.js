import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button} from "@mui/material";


export default () => {
    const navigate = useNavigate();

    return (
        <div div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "80%", margin:"auto"}}>
            <div style={{textAlign:"center"}}>
            <Typography>from Darren Lai, the developer:</Typography>
            <img style={{height:"120px", borderRadius:"10px", marginTop:"5px"}} src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/69144302_10157344371853903_7388942061069664256_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=0wT4-lKw_T4AX9NOruR&_nc_ht=scontent-lax3-2.xx&oh=00_AfDEz4G4gHDY-sq04K8alUYPcFMQEjNDS9FESOIB4qSuDg&oe=650F85CA"></img>
                <Typography><i>Do you struggle with making decisions?</i></Typography>
                <Typography sx={{mt: 1}}><i>Do you get overwhelmed when deciding on a new restaurant to try?</i></Typography>
                <Typography sx={{mt: 1}}><u>I have this issue often.</u> Living in Los Angeles, there's so many great restaurants to choose from! Sometimes I'd rather have someone else pick where to eat.</Typography>
                <Typography sx={{mt: 1}}>When we are faced with choice overload, limiting your options can help to reduce the stress of decision making. Just click through a few prompts and you'll have a restaurant you can go to next!</Typography>
                    
                <Button sx={{mt:1}} onClick={() => navigate("/start")} >Get Started</Button>
            </div>
        </div>
    )
}