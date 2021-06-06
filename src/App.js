import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Grid, Message} from 'semantic-ui-react';
import './App.css';
import Data from './components/Date/Date.jsx'
// import Footer from './components/Footer/Footer.jsx'
import Counter from './components/Counter/Counter.jsx'
// import Hair from '../../img/01.jpg'

class Home extends Component {
  state = {
    activeItem: undefined
}
  
  render() {
    return (
      <div>
        <Segment>
          <Grid divided='vertically'>
            <Grid.Column>
              <h1 className='header'>Donation Tracker Application</h1>
              <h2 className='number'>Total Donations</h2>
              <div className='value'>
                <p className='number'>$100</p>
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
      </div>
    )
  }
}

export default Home
