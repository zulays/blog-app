import React, { Component } from 'react';
import './PostTiles.css';
import PostTile from '../PostTile/PostTile'
import { getPosts } from '../../services/posts'

class PostTiles extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  render() {

    const TILES = this.state.posts.reverse().map((post, index) =>
      index < 8 ? <PostTile _id={post._id} title={post.title} imgURL={post.imgURL} key={index} /> : null
    )

    return (
      <div className="post-tiles">
        <div className="latest">LATEST</div>
        <div className="tiles">
          {TILES}
        </div>
      </div>
    )
  }
}

export default PostTiles