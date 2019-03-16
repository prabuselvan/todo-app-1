import React from 'react';
import Header from './../Header';
import queryString from 'query-string';

const Dashboard = (props) => {
    console.log(props.match.params);
    console.log(props.location.search);
    console.log(queryString.parse(props.location.search));
    return (
        <div>
            <Header />
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;
