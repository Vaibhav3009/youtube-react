import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
  
  
    const listRender= props.videolist.map((video)=> {
        
        return(
            <VideoItem onVideo = {props.onVideoSelect} key={video.id.videoId} video = {video} />
        )
    })
    return (
        <div className='ui relaxed divided list'>
            {listRender}
        </div>
    )
}

export default VideoList
