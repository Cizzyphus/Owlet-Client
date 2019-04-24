import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/piiin.png';

/********************************************************************************************************
 * **************************************RADIUM STYLING**************************************************
 ********************************************************************************************************/

var logoutStyles = {
    
    img: {

    height: '100%',
    backgroundColor: 'white',

}};

/********************************************************************************************************
 * **************************************RADIUM STYLING**************************************************
 ********************************************************************************************************/

const Logout = (props) => {
    return (
        <img style={logoutStyles.img} src=
        {logoutPic} alt="Logout" onClick=
        {props.clickLogout}
         />
    )
}

export default Logout;



