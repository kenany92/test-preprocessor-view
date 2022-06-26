import { Box, Button, Container, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SubmissionList from '../../components/SubmissionList';
import { getAll } from '../../services/submission';

const StudentHome = () => {

    const [submissions, setSubmissions] = useState([])

    useEffect(() =>{

        const load = async () => {
            
            try {
                const { data } = await getAll();
                setSubmissions(data);
            } catch (error) {
                console.error(error);
            }
        }

        load();

    }, []);

    return (
        <Container  maxW='100%' minW="100%" >
            
            <Flex>
                <Box p='4' >
                    <Link to="/student/submission/new">
                        <Button colorScheme='teal'>New Submission</Button>
                    </Link>
                </Box>
            </Flex>

            <SubmissionList submissions={submissions} />

        </Container>
    );
};

export default StudentHome;