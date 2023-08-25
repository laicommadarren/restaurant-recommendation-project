import React from 'react';
import { Button, Typography } from '@mui/material';

const TwoButtonsWithPics = (props) => {
    const { message1, message2, onClickProp, imgOneSrc, imgTwoSrc, value1, value2 } = props;

    const handleClick = (e) => {
        onClickProp(e);
    }

    return (
        <div style={{width:"100%", textAlign:"center"}}>
            <div style={{ display: "flex", width:"100%", justifyContent: "space-around", marginTop:"20px"}}>
                <div >
                    <img style={{ borderRadius:"10px", width: "175px", height: "175px"}} src={imgOneSrc} alt="breakfast" />
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button variant="outlined" color="inherit" onClick={handleClick} name={value1} value={message1.toLowerCase()}>{message1}</Button>
                    </div>
                </div>
                <div style={{marginLeft:"10px"}}>
                    <img style={{ borderRadius:"10px", width: "175px", height: "175px"}} src={imgTwoSrc} alt="lunch" />
                    <br />
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button variant="outlined" color="inherit" onClick={handleClick} name={value2} value={message2.toLowerCase()}>{message2}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoButtonsWithPics;