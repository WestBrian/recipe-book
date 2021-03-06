import * as serviceWorker from './serviceWorker'
import App from './App'
import Providers from 'providers'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<App />, document.getElementById('root'))

const render = (Component: FunctionComponent) => {
  return ReactDOM.render(
    <Providers>
      <Component />
    </Providers>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
