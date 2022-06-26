import { Box, Button, Container, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../../components/ProjectList';
import { getAll } from '../../services/project';

const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() =>{

        const load = async () => {
            const res = await getAll();
            setProjects(res.data);
        }
        
        load();
    }, []);

    return (
        <Container maxW='100%' minW="100%">


            <Flex>
                <Box p='4' >
                    <Link to="/teacher/project/new">
                        <Button colorScheme='teal'>New project</Button>
                    </Link>
                </Box>
            </Flex>

            <ProjectList projects={projects} />
            
        </Container>
    );
};

export default Project;