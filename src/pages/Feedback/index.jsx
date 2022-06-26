import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import FeedbackHead from '../../components/FeedbackHead';
import FeedbackItems from '../../components/FeedbackItems';
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../../services/feedback';

/**
 * 
 * @param {#} props 
 * @returns 
 */
const Feedback = props => {

    const { id } = useParams();
    const [feedback, setFeedback] = useState({items: [], created: '', score: 0, submission: {project: {id: 0, slug: ''}}});

    useEffect(() => {

        const load = async () => {
            
            try {
                const { data } = await getOne(id);
                setFeedback(data);
            } catch (error) {
                console.error(error);
            }
        }

        load();

    }, [id])

    return (
        <Container  maxW='100%' minW="100%" >

            <Flex>
                <Box p='4' >
                    <Link to="/student/submission">
                        <Button colorScheme='teal'>Submissions</Button>
                    </Link>
                </Box>
            </Flex>

            <FeedbackHead project={feedback.submission.project} score={feedback.score} date={feedback.created}/>

            <FeedbackItems items={feedback.items} />
            
        </Container>
    );
};

Feedback.propTypes = {
    
};

export default Feedback;