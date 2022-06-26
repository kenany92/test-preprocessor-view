import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import FeedbackItem from '../FeedbackItem';

/**
 * 
 * @param {{items: []}} props 
 * @returns 
 */
const FeedbackItems = props => {
    return (
        <Accordion allowToggle mt='40px'>
            {props.items.map((feed, id) => <FeedbackItem feedback={feed} key={id} />)}
        </Accordion>

    );
};

FeedbackItems.propTypes = {
    
};

export default FeedbackItems;