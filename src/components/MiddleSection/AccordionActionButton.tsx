import React, { useState, useEffect, useCallback } from "react";
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text';
import 'dotenv/config'
interface Props {
  emitTranscriptText?: (text: string) => void;
  deleteEvent?: React.MouseEventHandler<HTMLDivElement>;
  toggleModals?: React.MouseEventHandler<HTMLDivElement>;
  isStopListening?: boolean;
}

const AccordionActionButtons: React.FC<Props> = ({
  emitTranscriptText,
  deleteEvent,
  isStopListening,
  toggleModals
}) => {
  const {
    error,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    googleApiKey: process.env.GOOGLE_CLOUD_API_KEY || "",
    useLegacyResults: false
  });

  const handleToggleRecording = useCallback(() => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  }, [isRecording, startSpeechToText, stopSpeechToText]);


  // Effect to handle transcript updates
  useEffect(() => {
    if (results.length > 0) {
      const lastResult = results[results.length - 1] as ResultType;
      if (emitTranscriptText) {
        emitTranscriptText(lastResult.transcript);
      }
    }
  }, [results]);

  // Effect to handle stop listening
  useEffect(() => {
    if (isStopListening && isRecording) {
      stopSpeechToText();
    }
  }, [isStopListening, isRecording, stopSpeechToText]);

  // State to manage recording state
  const [isRecordingState, setIsRecordingState] = useState(false);

  useEffect(() => {
    setIsRecordingState(isRecording);
  }, [isRecording]);

  return (
    <div className="d-flex justify-content-around text-center align-items-center">
      <div onClick={toggleModals} className="text-success" style={{ cursor: "pointer" }}>
        <span className="material-symbols-outlined">note</span>
      </div>
      <div onClick={handleToggleRecording} style={{ cursor: "pointer" }}>
        {isRecordingState ? (
          <span className="material-symbols-outlined">graphic_eq</span>
        ) : (
          <span className="material-symbols-outlined">mic</span>
        )}
      </div>
      <div className="text-danger" style={{ cursor: "pointer" }} onClick={deleteEvent}>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default AccordionActionButtons;

