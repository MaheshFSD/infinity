import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../../Utils/LocalStorage';

const NavbarCont = styled.div`
    padding: 1%;
    background-color: #0e3cb9;
    display: flex;
    justify-content: space-between;

    & > .logoutBtn {
        background-color: red;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-size: 1em;
        padding: 1%;
        font-weight: 700;

        :hover {
            cursor: pointer;
            filter: contrast(70%);
        }
    }
`;

const Navbar = () => {

    return (
        <NavbarCont>
            <div className=""></div>
            <Link to="/" onClick={logout} className="logoutBtn">LOGOUT <FiLogOut /></Link>
        </NavbarCont>
    )
}

export default Navbar
