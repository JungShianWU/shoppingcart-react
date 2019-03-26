import React from 'react';
import { Container } from 'reactstrap';
import ContainerBar from './ContainerBar';
import List from './List';

const App = () => {
    return (
        <div>
            <Container>
                <ContainerBar />
                <List />
            </Container>
        </div>
    );
};

export default App;