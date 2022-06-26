import React from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @param {{date: string}} props 
 * @returns 
 */
const DateFormat = props => {

    const date = new Date(props.date);

    return (
        <span>
            {date.toLocaleString('en-US')}
        </span>
    );
};

DateFormat.propTypes = {
    
};

export default DateFormat;