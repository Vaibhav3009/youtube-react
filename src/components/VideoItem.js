import React from 'react'

import './VideoItem.css'
const VideoItem = (props) => {

    return (
        <div onClick={()=> {props.onVideo(props.video)}} className='video-item item'>
            <img className='ui image' src={props.video.snippet.thumbnails.medium.url} alt='video here'></img>
          <div className='content'>
          <div style = {{color:'whitesmoke'}} className='header'>{props.video.snippet.title}</div>
          </div>
        </div>
    )
}

export default VideoItem
