import React from 'react';
import { Typography, Button } from '@mui/material';

const MealType = (props) => {
    const { onClickProp, message1, message2, message3 } = props;

    const handleClick = (e) => {
        onClickProp(e);
    }
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h4">Meal Type:</Typography>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop:"20px"}}>
                <div>
                    <img style={{ borderRadius:"10px", width: "175px", height: "175px", marginLeft: "auto", marginRight: "auto" }} src="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80" alt="breakfast" />
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button variant="outlined" color="inherit" onClick={handleClick} value={message1.toLowerCase()} >{message1}</Button>
                    </div>
                </div>
                <div >
                    <img style={{ borderRadius:"10px", width: "175px", height: "175px", marginLeft: "auto", marginRight: "auto" }} src="https://cdn.pixabay.com/photo/2022/08/31/10/17/hamburger-7422967_1280.jpg" alt="lunch" />
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                    <Button variant="outlined" color="inherit" onClick={handleClick} value={message2.toLowerCase()} >{message2}</Button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img style={{ borderRadius:"10px", width: "175px", height: "175px" }} src="https://cdn.pixabay.com/photo/2018/09/14/11/12/food-3676796_1280.jpg" alt="dinner" />
                    <br />
                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <Button variant="outlined" color="inherit" onClick={handleClick} value={message3.toLowerCase()} >{message3}</Button>
                </div>
            </div>
        </div>
    )
}

export default MealType;