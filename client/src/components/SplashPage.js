import React from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css';


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
    padding: 60px;
}
text-align: center;

`
const Social = styled.div`
display: flex;
justify-content: center;
font-size: 2em;
a{
    color: blue;
    padding-top: 15px;
    margin-right: 20px;
}

` 

const SplashPage = (props) => {
    return (
        <div>
        <SplashBackground>
              
        </SplashBackground>
        <Social>
       <a href="https://www.instagram.com/qcole/" target="_blank"> <FontAwesome name='instagram' size='20x'/> </a>
        <a href="https://www.facebook.com/quinton.cole.92" target="_blank"> <FontAwesome name='facebook' size='20x'/> </a>
        </Social>
        <LogoPic>
        <img src= "https://i.imgur.com/LDmJjE8.png" />
        </LogoPic>
        </div>
    );
};

export default SplashPage;