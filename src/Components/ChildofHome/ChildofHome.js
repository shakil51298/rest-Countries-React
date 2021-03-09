import React from 'react';
import { useHistory } from 'react-router';

const ChildofHome = (props) => {
    const {name,flag} = props.passingData
    const history = useHistory()
    const handler = () =>{
        history.push(`/${name}`)
    }

    return (
        <div className="container mt-2 mb-5 text-center border border-danger p-3 w-50 h-50">
            <img src={flag} alt="" className="w-50 p-2"/>
            <h4>{name}</h4>
            <button className="btn btn-primary " onClick={handler}>More about {name}</button>
        </div>
    );
};

export default ChildofHome;