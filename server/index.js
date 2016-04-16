import React from 'react'
import ReactDOM from 'react-dom'
import DraggableGrid from '../index.js'

(function() {
  const App = function() {
    return <div><DraggableGrid/></div>
  }

  ReactDOM.render(<App/>, document.getElementById('root'))
})()