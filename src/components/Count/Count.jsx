import React, { Component } from 'react';
import { Icon, Button, Grid, Message } from 'semantic-ui-react'
import '../../App.css';
import Total from '../Total/Total';

class Count extends Component {
    state = {
        total: 0,
        black: 0,
        red: 0,
        yellow: 0,
        green: 0,
        blue: 0,
        white: 0,
        grey: 0,
    }

    allTotal = () => {
        this.setState({
            total: this.state.total + 1,
        })
    }

    blackTotal = () => {
        this.setState({
            total: this.state.total + 1,
            black: this.state.black + 1,
        })
    }
    
    redTotal = () => {
        this.setState({
            total: this.state.total + 1,
            red: this.state.red + 1,
        })
    }
    
    yellowTotal = () => {
        this.setState({
            total: this.state.total + 1,
            yellow: this.state.yellow + 1,
        })
    }

    greenTotal = () => {
        this.setState({
            total: this.state.total + 1,
            green: this.state.green + 1,
        })
    }

    blueTotal = () => {
        this.setState({
            total: this.state.total + 1,
            blue: this.state.blue + 1,
        })
    }

    whiteTotal = () => {
        this.setState({
            total: this.state.total + 1,
            white: this.state.white + 1,
        })
    }
    greyTotal = () => {
        this.setState({
            total: this.state.total + 2,
            grey: this.state.grey + 2,
        })
    }

    render() {
        return (
            <div>
                <Total
                    count={this.state.total}
                />
                <Grid>
                    
                    {/* Black Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='black'>${this.state.black}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.blackTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    
                    {/* Red Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='red'>${this.state.red}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.redTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                    {/* Red Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='red'>${this.state.red}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.redTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    
                    {/* Green Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='green'>${this.state.green}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.greenTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                    {/* Blue Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='blue'>${this.state.blue}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.blueTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    
                    {/* White Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='white'>${this.state.white}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.whiteTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                    {/* Grey Row. */}
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <p className='grey'>${this.state.grey}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.greyTotal}
                            >
                                <Icon name='plus' size='large' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button 
                                icon
                                onClick={this.countDown}
                            >
                                <Icon name='minus' size='large' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>  
        )
    }
}

export default Count