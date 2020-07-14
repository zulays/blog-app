import React, { Component } from 'react'
import './PostEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        content: '',
        imgURL: '',
        author: ''
      },
      updated: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }


  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updatePost(id, this.state.post)
    this.setState({ updated })
  }

  render() {

    const { post, updated } = this.state

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
        <div className="post-edit">
          <div className="image-container">
            <img className="edit-post-image" src={post.imgURL} alt={post.title} />
            <form onSubmit={this.handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder='Image Link'
                value={post.imgURL}
                name='imgURL'
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-title"
              placeholder='Title'
              value={post.title}
              name='title'
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-author"
              placeholder='Author'
              value={post.author}
              name='author'
              required
              onChange={this.handleChange}
            />
            <textarea
              className="textarea-content"
              rows={10}
              cols={78}
              placeholder='Content'
              value={post.content}
              name='content'
              required
              onChange={this.handleChange}
            />
            <button type='submit' className="save-button">Save</button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default PostEdit