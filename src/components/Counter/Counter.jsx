import React, { Component } from 'react';
import { Icon, Button, Grid } from 'semantic-ui-react'
import '../../App.css';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {time: new Date(), count: 0}
        this.countUp = this.countUp.bind(this);
    }

    countUp(event) {
        this.setState({count: this.state.count + 1});
      }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentWillMount() {
        setInterval(()=>this.currentTime(),1000)
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row columns={4}>
                        <Grid.Column>
                            <p>{this.state.time.toLocaleDateString()}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>[ {this.state.count} ]</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countUp}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button icon>
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