import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { loadData } from '../../Utils/LocalStorage';
import Query from './Query';
import axios from 'axios';
import LoadingSpinner from "../LoadingSpinner";

const DashboardCont = styled.div`
    
    & > .queryBlock {
        padding: 3% 3% 0;
        text-align: center;
    }

    & > .queries {
        padding: 5%;

        & > .loadingSpinner {
            font-size: 3em;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    & .inputCont {
        padding: 1%;
        transition: 1s;

        & > input {
            font-size: 1.3em;
            border: none;
            outline: none;
            border-bottom: 2px solid gray;
            margin: 1%;
            width: 70%;
        }

        & > button {
            font-size: 1em;
            background-color: green;
            color: white;
            padding: 0.5% 1%;
            border-radius: 3px;

            :disabled {
                background-color: gray;
                cursor: not-allowed !important;
            }

            :hover {
                cursor: pointer;
                filter: contrast(70%);
            }
        }
    }
`;

const Dashboard = () => {
    document.title = "Dashboard";

    const {auth, name} = loadData("data");
    console.log(auth, name);

    const initQueries = [
        "What is js",
        "What is Closures?",
        "What is Event loop?"
    ];

    const [queries, setQueries] = React.useState(initQueries);

    const [query, setQuery] = React.useState("");

    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const getQueries = () => {
        setLoading(true);

        return axios({
            method: "get",
            url: "http://localhost:5000/queries/allQueries",
        }).then((res) => {
            setQueries(res.data.queries);
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSubmit = () => {
        const data = {
            name,
            query
        }

        setLoading(true);

        axios({
            method: "post",
            url: "http://localhost:5000/queries",
            data: data
        }).then((res) => {
            console.log(res.data);
            getQueries();
        })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })

        setQuery("");
    }

    React.useEffect(() => {
        getQueries();
    }, []);

    return (
        <DashboardCont>
            <Navbar />
            <div className="queryBlock">
                <div className="queryHead">
                    <h3>Welcome, {name}</h3>
                    <div>Ask a question</div>
                </div>
                <div className="inputCont">
                    <input type="text" placeholder="Enter a new Query" value={query} onChange={handleChange} autoFocus/>
                    <button disabled={!query.length} onClick={handleSubmit}>POST</button>
                </div>
            </div>
            <div className="queries">
                {
                    loading ? 
                    <div className="loadingSpinner">
                        <LoadingSpinner />
                    </div> : queries?.map(ele => (
                        <Query ele={ele} key={ele._id} />
                    ))
                }
            </div>
        </DashboardCont>
    )
}

export default Dashboard
