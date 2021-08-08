import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import { logout } from '../../Utils/LocalStorage';

const NavbarCont = styled.div`
    padding: 1% 3%;
    /* background-color: #0e3cb9; */
    box-shadow: 1px 1px 6px 4px rgb(216 216 216);
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .dashboardTitle {
        font-size: 1.4em;
        display: flex;
        align-items: center;
        color: #096609;
        font-weight: 600;
    }

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
            <div className="dashboardTitle"><MdDashboard className="dashboardIcon" />DASHBOARD</div>
            <Link to="/" onClick={logout} className="logoutBtn">LOGOUT <FiLogOut /></Link>
        </NavbarCont>
    )
}

export default Navbar;