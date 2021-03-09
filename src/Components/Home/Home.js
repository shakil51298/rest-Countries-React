import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChildofHome from '../ChildofHome/ChildofHome';

const Home = () => {
    const [users,Setusers] = useState([])

    useEffect(()=>{
        const url ="https://restcountries.eu/rest/v2/all"
        axios(url)
        .then(data => Setusers(data.data))
    },[])
    return (
        <div className="container text-center mt-5 mb-5 ">
            <h4>Total Loded : {users.length}</h4>
            {
                users.map(country => <ChildofHome passingData ={country} key={country.name}></ChildofHome>)
            }
        </div>
    );
};

export default Home;