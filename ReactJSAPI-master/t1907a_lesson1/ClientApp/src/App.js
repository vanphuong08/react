import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Category  from './components/Category';
import './custom.css';
import CreateCate from './components/CreateCate';
import Edit from './components/Edit';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
            <Route path='/category' component={Category} />
            <Route path="/create" component={CreateCate} />
            <Route path="/edit/:id" component={Edit} />
      </Layout>
    );
  }
}
