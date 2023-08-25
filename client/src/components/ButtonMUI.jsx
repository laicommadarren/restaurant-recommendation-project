import React from 'react';
import { Button } from '@mui/material';

const ButtonMUI = (props) => {
    const {onClickProp, message, variant, color } = props;

    return (
        <Button sx={{fontWeight:'bold'}} variant={variant} color={color} onClick={() => onClickProp()} >{message}</Button>
    )
}

export default ButtonMUI;