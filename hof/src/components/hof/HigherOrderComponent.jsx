import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderUserTypeItems = () => {
        const data = this.state.userData;
        const mapRows = data.filter((item)=> item.user_type=='Designer').map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderNameStarts = (letter) => {
        const data = this.state.userData;
        const mapRows = data.filter((item)=> item.name.startsWith(letter)).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderAgeRange = (minAge,maxAge) => {
        const data = this.state.userData;
        const mapRows = data.filter((item)=> item.age>=minAge && item.age <= maxAge).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderTotalExperience = (user) => {
        const data = this.state.userData;
        let exp = data.filter((item) => item.user_type==user).map((item) => item.years).reduce((prev,curr)=> prev+curr,0); 
        const displayElement = 
            <React.Fragment>
                <span>Total Experience: {exp}</span>
            </React.Fragment>
        return displayElement;
    };
    render() {
        return (
        // instead of a parent div tag we can also use React.Fragment
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()} </ul>
                </div>
                <h1>Display based on user type</h1>
                <div className="display-box">
                    <ul>{this.renderUserTypeItems()} </ul>
                </div>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                    <ul>{this.renderNameStarts('J')} </ul>
                </div>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                    <ul>{this.renderAgeRange(28,50)} </ul>
                </div>
                <h1>Find total years of the Designers</h1>
                <div className="display-box">
                    <ul>{this.renderTotalExperience('Designer')} </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default HigherOrderComponent;