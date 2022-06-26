import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from './AppContext';

const AppContextProvider = props => {

 //   const Context = React.createContext({user: '', updateUser: undefined});

    const [user, updateUser] = useState('teacher');

    return (
        <AppContext.Provider value={{user, updateUser}}>
            {props.children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    
};

export default AppContextProvider;