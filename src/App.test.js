import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchBar from './components/SearchBar';
import CustomerTable from './components/CustomerTable';
import EditForm from './components/EditForm';
import ErrorMsg from './components/ErrorMsg';
import Sticky from './components/Sticky';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('SearchBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('CustomerTable renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('EditForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('ErrorMsg renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMsg />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Sticky renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sticky />, div);
  ReactDOM.unmountComponentAtNode(div);
});