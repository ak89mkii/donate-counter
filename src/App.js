import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Segment, Grid, Message} from 'semantic-ui-react'
import './App.css';
// import Hair from '../../img/01.jpg'

class Home extends Component {
    constructor() {
        super()
        this.state={time: new Date()}
    }
  
    render() {
        return (
            <div>
                <Segment>
                  <Grid divided='vertically'>
                    <Grid.Column>
                      <h1 className='header'>Donation Tracker Application</h1>
                      <h2 className='start'>Total Donations</h2>
                    </Grid.Column>
                  </Grid>
                  <Grid relaxed='very' columns={2} divided>
                    <Grid.Row>
                    <Grid.Column>
                      <h2 className='start'>Start Date</h2>
                    </Grid.Column>
                    <Grid.Column>
                      <h2 className='start'>End Date</h2>                    
                    </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
            </div>
        )
    }
}

export default Home
