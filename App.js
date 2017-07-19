// @Flow
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import appReducers from 'reducer'
import { Main } from 'ui/main'

export default class App extends React.Component {
  store = createStore(appReducers)

  render() {
    return (
      <Provider store={this.store}>
        <Main />
      </Provider>
    );
  }
}
