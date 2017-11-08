import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FlexRow } from "../styled-components/FlexContainers";

const PicFrame = styled.div`

    img {
        border:solid 2px;
        border-bottom-color:#ffe;
        border-left-color:#eed;
        border-right-color:#eed;
        border-top-color:#ccb;
        max-height:100%;
        max-width:100%;
    }

    background-color:#ddc;
    border:solid 5vmin #eee;
    border-bottom-color:#fff;
    border-left-color:#eee;
    border-radius:2px;
    border-right-color:#eee;
    border-top-color:#ddd;
    box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
    box-sizing:border-box;
    display:inline-block;
    margin:2vh 10vw;
    max-width: 45%;
    min-width:377px;
    padding:5vmin;
    position:relative;
    text-align:center;
    &:before {
      border-radius:2px;
      bottom:-2vmin;
      box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
      content:"";
      left:-2vmin;
      position:absolute;
      right:-2vmin;
      top:-2vmin;
    }
    &:after {
      border-radius:2px;
      bottom:-2.5vmin;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
      content:"";
      left:-2.5vmin;
      position:absolute;
      right:-2.5vmin;
      top:-2.5vmin;
    }
  
  `

  const PicContainer = styled.div`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-top: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: .8;
        justify-content: center;
  `

const PicName = styled.div`
    font-family: 'Oswald', sans-serif;
    font-size: 34px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 8px;
`

const PicBody = styled.div`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 10px;
    text-align: center;
 
  
`
const Info = styled.div`
font-size: 20px;
text-align: center;
display: inline-block;
width:35%;
background: white;
border: 1px solid #B9D6C2;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 0px;
border-radius: 50px;
padding: 2em;
position: relative;


`

  const NewPostForm = styled.div`
    
  `

  class Picture extends Component {
    
        state = {
            picture: {},
            
        }
    
        async componentWillMount() {
            this.getPictures();
    
        }
    
        getPictures = async () => {
            try {
                const { id } = this.props.match.params
                const response = await axios.get(`/api/pictures/${id}`)
                this.setState({ picture: response.data })
    
            } catch (error) {
                console.log(error)
            }
        }
    
        render() {

        var sold
        if (this.state.picture.sold === true) {
            sold = "Yes"
             } else {
            sold = "No"
             }
           
            
                    return (
                        <div>
                        <PicContainer>
                        <PicName>{this.state.picture.name}</PicName>
                        <PicBody>
                          
                            
                                <PicFrame>
                            <img src={this.state.picture.photo_url} />
                                </PicFrame>
                            
                                <Info>
                            <p>Price: ${this.state.picture.price}</p>
                            <p>Size: {this.state.picture.size}</p>
                            <p>Prints: {this.state.picture.prints}</p>
                            <p>Sold: {sold}</p>
                                </Info>
                    
                           </PicBody>

                           
                                </PicContainer>

                                
                             
                               </div>
                    );
                }
            }
            
            export default Picture;
            