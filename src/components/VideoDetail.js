import React from 'react'

const VideoDetail = (props) => {
console.log(props)
    
    if(!props.video)
    return <div>Loading</div>

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}` 
    
    return (
        <div>
        <div  className='ui embed'>
            <iframe title='video-player' src={videoSrc}></iframe>
        </div>
           <div  style={{background:'currentColor'}} className='ui segment'>
          <h2 style={{color:'white'}} className='ui header'>{props.video.snippet.title}</h2> 
          <p style={{color:'whitesmoke'}}>{props.video.snippet.description}</p>
           </div>
            
        </div>
    )
}

export default VideoDetail
