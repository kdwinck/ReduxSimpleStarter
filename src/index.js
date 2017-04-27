import React from 'react' // const React = require('react') ??
import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'

const API_KEY = process.env.API_KEY

// Create new component. It should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take components generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
