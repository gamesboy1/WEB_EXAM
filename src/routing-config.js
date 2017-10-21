import React from 'react'
import { Redirect } from 'react-router'
import { Home, FetchPage } from './components'
import fakeAuth from './Auth'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path': '/Fetch',
    'component': FetchPage
  }
];

export default routes;
