import React, {useState} from 'react';
import LoginContainer from '../login/index'

class BodyContainer extends React.Component
{
    render(){
        return(
            <div>
                <LoginContainer />
            </div>
        )
    }
}

export default BodyContainer