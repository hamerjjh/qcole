import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FlexRow } from "../styled-components/FlexContainers";

const PicImageBanner = styled.div`

    img {
        width: 100%;
        background-size: cover;
        background-position: center;
        height: 300px;
        background-repeat: no-repeat;
        padding-top: 0px;
        margin-top: 15px;
        margin-right: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `

  const PicContainer = FlexRow.extend`
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0   6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-top: 0px;
        padding-bottom: 10px;
        background-color: white;
        opacity: .8;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
  `

const PicName = styled.div`
    font-family: 'Rammetto One', cursive;
    font-size: 38px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
`

const PicBody = styled.div`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 30px;
    text-align: center;
    letter-spacing: 2px;
    padding-top: 25px;
    text-align: center;
    p {
        font-size: 24px;
        font-family: 'Cabin Condensed', sans-serif;
    }
  
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
                        <PicImageBanner><img src={this.state.picture.photo_url} /></PicImageBanner>
                        <PicContainer>
                        <PicBody>
                          
                            <PicName> {this.state.picture.name}</PicName>
                            <p>Price: ${this.state.picture.price}</p>
                            <p>Size: {this.state.picture.size}</p>
                            <p>Prints: {this.state.picture.prints}</p>
                            <p>Sold: {sold}</p>
                         
                    
                           </PicBody>
                                </PicContainer>
                             
                               </div>
                    );
                }
            }
            
            export default Picture;
            