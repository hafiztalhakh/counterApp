import React, { Component } from 'react';
//Component
import Counter from './Containers/Counter/Counter';
//Casecading Stylesheet
import './App.css';

class App extends Component {

    render() {

        return (
            <div className="App">
                <Counter />
            </div>
        )
    }
}

export default App;