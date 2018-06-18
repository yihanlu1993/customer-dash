import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/milligram/dist/milligram.min.css'
import './App.css';

import SearchBar from './components/SearchBar';
import CustomerTable from './components/CustomerTable';
import EditForm from './components/EditForm'

const DATA = [
  { "id": 1, "name": "James Bond", "email": "james@bond.com" },
  { "id": 2, "name": "David Jones", "email": "david@jones.com"  },
  { "id": 3, "name": "David Beckham", "email": "david@beckham.com" }
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEditIndex: -1,
    }
  }

  onSearchClick = (e) => {
    console.log('On click')
  }

  onSearchInputChange = (e) => {
    console.log(e.target.value);
  }

  onClickEdit = (id) => {
    if(id === this.state.activeEditIndex) {
      this.setState({activeEditIndex: -1})
    } else {
      this.setState({activeEditIndex: id})
    }
  }

  onClickSave = (e, id) => {
    console.log(e)
    e.preventDefault();
    console.log(id);
    //save value
    this.setState({activeEditIndex: -1})
  }

  render() {
    const { activeEditIndex } = this.state;
    const editing = activeEditIndex !== -1;
    return (
      <div className="container">
        <div>
          <SearchBar
                onSearchClick={this.onSearchClick}
                onSearchInputChange={this.onSearchInputChange}
                onClickEdit={this.onClickEdit}
              />
        </div>
        <div className="row">
          <div className={`column ${editing ? 'column-75' : 'column-100'}`}>
            <div>
              <CustomerTable
                data={DATA}
                onClickEdit={this.onClickEdit}
              />
            </div>
          </div>
          { editing &&
            <div className="column">
              <EditForm
                id={1}
                onClickSave={this.onClickSave}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
