import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2><span className="span">President</span> USA</h2>
            <h3>With World's Top <span className="span">Country President</span></h3>
            <h1>Max.Expensive: <span className="span">100</span> Million</h1>
        </div>
    );
};

export default Header;