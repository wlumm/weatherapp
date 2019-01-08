import React from 'react';

const seasonConfig = {
    summer: {
        seasonText: 'Lets Hit the beach'
    }, //is an object
    winter: {
        seasonText : 'its is chilly, cooold'
    } //is an object
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const{seasonText}= seasonConfig[season]
    console.log(props.lat);
    console.log(season)
    return (
         <div><h2>{seasonText}</h2></div> 
    ) }; 

export default SeasonDisplay