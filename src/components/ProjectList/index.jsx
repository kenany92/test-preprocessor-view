import React from 'react';
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DateFormat from '../DateFormat';

/**
 * 
 * @param {{projects: []}} props 
 * @returns 
 */
const ProjectList = props => {
    
    const today = new Date().toDateString();

    return (
        <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Project name</Th>
                        <Th>Date</Th>
                        <Th>Action</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {props.projects?.map(project => 
                            <Tr key={project.id}>
                                <Td>{project.name}</Td>
                                <Td> <DateFormat date={project.created} /> </Td>
                                <Td> <Link to={`/teacher/project/${project.slug}`}>View</Link> </Td>
                            </Tr>
                            
                        )}

                    </Tbody>
                </Table>
            </TableContainer>
    );
};

ProjectList.propTypes = {
    
};

export default ProjectList;