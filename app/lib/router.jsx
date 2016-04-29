import React from 'react';
import {mount} from 'react-mounter';

/* LAYOUTS */
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../components/HomePage.jsx';



/* FRONT END ROUTES */
FlowRouter.route('/', {
    name: 'home',
    action: function () {
        try {
            mount(MainLayout, {
                content: (<HomePage />),
            });
        } catch (e) {
            console.log(e);
        }
    }
});
