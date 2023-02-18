import React from 'react';
import ExperiencedJob from './Components/ExperiencedJob';
import FreshersJob from './Components/FreshersJob';
import Toggle from './Components/Toggle';
import TopItCompanies from './Components/TopItCompanies';

const Home = () => {
    return (
        <div>
            <Toggle></Toggle>
            <FreshersJob></FreshersJob><br />
            <ExperiencedJob></ExperiencedJob><br />
            <TopItCompanies></TopItCompanies><br />
        </div>
    );
};

export default Home;