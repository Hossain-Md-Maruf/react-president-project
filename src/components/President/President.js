import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd} from '@fortawesome/free-solid-svg-icons';
import {faApple,faFacebook} from '@fortawesome/free-brands-svg-icons'
import './President.css';

const Expert = (props) => {
    const {img,number,president,birth_year, death_year,value} = props.president;
    // console.log(props)
    return (
        <div className="flex">
            <div className="president">
            <img className="img"src={img} alt="" /> 
            <h2>Number: {number}</h2>
            <h2>Name: {president}</h2>
            <h3>Worth: ${value}</h3>
            <h3>Birth Year: {birth_year}</h3>
            <h3>Death Year: {death_year}</h3>   
            <button className="btn-regular" onClick={()=>props.handleAddToCart(props.president) }><FontAwesomeIcon icon={faAdd} /> Add</button>         
            <br />
            <div className="icon">
            
            <FontAwesomeIcon icon={faApple} className="apple"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faFacebook} className="facebook"></FontAwesomeIcon>
            </div>
            
            
            
            </div>
           

        </div>
    );
};

export default Expert;