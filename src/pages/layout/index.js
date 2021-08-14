import { Container } from '@material-ui/core';
import React from 'react';
import Footer from './Footer';
import { Main } from './styles';

export default function Layout({ children }) {

    console.log('ZAQUEU', { children })
    return (<div>
        <Main>
            <div>
                {children}
            </div>
            <Footer />
        </Main>
    </div>)
}