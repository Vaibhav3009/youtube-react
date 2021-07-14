import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/youtube'
import VideoDetail from './VideoDetail'
class App extends Component {

    state = {videos:[],selectedVideo:null}

    componentDidMount()
    {
        this.onSearch('Football')
    }

    onSearch =async (term) =>{
   
        const response= await youtube.get('/search',{
            params:{
                q : term
            }
        })
     
      this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
     
      
  }

    onVideoSelect = (video) =>{
        console.log(video)
       this.setState({selectedVideo:video})
    }
    render() {
        return (
            <div className='ui container'>
            <SearchBar onSearch={this.onSearch}/>
            <div className='ui grid container'>
            <div className='ui stackable row '>
            <div className='eleven wide computer column'>
            <VideoDetail video = {this.state.selectedVideo}/>
            </div>
            <div className='five wide computer column'>
            <VideoList onVideoSelect = {this.onVideoSelect} videolist = {this.state.videos}/>
            </div>
            </div>
            
            </div>
            </div>
        )
    }
}

export default App


