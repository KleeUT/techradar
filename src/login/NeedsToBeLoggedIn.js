import React from 'react';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: Boolean(state.login.user)
    }
}

export default connect(mapStateToProps)(({isLoggedIn, children}) => {
    return (
        <div>
            {isLoggedIn ? children : <LoginForm />}        
        </div>
    )
});