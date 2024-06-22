// import React, { useState, useRef } from 'react';
// import {ReactMic }from 'react-mic';

// function VoiceRecorder() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const audioRef = useRef(null);

//   const startRecording = () => {
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//   };

//   const onData = (recordedBlob) => {
//     console.log('chunk of real-time data is: ', recordedBlob);
//   };

//   const onStop = (recordedBlob) => {
//     setRecordedChunks(recordedBlob);
//   };

//   const playRecording = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Voice Recorder with Playback</h1>
//       <div>
//         <ReactMic
//           record={isRecording}
//           className="sound-wave"
//           onStop={onStop}
//           onData={onData}
//           strokeColor="#000000"
//           backgroundColor="#FF4081"
//         />
//         <button onClick={startRecording} type="button">Start Recording</button>
//         <button onClick={stopRecording} type="button">Stop Recording</button>
//         <button onClick={playRecording} type="button">Play Recording</button>
//       </div>
//       {recordedChunks.length > 0 && (
//         <div>
//           <h2>Recorded Audio</h2>
//           <audio ref={audioRef} controls>
//             <source src={recordedChunks.blobURL} type="audio/wav" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VoiceRecorder;




import { useState, useRef } from "react";
const VoiceRecorder = () => {
    const [permission, setPermission] = useState(false);
    const [stream, setStream] = useState(null);

    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };
    return (
        <div>
            <h2>Audio Recorder</h2>
            <main>
                <div className="audio-controls">
                    {!permission ? (
                        <button onClick={getMicrophonePermission} type="button">
                            Get Microphone
                        </button>
                    ): null}
                    {permission ? (
                        <button type="button">
                            Record
                        </button>
                    ): null}
                </div>
            </main>
        </div>
    );
};
export default VoiceRecorder;
