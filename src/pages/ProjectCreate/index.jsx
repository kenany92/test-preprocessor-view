import { Button, Container, FormControl, FormErrorMessage, FormLabel, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../../services/project';

const ProjectCreate = () => {

    const [inputName, setInputName] = useState({value: '', error: false});
    const [inputThreshold, setInputThreshold] = useState({value: 0, error: false});
    const [inputWeight, setInputWeight] = useState({value: 'MEDIUM', error: false});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        const value = e.target.value.trim();
        if (!value) {
            setInputName({value: '', error: true});
        } else {
            setInputName({value, error: false});
        }
    }

    const handleThreshold = (value) => {
       setInputThreshold({...inputThreshold, value});
    }

    const handleWeight = (e) => {
        setInputWeight({...inputWeight, value: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name: inputName.value,
            weight: inputWeight.value,
            threshold: inputThreshold.value
        };

        submit(data);
        
    }

    const submit = async (project) => {
        
        try {
            const res = await create(project);
            navigate(`/teacher/project/${res.data}`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container width='500' maxW='50%'>

            <Text fontSize='3xl' align='center' mb="35px">Create new project</Text>

            <form>

                <FormControl isInvalid={inputName.error} isRequired mb='10px'>
                    <FormLabel htmlFor='name'>Project name</FormLabel>
                    <Input
                        id='name'
                        type='text'
                        value={inputName.value}
                        onChange={handleNameChange}
                    />
                    {inputName.error ?? <FormErrorMessage>The project name is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={inputThreshold.error} isRequired mb='10px'>
                    <FormLabel htmlFor='threshold'>Project threshold</FormLabel>
                    <NumberInput max={100} min={0} value={inputThreshold.value} onChange={handleThreshold}>
                        <NumberInputField id='threshold' />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {inputThreshold.error ?? <FormErrorMessage>The project threshold is required.</FormErrorMessage>}
                </FormControl>

                <FormControl isRequired mb='10px'>
                    <FormLabel htmlFor='weight'>Project weight</FormLabel>
                    <Select id='weight' placeholder='Select weight' value={inputWeight.value} onChange={handleWeight}>
                        <option value='WEAK'>WEAK</option>
                        <option value='MEDIUM'>MEDIUM</option>
                        <option value='STRONG'>STRONG</option>
                    </Select>
                </FormControl>


                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    isLoading={loading}
                    loadingText='Submitting'
                    onClick={handleSubmit}
                    disabled={inputName.error || inputThreshold.error || inputWeight.error}
                >
                Create
                </Button>

            </form>
        </Container>
    );
};

export default ProjectCreate;