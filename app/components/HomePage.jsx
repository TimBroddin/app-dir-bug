import React from 'react';
import styles from '../style/style.scss';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';

const HomePage = function HomePage(props) {
    return (
        <div>
            <p className={styles.red}>If this is red normal CSS-modules get imported :)</p>
            <AppBar flat>
                <h1>React Toolbox Example</h1>
                <Button icon="add" floating accent/>
            </AppBar>
        </div>
    );
}

export default HomePage;