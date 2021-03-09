import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import UserDetailsChild from '../childOfUserDetails/UserDetailsChild';

const UserDetails = () => {
    const {Cname} = useParams()
    const [country,setCountry] =useState([])
    useEffect(()=>{
        const url =`https://restcountries.eu/rest/v2/name/${Cname}?fullText=true`
        axios(url)
        .then(data => {
            console.log(data.data);
            setCountry(data.data)})
    },[])
    return (
        <div className="container mt-5 text-center">
            {
                country.map(country => <UserDetailsChild country={country} key={country.name}></UserDetailsChild>)
            }
        </div>
    );
};

export default UserDetails;