import React from 'react';

const Button = (props) => {
    const {onClickProp, message } = props;

    const handleClick = () => {
        onClickProp();
    }
    return (
        <button style={{margin:"auto"}} onClick={() => onClickProp()} >{message}</button>
    )
}

export default Button
