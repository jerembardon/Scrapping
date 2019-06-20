import React from 'react';
import styled from 'styled-components';
import {CSVLink} from 'react-csv';

const ButtonStyle = styled.button`
    height: 100%;
    margin-left: 8px;
    width: 120px;
    border: 0;
    background-color: rgba(92, 219, 149, 1);
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    &:hover:not([disabled]) {
        cursor: pointer;
        background-color: rgba(92, 219, 149, .8);
    }
   
    &:disabled {
        background-color: #fbfbfb;
        color: #dbdbdb;
        &:hover {
           cursor: not-allowed;
        }
    }
`

const ButtonDownloadStyle = styled(CSVLink)`
    height: 100%;
    margin-left: 8px;
    border: 0;
    padding: 16px;
    background-color: rgba(92, 219, 149, 1);
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    &:hover:not([disabled]) {
        cursor: pointer;
        background-color: rgba(92, 219, 149, .8);
    }
`

const ButtonReadStyle = styled.a`
    display: block;
    width: 100%;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    background-color: rgba(92,219,149,1);
    color: #ffffff;
    &:hover {
        background-color: rgba(92,219,149,.8);
    }
`

export const Button = (props) => (
    <ButtonStyle onClick={props.onClick} disabled={props.disabled}> {props.children} </ButtonStyle>
)

export const DownloadButton = (props) => (
    <ButtonDownloadStyle data={props.data}> {props.children} </ButtonDownloadStyle>
)

export const ReadButton = (props) => (
    <ButtonReadStyle href={props.href} target="_blank"> {props.children} </ButtonReadStyle>
)