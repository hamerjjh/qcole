import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const List = styled.div`
    width: 100vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: black;
    opacity: .8;
    margin: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        padding-top: 2px;
        padding-bottom: 2px;
        font-family: 'Oswald', sans-serif;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 22px;
    }
    a:visited {
        color: white;
    }
`

const PageTitle = styled.div`
    font-size: 28px;
`

const NavBar = () => {
    return (
        <List>
        <ul>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/commission">COMMISSION</Link></li>
        </ul>
        </List>
    );
};

export default NavBar;