import React, { Component } from 'react';
import { Segment, Grid, Button} from 'semantic-ui-react'
import '../../App.css';
import Hair from '../../img/01.jpg'

class Home extends Component {
    constructor() {
        super()
        this.state={time: new Date()}
    }
  
    render() {
        return (
            <div>
                <Segment>
                    <Grid>
                        <Grid.Column>
                            <h1 className='header'>A haircut for Everyone...EVERYONE</h1>
                            <button className='start' color='blue'>Get Started</button>
                            <div className="frame">
                                <img className="photo02" src={Hair} />
                            </div>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default Home
