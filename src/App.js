import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from './components/header/index';
import Login from './components/login/index'
import BodyContainer from './components/body/index';

function App (){
    //onst [userLogin, setUserLogin] = useState(false);
    return(
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    )
}

export default App