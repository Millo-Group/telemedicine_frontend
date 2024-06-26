import React, { useState, useEffect, useCallback } from "react";
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [hasMicrophone, setHasMicrophone] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // Check for microphone availability
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const hasMic = devices.some(device => device.kind === 'audioinput');
      if (!hasMic) {
        setHasMicrophone(false);
      }
    });
  }, []);

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
    if (!hasMicrophone) {
      setAlertMessage("No microphone detected. Please connect a microphone to use this feature.");
      return;
    }
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  }, [isRecording, startSpeechToText, stopSpeechToText, hasMicrophone]);


  useEffect(() => {
    if (results.length > 0) {
      const lastResult = results[results.length - 1] as ResultType;
      if (emitTranscriptText) {
        emitTranscriptText(lastResult.transcript);
      }
    }
  }, [results]);


  useEffect(() => {
    if (isStopListening && isRecording) {
      stopSpeechToText();
    }
  }, [isStopListening, isRecording, stopSpeechToText]);


  const [isRecordingState, setIsRecordingState] = useState(false);

  useEffect(() => {
    setIsRecordingState(isRecording);
  }, [isRecording]);

  return (
    <div>
      {alertMessage && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {alertMessage}
          <button type="button" className="btn-close" onClick={() => setAlertMessage(null)} aria-label="Close"></button>
        </div>
      )}
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
    </div>
  );
};

export default AccordionActionButtons;
