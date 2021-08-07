import React from 'react';
import Meet from './Meet';
import Stats from './Stats';
import styled from 'styled-components';
import Navbar from './Navbar';
import { loadData } from '../../Utils/LocalStorage';

const DashboardCont = styled.div`
    
    & > .dashboardDiv {
        display: grid;
        grid-template-columns: 50% 50%;
        padding: 5%;
    }
`;

const Dashboard = () => {
    document.title = "Dashboard";

    const {auth, name} = loadData("data");
    console.log(auth, name);

    return (
        <DashboardCont>
            <Navbar />
            <h3>Welcome, (NAME)</h3>
            <div className="dashboardDiv">
                <Stats />
                <Meet />
            </div>
        </DashboardCont>
    )
}

export default Dashboard
