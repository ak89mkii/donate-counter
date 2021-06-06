import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Message} from 'semantic-ui-react';
import './App.css';
import Data from './components/Date/Date.jsx'
import Total from './components/Total/Total.jsx'
import Counter from './components/Counter/Counter.jsx'
// import Hair from '../../img/01.jpg'

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
              <h2 className='number'>Total Donations</h2>
              <div className='calendar2'>
                {/* <input className='calendar'></input> */}
                <p className='number'>${count}</p>
              </div>    
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
        <div className='black'>
          <Counter />
        </div>
        <br></br>
        <br></br>
        <div className='red'>
          <Counter />
        </div>
        <br></br>
        <br></br>
        <div className='yellow'>
          <Counter />
        </div>
        <br></br>
        <br></br>
        <div className='green'>
          <Counter />
        </div>
        <br></br>
        <br></br>
        <div className='blue'>
          <Counter />
        </div>
        <br></br>
        <br></br>
        <div className='white'>
          <Counter />
        </div>
        <br></br>
        <br></br>
        <div className='grey'>
          <Counter />
        </div>
      </div>
    )
  }
}

export default Home
