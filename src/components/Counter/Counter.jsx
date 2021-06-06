import React, { Component } from 'react';
import { Icon, Button, Grid } from 'semantic-ui-react'
import '../../App.css';

class Counter extends Component {
    constructor() {
        super()
        this.state={time: new Date()}
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(()=>this.currentTime(),1000)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Grid>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <p>{this.state.time.toLocaleDateString()}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>[0]</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button inverted icon>
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button inverted icon>
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>  
        )
    }
}

export default Counter