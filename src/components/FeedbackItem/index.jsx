import React from 'react';
import PropTypes from 'prop-types';
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, Box, Tag } from '@chakra-ui/react';

/**
 * 
 * @param {{feedback: {mutatedClass: string, slug: string, reasons: [{methodName: string, line: number, description: string}]}}} props 
 * @returns 
 */
const FeedbackItem = props => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                    <Box flex='1' textAlign='left'>
                     {props.feedback.mutatedClass} <Tag>{props.feedback.reasons.length} errors</Tag>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>

                {props.feedback.reasons.map(reason => <Alert mb='10px' status='warning' key={reason.id}>In method {reason.methodName} at line {reason.line} {reason.description} make test fail</Alert>)}
                
            </AccordionPanel>
        </AccordionItem>
    );
};

FeedbackItem.propTypes = {
    
};

export default FeedbackItem;