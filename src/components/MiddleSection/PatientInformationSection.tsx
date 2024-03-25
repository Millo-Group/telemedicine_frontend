import InputComponent from './UiInputBox';
import Actionbuttoncomponent from './AccordionActionButton';
import PatientFile from './PatientReports';
import { useState } from 'react';
import Inputform from './PatientInputFrom';
import Soaptemplate from './SoapTemplate';

const PatientInformationSection = () => {
  // Define accordion items data
  const accordionItems = [
    {
      id: 1,
      icon:'conditions',
      heading: "Overview",
      content: 
      <Soaptemplate/>
    },
    {
      id: 2,
      icon:'personal_injury',
      heading: "Patient digital data",
      content: 
      <>
      <Inputform/>
      <br/>
      <InputComponent/>
      <Actionbuttoncomponent/>
      </>
    },
    {
      id: 3,
      icon:'subject',
      heading: "Subjective",
      content: 
      <>
      <InputComponent/>
      <Actionbuttoncomponent/>
      </>
    },
    {
      id: 4,
      icon:'select_all',
      heading: "Objective",
      content:
      <>
      <InputComponent/>
      <Actionbuttoncomponent/>
      </>
    },
    {
      id: 5,
      icon:'content_paste',
      heading: "Assessment",
      content: 
      <>
      <InputComponent/>
      <Actionbuttoncomponent/>
      </>
    },
    {
      id: 6,
      icon:'near_me',
      heading: "Plan",
      content: 
      <>
      <InputComponent/>
      <Actionbuttoncomponent/>
      </>
    },
    {
      id: 7,
      icon:'perm_media',
      heading: "Media Summary",
      content:
       <>
      <PatientFile/>
      </>
      },
  ];
  const [expanded, setExpanded] = useState(accordionItems[0].id);

  const handleToggle = (id: React.SetStateAction<number>) => {
    setExpanded(expanded === id ? 0 : id);
  };

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
  {accordionItems.map(item => (
    <div className="accordion-item" key={item.id}>
      <h2 className="accordion-header" id={`flush-heading${item.id}`}>
        <button 
          className={`accordion-button ${expanded === item.id ? '' : 'collapsed'} border rounded mt-3`} 
          type="button"  
          style={{ backgroundColor:'#Dfe7f6', height:'36px', color:'#6750a4' }} 
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
        className={`accordion-collapse collapse ${expanded === item.id ? 'show' : ''}`} 
        aria-labelledby={`flush-heading${item.id}`} 
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          {item.content}
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default PatientInformationSection;
