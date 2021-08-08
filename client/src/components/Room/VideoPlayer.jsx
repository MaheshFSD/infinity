import React,{ useContext } from 'react'
import { SocketContext } from '../../context/Context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <>
            {stream && (<div><h4>{name}</h4><video  playsInline muted ref={myVideo} autoPlay /></div>)}
            
            {callAccepted && !callEnded && (<div><h4>{call.name}</h4>                      
            <video playsInline ref={userVideo} autoPlay /></div>
            )}
        </>
    )
}

export default VideoPlayer
