import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

class Counter extends Component {

    state = {
        count: 0
    }

    render() {

        const { count } = this.state;

        return (
            <Container maxWidth="sm">
                <Typography >
                    {count}
                </Typography>
            </Container>
        )
    }
}

export default Counter;

