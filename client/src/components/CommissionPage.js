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
const About = styled.div`
    img {
        max-height:40%;
        max-width:40%;
        
    }
    float: right;
    
    

`


class CommissionPage extends Component {
    render() {
        
        return (
            <div>
                
                <About> 
                <img src ="https://i.imgur.com/dRMB5PO.jpg" /> Quinton O. Cole, raised in PG County, MD and a Morehouse graduate has been
leveraging and creating new opportunity through his art work. With his name
recognition growing in the Atlanta area, Quinton strives to become the best artist he
can. He has completed numerous custom commission pieces for athletes across the
NFL &amp; NBA and looks to build upon his clientele. Quinton’s journey as an artist
started in middle school as he began to do sketches for friends, later in high school
took art classes and entered competitions. Although, throughout his college years he
got away from his passion, he later picked things back up in 2016. Going forward, he
looks to take his brand to new heights by showcasing his work in exhibits and taking
advantage of opportunities that present themselves.
            </About>
            <HeadText>
                <p>For custom commissionss pieces, live paintings, murals and all other inquires please enter information below. 
                    Once submitted,an email will be sent to qcoleartwork@outlook.com  </p>
                </HeadText>
                <PostForm>
                <form>
                    <PostBox>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input  name="name" type="text" value="Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input name="email" type="text" value="Email" />
                    </div>
                    <div>
                        <label htmlFor="Message">Message: </label>
                        <input name="Message" type="text" value="Message" />
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