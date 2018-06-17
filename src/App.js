import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/milligram/dist/milligram.min.css'
import './App.css';

import SearchBar from './components/SearchBar';
import CustomerTable from './components/CustomerTable';

const DATA = [
  { "id": 1, "name": "James Bond", "email": "james@bond.com" },
  { "id": 2, "name": "David Jones", "email": "david@jones.com"  },
  { "id": 3, "name": "David Beckham", "email": "david@beckham.com" }
]
class App extends Component {
  onSearchClick = (e) => {
    console.log('On click')
  }

  onSearchInputChange = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="row">
        <div class="column column-75">
          <SearchBar
            onSearchClick={this.onSearchClick}
            onSearchInputChange={this.onSearchInputChange}
          />
          <div>
            <CustomerTable
              data={DATA}
            />
          </div>
        </div>
        <div class="column-25">something else</div>
      </div>
    );
  }
}

export default App;
