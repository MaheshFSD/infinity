import React from 'react';
import usersImg from '../Images/users.PNG';
import styles from './CssForHome/MainHomePage.module.css';
import { Link } from 'react-router-dom';


function HomePage() {

    return (
        <div className={styles.homePageMainCont}>

            <div className={styles.homePageCont}>

                <div className={styles.homePageLeft}>
                    <div className={styles.homeSlogn}>
                        <div>Connecting Developers For Solving Problems</div>
                    </div>

                    <div className={styles.bottomLeft}>
                        <div className={styles.signUpCont}>
                            <div>
                                For Existing Developers
                            </div>
                            <div>
                                Put Your Email and Password for Login
                            </div>

                            <Link to="/login" className={styles.loginBtn}><span>Login</span></Link>
                        </div>

                        <div className={styles.loginCont}>
                            <div>For New Developers</div>

                            <div>Fill all the requires details to register </div>

                            <Link to="/register" className={styles.registerBtn}><span>Register</span></Link>
                        </div>
                    </div>


                </div>


                <div className={styles.homePageRight}>
                    <img src={usersImg} alt="Users" />
                </div>

            </div>



        </div>
    )

}

export { HomePage }