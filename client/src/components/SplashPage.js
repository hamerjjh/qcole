import React from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SplashBackground = styled.div`
    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Rammetto One', cursive;
     text-align: center;
`

const SplashHeader = styled.div`
    font-size: 30px;
`

const SplashLink = styled.div`
    font-size: 20px;
`
const LogoPic = styled.div`
img {
    max-width: 25%;
    max-height: 10%;
    padding: 20px;
}
text-align: center;

`

const SplashPage = (props) => {
    return (
        <div>
        <SplashBackground>
            <SplashHeader> QCole Artwork</SplashHeader>   
        </SplashBackground>
        <LogoPic>
        <img src= "https://i.imgur.com/LDmJjE8.png" />
        </LogoPic>
        </div>
    );
};

export default SplashPage;