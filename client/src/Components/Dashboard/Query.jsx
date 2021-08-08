import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const QueryCont = styled.div`
    padding: 1%;
    margin: 2%;
    box-shadow: 1px 1px 20px lightgray;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 1s;

    :hover {
        box-shadow: 1px 1px 20px gray;
        transition: 1s;
    }

    & > div {
        font-size: 1.2em;
        font-weight: 700;
    }

    & > .connectLink {
        background-color: #1919e9;
        color: white;
        font-weight: 700;
        text-decoration: none;
        padding: 1%;
        border-radius: 5px;

        :hover {
            filter: contrast(70%);
            cursor: pointer;
        }
    }
`; 

const Query = ({ele}) => {
    return (
        <QueryCont>
            <div>{ele.query}</div>
            <Link className="connectLink">CONNECT</Link>
        </QueryCont>
    )
}

export default Query
