import InputComponent from "./UiInputBox";
import AccordionActionButtons from "./AccordionActionButton";
import React, { useState, useEffect } from "react";
import Inputform from "./PatientInputFrom";
import Soaptemplate from "./SoapTemplate";
import useApi from "../../hooks/useApi";
import debounce from "lodash/debounce";
import PatientFileReport from './PatientReports';
interface props {
  state?: any;
}

const PatientInformationSection: React.FC<props> = ({ state }) => {
  const api = useApi();
  const [isInitiated, setIsInitiated] = useState(false);
  const [subjectiveValue, setSubjectiveValue] = useState("");
  const [objectiveValue, setObjectiveValue] = useState("");
  const [assessmentValue, setAssessmentValue] = useState("");
  const [planValue, setPlanValue] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [isStopListening, setIsStopListening] = useState(false);


  // Define accordion items data
  const accordionItems = [
    {
      id: 1,
      icon: "conditions",
      heading: "Overview",
      content: <Soaptemplate eventDetails={eventDetails} />,
    },
    {
      id: 2,
      icon: "personal_injury",
      heading: "Patient digital data",
      content: (
        <>
          <Inputform eventDetails={eventDetails} />
        </>
      ),
    },
    {
      id: 3,
      icon: "subject",
      heading: "Subjective",
      content: (
        <>
          <InputComponent
            value={subjectiveValue}
            onChange={(value: any) => {
              setSubjectiveValue(value);
            }}
          />
          <AccordionActionButtons
            emitTranscriptText={(value: string) => {
              let updatedText = subjectiveValue + " " + value;
              setSubjectiveValue(updatedText);
            }}
            deleteEvent={() => {
              deletePatientData("subjective");
            }}
            isStopListening={isStopListening}
          />
        </>
      ),
    },
    {
      id: 4,
      icon: "select_all",
      heading: "Objective",
      content: (
        <>
          <InputComponent
            value={objectiveValue}
            onChange={(value: any) => setObjectiveValue(value)}
          />
          <AccordionActionButtons
            emitTranscriptText={(value: string) => {
              let updatedText = objectiveValue + " " + value;
              setObjectiveValue(updatedText);
            }}
            deleteEvent={() => {
              deletePatientData("objective");
            }}
            isStopListening={isStopListening}
          />
        </>
      ),
    },
    {
      id: 5,
      icon: "content_paste",
      heading: "Assessment",
      content: (
        <>
          <InputComponent
            value={assessmentValue}
            onChange={(value: any) => setAssessmentValue(value)}
          />
          <AccordionActionButtons
            emitTranscriptText={(value: string) => {
              let updatedText = assessmentValue + " " + value;
              setAssessmentValue(updatedText);
            }}
            deleteEvent={() => {
              deletePatientData("assessment");
            }}
            isStopListening={isStopListening}
          />
        </>
      ),
    },
    {
      id: 6,
      icon: "near_me",
      heading: "Plan",
      content: (
        <>
          <InputComponent value={planValue} />
          <AccordionActionButtons
            emitTranscriptText={(value: string) => {
              let updatedText = planValue + " " + value;
              setPlanValue(updatedText);
            }}
            deleteEvent={() => {
              deletePatientData("plan");
            }}
            isStopListening={isStopListening}
          />
        </>
      ),
    },
    {
      id: 7,
      icon: "perm_media",
      heading: "Media Summary",
      content:
       <>
      <PatientFileReport/>
      </>
      },
  ];
  const [expanded, setExpanded] = useState(accordionItems[0].id);

  const handleToggle = (id: React.SetStateAction<number>) => {
    setExpanded(expanded === id ? 0 : id);
  };

  // Get event details

  const getEventsDetails = async () => {
    try {
      let { data } = await api.get(`events/${state.event_id}/details`);
      setSubjectiveValue(data.digital_data_subjective_speech_text);
      setObjectiveValue(data.digital_data_objective_speech_text);
      setPlanValue(data.digital_data_plan_speech_text);
      setAssessmentValue(data.digital_data_assessment_speech_text);
      setEventDetails(data);
      setTimeout(() => {
        setIsInitiated(true);
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getEventsDetails();
    }, 1000);
  }, []);

  // Update event details

  const updatePatientDataHandler = async (type: string, value: string) => {
    if (!type) return;
    let payload = {
      type: type,
      value: value,
    };
    await api.post<{
      type: string;
      value: string;
    }>(`events/${state.event_id}/details`, payload);
    setIsInitiated(false);
    getEventsDetails();
    setIsStopListening(false);
  };
  const deletePatientData = async (type: string) => {
    if (!type) return;

    await api.delete(`events/${state.event_id}/details/${type}`);

    switch (type) {
      case "subjective":
        setSubjectiveValue("");
        break;
      case "objective":
        setObjectiveValue("");
        break;
      case "assessment":
        setAssessmentValue("");
        break;
      case "plan":
        setPlanValue("");
        break;
    }
  };

  const debouncedUpdatePatientDataHandler = debounce((value, type) => {
    setIsStopListening(true);
    updatePatientDataHandler(type, value);
  }, 2000);

  useEffect(() => {
    if (!isInitiated) return;

    debouncedUpdatePatientDataHandler(subjectiveValue, "subjective");
    return () => {
      debouncedUpdatePatientDataHandler.cancel(); // Cancel the debounced function on component unmount
    };
  }, [subjectiveValue]);

  useEffect(() => {
    if (!isInitiated) return;
    debouncedUpdatePatientDataHandler(objectiveValue, "objective");
    return () => {
      debouncedUpdatePatientDataHandler.cancel(); // Cancel the debounced function on component unmount
    };
  }, [objectiveValue]);

  useEffect(() => {
    if (!isInitiated) return;
    debouncedUpdatePatientDataHandler(assessmentValue, "assessment");
    return () => {
      debouncedUpdatePatientDataHandler.cancel(); // Cancel the debounced function on component unmount
    };
  }, [assessmentValue]);

  useEffect(() => {
    if (!isInitiated) return;

    debouncedUpdatePatientDataHandler(planValue, "plan");
    return () => {
      debouncedUpdatePatientDataHandler.cancel(); // Cancel the debounced function on component unmount
    };
  }, [planValue]);

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`flush-heading${item.id}`}>
            <button
              className={`accordion-button ${
                expanded === item.id ? "" : "collapsed"
              } border rounded mt-3`}
              type="button"
              style={{
                backgroundColor: "#Dfe7f6",
                height: "36px",
                color: "#6750a4",
              }}
              onClick={() => handleToggle(item.id)}
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${item.id}`}
              aria-expanded={expanded === item.id}
              aria-controls={`flush-collapse${item.id}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.heading}
            </button>
          </h2>
          <div
            id={`flush-collapse${item.id}`}
            className={`accordion-collapse collapse ${
              expanded === item.id ? "show" : ""
            }`}
            aria-labelledby={`flush-heading${item.id}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" key={`${item.id} ${index}`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientInformationSection;
