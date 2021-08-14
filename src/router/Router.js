import React from 'react';
import {Router as RouterOriginal, useHistory} from 'react-router-dom';
import Layout from '../pages/layout';

export default function Router({
    page: Component,...rest
}){

    const history = useHistory();

    return <RouterOriginal {...rest} history={history}>
        <Layout>
            <Component/>
        </Layout>
    </RouterOriginal>
}