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
class CommissionPage extends Component {
    render() {
        
        return (
            <div>
            <HeadText>
                <h1>Enter Information For Commission Piece </h1>
                </HeadText>
                <PostForm>
                <form>
                    <PostBox>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input  name="name" type="text" value="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input name="email" type="text" value="email" />
                    </div>
                    <div>
                        <label htmlFor="size">Size: </label>
                        <input name="size" type="text" value="size" />
                    </div>
                    </PostBox>
                    <button>Submit Request</button>
                </form>
                </PostForm>
            </div>
        );
    }
}

export default CommissionPage;