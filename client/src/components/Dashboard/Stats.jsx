import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';

const StatsCont = styled.div`
    border-radius: 7px;
    border: 3px solid gray;
    padding: 5%;

    & .starIcon {
        color: #e7e71b;
    }
`;

const Stats = () => {
    return (
        <StatsCont>
            <div>
                <div>STARS: {5} <BsStarFill className="starIcon" /></div>
                <div>CHALLENGES: {10}</div>
            </div>
        </StatsCont>
    )
}

export default Stats
