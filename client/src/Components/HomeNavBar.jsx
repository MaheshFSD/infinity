import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CssForHome/HomeNavBar.module.css';


function HomeNav() {

    return (
        <>
            <div className={styles.homeLinkCont}>
                <Link to="/" className={styles.homeNavLink1}>HomeLogo</Link>

                <Link to="/login" className={styles.homeNavLink3}>Login</Link>

                <Link to="/register" className={styles.homeNavLink2}>Register</Link>
            </div>

        </>
    )

}

export { HomeNav }