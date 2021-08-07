import React, { useContext } from 'react';
import { SocketContext } from '../../context/Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const container = { display: 'flex', justifyContent: 'space-around' }

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={container}>
          <h1>{call.name} is calling:</h1>
          <button  onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
