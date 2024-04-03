import { useState, MouseEventHandler, useEffect } from "react";

interface Props {
  emitTranscriptText?: Function;
  deleteEvent?: MouseEventHandler<HTMLDivElement>;
  isStopListening?: Boolean;
}
const AccordionActionButtons: React.FC<Props> = ({
  emitTranscriptText,
  deleteEvent,
  isStopListening,
}) => {
  const [isRecording, setisRecording] = useState(false);
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const microphone = new SpeechRecognition();
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const startListening = () => {
    microphone.start();
    setisRecording(true);
  };
  const stopListening = () => {
    if (isRecording) {
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone");
      };
      setTimeout(() => {
        setisRecording(false);
      }, 50);
    }
  };

  microphone.onresult = (event) => {
    const recordingResult = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    emitTranscriptText && emitTranscriptText(recordingResult);
    microphone.onerror = (event) => {
      console.log(event.error, "error");
    };
  };
  microphone.onend = () => {
    console.log("Microphone stopped");
    if (isRecording) {
      startListening();
    }
  };
  microphone.onnomatch = (event) => {
    console.log(event, "onnomatch");
  };
  microphone.onerror = (event) => {
    console.log(event.error, "onerror");
  };
  microphone.onaudioend = (event) => {
    console.log(event, "onaudioend");
  };
  useEffect(() => {
    if (isStopListening) stopListening();
  }, [isStopListening]);

  return (
    <div className="d-flex justify-content-around text-center align-items-center">
      <div className="text-success" style={{ cursor: "pointer" }}>
        <span className="material-symbols-outlined">note</span>
      </div>
      <div
        onClick={isRecording ? stopListening : startListening}
        style={{ cursor: "pointer" }}
      >
        {isRecording ? (
          <span className="material-symbols-outlined">graphic_eq</span>
        ) : (
          <span className="material-symbols-outlined">mic</span>
        )}
      </div>
      <div
        className="text-danger"
        style={{ cursor: "pointer" }}
        onClick={deleteEvent}
      >
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  );
};

export default AccordionActionButtons;
