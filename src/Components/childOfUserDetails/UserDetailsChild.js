import React from 'react';
import { useHistory } from 'react-router';

const UserDetailsChild = (props) => {
    console.log(props.country);
    const {name,border,flag,area,alpha2Code,alpha3Code,borders,callingCodes
    ,capital,cioc,gini,nativeName,numericCode,population,region,subregion,timezones}=props.country;
    const history = useHistory()
    const backHandler = () =>{
        history.push('/home')
    }
    return (
        <div className="border border-primary p-3 w-50 container" >
            <img src={flag} alt="" className="w-50 border text-center"/>
            <h4>{name}</h4>
            <p>Area: {area}</p>
            <p>Alpha2Code: {alpha2Code}</p>
            <p>Alpha3Code: {alpha3Code}</p>
            <p>Borders: {borders}</p>
            <p>CallingCodes: {callingCodes}</p>
            <p>Capital: {capital}</p>
            <button className="btn btn-danger" onClick={backHandler}>back</button>
        </div>
    );
};

export default UserDetailsChild;