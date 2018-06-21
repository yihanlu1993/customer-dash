import React, { Component } from 'react';
import '../node_modules/milligram/dist/milligram.min.css'
import './App.css';
import customer from './utils';

import SearchBar from './components/SearchBar';
import CustomerTable from './components/CustomerTable';
import EditForm from './components/EditForm';
import ErrorMsg from './components/ErrorMsg';
import Sticky from './components/Sticky';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeEditIndex: -1,
      customers: [],
      loading: true,
      apiError: false,
      searchTerm: '',

      //editform
      activeEditObject: {
        name: '',
        email: ''
      },
      error: {
        email: false,
        name: false
      }
    }
  }

  componentWillMount() {
    this.fetchAllCustomer();
  }

  fetchAllCustomer = () => {
    this.setState({loading: true});
    customer.getAll()
    .then((customers)=>{
      this.setState({
        customers,
        loading: false
      })
    })
    .catch((err)=>{
      this.setState({
        apiError: err.message,
        loading: false
      })
    })
  }

  filterCustomer = () => {
    const { searchTerm } = this.state;
    this.setState({loading: true})
    customer.filterCustomer(searchTerm)
    .then((customers)=>{
      this.setState({
        customers,
        loading: false
      })
    })
    .catch((err)=>{
      this.setState({
        apiError: err.message,
        loading: false
      })
    })
  }

  onSearchClick = (e) => {
    e.preventDefault();
    this.filterCustomer()
  }

  onSearchInputChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  onClickEdit = (id) => {
    const { customers } = this.state;
    if(id === this.state.activeEditIndex) {
      this.setState({
        activeEditIndex: -1,
        error: {
          name: false,
          email: false
        }
      });
    } else {
      const {name, email} = customers.find((a)=> (a.id === id));
      this.setState({
        activeEditIndex: id,
        activeEditObject: {
          name,
          email
        }
      })
    }
  }

  onClickSave = (e, id) => {
    const { activeEditObject } = this.state;
    e.preventDefault();
    //save value
    customer.saveCustomer(id, activeEditObject)
    .then((res)=>{
      this.setState({activeEditIndex: -1})
      this.filterCustomer()
    })
    .catch((err)=>{
      this.setState({
        apiError: err.response.data.message
      })
    })
  }

  onNameChange = (e) => {
    const { activeEditObject, error } = this.state;
    activeEditObject.name = e.target.value;
    // to simplify, only do validation on change.
    if(!activeEditObject.name){
      error.name = 'Name can not be empty.'
    } else {
      error.name = false;
    }
    this.setState({activeEditObject}); 
  }

  onEmailChange = (e) => {
    const { activeEditObject, error } = this.state;
    // to simplify, only do validation on change.
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())) {
      error.email = 'Invalid Email.';
    } else {
      error.email = false
    }

    activeEditObject.email = e.target.value;
    this.setState({
      activeEditObject,
      error
    }); 
  }

  render() {
    const { apiError, loading, activeEditIndex, customers, activeEditObject: {name, email}, error, searchTerm } = this.state;
    const editing = activeEditIndex !== -1;
    return (
      <div className="container">
        <div>
          <SearchBar
                searchTerm={searchTerm}
                onSearchClick={this.onSearchClick}
                onSearchInputChange={this.onSearchInputChange}
              />
        </div>
        <div>{apiError && <ErrorMsg>{apiError}</ErrorMsg>}</div>
        <div className="row">
          <div className={`column ${editing ? 'column-75' : 'column-100'}`}>
            <div>
              { loading
                ?
                  <div className="loading"></div>
                :
                  customers.length > 0 
                  ?
                    <CustomerTable
                      data={customers}
                      onClickEdit={this.onClickEdit}
                    />
                  : <h4>No customer found.</h4>
              }
            </div>
          </div>
          { editing &&
            <div className="column">
              <EditForm
                id={activeEditIndex}
                name={name}
                email={email}
                onNameChange={this.onNameChange}
                onEmailChange={this.onEmailChange}
                onClickSave={this.onClickSave}
                error={error}
                apiError={apiError}
              />
            </div>
          }
        </div>
        <div>
          <Sticky/>
        </div>
      </div>
    );
  }
}

export default App;
