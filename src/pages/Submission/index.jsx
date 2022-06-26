import { Button, Container, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from '../../services/project';
import { upload } from '../../services/upload';

const Submission = () => {

    const fileRef = useRef();
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        const loadProjects = async () => {
            
            try {
                const { data } = await getAll();
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadProjects();

    }, [])

    const handleSelectFileClick = (e) => {
        e.preventDefault();
        fileRef.current.click();
    }

    const handleFileChange = (e) => {
        setFileName(e.target.files[0].name);
    }

    const handleProjectChange = (e) => {
        setProject(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('solution', fileRef.current.files[0]);
        data.append('project', project);
        console.log(data.get('project'));
        setLoading(true);
        
        submit(data);
    }

    const submit = async (solution) => {
        
        try {

            const { data } = await upload(solution);

            navigate(`/student/feedback/${data}`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); 
        }
    }

    return (
        <Container width='500' maxW='50%'>

            <Text fontSize='3xl' align='center' mb="35px">Submit a solution for a particular project</Text>

            <form>

                <FormControl>
                    <FormLabel htmlFor='project'>Project</FormLabel>
                    <Select id='project' placeholder='Select project' value={project} onChange={handleProjectChange}>
                        {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
                    </Select>
                </FormControl>

                <FormControl mt='10px'>
                    <FormLabel htmlFor='file'>Solution</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type='text'
                            placeholder='Upload file'
                            readOnly
                            id='file'
                            value={fileName}
                            onClick={handleSelectFileClick}
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='100%' size='sm' colorScheme='blue' onClick={handleSelectFileClick} >
                            Select file
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    isLoading={loading}
                    loadingText='Submitting'
                    onClick={handleSubmit}
                >
                Submit
                </Button>

                <input type="file" style={{visibility: 'hidden'}} ref={fileRef} onChange={handleFileChange}/>

            </form>
        </Container>
    );
};

export default Submission;