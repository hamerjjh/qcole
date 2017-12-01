import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom' 

const HeadText = styled.div`
text-align: center
`

const PostForm = styled.div`
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-top: 0px;
    padding-bottom: 10px;
    background-color: white;
    opacity: .8;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 20px;
    align-items: center;
`
const Clear = styled.div`
    clear: both;
`
const PostBox = styled.div`
text-align: center;
 margin-top: 10px;
margin-bottom: 10px;
font-family: 'Cabin Condensed', sans-serif;
font-size: 18px;
color: rgb(17, 17, 114);
label {
    padding-right: 5px;
    margin-bottom: 5px;
}
textarea, input {
    text-align: center;
    margin-top: 10px;
    border-radius: 5px;
    width: 30%;
    font-size: 16px;
}
`
const About = styled.div`
    display: flex;
    justify-content: center;
    img {
        height:35%;
        width:35%;
        
    }
`
const Button = styled.div`
   padding: 30px;
   border-color: black;
   border-radius: 50%;
`


class CommissionPage extends Component {
    render() {
        
        return (
            <div>
                
                <About> 
                <img src ="https://i.imgur.com/dRMB5PO.jpg" /> <br/>
            </About>
            <Clear></Clear>
            <HeadText>
                <p>For custom commissionss pieces, live paintings, murals and all other inquires please submit request with Name, Contact Info and Piece Idea. 
                    <div> </div>
                    Once submitted, an email will be sent to qcoleartwork@outlook.com  </p>
                </HeadText>
                <Clear></Clear>
                <PostForm>
                <form>
                    <PostBox>

                    </PostBox>
                    <Button> <a href="mailto:qcoleartwork@outlook.com">Submit Request </a></Button>
                </form>
                </PostForm>
            </div>
        );
    }
}

export default CommissionPage;