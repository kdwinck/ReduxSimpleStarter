import React, { Component } from 'react' // const React = require('react') ??
import ReactDOM from 'react-dom'
// import dotenv from 'dotenv'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyDl0k7vDZbeVf9ZKSPFaa9EB5RQWOuyIHY'

// dotenv.load()

// const API_KEY = process.env.API_KEY

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

// Take components generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
