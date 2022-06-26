import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import DateFormat from '../DateFormat';

/**
 * 
 * @param {{submissions: [{id: number, created: string, feedbackSlug: string, projectId: number, projectName: string, projectSlug: string, slug: string}]}} props 
 * @returns 
 */
const SubmissionList = (props) => {

    return (
        <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Id </Th>
                        <Th>Project Name</Th>
                        <Th>Date</Th>
                        <Th>Action</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        
                        {props.submissions.map(submission =>  <Tr key={submission.id}>
                                <Td>{submission.id}</Td>
                                <Td> <Link to={`/student/project/${submission.projectSlug}`}> {submission.projectName} </Link></Td>
                                <Td> <DateFormat date={submission.created} /> </Td>
                                <Td> <Link to={`/student/feedback/${submission.feedbackSlug}`}> View feedback </Link> </Td>
                            </Tr>
                        )}

                    </Tbody>
                </Table>
            </TableContainer>
    );
};

export default SubmissionList;