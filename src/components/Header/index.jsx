import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Header = () => {

    const { user, updateUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSwitch = (e) => {
        e.preventDefault();
        updateUser(user === 'teacher' ? 'student' : 'teacher');
        navigate('/')
    }

    return (
            <Flex minWidth='max-content' alignItems='center' gap='2' p='5'>
                <Box>
                    <Link to="/"> <Heading size='md'>App name</Heading> </Link> 
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='teal' onClick={handleSwitch}>Switch to {user === 'teacher' ? 'student' : 'teacher'}</Button>
                </ButtonGroup>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='teal'>Logout</Button>
                </ButtonGroup>
            </Flex>
    );
};

export default Header;