import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {PostDisplay} from './postDisplay'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('PostDisplay', () => {
  let postDisplay
  let testPosts = [
    {id: 1, content: 'Hello world!'},
    {id: 2, content: "I'm something very interesting."}
  ]
  const getTestPosts = () => testPosts

  beforeEach(() => {
    postDisplay = shallow(
      <PostDisplay posts={testPosts} getAllPosts={getTestPosts} />
    )
  })

  it('renders a set of posts from its props', () => {
    expect(postDisplay.find('.post')).to.have.lengthOf(2)
    expect(
      postDisplay
        .find('.post')
        .at(0)
        .text()
    ).to.equal('Hello world!')
    expect(
      postDisplay
        .find('.post')
        .at(1)
        .text()
    ).to.equal("I'm something very interesting.")
  })
})
