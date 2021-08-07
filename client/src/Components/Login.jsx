import React, { useState } from 'react';
import styles from './CssForHome/RegisterAndLogin.module.css'
import axios from 'axios';


const initData = {
    email: "",
    password: "",
}

function Login() {

    const [query, setQuery] = useState(initData)

    const [data, setData] = useState([])

    const handleChange = (e) => {

        const { name, value } = e.target;
        setQuery({
            ...query,
            [name]: value
        })

    }

    const loginData = (data) => {

        return axios({
            method: "post",
            url: "http://localhost:2244/users/login",
            data: data
        }).then((res) => {
            setData(res.data);
        })
            .catch((err) => {
                console.log(err);
            })

    }


    const handleSubmit = (e) => {

        e.preventDefault();
        loginData(query)
    }


    return (
        <div className={styles.registerCont}>

            <h1 style={{ marginBottom: "25px" }}>Login Here!</h1>


            {
                data &&
                <h2 style={{ color: "#1AA84C", marginBottom: "25px" }}>{data.message}</h2>
            }

            <form onSubmit={handleSubmit} className={styles.registerForm}>

                <input placeholder="Enter Email" name="email" onChange={handleChange} />
                <br />
                <br />
                <input placeholder="Enter Password" name="password" onChange={handleChange} />
                <br />
                <br />
                <input type="submit" value="Submit" id={styles.loginBtn} />
                <br />
                <br />

            </form>

        </div>

    )

}

export { Login }