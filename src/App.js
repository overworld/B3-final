import React from 'react';
import './App.scss';
import Entertext from './Components/Input';

class App extends React.Component {


    constructor() {
        super();
    }

    render() {


        return (
            <div className="App" >

                <Entertext/>

            </div>
        );
    }
}
export default App;
