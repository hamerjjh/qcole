import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"
import GalleryList from './GalleryList'

const GalleryPage = (props) => {
        return (
            <div>
              <GalleryList pictures={props.pictures} />  
            </div>
        );
    }

export default GalleryPage;