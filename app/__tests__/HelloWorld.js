/*global describe it expect*/

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import HelloWorld from '../src/HelloWorld.jsx'

describe('sum', () => {
  it('adds', () => {
    const helloWorld = TestUtils.renderIntoDocument(
      <HelloWorld />
    )
    const helloWorldNode = ReactDOM.findDOMNode(helloWorld)
    expect(helloWorldNode.textContent).toEqual('Hello, world!')
  })
})