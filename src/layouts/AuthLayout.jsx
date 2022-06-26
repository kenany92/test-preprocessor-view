import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AuthLayout = () => {
    return (
        <Grid
            templateAreas={`"header header"
                            "main main"
                            "footer footer"`}
            gridTemplateRows={'80px 1fr 130px'}
            gridTemplateColumns={'150px 1fr'}
            h='100vh'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='2' area={'header'}>
                <Header />
            </GridItem>

            <GridItem pl='2' area={'main'}>
                <Outlet />
            </GridItem>

            <GridItem pl='2' area={'footer'}>
                
            </GridItem>
        </Grid>
    );
};

export default AuthLayout;