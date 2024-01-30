import React from 'react'
import ReactDOM from 'react-dom'

import '@mono/ui-kit/index.css'

import { Button, Icon } from '@mono/ui-kit'

const App = () => {
  return (
    <div className="container">
      <div>Name: shell</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
      <Button>hello</Button>
      <div>
        <Icon.Briefcase />
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
