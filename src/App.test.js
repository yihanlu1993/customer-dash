import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchBar from './components/SearchBar';
import CustomerTable from './components/CustomerTable';
import EditForm from './components/EditForm';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import customer from './utils';

const DATA = [
  { "id": 1, "name": "James Bond", "email": "james@bond.com" },
  { "id": 2, "name": "David Jones", "email": "david@jones.com"  },
  { "id": 3, "name": "David Beckham", "email": "david@beckham.com" }
]

configure({ adapter: new Adapter() });

describe('render Customer Table', () => {
  it('has 4 table row', () => {
    const wrapper = shallow(
      <CustomerTable
        data={DATA}
        onClickEdit={()=>{}}
      />
    );
    expect(wrapper.find('tr')).toHaveLength(4);
  });
  it('has James Bond', () => {
    const wrapper = shallow(
      <CustomerTable
        data={DATA}
        onClickEdit={()=>{}}
      />
    );
    expect(wrapper.contains(<td>James Bond</td>)).toEqual(true);
  });
  it('has david@jones.com', () => {
    const wrapper = shallow(
      <CustomerTable
        data={DATA}
        onClickEdit={()=>{}}
      />
    );
    expect(wrapper.contains(<td>david@jones.com</td>)).toEqual(true);
  });
});

describe('render Edit form', () => {
  it('has 3 labels', () => {
    const wrapper = shallow(
      <EditForm
        id={1}
        onNameChange={()=>{}}
        onEmailChange={()=>{}}
        onClickSave={()=>{}}
        name={'Yihan'}
        email={'yihan.lu@outlook.com'}
        error={{email: false, name: false}}
      />
    );
    expect(wrapper.find('label')).toHaveLength(3);
  });
  it('has Yihan as a input value', () => {
    const wrapper = shallow(
      <EditForm
        id={1}
        onNameChange={()=>{}}
        onEmailChange={()=>{}}
        onClickSave={()=>{}}
        name={'Yihan'}
        email={'yihan.lu@outlook.com'}
        error={{email: false, name: false}}
      />
    );
    expect(wrapper.find({ value: 'Yihan' })).toHaveLength(1);
  });
});

describe('render SearchBar', () => {
  it('has a input with David as a input', () => {
    const wrapper = shallow(
      <SearchBar
        searchTerm={'David'}
        onSearchInputChange={()=>{}}
        onSearchClick={()=>{}}
      />
    );
    expect(wrapper.find({value: 'David'})).toHaveLength(1);
  });
  it('has a Search label', () => {
    const wrapper = shallow(
      <SearchBar
        searchTerm={'David'}
        onSearchInputChange={()=>{}}
        onSearchClick={()=>{}}
      />
    );
    expect(wrapper.contains(<span>Search</span>)).toEqual(true);
  });
});

describe('render Main app', () => {
  let customersResolover, wrapper;
  const qCustomers = Promise.resolve(DATA);
  beforeEach(() => {
    customer.getAll = jest.fn()
    .mockReturnValue(qCustomers);

    wrapper = mount((
      <App/>
    ));
  });
  describe('when customers is resolved', () => {
    // beforeEach(() => {
    //   customersResolover(customers);
    // });
    it('should pass', () => {
      expect(wrapper.state().customers).toBe(DATA);
    })

    it('mount without customer table', () => {
      expect(wrapper.find(CustomerTable)).toHaveLength(0);
    })
  
    it('click on first edit button to open edit form', () => {
      wrapper.setState({loading: false});
      wrapper.find('button').first().simulate('click');
      expect(wrapper.find(EditForm)).toHaveLength(1);
    })
  
    it('double click on first edit button to close edit form', () => {

      wrapper.setState({loading: false});
      wrapper.find('button').first().simulate('click');
      wrapper.find('button').first().simulate('click');
      expect(wrapper.find(EditForm)).toHaveLength(0);
    })
  })
});
