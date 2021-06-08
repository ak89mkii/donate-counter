import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Input, Label} from 'semantic-ui-react';
import './App.css';
import Data from './components/Date/Date.jsx'
import Count from './components/Count/Count.jsx'

class Home extends Component {
  state = {
    count: 0
}
  
  render() {
    const {count} = this.state
    return (
      <div>
        <Segment>
          <Grid divided='vertically'>
            <Grid.Column>
              <h1 className='header'>Donation Tracker Application</h1> 
            </Grid.Column>
          </Grid>
          <Grid relaxed='very' columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <h2 className='label'>Start Date</h2>
                <div className='calendar2'>
                  <Data />
                </div> 
              </Grid.Column>
              <Grid.Column>
                <h2 className='label'>End Date</h2>
                <div className='calendar2'>
                  <Data />
                </div>                    
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <br></br>
        <br></br>
        <div className='card'>
          <Count />
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Home
