import React, { Component } from 'react';
import { Segment, Menu } from 'semantic-ui-react'
import '../../App.css';
import Main from '../../img/01.png'

// Revisit: Need to figure out "fetch" for Flask backend.
class Activator extends Component {
    state = {
        activeItem: undefined
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Segment>
                    <Menu secondary size='massive'>
                        <img className="photo" src={Main} />
                        <Menu.Item />
                        <h4 className="title">Haircut Shop</h4>
                        <Menu.Item />
                        <Menu.Item
                        name='Services'
                        active={activeItem === 'Services'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Photos'
                        active={activeItem === 'Photos'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Contact'
                        active={activeItem === 'Contact'}
                        onClick={this.handleItemClick}
                        />
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default Activator