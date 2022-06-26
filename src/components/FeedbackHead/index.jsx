import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DateFormat from '../DateFormat';

/**
 * 
 * @param {{project: {}, score: number, date: Date | string}} props 
 * @returns 
 */
const FeedbackHead = props => {
    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' p='5'>
            <Box>
                <Link to={`/student/project/${props?.project?.slug}`}>
                    <Text size='md'>Project Name:  {props?.project?.name}</Text>
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Text size='md'>Score: <Tag colorScheme={props?.score >= props?.project?.threshold ? 'teal' : 'red'}> {props?.score}% </Tag> </Text>
            </Box>
            <Spacer />
            <Box>
                <Text size='md'>Submission Date:  <DateFormat date={props.date} /></Text>
            </Box>
        </Flex>
    );
};

FeedbackHead.propTypes = {
    
};

export default FeedbackHead;