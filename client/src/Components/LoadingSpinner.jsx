import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from "styled-components";

const Spinner = styled.div`
    & > .spinner {
        color: #1111ac;
        animation: App-logo-spin infinite 2s linear;

        @keyframes App-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`;

const LoadingSpinner = () => {
    return (
        <Spinner>
            <AiOutlineLoading3Quarters className="spinner" />
        </Spinner>
    )
}

export default LoadingSpinner
