import React,{ useContext } from 'react'
import { SocketContext } from '../../context/Context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
        <>
            {stream && (<h4>{name}</h4>)}
            {stream &&  (<video  playsInline muted ref={myVideo} autoPlay />)}
            
            {callAccepted && !callEnded && (<h4>{call.name}</h4>)}
            {callAccepted && !callEnded && (                       
            <video playsInline ref={userVideo} autoPlay />
            )}
        </>
    )
}

export default VideoPlayer
