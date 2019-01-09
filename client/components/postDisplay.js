import React from 'react'
import {getAllPosts} from '../store'
import {connect} from 'react-redux'

export class PostDisplay extends React.Component {
  componentDidMount() {
    this.props.getAllPosts()
  }

  render() {
    return (
      <div>
        These are my posts:{' '}
        {this.props.posts.map(post => (
          <div key={post.id} className="post">
            {post.content}
          </div>
        ))}
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
