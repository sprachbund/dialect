import React from 'react'
import {getAllPosts} from '../store'
import {connect} from 'react-redux'

class PostDisplay extends React.Component {
  componentDidMount() {
    this.props.getAllPosts()
  }

  render() {
    console.log('Props:', this.props)
    return (
      <div>
        These are my posts:{' '}
        {this.props.posts.map(post => <div key={post.id}>{post.content}</div>)}
      </div>
    )
  }
}

const mapState = state => ({
  posts: state.posts
})
const mapDispatch = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
})

export default connect(mapState, mapDispatch)(PostDisplay)
