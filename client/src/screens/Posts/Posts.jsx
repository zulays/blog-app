import React, { Component } from "react"
import "./Posts.css"

import Post from "../../components/Post/Post"
import Search from "../../components/Search/Search"
import { AZ, ZA } from "../../utils/sort"
import Sort from "../../components/Sort/Sort"
import Layout from "../../components/Layout/Layout"
import { getPosts } from "../../services/posts"



class Posts extends Component {
  constructor() {
    super()
    this.state = {
      allPosts: [],
      queriedPosts: [],
      sortType: ""
    }
  }

  async componentDidMount() {
    const allPosts = await getPosts()
    this.setState({
      allPosts: allPosts,
      queriedPosts: queriedPosts
    })
  }

  handleSearch = e => {
    const sort = () => this.handleSort(this.state.sortType)
    const queriedPosts = this.state.allPosts.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ queriedPosts }, sort)
  }

  handleSort = type => {
    this.setState({ sortType: type })
    const { queriedPosts } = this.state
    switch (type) {
      case "title-asc":
        this.setState({
          queriedPosts: AZ(queriedPosts)
        })
        break
      case "title-desc":
        this.setState({
          queriedPosts: ZA(queriedPosts)
        })
        break
      default:
        break
    }
  }

  handleSubmit = e => e.preventDefault()

  render() {

    const postsJSX = this.state.queriedPosts.map((post, idx) =>
      <Post _id={post._id} imgURL={post.imgURL} author={post.author} key={idx} />
    )
    return (
      <Layout>
        <Search onSubmit={this.handleSubmit} onChange={this.handleSearch} />
        <SOrt onSubmit={this.handleSubmit} onChange={this.handleSort} />
        <div className="posts">
          {postsJSX}
        </div>
      </Layout>

    )
  }
}

export default Posts