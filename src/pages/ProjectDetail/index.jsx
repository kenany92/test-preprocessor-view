import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DateFormat from '../../components/DateFormat';
import { getOne } from '../../services/project'

const ProjectDetail = () => {

    const { id } = useParams();
    const [project, setProject] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        const load = async () => {
            
            try {
                const res = await getOne(id);
                setProject(res.data);
            } catch (error) {
                console.error(error);
                navigate('/');
            }
        }

        load();

    }, [id, navigate])

    return (
        <Container maxW='100%'>

            <Flex minWidth='max-content' alignItems='center' gap='2' p='5'>
                <Box>
                    <Text size='md'>Project name:  {project.name}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Text size='md'>Test threshold:  {project.threshold}%</Text>
                </Box>
                <Spacer />
                <Box>
                    <Text size='md'>Test weight:  {project.weight}</Text>
                </Box>
                <Spacer />
                <Box>
                    <Text size='md'>Creation date:  <DateFormat date={project.created} /> </Text>
                </Box>
            </Flex>
            
        </Container>
    );
};

export default ProjectDetail;