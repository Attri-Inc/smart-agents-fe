import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import MicroPhone from "./icons/MicroPhone";

const AudioSpeech: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  let recognition: SpeechRecognition | null;

  const handleToggleListening = () => {
    if (!isListening) {
      startRecognition();
    } else {
      stopRecognition();
    }
  };

  const startRecognition = () => {
    recognition = new window.webkitSpeechRecognition() as SpeechRecognition;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      setRecognizedText(finalTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      stopRecognition();
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
      recognition = null;
      setIsListening(false);
    }
  };

  console.log("recognizedText", recognizedText);

  return (
    <div>
      <button onClick={handleToggleListening}>
        {isListening ? <FaMicrophone /> : <MicroPhone />}
      </button>
    </div>
  );
};

export default AudioSpeech;
