import React from 'react';
import { Typography } from '@mui/material';
import ButtonMUI from '../components/ButtonMUI';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div class="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                {/* wrap below text */}
                <Typography variant="h4" style={{ textAlign: "center" }}>Ready for a<br />recommendation?</Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <ButtonMUI variant="contained" color="success" onClickProp={() => navigate('/start')} message="Let's Go!" />
                </div>
                <Typography variant="h5" style={{ textAlign: "center", marginTop: "20px" }}>or go to</Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                    <ButtonMUI variant="contained" color="warning" message="Saved List" onClickProp={() => navigate('/list')}/>

                </div>
                {/* for above, add OnClickProp when the saved list is ready */}
                <Typography variant="h6" style={{ textAlign: "center", marginTop: "150px" }}>First time here?</Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                    <ButtonMUI variant="contained" color="info" message="About Us" onClickProp={() => navigate('/about')} />
                </div>
            </div>
            {/* <div style={{position:'fixed', bottom:"0px", width:"100%", textAlign:"center"}}>
                <p>* restaurant data provided by Yelp Fusion API</p>
            </div> */}
            {/* note: this is put in the App.js to show up on every page */}
        </div>
    )
}

export default Dashboard;