import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../context/Context';

const VideoDetails = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    
    return (
        <div>
             <form>          
              <h4>Account Info</h4>
              <input label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} >
                <button >
                  Copy Your ID
                </button>
              </CopyToClipboard>
              <h4 >Make a call</h4>
              <input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button onClick={leaveCall} >
                  Hang Up
                </button>
              ) : (
                <button onClick={() => callUser(idToCall)} >
                  Call
                </button>
              )}            
        </form>
        {children}
        </div>
    )
}

export default VideoDetails
