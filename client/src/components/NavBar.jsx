import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display:"flex", justifyContent:"space-between", position: "fixed", top: "0px", width: "100%", height: "55px", backgroundColor:"#FF7518"}}>
            <HomeIcon sx={{fontSize: 55, color:"white"}} onClick={()=>navigate('/')}/>
            <div style={{display:"flex"}}>
            <Button sx={{color:"#0039a6"}} onClick={() => navigate('/start')}><u>Recommendation</u></Button>
            <Button sx={{color:"#0039a6"}} onClick={() => navigate('/list')}><u>Saved List</u></Button>
            {/* add navigation to list page when it's ready */}
            </div>
        </div>
    )
}

export default NavBar